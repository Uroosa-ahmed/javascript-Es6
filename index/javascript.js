function percentage(){
    let subject1 = +document.querySelector("#subject1").value;
    let subject2 = +document.querySelector("#subject2").value;
    let subject3 = +document.querySelector("#subject3").value;
    let subject4 = +document.querySelector("#subject4").value;
    let subject5 = +document.querySelector("#subject5").value;
    let subject6 = +document.querySelector("#subject6").value;
    let subject7 = +document.querySelector("#subject7").value;

let totalmarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7
 
                  
 
  // console.log(totalmarks);
document.querySelector("#totalmarks").innerHTML = `Totalmarks ${totalmarks}`

let result = totalmarks / 07;
  // console.log(result);

document.querySelector("#result").innerHTML = `you have got ${result}%`;


}