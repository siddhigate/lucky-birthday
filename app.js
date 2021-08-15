const output_msg = document.querySelector(".output");
const input_date = document.querySelector("#date");
const input_num = document.querySelector("#lucky_num");
const form = document.querySelector("form");

// output
const output = document.querySelector(".output_msg");
const error_msg = document.querySelector(".error-msg");

const privacy_close = document.querySelector(".privacy-close");
const privacy_note = document.querySelector(".privacy-note");

privacy_close.addEventListener("click", function(){
    privacy_note.style.display = "none";
})

function isValidInput(){

    if(input_date.value && input_num.value){

        if(input_num.value > 0){
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
});

input_date.addEventListener('click', function(){
    resetError();
});