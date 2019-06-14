// Accepts Two Integers And Displays The Larger
function WhatsLarger(x,y){
  var res;
  if(x>y){
    res = x + " Is Larger";
  }else{
    res = y + " Is Larger";
  }
  alert(res);
  return true;
}
WhatsLarger(25,60);

//Function To Determine Odd and Even Numbers from 0-15
function IsThisOdd(){
  var i;
  for(i=0; i<16; i++){
    var ans;
    ans = i % 2;
    if(ans>0){
      console.log(i + " is odd");
    }else{
      console.log(i + " is even");
    }
  }
}
IsThisOdd();

//Function To Sum the multiples of 3 and 5 under 1000
function SumThis(){
  var sthree = 0;
  var sfive = 0;
  var i;
  var y;
  for(i=1; i<1001; i++){
    var multi = 0;
    multi = 3 * i;
    if(multi<1001){
      sthree = sthree + multi;
    }else{
      //console.log("Error: Broken Loop (" + i +"). Last Multiple was " + multi);
      break;
    }
  }
  console.log("The Sum Of The Multiples Of Three (3) Less Than 1000 is " + sthree);
  for(y=1; y<1001; y++){
    var multi = 0;
    multi = 5 * y;
    if(multi<1001){
      sfive = sfive + multi;
    }else{
      //console.log("Broken Loop (" + i +"). Last Multiple was " + multi);
      break;
    }
  }
  console.log("The Sum Of The Multiples Of Five (5) Less Than 1000 is " + sfive);
  return true;
}
SumThis();

//Grading Function
function assignGrade(score){
  if(score>=90 && score<101){
    return "A";
  }else if(score>=75 && score<90){
    return "B";
  }else if(score>=60 && score<75){
    return "C";
  }else if(score>=45 && score<60){
    return "D";
  }else if(score<45){
    return "F";
  }else{
    return "invalid score";
  }
}
console.log(assignGrade(95));
console.log(assignGrade(80));
console.log(assignGrade(67));
console.log(assignGrade(50));
console.log(assignGrade(30));

// Second Part Checking Results
function CheckGrades(gradez){
  var l = gradez.length;
  var i;
  for(i=0; i<l; i++){
    var grade = gradez[i];
    if(grade>=60){
      var score = assignGrade(grade);
      if (score=="A"){
        console.log("For " + grade + ", you got an " + score);
      }else{
        console.log("For " + grade + ", you got a " + score);
      }
    }
  }
}
var grades = [98,88,99,80,76,71,63,67,50,46,41,30];
CheckGrades(grades);
