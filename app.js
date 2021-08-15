const output_msg = document.querySelector(".output");
const input_date = document.querySelector("#date");
const input_num = document.querySelector("#lucky_num");
const form = document.querySelector("form");

const privacy_close = document.querySelector(".privacy-close");
const privacy_note = document.querySelector(".privacy-note");

privacy_close.addEventListener("click", function(){
    privacy_note.style.display = "none";
})

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    let date_val = (date.value).replaceAll('-',"");

    let sum = 0;
    for(letter of date_val){
        sum += Number(letter)
    }

    let is_lucky = false;
    if(sum % Number(input_num.value) === 0){
        is_lucky = true;
    }


    output_msg.innerHTML = `${input_date.value}    ${input_num.value}   ${date_val}    <b> ${sum}</b> <b> ${is_lucky}</b>`;
})
