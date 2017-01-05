var opener = document.getElementById('opener');
var modal = document.getElementById('modal');
opener.addEventListener('click', event => {
  opener.className += ' open_btn_animate';
  modal.className += ' open_modal_animate';
 
});
