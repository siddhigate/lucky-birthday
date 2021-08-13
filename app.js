const output_msg = document.querySelector(".output");
const input_date = document.querySelector("#date");
const input_num = document.querySelector("#lucky_num");
const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    let date_val = parseInt(((date.value).split('-')).join(""));

    let sum = 0;
    while(date_val > 0){
        sum += parseInt(date_val % 10);
        date_val = parseInt(date_val / 10);
    }

    let is_lucky = false;
    if(sum % input_num.value === 0){
        is_lucky = true;
    }


    output_msg.innerHTML = `${input_date.value}    ${input_num.value}   ${date_val}    <b> ${sum}</b> <b> ${is_lucky}</b>`;
})
