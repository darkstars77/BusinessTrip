/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  // listHoursArray[new Date().getDay()].classList.add(('today'));
});



const officers_click = document.querySelector('#officers_click');
const officers_target = document.querySelector('#officers_target');

const directors_click = document.querySelector('#directors_click');
const directors_target = document.querySelector('#directors_target');

const operators_click = document.querySelector('#operators_click');
const operators_target = document.querySelector('#operators_target');

officers_click.addEventListener('click', ()=>{
  officers_target.scrollIntoView({block:'start'});
});
directors_click.addEventListener('click', ()=>{
  directors_target.scrollIntoView({block:'start'});
});
operators_click.addEventListener('click', ()=>{
  operators_target.scrollIntoView({block:'start'});
});

