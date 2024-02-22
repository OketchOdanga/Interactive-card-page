const form = document.getElementById('form');
const input = document.querySelectorAll('input');
const text = document.getElementById('text');

const cardholderName = document.getElementById('cardholderName');
cardholderName.addEventListener('input', () =>{
    let pattern= / {2,}/g;
    cardholderName.value.replaceAll(pattern," ").trim();
    
} )
const cardNumber = document.getElementById('cardnumber');
cardNumber.addEventListener('input',()=>{
    let cardNo = document.getElementById('cardNumber');
    let pattern = /[0-9]{4} *[0-9]{4} *[0-9]{4} *[0-9]{4}/
    if (cardNumber.value.match(pattern)) {
        cardNo.classList.add('validNumber')
        cardNo.classList.remove('invalidNumber')
        text.innerHTML="";
    } else {
        cardNo.classList.remove('valid');
        cardNo.classList.add('invalid');
        text.innerHTML="Wrong format, numbers only";
        text.style.color="hsl(0, 100%, 66%)";
    }
    if (cardNumber.value=="") {
        text.innerHTML="";
    }
})

let CVC = document.getElementById('CVC');
const cvc = document.getElementById('cvc');
const text4 = document.getElementById('text4')
cvc.addEventListener('input', ()=>{
   let pattern = /[0-9]{3}/ ;
   if (cvc.value.match(pattern)) {
    CVC.classList.add('validCvc');
    CVC.classList.remove('invalidCvc');
    text4.innerHTML="";
   } else {
    CVC.classList.remove('validCvc');
    CVC.classList.add('invalidCvc');
    text4.innerHTML="wrong";
    text4.style.color="hsl(0, 100%, 66%)";
   } if (cvc.value=="") {
    text4.innerHTML="Can't be blank";
    text4.style.color="hsl(0, 100%, 66%)";
   } 
})










