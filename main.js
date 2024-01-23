Webcam.set({
    width:500,
    height:450,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function snap_Photo(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='resultimg' src='"+data_url+"'>"
    })
}

console.log("ml5: ", ml5.version)
var teach_machine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NYtGXo7UQ/model.json", working)

function working(){
    console.log("ITS WORKING")
}

function know_Photo(){
    var image = document.getElementById("resultimg")
    teach_machine.classify(image, makeResults)
}

function makeResults(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        showAcc = (result[0].confidence.toFixed(2))*100 + "%"
        document.getElementById("accuracy").innerHTML = showAcc
    }
}