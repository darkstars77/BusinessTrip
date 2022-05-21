window.addEventListener('DOMContentLoaded', event => {
  const listHoursArray = document.body.querySelectorAll('.list-hours li');
  // listHoursArray[new Date().getDay()].classList.add(('today'));
});

const mon_click = document.querySelector('#mon_click');
const mon_target = document.querySelector('#mon_target');

const tue_click = document.querySelector('#tue_click');
const tue_target = document.querySelector('#tue_target');

const wed_click = document.querySelector('#wed_click');
const wed_target = document.querySelector('#wed_target');

const thu_click = document.querySelector('#thu_click');
const thu_target = document.querySelector('#thu_target');


mon_click.addEventListener('click', ()=>{
  mon_target.scrollIntoView({block:'center'});
});
tue_click.addEventListener('click', ()=>{
  tue_target.scrollIntoView({block:'center'});
});
wed_click.addEventListener('click', ()=>{
  wed_target.scrollIntoView({block:'center'});
});
thu_click.addEventListener('click', ()=>{
  thu_target.scrollIntoView({block:'center'});
});