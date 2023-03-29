function calculateBtn() {
  // Get input values
  var weight = document.getElementById("weightInput").value;
  var height = document.getElementById("heightInput").value;
  // Convert height feet to meters
  height = height/3.2808

  // Calculate BMI
  var BMI = weight / (height * height);
  // Display result
  document.getElementById("result").innerHTML = BMI.toFixed(2);  


  //Result Suggestion 
  if(BMI<18.5){
    document.getElementById("suggestion").innerHTML = "(Eat more healthy food.)";
  }
  else if(BMI>24.9){
    document.getElementById("suggestion").innerHTML = "(Control your diet.)";
  }
  else{
    document.getElementById("suggestion").innerHTML = "(Your BMI is perfect)";
  }
 }


