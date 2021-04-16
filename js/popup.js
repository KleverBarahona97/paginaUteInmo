var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay1 = document.getElementById('overlay1'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay1.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay1.classList.remove('active');
	popup.classList.remove('active');
});