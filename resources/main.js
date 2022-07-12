const resultButton = document.getElementById('button');

resultButton.addEventListener('click', function(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let resultBmi = (weight / (height * height) * 10000);

    if(weight > 0 && height > 0){
        document.getElementById('button').innerHTML = `Your BMI is ${resultBmi}!`;
    } else {
        document.getElementById('button').innerHTML = 'Please put your weight and height!';
    }    
});