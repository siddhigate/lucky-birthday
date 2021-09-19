const output_msg = document.querySelector(".output");
const input_date = document.querySelector("#date");
const input_num = document.querySelector("#lucky_num");
const form = document.querySelector("form");

// output
const output_div = document.querySelector(".output-msg");
const output_container = document.querySelector(".output-container");
const error_msg = document.querySelector(".error-msg");

const privacy_close = document.querySelector(".privacy-close");
const privacy_note = document.querySelector(".privacy-note");

privacy_close.addEventListener("click", function(){
    privacy_note.style.display = "none";
})

function isValidInput(){

    if(input_date.value && input_num.value){

        if(Number(input_num.value) > 0){
            return true;
        }
        else {
            setError("Enter valid lucky number");
        }
    }
    else {
        setError("Please enter the values");
    }
}

function setError(errorText){
    error_msg.innerText = errorText;
}

function resetError(){
    error_msg.innerText = "";
}

function resetOutput(){
    output_container.style.background = "white";
    output_div.innerHTML = "";
}

function displayResult(isLucky){

    if(isLucky){
        output_div.innerHTML = "";
        output_div.innerHTML = `<div><img src='./lucky.svg'></div><div style="margin:auto; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div>`
        output_container.style.background = "#32CD32";
    }
    else { 
        output_div.innerHTML = `<div><img src='./notlucky.svg'></div><div style="margin:auto; font-size: 1.4rem;">Oops! Your birthday is not lucky :(</div>`
        output_container.style.background = "#EF4444";

    }
}

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    resetError();
    resetOutput();

    if(isValidInput() === true){
        let date_val = (date.value).replaceAll('-',"");

        let sum = 0;
        for(letter of date_val){
            sum += Number(letter)
        }
    
        let is_lucky = false;
        if(sum % Number(input_num.value) === 0){
            is_lucky = true;
        }
    
        displayResult(is_lucky);
        document.querySelector('.footer').scrollIntoView();
    }

})

input_num.addEventListener('click', function(){
    resetError();
    resetOutput();
});

input_date.addEventListener('click', function(){
    resetError();
    resetOutput();
});