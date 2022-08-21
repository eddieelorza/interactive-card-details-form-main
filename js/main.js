const cardNumber = document.getElementById('inp-number');
const cardName = document.getElementById('inp-name');
const cardMonth = document.getElementById('inp-month');
const cardYear = document.getElementById('inp-year');
const cardCvc = document.getElementById('inp-cvc');
const btnConfirm = document.getElementById('btn-confirm');
const btnContinue = document.getElementById('btn-continue');
const errorNum = document.getElementById('error-number');
const errorName = document.getElementById('error-name');
const errorExp = document.getElementById('error-exp');
const errorCvc = document.getElementById('error-cvc');
const errorBorder = document.querySelectorAll('.error-border');
const successContainer = document.querySelector('.success-container');
const cardContainer = document.querySelector('.card-container');
const cardForm = document.querySelector('.card-form');
const number = document.getElementById('card-num');
const name = document.getElementById('card-name');
const month = document.getElementById('card-month');
const year = document.getElementById('card-year');
const cvc = document.getElementById('card-cvc');
const inputs = document.querySelector('card-input');


function addForm(){
  cardName.addEventListener('input', function(){
  name.innerHTML = cardName.value
  //only letters and spaces
  if(cardName.value.match(/^[a-zA-Z ]+$/)){
    errorName.style.display = 'none';
    cardName.style.border = '1px solid #ccc';
  } else{
    errorName.innerHTML = 'Only letters and spaces';
    errorName.style.display = 'block';
    cardName.style.border = '1px solid red';
  }

});

cardNumber.addEventListener('input', function(){
  number.innerHTML = cardNumber.value
  .split(" ")
              .join(" ")
              .match(/.{1,4}/g)
              .join(" ");
    //only numbers allowed
    if(cardNumber.value.match(/[^0-9]/g) || cardNumber.value.length === 16){
      cardNumber.value = cardNumber.value.replace(/[^0-9]/g, '');
      errorNum.style.display = 'none';
      cardNumber.style.border = '1px solid #ccc';

    }else{
      errorNum.innerHTML = 'Must be 16 digits';
      errorNum.style.display = 'block';
      cardNumber.style.border = '1px solid red';
    }
});

cardMonth.addEventListener('input', function(){
  month.innerHTML = cardMonth.value
  //only numbers in the range of 1-12 allowed
  if(cardMonth.value.match(/[^0-9]/g) || cardMonth.value <= 12 ){
    cardMonth.value = cardMonth.value.replace(/[^0-9]/g, '');
    errorExp.style.display = 'none';
    cardMonth.style.border = '1px solid #ccc';
  }else{
    errorExp.innerHTML = 'only numbers in the range of 1-12 allowed';
    errorExp.style.display = 'block';
    cardMonth.style.border = '1px solid red';
  }

});
cardYear.addEventListener('input', function(){
  year.innerHTML = cardYear.value
  //ONLY YEARS IN THE FUTURE ALLOWED
  if(cardYear.value.match(/[^0-9]/g) || cardYear.value >= 22){
    cardYear.value = cardYear.value.replace(/[^0-9]/g, '');
    errorExp.style.display = 'none';
    cardYear.style.border = '1px solid #ccc';
  }else{
    errorExp.innerHTML = 'only years in the future allowed';
    errorExp.style.display = 'block';
    cardYear.style.border = '1px solid red';
  }
});

cardCvc.addEventListener('input', function(){
  cvc.innerHTML = cardCvc.value
  //only numbers in the range of 1-12 allowed
  if(cardCvc.value.match(/[^0-9]/g) || cardCvc.value.length >= 3) {
    cardCvc.value = cardCvc.value.replace(/[^0-9]/g, '');
    errorCvc.style.display = 'none';
    cardCvc.style.border = '1px solid #ccc';
  }else{
    errorCvc.innerHTML = 'only numbers in the range of 3-4 allowed';
    errorCvc.style.display = 'block';
    cardCvc.style.border = '1px solid red';
  }

});

}

addForm();

function confirmCard(e){
  if(cardNumber.value === ''){
    errorNum.innerHTML = 'Please fill in all the fields';
    cardNumber.classList.add('error-border');
    e.preventDefault();
  }else if (cardNumber.value.length < 16){
    errorNum.innerHTML = 'Must be 16 digits';
    cardNumber.classList.add('error-border');
    e.preventDefault();
  }else{
    errorNum.innerHTML = '';
    cardNumber.classList.remove('error-border');
  }

  if(cardName.value === ''){
    errorName.innerHTML = 'Please enter a valid name';
    cardName.classList.add('error-border');
    e.preventDefault();
  }else if(!cardName.value.match(/^[a-zA-Z ]+$/)){
    errorName.innerHTML = 'Only letters and spaces';
    cardName.classList.add('error-border');
    e.preventDefault();
  }else if(cardName.value.length < 3){
    errorName.innerHTML = 'Must be at least 3 characters';
    cardName.classList.add('error-border');
    e.preventDefault();
  }else{
    errorName.innerHTML = '';
    cardName.classList.remove('error-border');
  }


  if(cardMonth.value === '' && cardYear.value === ''){
    errorExp.innerHTML = "Can't be blank";
    cardMonth.classList.add('error-border');
    cardYear.classList.add('error-border');
    e.preventDefault();
  }else if(cardYear.value < 22){
    errorExp.innerHTML = 'Only years in the future allowed';
    cardYear.classList.add('error-border');
    e.preventDefault();
  }else if(cardMonth.value > 12 ){
    errorExp.innerHTML = 'Only numbers in the range of 1-12 allowed';
    cardMonth.classList.add('error-border');
    e.preventDefault();
  }
   else{
    errorExp.innerHTML = '';
    cardMonth.classList.remove('error-border');
    cardYear.classList.remove('error-border');

  }



  if(cardCvc.value === ''){
    errorCvc.innerHTML = "Can't be blank";
    cardCvc.classList.add('error-border');
    e.preventDefault();
  }else if(cardCvc.value.length < 3){
    errorCvc.innerHTML = 'Must be at least 3 digits';
    cardCvc.classList.add('error-border');
    e.preventDefault();
  }else{
    errorCvc.innerHTML = '';
    cardCvc.classList.remove('error-border');
  }
  

   if(errorNum.innerHTML === '' && errorName.innerHTML === '' && errorExp.innerHTML === '' && errorCvc.innerHTML === ''){
    successContainer.style.display = 'grid';
    cardForm.style.display = 'none';
  }

  console.log("errorNum: " + errorNum.innerHTML);
  console.log("errorName: " + errorName.innerHTML);
  console.log("errorExp: " + errorExp.innerHTML);
  console.log("errorCvc: " + errorCvc.innerHTML);


}


function continuePage(e){
  cardNumber.value = '';
  cardName.value = '';
  cardMonth.value = '';
  cardYear.value = '';
  cardCvc.value = '';
  number.innerHTML = '0000 0000 0000 0000';
  name.innerHTML = 'JANE APPLESEED';
  month.innerHTML = '00';
  year.innerHTML = '00';
  cvc.innerHTML = '000';
  cardNumber.classList.remove('error-border');
  cardName.classList.remove('error-border');
  cardMonth.classList.remove('error-border');
  cardYear.classList.remove('error-border');
  cardCvc.classList.remove('error-border');
  errorNum.innerHTML = '';
  errorName.innerHTML = '';
  errorExp.innerHTML = '';
  errorCvc.innerHTML = '';
  successContainer.style.display = 'none';
  cardForm.style.display = 'grid';
}


 
btnConfirm.addEventListener('click', confirmCard);
btnContinue.addEventListener('click', continuePage);