function checkvalue(){
    let num = document.querySelector("#numcheck").value;

    if(num % 2 === 0){
        document.querySelector("#result").innerHTML = ` ${num} is an even number`;

    }
    else{
        document.querySelector("#result").innerHTML = `${num} is an odd number`;
    }
}