const output_msg = document.querySelector(".output");
const input_date = document.querySelector("#date");
const input_num = document.querySelector("#lucky_num");
const form = document.querySelector("form");

// output
const output = document.querySelector(".output_msg");


const privacy_close = document.querySelector(".privacy-close");
const privacy_note = document.querySelector(".privacy-note");

privacy_close.addEventListener("click", function(){
    privacy_note.style.display = "none";
})


function displayResult(isLucky){

    if(isLucky){
        document.querySelector(".output-img").src = "./lucky.svg";
        document.querySelector(".output-msg").innerText = "Yayy! Your birthday is lucky :)"; 
    }
    else { 
        document.querySelector(".output-img").src = "./notlucky.svg";
        document.querySelector(".output-msg").innerText = "Oops! Your birthday is not lucky :("; 
    }
}

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    console.log("heere");   
    let date_val = (date.value).replaceAll('-',"");

    let sum = 0;
    for(letter of date_val){
        sum += Number(letter)
    }

    let is_lucky = false;
    if(sum % Number(input_num.value) === 0){
        is_lucky = true;
    }

    displayResult(is_lucky)
})
