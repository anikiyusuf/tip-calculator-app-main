const billEl = document.getElementById("billForm");
const billInput = document.getElementById("bill_input");
const peopleForm = document.getElementById("people_form");
const peopleInput = document.getElementById("people_input");
const errorMessage = document.getElementById("error_message");
const tipForm = document.getElementById("tip-form");
const tipInput = document.getElementById("tip-amount-input");
const totalForm = document.getElementById("total-person");
const total = document.getElementById("total-person-input");
const custom_El = document.getElementById("customEl");



function fivePer() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red";
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = five_Tip();
    totalForm.textContent = five_Total();
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}


function tenPer() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red"; 
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = ten_Tip();
    totalForm.textContent = ten_Total();
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}

function fifteenPer() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red";
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = fifteen_Tip();
    totalForm.textContent = fifteen_Total();
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}


function twentyFivePer() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red";
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = twentyfive_Tip();
    totalForm.textContent = twentyfive_Total();
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}

function fiftyPer() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red";
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = fifty_Tip();
    totalForm.textContent = fifty_Total();
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}

function   custom() {
    if(peopleInput.value == 0){
    errorMessage.textContent = "can't be zero" ;
    errorMessage.style.color = "red";
    peopleForm.style.border= "1px solid red";
  } else{
    tipForm.textContent = random_Tip(custom.value);
    totalForm.textContent =random_Total(custom.value);
    errorMessage.textContent = "";
    peopleForm.style.border = "1px solid transparent";
  }
}

function resetEl(){
    tipForm.textContent = "$0.00";
    totalForm.textContent = "$0.00";
    billInput.value ="";
    custom_El.value = "";
    errorMessage.value ="";
    peopleInput.value = "";
    peopleForm.style.border = "1px solid transparent";
  //   tipInput.style.color="var(--Very-dark-cyan)";
  // document.getElementById("tip-amount-input").style.width="120px";
  // tipInput.style.backgroundColor="transparent";
  // tipInput.style.fontSize="2rem";
  // tipInput.style.color="var(--Strong-cyan)";
  // tipInput.style.border="none";
  // tipInput.style.paddingLeft="0.7rem";
  // tipInput.style.textAlign="right";
}


let dollar = "$";


const five_Tip = () => {
    const total = (0.05 * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const five_Total = () => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = 0.05 * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}

const ten_Tip = () => {
    const total = (0.1 * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const ten_Total = () => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = 0.1 * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}
const fifteen_Tip = () => {
    const total = (0.05 * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const fifteen_Total = () => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = 0.15 * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}

const twentyfive_Tip = () => {
    const total = (0.25 * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const twentyfive_Total = () => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = 0.25 * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}

const fifty_Tip = () => {
    const total = (0.5 * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const fifty_Total = () => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = 0.5 * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}


const random_Tip = (p) => {
    const total = ((p/100) * billInput.value) / peopleInput.value;
    return `${dollar}${total.toFixed(2)}`;
}

const random_Total = (q) => {
    const value1 = billInput.value / peopleInput.value;
    const value2 = q * value1;
    const total = value1 + value2;
    return  `${dollar}${total.toFixed(2)}`;
}

