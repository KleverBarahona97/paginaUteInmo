String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "");    };

function Arroba(sString){
	var str = sString.value
	// Return false if e-mail field does not contain a '@' and '.' .   
	if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
		alert('Introduzca correctamente el E-mail')
		sString.focus()
		return false 
	}
	else
		{
		return true;      
		}
}

function isDescrip(valor,total) {
	if (valor.value.length > total) {
		alert ("Debe introducir una CONSULTA más corta.(Max. "+total+" caracteres).");
		valor.focus ();
		return false;
	} else return true; 
}

function Mostrar(nombreCapa){ 
	yy_ml=(event.clientX + document.body.scrollLeft);
	yy_mt=(event.clientY + document.body.scrollTop);
	document.getElementById(nombreCapa).style.left=yy_ml - 100; 
	document.getElementById(nombreCapa).style.top=yy_mt - 350; 
	document.getElementById(nombreCapa).style.visibility="visible"; 
} 

function Ocultar(nombreCapa){ 
	document.getElementById(nombreCapa).style.visibility="hidden"; 
} 

function es_num(v){
   var t=/^[0-9]\d*$/
   return t.test(v);
}

function es_num_dec(v){
   var t=/^[0-9]{1,10}(\,[0-9]{0,2})?$/
   return t.test(v);
}

function cadena_letras(v){
   var t=/^[á|é|í|ó|ú|ñ|Ñ|Á|É|Í|Ó|Ú|a-zA-Z\s]*$/;
   return t.test(v);
}

function es_telefono(v){
    var t=/^(6|8|9)\d{8}$/
    return t.test(v);
 }

function es_cp(v){
   var t=/^[0-9]\d*$/
   return t.test(v);
}

function VisulizacionImg(vImage,capa){
	vRuta='http://www.chopperbikes.es' + vImage;
	if (vImage.value != "") {
		p=document.getElementById('Contenido')
		p.style.visibility="visible";
		p.style.top = document.body.scrollTop + 50;
		frames.previewImagesBicis.location =  vRuta
	}else { frames.previewImagesBicis.location = 'about:blank';}
}

function NoVisulizacionImg(){
	p=document.getElementById('Contenido')
	p.style.visibility="hidden";
}

function ValidaReserva(){
	
	if(frmReserva.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmReserva.fmNombre.focus();
		return false;
	}

	if(frmReserva.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmReserva.fmEmail.focus();
		return false;
	}
			
	if(frmReserva.fmTelefono.value == ""){
					alert("Introduce tu Teléfono.");
					frmReserva.fmTelefono.focus();
					return false;
	}
	else{
		if (!es_num(frmReserva.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmReserva.fmTelefono.focus();
			return false;
		}
	}
	
	if(frmReserva.fmEdad.value != ""){
		if (!es_num(frmReserva.fmEdad.value)){
				alert ('Debes escribir tu edad correctamente.');
				frmReserva.fmEdad.focus();
				return false;
		}
	}
		
	if(frmReserva.fmDireccion.value == ""){
		alert("Introduce tu Dirección.");
		frmReserva.fmDireccion.focus();
		return false;
	}	
	
	if(frmReserva.fmCP.value == ""){
		alert("Introduce tu Código Postal.");
		frmReserva.fmCP.focus();
		return false;
	}
	else{
		if(frmReserva.fmCP.value.length!=5){
			msgErr="El Código Postal debe de ser un número de cinco cifras";
			alert(msgErr);
			frmReserva.fmCP.focus();
			return false;
		}	
		else{
			if(!es_num(frmReserva.fmCP.value)){
				msgErr="El Código Postal debe de ser un número de cinco cifras";
				alert(msgErr);
				frmReserva.fmCP.focus();
				return false;
			}
		}
	}
			
	if(frmReserva.fmMunicipio.value == ""){
		alert("Selecciona tu Municipio.");
		frmReserva.fmMunicipio.focus();
		return false;
	}
				
	if(frmReserva.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmReserva.fmProvincia.focus();
		return false;
	}
}

function ValidaContacto(){
	if(frmContacto.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmContacto.fmNombre.focus();
		return false;
	}

	if(frmContacto.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmContacto.fmEmail.focus();
		return false;
	}
	
	if(frmContacto.fmTelefono.value == ""){
		alert("Introduce el Tel&eacute;fono.");
		frmContacto.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmContacto.fmTelefono.value)){
			alert ('Debes escribir un Tel&eacute;fono correcto');
			frmContacto.fmTelefono.focus();
			return false;
		}
	}
	
	if(frmContacto.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmContacto.fmProvincia.focus();
		return false;
	}
}

function ValidaContactoInmobiliario(){
	
	if(frmContacto.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmContacto.fmNombre.focus();
		return false;
	}

	if(frmContacto.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmContacto.fmEmail.focus();
		return false;
	}
	
	if(frmContacto.fmTelefono.value == ""){
		alert("Introduce el Teléfono.");
		frmContacto.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmContacto.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmContacto.fmTelefono.focus();
			return false;
		}
	}
}

function ValidaEmpresa(){
	
	if(frmAltaEmpresas.fmNombre.value == ""){
		alert("Introduce el Nombre de la Empresa.");
		frmAltaEmpresas.fmNombre.focus();
		return false;
	}

	if(frmAltaEmpresas.fmDireccion.value == ""){
		alert("Introduce la Dirección de la Empresa.");
		frmAltaEmpresas.fmDireccion.focus();
		return false;
	}

	if(frmAltaEmpresas.fmCP.value == ""){
		alert("Introduce tu Código Postal.");
		frmAltaEmpresas.fmCP.focus();
		return false;
	}
	else{
		if(frmAltaEmpresas.fmCP.value.length!=5){
			msgErr="El Código Postal debe de ser un número de cinco cifras";
			alert(msgErr);
			frmAltaEmpresas.fmCP.focus();
			return false;
		}	
		else{
			if(!es_num(frmAltaEmpresas.fmCP.value)){
				msgErr="El Código Postal debe de ser un número de cinco cifras";
				alert(msgErr);
				frmAltaEmpresas.fmCP.focus();
				return false;
			}
		}
	}
			
	if(frmAltaEmpresas.fmMunicipio.value == ""){
		alert("Selecciona tu Municipio.");
		frmAltaEmpresas.fmMunicipio.focus();
		return false;
	}
				
	if(frmAltaEmpresas.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmAltaEmpresas.fmProvincia.focus();
		return false;
	}
	
	if(frmAltaEmpresas.fmPais.value == ""){
		alert("Selecciona tu País.");
		frmAltaEmpresas.fmPais.focus();
		return false;
	}
	
	if(frmAltaEmpresas.fmTelefono.value == ""){
		alert("Introduce el Teléfono.");
		frmAltaEmpresas.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmAltaEmpresas.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmAltaEmpresas.fmTelefono.focus();
			return false;
		}
	}
	if(frmAltaEmpresas.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmAltaEmpresas.fmEmail.focus();
		return false;
	}
}

function ValidaPromo(){
	
	if(frmAltaPromo.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmAltaPromo.fmNombre.focus();
		return false;
	}

	if(frmAltaPromo.fmDireccion.value == ""){
		alert("Introduce tu Dirección.");
		frmAltaPromo.fmDireccion.focus();
		return false;
	}

	if(frmAltaPromo.fmCP.value == ""){
		alert("Introduce tu Código Postal.");
		frmAltaPromo.fmCP.focus();
		return false;
	}
	else{
		if(frmAltaPromo.fmCP.value.length!=5){
			msgErr="El Código Postal debe de ser un número de cinco cifras";
			alert(msgErr);
			frmAltaPromo.fmCP.focus();
			return false;
		}	
		else{
			if(!es_num(frmAltaPromo.fmCP.value)){
				msgErr="El Código Postal debe de ser un número de cinco cifras";
				alert(msgErr);
				frmAltaPromo.fmCP.focus();
				return false;
			}
		}
	}
			
	if(frmAltaPromo.fmMunicipio.value == ""){
		alert("Selecciona tu Municipio.");
		frmAltaPromo.fmMunicipio.focus();
		return false;
	}
				
	if(frmAltaPromo.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmAltaPromo.fmProvincia.focus();
		return false;
	}
	
	if(frmAltaPromo.fmPais.value == ""){
		alert("Selecciona tu País.");
		frmAltaPromo.fmPais.focus();
		return false;
	}
	
	if(frmAltaPromo.fmTelefono.value == ""){
		alert("Introduce el Teléfono.");
		frmAltaPromo.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmAltaPromo.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmAltaPromo.fmTelefono.focus();
			return false;
		}
	}
	if(frmAltaPromo.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmAltaPromo.fmEmail.focus();
		return false;
	}
}

function ValidaAltaUsuario(){	
	if(frmAltaUsuario.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmAltaUsuario.fmEmail.focus();
		return false;
	}
}

function ValidaEnvioAmigo(){
	
	if(frmEnviarAmigo.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmEnviarAmigo.fmNombre.focus();
		return false;
	}

	if(frmEnviarAmigo.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmEnviarAmigo.fmEmail.focus();
		return false;
	}
	
	if(frmEnviarAmigo.fmNombre2.value == ""){
		alert("Introduce el Nombre de tu amigo.");
		frmEnviarAmigo.fmNombre2.focus();
		return false;
	}
	
	if(frmEnviarAmigo.fmEmail2.value == ""){
		alert("Introduce el Email de tu amigo.");
		frmEnviarAmigo.fmEmail2.focus();
		return false;
	}
}

function ValidaPublicidad(){
	
	if(frmPublicidad.fmTipoEmpresa.value == ""){
		alert("Introduce el Tipo de la Empresa.");
		frmPublicidad.fmTipoEmpresa.focus();
		return false;
	}
	
	if(frmPublicidad.fmEmpresa.value == ""){
		alert("Introduce el Nombre de la Empresa.");
		frmPublicidad.fmEmpresa.focus();
		return false;
	}

	if(frmPublicidad.fmEmail.value == ""){
		alert("Introduce el Email.");
		frmPublicidad.fmEmail.focus();
		return false;
	}
			
	if(frmPublicidad.fmTelefono.value == ""){
		alert("Introduce el Teléfono.");
		frmPublicidad.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmPublicidad.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmPublicidad.fmTelefono.focus();
			return false;
		}
	}
			
	if(frmPublicidad.fmDireccion.value == ""){
		alert("Introduce tu Dirección.");
		frmPublicidad.fmDireccion.focus();
		return false;
	}	
	
	if(frmPublicidad.fmCP.value == ""){
		alert("Introduce tu Código Postal.");
		frmPublicidad.fmCP.focus();
		return false;
	}
	else{
		if(frmPublicidad.fmCP.value.length!=5){
			msgErr="El Código Postal debe de ser un número de cinco cifras";
			alert(msgErr);
			frmPublicidad.fmCP.focus();
			return false;
		}	
		else{
			if(!es_num(frmPublicidad.fmCP.value)){
				msgErr="El Código Postal debe de ser un número de cinco cifras";
				alert(msgErr);
				frmPublicidad.fmCP.focus();
				return false;
			}
		}
	}
			
	if(frmPublicidad.fmMunicipio.value == ""){
		alert("Introduce tu Municipio.");
		frmPublicidad.fmMunicipio.focus();
		return false;
	}
				
	if(frmPublicidad.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmPublicidad.fmProvincia.focus();
		return false;
	}
}

function AbrirEnvioAmigo(Url,Param) {
  vUrl="/Include/EnvioAmigo.asp?Url=" + Url + "&Param=" + Param
  window.open(vUrl,'','toolbar=no,location=no,resizable=no,directories=no,status=no,menubar=no,copyhistory=no,scrollbars=no,width=400,height=350,top=130,left=250');
}
function AbrirVentana(Url,Param) {
  vUrl=Url
  window.open(vUrl,'','toolbar=no,location=no,resizable=no,directories=no,status=no,menubar=no,copyhistory=no,scrollbars=no,width=400,height=350,top=130,left=250');
}
function AbrirEjemploDossier(Param) {
  vUrl="/Include/EjemploDossier.asp?CdServicio=" + Param
  window.open(vUrl,'','toolbar=no,location=no,resizable=no,directories=no,status=no,menubar=no,copyhistory=no,scrollbars=yes,width=810,height=600,top=130,left=250');
}

function AbrirVentanaLegal(){
window.open('/Legal/IndexBody.asp','','toolbar=no,location=no,resizable=no,directories=no,status=no,menubar=no,copyhistory=no,scrollbars=yes,width=568,height=380');
}

function ImprimirReportaje(Reportaje) {
  win = window.open('ImprimirReportaje.asp?Reportaje='+ Reportaje, 'Imprimir', 'width=700, height=600,top=0,left=100, directories=0,resizable=0,location=0,status=0,scrollbars=1,toolbar=0,menubar=0,titlebar=0');
  win.print();
}

function PopCentrado(theURL,winName,features) 
{ //v2.0
	ventana=window.open(theURL,winName,features);
	ventana.focus()
	ventana.moveTo(Math.round((screen.availWidth-550)/2),Math.round((screen.availHeight-550)/2))
	return ventana
}

// Función para comprobar si existe contenido del editor de texto
function RevisaContents(fmConsulta) {
	var oEditor = FCKeditorAPI.GetInstance(fmConsulta) ;
	var texto = "";
	var texto = oEditor.GetXHTML( true );
	if ((texto) == ""){
		return false;
	}
}

// Función para comprobar el tamaño contenido del editor de texto
function RevisaContentsLong(fmConsulta, long) {
	var oEditor = FCKeditorAPI.GetInstance(fmConsulta) ;
	var texto = "";
	var texto = oEditor.GetXHTML( true );
	var len = texto.length;	

	if (len > long){
		return false;
	}	
}

// Función para comprobar los contenidos del editor de texto

function GetContents(fmConsulta) {
	// Get the editor instance that we want to interact with.
	var oEditor = "";
	var oEditor = FCKeditorAPI.GetInstance(fmConsulta) ;
	// Get the editor contents in XHTML.
	var texto = "";
	var texto = oEditor.GetXHTML( true );
	
	if  (DPTelefono(texto) == true)
		{alert("No se permite la introdución de teléfonos en el contenido del Anuncio");
		 oEditor.Commands.GetCommand( 'SelectAll' ).Execute();
		 return false;}
	
	if  (DPVinculo(texto) == true)
		{alert("No se permite la introdución de hipervínculos en el contenido del Anuncio");
		 oEditor.Commands.GetCommand( 'SelectAll' ).Execute();
		 return false;}
	
	if  (DPEmail(texto) == true)
		{alert("No se permite la introdución de direcciones de correo en el contenido del Anuncio");
		 oEditor.Commands.GetCommand( 'SelectAll' ).Execute();
		 return false;}
	
	oEditor.SetHTML( texto ) ;
	return true;  

}

// Función para controlar que el contenido del editor sean espacios en blanco
function GetLength(fmConsulta){
	var oEditor = FCKeditorAPI.GetInstance(fmConsulta) ;
	var oDOM = oEditor.EditorDocument ;
	var iLength=0 ;

	if ( document.all ){		// If Internet Explorer.
		iLength = oDOM.body.innerText.length ;
		valor = oDOM.body.innerText; 
	}else{					// If Firefox.
		iLength = oDOM.body.textContent.length ;
		valor = oDOM.body.textContent; 
	}
	if ((vacio(valor) == false)){
	 
	  return false;
	}else{
	  return true;
	}
}

function vacio(q){	
	for(i = 0; i < q.length; i++){ 
		if ((escape(q.charAt(i))!="%A0") ){ 		
			if((escape(q.charAt(i))!="%20") ){
				
				return true ;
			}
		} 
	} 
	return false ;
}
// Fin Función para controlar que el contenido del editor sean espacios en blanco

//Función Validación Formulario de Opinión
function ValidaOpinion(){
	var msg;
  
      // Llamadas a las funciones propias del editor
	if ((RevisaContents("fmOpinion") == false)){
	  alert("Introduce tu opinion.");
	  return false;
	}
	
	if ((GetLength("fmOpinion") == false)){
	 alert("Introduce tu opinion.");
	  return false;
	}

	if ((RevisaContentsLong("fmOpinion", 1500) == false)){
	 alert("El contenido de la opinion no debe superar los 1500 caracteres.");
	  return false;
	}
   if(frmOpinion.fmNombre.value == ""){
      alert("Introduce tu nombre.");
      frmOpinion.fmNombre.focus();
      return false;
   }
   else{
      if(cadena_letras(frmOpinion.fmNombre.value)==false){
         alert("En el nombre no se pueden introducir caracteres numericos.");
         frmOpinion.fmNombre.focus();
         return false;
      }
   }   
          
	 if(frmOpinion.fmEmail.value == ""){
      alert("Introduce tu email.");
      frmOpinion.fmEmail.focus();
      return false;
   }

	// Fin de llamadas a las funciones propias del editor

}

function ValidaEventos(){

	var msg;
  	
  	if(document.frmAltaEventos.fmtitulo.value == ""){
      alert("Introduce el Título del Evento. Máximo 160 caracteres.");
		document.frmAltaEventos.fmtitulo.focus();
      return false;
   	}
	if(document.frmAltaEventos.fmlugar.value == ""){
      alert("Introduce el Lugar donde se celebrará el Evento.");
      document.frmAltaEventos.fmlugar.focus();
      return false;
   	}
    if(document.frmAltaEventos.fmfechaIn.value == ""){
      alert("Introduce la fecha de Inicio del Evento.");
      //document.frmAltaEventos.fmfechaIn.focus();
      return false;
   	}
   	if(document.frmAltaEventos.fmfechaFin.value == ""){
      alert("Introduce la fecha Fin del Evento.");
      //document.frmAltaEventos.fmfechaFin.focus();
      return false;
   	}
   	if(document.frmAltaEventos.fmnombre.value == ""){
      alert("Introduce su nombre.");
      document.frmAltaEventos.fmnombre.focus();
      return false;
   	}
   	if(document.frmAltaEventos.fmemail.value == ""){
      alert("Introduce su E-mail.");
      document.frmAltaEventos.fmemail.focus();
      return false;
   	}
      // Llamadas a las funciones propias del editor
	/*
if (RevisaContents("fmtexto") == false){
	  alert("Introduce el texto del Evento. Máximo de 4000 caracteres.");
	  return false;
	}
	
	if ((GetLength("fmtexto") == false)){
	 alert("Introduce el texto del Evento. Máximo de 4000 caracteres.");
	  return false;
	}

	if ((RevisaContentsLong("fmtexto", 4000) == false)){
	 alert("El contenido del evento no debe superar los 4000 caracteres.");
	  return false;
	}
*/

	// Fin de llamadas a las funciones propias del editor

}

function ValidaAnuncio(){
	var msg;
  	if(frmAnuncio.fmTitulo.value == ""){
      alert("Introduce el Título del Anuncio. Máximo 200 caracteres.");
      frmAnuncio.fmTitulo.focus();
      return false;
   	}
    if ((GetLength("fmTexto") == false)){
	 alert("Introduce el texto del Anuncio. Máximo de 1000 caracteres.");
	  return false;
	}
	if ((RevisaContentsLong("fmTexto", 1000) == false)){
	 alert("El contenido del Anuncio no debe superar los 1000 caracteres.");
	  return false;
	}	
	if(frmAnuncio.fmCategoria.value == ""){
      alert("Introduce la Categoría correspondiente al Anuncio.");
      frmAnuncio.fmCategoria.focus();
      return false;
   	}
    if(frmAnuncio.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmAnuncio.fmNombre.focus();
		return false;
	}
	if(frmAnuncio.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmAnuncio.fmEmail.focus();
		return false;
	}	
	if(frmAnuncio.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmAnuncio.fmProvincia.focus();
		return false;
	}
	if(frmAnuncio.fmDuracion.value == ""){
      alert("Introduce la duracion de visibilidad del Anuncio.");
      frmAnuncio.fmDuracion.focus();
      return false;
   	}
	// Fin de llamadas a las funciones propias del editor

}

function ValidaEditor(){
	var msg;
  	if(frmAltaEditor.fmUsuario.value == ""){
      alert("Introduce un Usuario de Acceso. Máximo 8 caracteres.");
      frmAltaEditor.fmUsuario.focus();
      return false;
   	}
    if(frmAltaEditor.fmPassword.value == ""){
      alert("Introduce un Password de Acceso. Máximo 8 caracteres.");
      frmAltaEditor.fmPassword.focus();
      return false;
   	}
    if(frmAltaEditor.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmAltaEditor.fmNombre.focus();
		return false;
	}
	if(frmAltaEditor.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmAltaEditor.fmEmail.focus();
		return false;
	}	
	if(frmAltaEditor.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmAltaEditor.fmProvincia.focus();
		return false;
	}
	if ((RevisaContentsLong("fmTexto", 3000) == false)){
	 alert("El contenido de Otros Datos no debe superar los 3000 caracteres.");
	  return false;
	}	
	// Fin de llamadas a las funciones propias del editor

}

function ValidaConsultaAnuncio(){
	var msg;
  	if(frmConsultaAnuncio.fmNombre.value == ""){
		alert("Introduce tu Nombre.");
		frmConsultaAnuncio.fmNombre.focus();
		return false;
	}
	if(frmConsultaAnuncio.fmEmail.value == ""){
		alert("Introduce tu Email.");
		frmConsultaAnuncio.fmEmail.focus();
		return false;
	}	
	if(frmConsultaAnuncio.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		frmConsultaAnuncio.fmProvincia.focus();
		return false;
	}
	if ((GetLength("fmConsulta") == false)){
	 alert("Introduce el texto de la Consulta. Máximo de 1000 caracteres.");
	  return false;
	}
	if ((RevisaContentsLong("fmConsulta", 1000) == false)){
	 alert("El contenido de la Consulta no debe superar los 1000 caracteres.");
	  return false;
	}	
	// Fin de llamadas a las funciones propias del editor

}

function ValidaAltaNoticia(){
	var msg;
  	if(FrmNoticiasEdit.fmTitulo.value == ""){
		alert("Introduce el Título de la Noticia.");
		FrmNoticiasEdit.fmTitulo.focus();
		return false;
	}
	if(FrmNoticiasEdit.fmEpigrafe.value == ""){
		alert("Introduce el Epígrafe de la Noticia.");
		FrmNoticiasEdit.fmEpigrafe.focus();
		return false;
	}	
	if ((GetLength("fmTexto") == false)){
	 alert("Introduce el texto de la Noticia. Máximo de 8000 caracteres.");
	  return false;
	}
	if ((RevisaContentsLong("fmTexto", 8000) == false)){
	 alert("El contenido de la Noticia no debe superar los 8000 caracteres.");
	  return false;
	}	
	if(FrmNoticiasEdit.fmArchivo.value == ""){
		alert("Adjunta una imagen con formato .gif, .jpg o .tif para la Noticia.");
		FrmNoticiasEdit.fmArchivo.focus();
		return false;
	}	
	// Fin de llamadas a las funciones propias del editor

}

/*function ValidaAltaInmueble(){
	var msg;
  	if(FrmInmobiliariasEdit.fmReferencia.value == ""){
		alert("Introduce la Referencia del Inmueble.");
		FrmInmobiliariasEdit.fmReferencia.focus();
		return false;
	}
	if(FrmInmobiliariasEdit.fmLocalizacion.value == ""){
		alert("Introduce la Localizacion del Inmueble.");
		FrmInmobiliariasEdit.fmLocalizacion.focus();
		return false;
	}	
	if(FrmInmobiliariasEdit.fmMetros.value == ""){
		alert("Introduce los Metros Cuadrados.");
		FrmInmobiliariasEdit.fmMetros.focus();
		return false;
	}
	else{
		if (!es_num(FrmInmobiliariasEdit.fmMetros.value)){
			alert ('Los Metros deben ser un dato numérico.');
			FrmInmobiliariasEdit.fmMetros.focus();
			return false;
		}
	}
	if(FrmInmobiliariasEdit.fmDormitorios.value != ""){		
		if (!es_num(FrmInmobiliariasEdit.fmDormitorios.value)){
			alert ('El número de Dormitorios deben ser un dato numérico.');
			FrmInmobiliariasEdit.fmDormitorios.focus();
			return false;
		}
	}
	if(FrmInmobiliariasEdit.fmPrecio.value == ""){
		alert("Introduce el Precio del Inmueble.");
		FrmInmobiliariasEdit.fmPrecio.focus();
		return false;
	}	
	if ((GetLength("fmTexto") == false)){
	 alert("Introduce el texto descriptivo. Máximo de 2000 caracteres.");
	  return false;
	}
	if ((RevisaContentsLong("fmTexto", 8000) == false)){
	 alert("El contenido del texto no debe superar los 2000 caracteres.");
	  return false;
	}	
	if(FrmInmobiliariasEdit.fmTotalArchivo.value == 0){
		if (FrmInmobiliariasEdit.fmArchivo.value == ""){
			alert("Adjunta una imagen con formato .gif, .jpg o .tif del Inmueble.");
			FrmInmobiliariasEdit.fmArchivo.focus();
			return false;
		}
	}	
	// Fin de llamadas a las funciones propias del editor

}*/

function CargarCategoriaProvincia() {
	location.href=document.frmCategoriasProvincias.Provincia.value;
}

function CargarCategoriaAnunciante() {
	location.href=document.frmCategoriasAnunciantes.Categoria.value;
}

function CargarCategoriaAnuncio() {
	location.href=document.frmCategoriasAnuncios.Provincia.value;
}
	  
/* formexp.js compiled from X 4.0 with XC 0.27b. Distributed by GNU LGPL. For copyrights, license, documentation and more visit Cross-Browser.com */
var xOp7Up,xOp6Dn,xIE4Up,xIE4,xIE5,xNN4,xUA=navigator.userAgent.toLowerCase();
if(window.opera){var i=xUA.indexOf('opera');
if(i!=-1){var v=parseInt(xUA.charAt(i+6));xOp7Up=v>=7;xOp6Dn=v<7;}}
else if(navigator.vendor!='KDE' && document.all && xUA.indexOf('msie')!=-1){xIE4Up=parseFloat(navigator.appVersion)>=4;xIE4=xUA.indexOf('msie 4')!=-1;xIE5=xUA.indexOf('msie 5')!=-1;}
else if(document.layers){xNN4=true;}xMac=xUA.indexOf('mac')!=-1;
function xDef(){for(var i=0; i<arguments.length; ++i)
{if(typeof(arguments[i])=='undefined') return false;}return true;}
function xDisplay(e,s){if(!(e=xGetElementById(e))) return null;
if(e.style && xDef(e.style.display)) {if (xStr(s)) e.style.display = s;
return e.style.display;}return null;}
function xGetElementById(e){
if(typeof(e)!='string') return e;if(document.getElementById) e=document.getElementById(e);
else if(document.all) e=document.all[e];else e=null;return e;}
function xStr(s){for(var i=0; i<arguments.length; ++i)
{if(typeof(arguments[i])!='string') return false;}return true;}

function VerCapa(){
	capa1= 'capaEmail' 	
	xDisplay(capa1, 'block');
}

function NoVerCapa(){
	capa1= 'capaEmail' 	
	xDisplay(capa1, 'none');
}

function VerCapaTelefono(vCodCapa){
	capa1= 'iTelefono_' + vCodCapa;
	xDisplay(capa1, 'block');
}

function ValidaFeria(){
	
	if(frmFeria.fmEmpresa.value == ""){
		alert("Introduzca el Nombre de la Empresa.");
		frmFeria.fmEmpresa.focus();
		return false;
	}

	if(frmFeria.fmContacto.value == ""){
		alert("Introduzca la Persona de Contacto.");
		frmFeria.fmContacto.focus();
		return false;
	}

	if(frmFeria.fmEmail.value == ""){
		alert("Introduzca el Email.");
		frmFeria.fmEmail.focus();
		return false;
	}
	
	if(frmFeria.fmTelefono.value == ""){
		alert("Introduzca el Teléfono.");
		frmFeria.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(frmFeria.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			frmFeria.fmTelefono.focus();
			return false;
		}
	}
}

function ValidaBaja(){
	if(frmBaja.fmEmail.value == ""){
		alert("Introduzca el Email.");
		frmBaja.fmEmail.focus();
		return false;
	}
}

function processStateChangeCursos() {
	if (reqProv.readyState == 4) { // Complete
		if (reqProv.status == 200) { // OK response
			document.getElementById('idTotal').innerHTML = reqProv.responseText;
		} else {
			alert("Problem: " + reqProv.responseText);
		}
	}
}

function CargarCategoria() {
	location.href=document.frmCategoriasSaltador.Categoria.value;
}

function FocusFormulario () {
	document.location.href = document.location.pathname + document.location.search + "#CajaForm";
	frmContacto.fmNombre.focus();
}


//Funcion de AJAX para la carga de contenidos dinamicos en select
function cargarContenidoFiltro(vModulo,vCodProvincia,vReg,vTipo){ 
	var d1,contenedorCantones; 
	contenedorCantones = document.getElementById('contenedorCantones'); 
	if (vModulo == 'FiltroCantones'){
		d1 = vCodProvincia; 
		d2 = vReg; 
		d3 = vTipo; 
	}
	ajax=nuevoAjax(); 
	ajax.open("GET", "Include/CargaCantones.asp?vMod="+ vModulo + "&vOpcSel="+d1 + "&vOpcSel2="+d2 + "&vOpcSel3="+d3,true);  
	ajax.onreadystatechange=function() { 
		if (ajax.readyState==4) { 
			contenedorCantones.innerHTML = ajax.responseText 
		} 
	} 
	ajax.send(null) 
} 

function cargarContenidoFiltroSectores(vModulo,vCodZona,vReg,vTipo){ 
	var d1,contenedorSectores; 
	contenedorSectores = document.getElementById('contenedorSectores'); 
	if (vModulo == 'FiltroSectores'){
		d1 = vCodZona; 
		d2 = vReg; 
		d3 = vTipo; 
	}
	ajax=nuevoAjax(); 
	ajax.open("GET", "Include/CargaSectores.asp?vMod="+ vModulo + "&vOpcSel="+d1 + "&vOpcSel2="+d2 + "&vOpcSel3="+d3,true);  
	ajax.onreadystatechange=function() { 
		if (ajax.readyState==4) { 
			contenedorSectores.innerHTML = ajax.responseText 
		} 
	} 
	ajax.send(null) 
} 

//Funcion de AJAX para la carga de contenidos dinamicos en select
function cargarContenido(vModulo,vUbica){ 
	var d1,contenedor,spanSec,d4; 

	if (vModulo == 'Regimen'){
		contenedor = document.getElementById('contenedorTipo'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value; 
		d2 = "";
		d3 = vUbica;
		spanSec = "";
	}
	else if (vModulo == 'Tipo'){
		contenedor = document.getElementById('contenedorCiudad'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value;
		d2 = document.frmBusqueda.Tipo.options[document.frmBusqueda.Tipo.selectedIndex].value; 
		d3 = vUbica;
		spanSec = "";
	}
	else if (vModulo == 'Sector'){
		contenedor = document.getElementById('contenedorSectorHome'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value;
		d2 = document.frmBusqueda.Tipo.options[document.frmBusqueda.Tipo.selectedIndex].value;
		d4 = document.frmBusqueda.Canton.options[document.frmBusqueda.Canton.selectedIndex].value; 
		d3 = vUbica;
		spanSec = "";
	}
	else if (vModulo == 'AltaProv'){
		contenedor = document.getElementById('contenedorCanton'); 
		d1 = document.frmStep2.fmAltaProv.options[document.frmStep2.fmAltaProv.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "";
	}
	else if (vModulo == 'ModProv'){
		contenedor = document.getElementById('contenedorCanton'); 
		d1 = document.frmStep2.fmAltaProv.options[document.frmStep2.fmAltaProv.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "";
	}
	else if (vModulo == 'AltaCanton'){
		contenedor = document.getElementById('contenedorCiudad'); 
		d1 = document.frmStep2.fmAltaCanton.options[document.frmStep2.fmAltaCanton.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "";
	}
	else if (vModulo == 'AltaCiudad'){
		contenedor = document.getElementById('contenedorZona'); 
		d1 = document.frmStep2.fmAltaCiudad.options[document.frmStep2.fmAltaCiudad.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "";
	}
	else if (vModulo == 'AltaZona'){
		contenedor = document.getElementById('contenedorSector'); 
		d1 = document.frmStep2.fmAltaZona.options[document.frmStep2.fmAltaZona.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "#sec";
	}
	else if (vModulo == 'AltaSector'){
		contenedor = document.getElementById('contenedorSubsector'); 
		d1 = document.frmStep2.fmAltaSector.options[document.frmStep2.fmAltaSector.selectedIndex].value;
		d2 = ""; 
		d3 = ""; 
		spanSec = "#subsec";
	}
	ajax=nuevoAjax(); 
	//alert("Include/CargaSelect.asp?vMod="+ vModulo + "&vOpcD1=" + d1 + "&vOpcD2="+d2)
	ajax.open("GET", "/Include/CargaSelect.asp?vMod="+ vModulo + "&vOpcD1=" + d1 + "&vOpcD2="+d2 + "&vOpcD3="+d3 + "&vOpcD4="+d4,true);  
	ajax.onreadystatechange=function() { 
		if (ajax.readyState==4) { 
			contenedor.innerHTML = ajax.responseText;
			if (ajax.responseText == "OFF" ) {	
				if (spanSec != "" && $(spanSec).css('display') == 'inline'){
					$(spanSec).toggle();
				}
			}else{ 
				if(spanSec != "" && $(spanSec).css('display') == 'none'){
					mostrarSector(spanSec);
				}
			}
   
		} 
	} 
	ajax.send(null) 
}

//Funcion de AJAX para la carga de contenidos dinamicos en buscador home
function cargarContenidoHome(vModulo,vUbica){ 
	var d1,contenedor,spanSec,d4; 

	if (vModulo == 'Regimen'){
		contenedor = document.getElementById('sel-kind'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value; 
		d2 = "";
		d3 = vUbica;
		spanSec = "";
	}
	else if (vModulo == 'Tipo'){
		contenedor = document.getElementById('sel-location'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value;
		d2 = document.frmBusqueda.Tipo.options[document.frmBusqueda.Tipo.selectedIndex].value; 
		d3 = vUbica;
		spanSec = "";
	}
	else if (vModulo == 'Sector'){
		contenedor = document.getElementById('sel-sektor'); 
		d1 = document.frmBusqueda.Regimen.options[document.frmBusqueda.Regimen.selectedIndex].value;
		d2 = document.frmBusqueda.Tipo.options[document.frmBusqueda.Tipo.selectedIndex].value;
		d4 = document.frmBusqueda.Canton.options[document.frmBusqueda.Canton.selectedIndex].value; 
		d3 = vUbica;
		spanSec = "";
	}
	
	ajax=nuevoAjax(); 
	ajax.open("GET", "/Include/CargaSelectHome.asp?vMod="+ vModulo + "&vOpcD1=" + d1 + "&vOpcD2="+d2 + "&vOpcD3="+d3 + "&vOpcD4="+d4,true);  
	ajax.onreadystatechange=function() { 
		if (ajax.readyState==4) { 
			contenedor.innerHTML = ajax.responseText;
			if (ajax.responseText == "OFF" ) {	
				if (spanSec != "" && $(spanSec).css('display') == 'inline'){
					$(spanSec).toggle();
				}
			}else{ 
				if(spanSec != "" && $(spanSec).css('display') == 'none'){
					mostrarSector(spanSec);
				}
			}
   
		} 
	} 
	ajax.send(null) 
}

function mostrarSector(span){
	var collapse_content_selector = span;					
	$(collapse_content_selector).toggle(function(){
	});	
}

function nuevoAjax(){ 
	var xmlhttp=false; 
	try { 
		// Creacin del objeto ajax para navegadores diferentes a Explorer 
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); 
	} catch (e) { 
		// o bien 
		try { 
			// Creacin del objet ajax para Explorer 
	 		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } catch (E) { 
	 		xmlhttp = false; 
		} 
	} 

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') { 
		xmlhttp = new XMLHttpRequest(); 
	} 
	return xmlhttp; 
}


function UpTipo(){
	document.forms['frmBusqueda']['Tipo'].disabled=false;
	document.forms['frmBusqueda']['Ciudad'].disabled=true;
}

function UpCiudad(){
	document.forms['frmBusqueda']['Ciudad'].disabled=false;
}

function UpZona(){
	document.forms['frmBusqueda']['Zona'].disabled=false;
}

function ValidaUsuario(){
	
	if(document.frmStep.fmNombre.value == ""){
		alert("Introduce tu Nombre o Nombre de la Empresa.");
		document.frmStep.fmNombre.focus();
		return false;
	}

	if(document.frmStep.fmEmail.value == ""){
		alert("Introduce tu Email.");
		document.frmStep.fmEmail.focus();
		return false;
	}
	else{
		vEmail=document.frmStep.fmEmail
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
	}
	
	if(document.frmStep.fmEmailConfirm.value == ""){
		alert("Introduce la confimación del Email.");
		document.frmStep.fmEmailConfirm.focus();
		return false;
	}
	else{
		vEmail=document.frmStep.fmEmailConfirm
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
	}
	
	if(document.frmStep.fmEmail.value != document.frmStep.fmEmailConfirm.value){
		alert("Los Emails no coinciden.");
		document.frmStep.fmEmailConfirm.focus();
		return false;
	}
	
	if(document.frmStep.fmTelefono.value == ""){
		alert("Introduce el Teléfono.");
		document.frmStep.fmTelefono.focus();
		return false;
	}
	else{
		if (!es_num(document.frmStep.fmTelefono.value)){
			alert ('Debes escribir un Teléfono correcto');
			document.frmStep.fmTelefono.focus();
			return false;
		}
	}
	
	if(document.frmStep.fmPwd.value == ""){
		alert("Introduce tu Password.");
		document.frmStep.fmPwd.focus();
		return false;
	}
	else{
		vLargo=document.frmStep.fmPwd.value.length
		if (vLargo < 6){
			alert('La contraseña debe ser tener por lo menos 6 caracteres.');
			document.frmStep.fmPwd.focus();
			return false;
		}
		if (vLargo > 10){
			alert('La contraseña no debe sobrepasar los 10 caracteres.');
			document.frmStep.fmPwd.focus();
			return false;
		}
	}
	
	if(document.frmStep.fmPwdConfirm.value == ""){
		alert("Introduce la confimación de tu Password.");
		document.frmStep.fmPwdConfirm.focus();
		return false;
	}
	
	if(document.frmStep.fmPwdConfirm.value != document.frmStep.fmPwdConfirm.value){
		alert("Las contraseñas no coinciden.");
		document.frmStep.fmPwdConfirm.focus();
		return false;
	}
	
	if(document.frmStep.fmProvincia.value == ""){
		alert("Selecciona tu Provincia.");
		document.frmStep.fmProvincia.focus();
		return false;
	}
		
}

function ValidaAcceso(){
	
	if(document.frmAcceso.fmEmail.value == ""){
		alert("Introduce tu Email.");
		document.frmAcceso.fmEmail.focus();
		return false;
	}
	else{
		vEmail=document.frmAcceso.fmEmail
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
	}
	
	if(document.frmAcceso.fmPwd.value == ""){
		alert("Introduce tu Password.");
		document.frmAcceso.fmPwd.focus();
		return false;
	}
		
}

function ValidaEmailPassword(){
	
	

	if(document.frmPassword.fmEmail.value == ""){
		alert("Introduce tu Email.");
		document.frmPassword.fmEmail.focus();
		return false;
	}
	else{
		vEmail=document.frmPassword.fmEmail
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
		else{
			vCaptcha= document.getElementById("g-recaptcha-response").value;
			if(!vCaptcha){
				alert('Debe validar que no es un robot');
				return false;
			}
		}
	}		
}

function ValidaAltaInmueble(){	
	if(document.frmStep2.fmAltaTipoProp.value == ""){
		alert("Introduzca el Tipo del Inmueble.");
		/*document.frmStep2.fmAltaTipoProp.focus();*/
		document.getElementById("fmAltaTipoProp").focus();
		return false;
	}
	if(document.frmStep2.fmAltaRegimen.value == ""){
		alert("Introduzca si es Alquiler o Venta.");
		/*document.frmStep2.fmAltaRegimen.focus();*/
		document.getElementById("fmAltaRegimen").focus();
		return false;
	}
	if(document.frmStep2.fmAltaProv.value == ""){
		alert("Introduzca la Provincia.");
		/*document.frmStep2.fmAltaProv.focus();*/
		document.getElementById("fmAltaProv").focus();
		return false;
	}
	if(document.frmStep2.fmReferenciaUbicacion.value == ""){
		alert("Introduzca una Referencia de la Localización.");
		/*document.frmStep2.fmReferenciaUbicacion.focus();*/
		document.getElementById("fmReferenciaUbicacion").focus();
		return false;
	}
	
	if(document.frmStep2.fmPrecioAlquiler.value == "" && document.frmStep2.fmPrecioVenta.value == "" ){
		
		alert("Introduzca Precio de Alquiler o Venta.");
		/*document.frmStep2.fmPrecioAlquiler.focus();*/
		document.getElementById("fmPrecioAlquiler").focus();
		return false;
	}
/* 	jvt */
	
	if(document.frmStep2.fmConstruidos.value != "" && !es_num_dec(document.frmStep2.fmConstruidos.value)){
		alert ('Los metros construidos debe ser un valor numérico, sin puntos (.). La separación 2 decimales con coma (,)');
		/*frmStep2.fmConstruidos.focus();*/
		document.getElementById("fmConstruidos").focus();
		return false;
	}
	if(document.frmStep2.fmTerreno.value != "" && !es_num_dec(document.frmStep2.fmTerreno.value)){
		alert ('Los metros de terreno debe ser un  valor numérico, sin puntos (.). La separación 2 decimales con coma (,)');
		/*frmStep2.fmTerreno.focus();*/
		document.getElementById("fmTerreno").focus();
		return false;
	}
		
}

function ValidaModInmueble(){
	
	if(document.frmStep2.fmAltaTipoProp.value == ""){
		alert("Introduzca el Tipo del Inmueble.");
		/*document.frmStep2.fmAltaTipoProp.focus();*/
		document.getElementById("fmAltaTipoProp").focus();
		return false;
	}
	if(document.frmStep2.fmAltaRegimen.value == ""){
		alert("Introduzca si es Alquiler o Venta.");
		/*document.frmStep2.fmAltaRegimen.focus();*/
		document.getElementById("fmAltaRegimen").focus();
		return false;
	}
	if(document.frmStep2.fmAltaProv.value == ""){
		alert("Introduzca la Provincia.");
		/*document.frmStep2.fmAltaProv.focus();*/
		document.getElementById("fmAltaProv").focus();
		return false;
	}
	if(document.frmStep2.fmReferenciaUbicacion.value == ""){
		alert("Introduzca una Referencia de la Localización.");
		/*document.frmStep2.fmReferenciaUbicacion.focus();*/
		document.getElementById("fmReferenciaUbicacion").focus();
		return false;
	}
	
	if(document.frmStep2.fmPrecioAlquiler.value == "" && document.frmStep2.fmPrecioVenta.value == "" ){
		
		alert("Introduzca Precio de Alquiler o Venta.");
		/*document.frmStep2.fmPrecioAlquiler.focus();*/
		document.getElementById("fmPrecioAlquiler").focus();
		return false;
	}
/* 	jvt */
	
	if(document.frmStep2.fmConstruidos.value != "" && !es_num_dec(document.frmStep2.fmConstruidos.value)){
		alert ('Los metros construidos debe ser un valor numérico, sin puntos (.). La separación 2 decimales con coma (,)');
		/*frmStep2.fmConstruidos.focus();*/
		document.getElementById("fmConstruidos").focus();
		return false;
	}
	if(document.frmStep2.fmTerreno.value != "" && !es_num_dec(document.frmStep2.fmTerreno.value)){
		alert ('Los metros de terreno debe ser un  valor numérico, sin puntos (.). La separación 2 decimales con coma (,)');
		/*frmStep2.fmTerreno.focus();*/
		document.getElementById("fmTerreno").focus();
		return false;
	}
		
}

function ValidaModUsuario(){
	
	if(document.frmModificaUsu.fmEmail.value == ""){
		alert("Introduce tu Email.");
		document.frmModificaUsu.fmEmail.focus();
		return false;
	}
	else{
		vEmail=document.frmModificaUsu.fmEmail
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
	}
	if(document.frmModificaUsu.fmPassword.value == ""){
		alert("Introduzca el Password.");
		document.frmModificaUsu.fmPassword.focus();
		return false;
	}	
	
}

function ValidaModEmpresa(){
	
	if(document.frmStep2.fmEmail.value == ""){
		alert("Introduce tu Email.");
		document.frmStep2.fmEmail.focus();
		return false;
	}
	else{
		vEmail=document.frmStep2.fmEmail
		str = vEmail.value
		if (str.indexOf ('@',0) == -1 || str.indexOf ('.',0) == -1)
		{
			alert('Introduzca correctamente el E-mail');
			vEmail.focus();
			return false;
		}
	}
	if(document.frmStep2.fmPassword.value == "" || document.frmStep2.fmPassword.value.length < 8){
		alert("El Password debe tener un minimo de 8 caracteres");
		document.frmStep2.fmPassword.focus();
		return false;
	}	
	
}

function ValidaSelectSearch(){
	
	if(document.frmBusqueda.Tipo.value == ""){
		alert("Seleccione el tipo de Propiedad a buscar.");
		document.frmBusqueda.Tipo.focus();
		return false;
	}
}

function cargarContenidoTelefono(vModulo,vCodigo,vCont){ 
	var d1,cont; 

	if (vModulo == 'Telefono'){
		cont = document.getElementById(vCont); 
		d1 = vCodigo; 
		}
		
	if (d1 != ''){
		ajax=nuevoAjax(); 
		//alert("Include/CargaSelect.asp?vMod="+ vModulo + "&vOpcD1=" + d1 + "&vOpcD2="+d2)
		ajax.open("GET", "/Include/CargaSelect.asp?vMod="+ vModulo + "&vOpcD1=" + d1,true);  
		ajax.onreadystatechange=function() { 
			if (ajax.readyState==4) { 
			   cont.innerHTML = ajax.responseText 
			} 
		} 
		ajax.send(null);
	}	
} 

//Funcion de AJAX para la carga de contenidos dinamicos en select
function cargarMBFiltro(num){ 
	
	var d1,contenedor;
	
	contenedor = document.getElementById('contenedorCnt'); 
	
	d1=''
	for (i=0;i<document.frmFiltroMB.ck_Regimen.length;i++){
		if (document.frmFiltroMB.ck_Regimen[i].checked){
			if (d1==''){
				d1 = document.frmFiltroMB.ck_Regimen[i].value;
			}
			else{
				d1 = d1 + ',' + document.frmFiltroMB.ck_Regimen[i].value;
			}	
		}		
	}


	d2=''
	for (j=0;j<document.frmFiltroMB.ck_Tipo.length;j++){
		if (document.frmFiltroMB.ck_Tipo[j].checked){
			if (d2==''){
				d2 = document.frmFiltroMB.ck_Tipo[j].value;
			}
			else{
				d2 = d2 + ',' + document.frmFiltroMB.ck_Tipo[j].value;
			}	
		}		
	}

	d3=''
	//for (k=0;k<document.frmFiltroMB.ck_Ciudad.length;k++){
		//if (document.frmFiltroMB.ck_Ciudad[k].checked){
			//if (d3==''){
			//	d3 = document.frmFiltroMB.ck_Ciudad[k].value;
			//}
			//else{
			//	d3 = d3 + ',' + document.frmFiltroMB.ck_Ciudad[k].value;
			//}
		//}		
	//}
	
	d4=''
	for (k=0;k<document.frmFiltroMB.ck_Canton.length;k++){
		if (document.frmFiltroMB.ck_Canton[k].checked){
			if (d4==''){
				d4 = document.frmFiltroMB.ck_Canton[k].value;
			}
			else{
				d4 = d4 + ',' + document.frmFiltroMB.ck_Canton[k].value;
			}
		}		
	}
	
	d5=''
	if(document.frmFiltroMB.ck_Sector){
		for (k=0;k<document.frmFiltroMB.ck_Sector.length;k++){
			if (document.frmFiltroMB.ck_Sector[k].checked){
				if (d5==''){
					d5 = document.frmFiltroMB.ck_Sector[k].value;
				}
				else{
					d5 = d5 + ',' + document.frmFiltroMB.ck_Sector[k].value;
				}
			}		
		}
	}
	
	d6=''
	if(document.frmFiltroMB.ck_Zona){
		for (k=0;k<document.frmFiltroMB.ck_Zona.length;k++){
			if (document.frmFiltroMB.ck_Zona[k].checked){
				if (d6==''){
					d6 = document.frmFiltroMB.ck_Zona[k].value;
				}
				else{
					d6 = d6 + ',' + document.frmFiltroMB.ck_Zona[k].value;
				}
			}		
		}
	}
	
	d7=''
	for (k=0;k<document.frmFiltroMB.ck_Provincia.length;k++){
		if (document.frmFiltroMB.ck_Provincia[k].checked){
			if (d7==''){
				d7 = document.frmFiltroMB.ck_Provincia[k].value;
			}
			else{
				d7 = d7 + ',' + document.frmFiltroMB.ck_Provincia[k].value;
			}
		}		
	}
	
	d8=''
	
	if(document.getElementById("ck_Preciov")){
	
		for (k=0;k<document.frmFiltroMB.ck_Preciov.length;k++){
			if (document.frmFiltroMB.ck_Preciov[k].checked){
				if (d8==''){
					d8 = document.frmFiltroMB.ck_Preciov[k].value;
				}
				else{
					d8 = d8 + ',' + document.frmFiltroMB.ck_Preciov[k].value;
				}
			}		
		}
	
	}
	
	d9=''
	
	if(document.getElementById("ck_Precioa")){
	
		for (k=0;k<document.frmFiltroMB.ck_Precioa.length;k++){
			if (document.frmFiltroMB.ck_Precioa[k].checked){
				if (d9==''){
					d9 = document.frmFiltroMB.ck_Precioa[k].value;
				}
				else{
					d9 = d9 + ',' + document.frmFiltroMB.ck_Precioa[k].value;
				}
			}		
		}
	
	}
	
	if(num=="2"){
	
		pajax=nuevoAjax(); 
		pajax.open("GET", "/Include/MBFiltroProvincia.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 ,true);  
		pajax.onreadystatechange=function() { 
			if (pajax.readyState==4) { 
	   			document.getElementById('menuprovincia').innerHTML = pajax.responseText 
			} 
		} 
		pajax.send(null);
	
	
		ctajax=nuevoAjax(); 
		ctajax.open("GET", "/Include/MBFiltroCanton.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 ,true);  
		ctajax.onreadystatechange=function() { 
			if (ctajax.readyState==4) { 
	   			document.getElementById('menucanton').innerHTML = ctajax.responseText 
			} 
		} 
		ctajax.send(null);
	
	
		//cdajax=nuevoAjax(); 
		//cdajax.open("GET", "/Include/MBFiltroCiudad.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 ,true);  
		//cdajax.onreadystatechange=function() { 
			//if (cdajax.readyState==4) { 
	   		//	document.getElementById('menuciudad').innerHTML = cdajax.responseText 
			//} 
		//} 
		//cdajax.send(null);
	
	
		zajax=nuevoAjax(); 
		zajax.open("GET", "/Include/MBFiltroZona.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 ,true);  
		zajax.onreadystatechange=function() { 
			if (zajax.readyState==4) { 
	   			document.getElementById('menuzona').innerHTML = zajax.responseText 
			} 
		} 
		zajax.send(null);
	
	
		sajax=nuevoAjax(); 
		sajax.open("GET", "/Include/MBFiltroSector.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 ,true);  
		sajax.onreadystatechange=function() { 
			if (sajax.readyState==4) { 
	   			document.getElementById('menusector').innerHTML = sajax.responseText 
			} 
		} 
		sajax.send(null);
		
		prajax=nuevoAjax(); 
		prajax.open("GET", "/Include/MBFiltroPrecio.asp?Regimen=" + d1 + "&Tipo=" + d2 + "&Ciudad=" + d3 + "&Canton=" + d4 + "&Sector=" + d5 + "&Zona=" + d6 + "&Provincia=" + d7 + "&pvp=" + d8 + "&pap=" + d9 ,true);  
		prajax.onreadystatechange=function() { 
			if (prajax.readyState==4) { 
	   			document.getElementById('menuprecio').innerHTML = prajax.responseText 
			} 
		} 
		prajax.send(null);
	
	}

	ajax=nuevoAjax(); 
	ajax.open("GET", "/Include/MBCargaSelect.asp?vOpcD1=" + d1 + "&vOpcD2=" + d2 + "&vOpcD3=" + d3 + "&vOpcD4=" + d4 + "&vOpcD5=" + d5 + "&vOpcD6=" + d6 + "&vOpcD7=" + d7 + "&vOpcD8=" + d8 + "&vOpcD9=" + d9 ,true);  
	ajax.onreadystatechange=function() { 
		if (ajax.readyState==4) { 
   			contenedor.innerHTML = ajax.responseText 
		} 
	} 
	ajax.send(null);
}

function validarNro(e) {
	var key;
	if(window.event) // IE
	{
		key = e.keyCode;
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
		key = e.which;
	}

	if (key < 48 || key > 57)
    {
    	if(key == 46 || key == 8) // Detectar . (punto) y backspace (retroceso)
		{ return true; }
		else 
		{ return false; }
    }
	return true;
}

function formatPrecioA(text){
	var opciones=document.frmStep2.fmPrecioAlquiler.value;
	var contenido
	contenido=opciones.replace(/[.']/g,"");
	var long=contenido.length;

	if(long==4){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1)
	}
	if(long==5){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2)
	}
	if(long==6){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3)
	}
	if(long==7){
		contenido=contenido.substring(0,1)+"'"+contenido.substring(1,4)+"."+contenido.substring(4)
	}
	if(long==8){
		contenido=contenido.substring(0,2)+"'"+contenido.substring(2,5)+"."+contenido.substring(5)
	}
	if(long==9){
		contenido=contenido.substring(0,3)+"'"+contenido.substring(3,6)+"."+contenido.substring(6)
	}
	if(long==10){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1,4)+"'"+contenido.substring(4,7)+"."+contenido.substring(7)
	}
	if(long==11){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2,5)+"'"+contenido.substring(5,8)+"."+contenido.substring(8)
	}
	if(long==12){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3,6)+"'"+contenido.substring(6,9)+"."+contenido.substring(9)
	}

	document.frmStep2.fmPrecioAlquiler.value = contenido;
}

function formatPrecioAL(text){
	var opciones=document.frmStep2.fmPrecioAlicuota.value;
	var contenido
	contenido=opciones.replace(/[.']/g,"");
	var long=contenido.length;

	if(long==4){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1)
	}
	if(long==5){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2)
	}
	if(long==6){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3)
	}
	if(long==7){
		contenido=contenido.substring(0,1)+"'"+contenido.substring(1,4)+"."+contenido.substring(4)
	}
	if(long==8){
		contenido=contenido.substring(0,2)+"'"+contenido.substring(2,5)+"."+contenido.substring(5)
	}
	if(long==9){
		contenido=contenido.substring(0,3)+"'"+contenido.substring(3,6)+"."+contenido.substring(6)
	}
	if(long==10){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1,4)+"'"+contenido.substring(4,7)+"."+contenido.substring(7)
	}
	if(long==11){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2,5)+"'"+contenido.substring(5,8)+"."+contenido.substring(8)
	}
	if(long==12){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3,6)+"'"+contenido.substring(6,9)+"."+contenido.substring(9)
	}

	document.frmStep2.fmPrecioAlicuota.value = contenido;
}

function formatPrecioV(text){
	var opciones=document.frmStep2.fmPrecioVenta.value;
	var contenido
	contenido=opciones.replace(/[.']/g,"");
	var long=contenido.length;

	if(long==4){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1)
	}
	if(long==5){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2)
	}
	if(long==6){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3)
	}
	if(long==7){
		contenido=contenido.substring(0,1)+"'"+contenido.substring(1,4)+"."+contenido.substring(4)
	}
	if(long==8){
		contenido=contenido.substring(0,2)+"'"+contenido.substring(2,5)+"."+contenido.substring(5)
	}
	if(long==9){
		contenido=contenido.substring(0,3)+"'"+contenido.substring(3,6)+"."+contenido.substring(6)
	}
	if(long==10){
		contenido=contenido.substring(0,1)+"."+contenido.substring(1,4)+"'"+contenido.substring(4,7)+"."+contenido.substring(7)
	}
	if(long==11){
		contenido=contenido.substring(0,2)+"."+contenido.substring(2,5)+"'"+contenido.substring(5,8)+"."+contenido.substring(8)
	}
	if(long==12){
		contenido=contenido.substring(0,3)+"."+contenido.substring(3,6)+"'"+contenido.substring(6,9)+"."+contenido.substring(9)
	}

	document.frmStep2.fmPrecioVenta.value = contenido;
}

function controlDescripcion(){
	var opciones=document.frmStep2.fmDsInmueble.value;
	var contenido;
	var patronUrl=/(http\:\/\/|https\:\/\/|ftp\:\/\/)[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_=:]*)?/gi ;
	var patronEmail=/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})/gi;
	var patronTelf=/[ 0-9]{2,3}-? ?[ 0-9]{6,7}/g;
	var patronUrl2=/([0-9a-zA-Z]*\.)[a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_=:]*)?/gi ;

	contenido=opciones.replace(patronEmail,"");
	contenido=contenido.replace(patronUrl,"");
	contenido=contenido.replace(patronTelf,"");
	contenido=contenido.replace(patronUrl2,"");
	document.frmStep2.fmDsInmueble.value = contenido;
}

var urlSlider
var reqSlider
var numdiv

function PagoPaypal(num,nombre,apellido,passw,prov,telf,email,fbid){
	numdiv=num;
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxPago.asp?num="+num+"&nombre="+nombre+"&passw="+passw+"&prov="+prov+"&telf="+telf+"&email="+email+"&apellido="+apellido+"&fbid="+fbid;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStatePagoPaypal;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxPago.asp?num="+num+"&nombre="+nombre+"&passw="+passw+"&prov="+prov+"&telf="+telf+"&email="+email+"&apellido="+apellido+"&fbid="+fbid;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStatePagoPaypal;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}
}
  
function processStatePagoPaypal() {
	if(reqSlider.readyState==1){
		document.getElementById("login1").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
    }else if (reqSlider.readyState == 4) { // Complete
		if (reqSlider.status == 200) { // OK response	     
			document.getElementById("offer_box").innerHTML = reqSlider.responseText;
		} else {
			alert("Problem: " + reqSlider.statusText);
		}
	}
}

function SliderHome(){
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxSlider.asp";
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateSliderHome;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxSlider.asp";
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateSliderHome;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}
}
  
function processStateSliderHome() {
    if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response
        document.getElementById("capaSlider").innerHTML = reqSlider.responseText;
      } else {
        alert("Problem: " + reqSlider.statusText);
      }
    }
  }

var numdiv  

function RegistroPago(num){
	numdiv=num;
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxRegistro.asp?num="+num;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateRegistroPago;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxRegistro.asp?num="+num;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateRegistroPago;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}
}
  
function processStateRegistroPago() {
	if(reqSlider.readyState==1){
		if(numdiv != 4){
			document.getElementById("login").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
		}else{
			/*document.getElementById("accordion2").innerHTML=''; */
			document.getElementById("offer_box").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
		}
	}else if (reqSlider.readyState == 4) { // Complete
		if (reqSlider.status == 200) { // OK response
			if(numdiv != 4){
        		document.getElementById("accordion").innerHTML = reqSlider.responseText;
        	}else{
        		document.getElementById("offer_box").innerHTML = reqSlider.responseText;
        	}
		} else {
			alert("Problem: " + reqSlider.statusText);
		}
	}
}
  
function RegistroFB(num,fbnombre,fbsnombre,fbapellido,fbemail,fbpicture,fbid){
	numdiv=num;
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxRegistroFB.asp?num="+num+"&fbnombre="+fbnombre+"&fbsnombre="+fbsnombre+"&fbapellido="+fbapellido+"&fbemail="+fbemail+"&fbpicture="+fbpicture+"&fbid="+fbid;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateRegistroFB;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxRegistroFB.asp?num="+num+"&fbnombre="+fbnombre+"&fbsnombre="+fbsnombre+"&fbapellido="+fbapellido+"&fbemail="+fbemail+"&fbpicture="+fbpicture+"&fbid="+fbid;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateRegistroFB;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}
}
  
function processStateRegistroFB() {
      if(reqSlider.readyState==1){
      if(numdiv != 4){
		document.getElementById("login").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
		}else{
/*  		document.getElementById("accordion2").innerHTML=''; */
		document.getElementById("offer_box").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
		}
      }else if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response
        if(numdiv != 4){
        	document.getElementById("accordion").innerHTML = reqSlider.responseText;
        }else{
        	document.getElementById("offer_box").innerHTML = reqSlider.responseText;
        }
      } else {
        alert("Problem: " + reqSlider.statusText);
      }
    }
}


/*
function popup(url,ancho,alto) {
    var posicion_x; 
    var posicion_y; 
    posicion_x=(screen.width/2)-(ancho/2); 
    posicion_y=(screen.height/2)-(alto/2); 
    window.open(url, "leonpurpura.com", "width="+ancho+",height="+alto+",menubar=0,toolbar=0,directories=0,scrollbars=no,resizable=si,left="+posicion_x+",top="+posicion_y+"");
}
<a href="javascript:popup('popup.html',400,300)">abrir</a> 
*/

function validarNros(e) {
	var key;
	
	if(window.event) // IE
	{key = e.keyCode;}
	else if(e.which) // Netscape/Firefox/Opera
	{key = e.which;}

	if (key < 48 || key > 57)
    {
    	if(key == 45 || key == 8) // Detectar - (guion) y backspace (retroceso)
        { return true; }
    	else 
        { return false; }
    }
	return true;
}

function validarEmail(){
	var email=document.frmreg.txtemail.value.trim();
	var patronEmail=/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})/gi;
	if(patronEmail.test(email)){
		document.getElementById('emailvisto').style.display =''
		document.getElementById('emailerror').style.display ='none'
	}else{
		document.getElementById('emailerror').style.display =''
		document.getElementById('emailvisto').style.display ='none'
	}
	if(email==''){
		document.getElementById('emailvisto').style.display ='none'
		document.getElementById('emailerror').style.display ='none'
	}
}

function validarTelf(){
	var telf=document.frmreg.txtelefono.value.trim();
	var patronTelf=/[ 0-9]{2,3}-? ?[ 0-9]{5,6}/g;
	if(patronTelf.test(telf)){
		document.getElementById('telfvisto').style.display =''
		document.getElementById('telferror').style.display ='none'
	}else{
		document.getElementById('telferror').style.display =''
		document.getElementById('telfvisto').style.display ='none'
	}
	if(telf==''){
		document.getElementById('telfvisto').style.display ='none'
		document.getElementById('telferror').style.display ='none'
	}
}

function VerificarRegistro(num){

	if(num == 4){
		if(document.getElementById('tipoUsuario1').checked || document.getElementById('tipoUsuario2').checked){
		}else{
			document.getElementById('tipoperfil').style.display =''
			return false;
		}
	}	
	var nombre=document.frmreg.nombre.value.trim();
	if(num==2 || num==3 || num==4){
		var apellido=document.frmreg.apellido.value.trim();
	}else{
		var apellido=""
	}
	var fbid=document.frmreg.fbid.value;
	var passw=document.frmreg.pass.value.trim();
	var prov=document.frmreg.fmProvincia.value;
	var telf=document.frmreg.txtelefono.value.trim();
	var patronTelf=/[ 0-9]{2,3}-? ?[ 0-9]{5,6}/g;
	var email=document.frmreg.txtemail.value.trim();
	var patronEmail=/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})/gi;

	if(frmreg.nombre.value == ""){
		document.getElementById('nombrerror').style.display =''
		document.getElementById('nombrevisto').style.display ='none'
		frmreg.nombre.focus();
		return false;
	}else{
		document.getElementById('nombrevisto').style.display =''
		document.getElementById('nombrerror').style.display ='none'
	}

	if(document.getElementById('tipoUsuario2').checked){	
		if(num==2 || num==3 || num==4){
			if(frmreg.apellido.value == ""){
				document.getElementById('apellidoerror').style.display =''
				document.getElementById('apellidovisto').style.display ='none'
				frmreg.apellido.focus();
				return false;
			}else{
				document.getElementById('apellidovisto').style.display =''
				document.getElementById('apellidoerror').style.display ='none'
			}
		}
	}	

	if(patronEmail.test(email)){
		document.getElementById('emailvisto').style.display =''
		document.getElementById('emailerror').style.display ='none'
	}else{
		document.getElementById('emailerror').style.display =''
		document.getElementById('emailvisto').style.display ='none'
		frmreg.txtemail.focus();
		return false;
	}

	if(frmreg.pass.value.length < 8){
		document.getElementById('passerror').style.display =''
		document.getElementById('passvisto').style.display ='none'
		frmreg.pass.focus();
		return false;
	}else{
		document.getElementById('passvisto').style.display =''
		document.getElementById('passerror').style.display ='none'
	}	

	if(patronTelf.test(telf)){
		document.getElementById('telfvisto').style.display =''
		document.getElementById('telferror').style.display ='none'
	}else{
		document.getElementById('telferror').style.display =''
		document.getElementById('telfvisto').style.display ='none'
		frmreg.txtelefono.focus();
		return false;
	}

	if(frmreg.fmProvincia.value == 0){
		document.getElementById('proverror').style.display =''
		document.getElementById('provisto').style.display ='none'
		frmreg.fmProvincia.focus();
		return false;
	}else{
		document.getElementById('provisto').style.display =''
		document.getElementById('proverror').style.display ='none'
	}

	if(frmreg.sendCondLegales.checked){
		document.getElementById('avlegal').style.display ='none'
	}else{
		document.getElementById('avlegal').style.display =''
		frmreg.sendCondLegales.focus();
		return false;
	}
	
	if(num == 4){
		if(document.getElementById('tipoUsuario1').checked){
		num=document.getElementById('tipoUsuario1').value
		}
		if(document.getElementById('tipoUsuario2').checked){
		num=document.getElementById('tipoUsuario2').value
		}
	}	

	PagoPaypal(num,nombre,apellido,passw,prov,telf,email,fbid);

}

function validarPassw(){
	var pass=document.frmreg.pass.value.length;
	if(pass > 7){
		document.getElementById('passinf').style.display ='none'
		document.getElementById('passvisto').style.display =''
		document.getElementById('passerror').style.display ='none'
	}else{
		document.getElementById('passinf').style.display =''
		document.getElementById('passvisto').style.display ='none'
		document.getElementById('passerror').style.display =''
	}
	if(document.frmreg.pass.value ==''){
		document.getElementById('passinf').style.display ='none'
		document.getElementById('passvisto').style.display ='none'
		document.getElementById('passerror').style.display ='none'
	}
}

function validarNombre(){
	if(frmreg.nombre.value == ""){
		document.getElementById('nombrerror').style.display ='none'
		document.getElementById('nombrevisto').style.display ='none'
	}else{
		document.getElementById('nombrevisto').style.display =''
		document.getElementById('nombrerror').style.display ='none'
	}
}

function validarApellido(){
	if(frmreg.apellido.value == ""){
		document.getElementById('apellidoerror').style.display ='none'
		document.getElementById('apellidovisto').style.display ='none'
	}else{
		document.getElementById('apellidovisto').style.display =''
		document.getElementById('apellidoerror').style.display ='none'
	}
}

function validarProv(){
	if(frmreg.fmProvincia.value == 0){
		document.getElementById('proverror').style.display ='none'
		document.getElementById('provisto').style.display ='none'
	}else{
		document.getElementById('provisto').style.display =''
		document.getElementById('proverror').style.display ='none'
	}
}

function validarAvisol(){
	if(frmreg.sendCondLegales.checked){
		document.getElementById('avlegal').style.display ='none'
	}else{
		document.getElementById('avlegal').style.display =''
	}
}

/* muestra el toolltip de vende tu casa */
function getAbsoluteElementPosition(element) {
  if (typeof element == "string")
    element = document.getElementById(element)
    
  if (!element) return { top:0,left:0 };
  
  var y = 0;
  var x = 0;
  while (element.offsetParent) {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  }
  return {top:y,left:x};
}

if ($('#tt').length) {

function MostrarTooltip() { 
	var elemento = document.getElementById('vende');
	var pos = getAbsoluteElementPosition(elemento);
	if (pos.top!=0 && pos.left!=0){
		document.getElementById('tt').style.top = pos.top+10+"px";
    	document.getElementById('tt').style.left = pos.left+30+"px";            
    	document.getElementById('tt').style.display="block";
    } 
} 

$(document).ready(function(){
	var elemento = document.getElementById('vende');
	var pos = getAbsoluteElementPosition(elemento);
	if (pos.top!=0 && pos.left!=0){
		document.getElementById('tt').style.top = pos.top+10+"px";
    	document.getElementById('tt').style.left = pos.left+30+"px";            
    	document.getElementById('tt').style.display="block";
    } 
});


function MostrarTooltipFB(texto) { 
	var elemento = document.getElementById('tooltipfb');
	var pos = getAbsoluteElementPosition(elemento);
	if (pos.top!=0 && pos.left!=0){
		document.getElementById('tt').style.top = pos.top+15+"px";
    	document.getElementById('tt').style.left = pos.left-15+"px";            
    	document.getElementById('tt').style.display="block";
    } 
} 

function OcultarToolTip() { 
   document.getElementById('tt').style.display="none"; 
}

}
     
function apellidoOK(){
	document.getElementById('apellidoOK').style.display ='none'
	document.getElementById('apellidoOK2').style.display ='none'
	document.getElementById('apellidovisto').style.display ='none'
	document.getElementById('apellidoerror').style.display ='none'
	document.getElementById('tipoperfil').style.display ='none'
}

function apellidoOK2(){
	document.getElementById('apellidoOK').style.display =''
	document.getElementById('apellidoOK2').style.display =''
	document.getElementById('tipoperfil').style.display ='none'
}

function TipoPerfilFB(){
	document.getElementById('tipoperfil').style.display ='none'
}

function getObject(obj) {
  var theObj;
  if(document.all) {
    if(typeof obj=="string") {
      return document.all(obj);
    } else {
      return obj.style;
    }
  }
  if(document.getElementById) {
    if(typeof obj=="string") {
      return document.getElementById(obj);
    } else {
      return obj.style;
    }
  }
  return null;
}

function Contar(entrada,salida,texto,caracteres) {
	var entradaObj=getObject(entrada);
	var salidaObj=getObject(salida);
	var longitud=caracteres - entradaObj.value.length;
	if(longitud <= 0) {
		longitud=0;
		texto='<span class="disable"> '+texto+' </span>';
		entradaObj.value=entradaObj.value.substr(0,caracteres);
	}
	salidaObj.innerHTML = texto.replace("{CHAR}",longitud);
}

function VerificarRegistroFB(){

	if(document.getElementById('tipoUsuario1').checked || document.getElementById('tipoUsuario2').checked){
	}else{
		document.getElementById('tipoperfil').style.display =''
		return false;
	}
		
	var nombre=document.frmreg.nombre.value.trim();
	var apellido=document.frmreg.apellido.value.trim();
	var fbid=document.frmreg.fbid.value;
	var email=document.frmreg.txtemail.value.trim();
		
	if(document.getElementById('tipoUsuario1').checked){
		num=document.getElementById('tipoUsuario1').value
	}
	
	if(document.getElementById('tipoUsuario2').checked){
		num=document.getElementById('tipoUsuario2').value
	}
		
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxUsuarioFB.asp?num="+num+"&nombre="+nombre+"&email="+email+"&apellido="+apellido+"&fbid="+fbid;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateVerificarRegistroFB;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxUsuarioFB.asp?num="+num+"&nombre="+nombre+"&email="+email+"&apellido="+apellido+"&fbid="+fbid;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateVerificarRegistroFB;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}

}

function processStateVerificarRegistroFB() {
  	if(reqSlider.readyState==1){
		document.getElementById("login1").innerHTML='<img src="/img/ajax-loader-blue.gif" />';
    }else if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response	     
		window.open('/AreaCliente/PanelControl.asp?msgFacebook=Un correo te ha sido enviado con los datos de tu perfil en U2','_top');
      } else {
        alert("Problem: " + reqSlider.statusText);
      }
    }
}

//Declaramos las variables que vamos a user
var lat = null;
var lng = null;
var map = null;
var geocoder = null;
var marker = null;
          
function initializeInmb() {
	lat = document.getElementById("lat").value;
	lng = document.getElementById("lng").value;
 
  geocoder = new google.maps.Geocoder();
    
   //Si hay valores creamos un objeto Latlng
   if(lat !='' && lng != '')
  {
     var latLng = new google.maps.LatLng(lat,lng);
  }
  else
	      {
	codeAddress(); 
  }
  //Definimos algunas opciones del mapa a crear
   var myOptions = {
      center: latLng,//centro del mapa
      zoom: 15,//zoom del mapa
      mapTypeId: google.maps.MapTypeId.ROADMAP //tipo de mapa, carretera, hÍbrido,etc
    };
    //creamos el mapa con las opciones anteriores y le pasamos el elemento div
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
     
    //creamos el marcador en el mapa
    marker = new google.maps.Marker({
    
        map: map,//el mapa creado en el paso anterior
        position: latLng,//objeto con latitud y longitud
        draggable: false, //que el marcador se pueda arrastrar
		animation: google.maps.Animation.DROP,
        title:"Ubica tu propiedad",
/*         icon:"http://www.urbaniza2.com/Images/logoAnuncio.png"             */
    });
    
   /*
 var contentString ="<div id='desc'>" +document.getElementById("titu").innerHTML +"</div>";
    var imagen = "<div id='mapgoo'><div id='fot'><img src='"+document.getElementById("phot0").src+"'></div>"+contentString+"</div>";
*/
    contentString = "Inmobiliaria";
   // alert(document.getElementById("phot0").src);
/*

	var infowindow = new google.maps.InfoWindow({
	    content: contentString
	});
	
	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	}); 
*/        
}
 
//funcion que traduce la direccion en coordenadas
function codeAddress() {
     
    //obtengo la direccion del formulario
    var address = document.getElementById("dirprop").value;
    //hago la llamada al geodecoder
    geocoder.geocode( { 'address': address}, function(results, status) {
     
    	//si el estado de la llamado es OK
    	if (status == google.maps.GeocoderStatus.OK) {
			//centro el mapa en las coordenadas obtenidas
			map.setCenter(results[0].geometry.location);
			//coloco el marcador en dichas coordenadas
			marker.setPosition(results[0].geometry.location);            
		} else {
			//si no es OK devuelvo error
			//alert("Lo sentimos no podemos encontrar la direccion,realize de nuevo su busqueda");
		}
	});
}

function CargarImgProp(){
	
	inmueble = document.getElementById("propiedad").value;
	tipo = document.getElementById("tipoprp").value;
	regimen = document.getElementById("regimenprp").value;
	referencia = document.getElementById("refprp").value;
	provincia = document.getElementById("provprp").value;
		
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxCargarImgProp.asp?propiedad="+inmueble+"&dTipo="+tipo+"&dRegimen="+regimen+"&dReferencia="+referencia+"&dProvincia="+provincia;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateCargarImgProp;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxCargarImgProp.asp?propiedad="+inmueble+"&dTipo="+tipo+"&dRegimen="+regimen+"&dReferencia="+referencia+"&dProvincia="+provincia;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateCargarImgProp;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}

}

function processStateCargarImgProp() {
  	if(reqSlider.readyState==1){
		document.getElementById("ImgProp").innerHTML='<img src="/images/gif-load.gif" style="margin:50%;">';
    }else if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response	     
		document.getElementById("ImgProp").innerHTML = reqSlider.responseText;
      } else {
/*         alert("Problem: " + reqSlider.statusText); */
      }
    }
}

	//========testimonios Comentarios========
	function mostrar(span1,div1,cont){
		var collapse_content_selector = $(span1).attr('name');					
		if($(collapse_content_selector).attr('class') == "oculto"){
			$(collapse_content_selector).css({ display:"none"});
			$(collapse_content_selector).removeClass("oculto");
		}
		//make the collapse content to be shown or hide
		var toggle_switch = $(span1);
		$(collapse_content_selector).toggle(function(){
			if($(div1).css('display')=='none'){
				toggle_switch.html('+ Comentarios ('+cont+')');//change the button label to be 'Show'
			}else{
				toggle_switch.html('- Comentarios ('+cont+')');//change the button label to be 'Hide'
			}
		});
	} 
	
/* Favoritos            */
function Favoritos(inmueble,tipo){
		
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxFavoritos.asp?propiedad="+inmueble+"&dTipo="+tipo;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateFavoritos;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxFavoritos.asp?propiedad="+inmueble+"&dTipo="+tipo;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateFavoritos;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}

}

function processStateFavoritos() {
  	if(reqSlider.readyState==1){
/* 		document.getElementById("bttfav").innerHTML='<img src="/images/gif-load.gif" style="margin:50%;">'; */
    }else if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response	     
		document.getElementById("bttfav").innerHTML = reqSlider.responseText;
      } else {
/*         alert("Problem: " + reqSlider.statusText); */
      }
    }
}

function QuitarFavoritos(inmueble,tipo){
		
	if (window.XMLHttpRequest) { // Non-IE browsers
		try {
  			urlSlider = "/Ajax/AjaxQuitarFavoritos.asp?propiedad="+inmueble+"&dTipo="+tipo;
	  		reqSlider = new XMLHttpRequest();
			reqSlider.onreadystatechange = processStateQuitarFavoritos;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send(null);
		} catch (e) {
	    	alert(e);
	    }
	} else if (window.ActiveXObject) { // IE
	  	//req = new ActiveXObject("Microsoft.XMLHTTP");
		req = getXmlHttpObject();
	    if (req) {
  			urlSlider = "/Ajax/AjaxQuitarFavoritos.asp?propiedad="+inmueble+"&dTipo="+tipo;
	  		reqSlider = req;
			reqSlider.onreadystatechange = processStateQuitarFavoritos;
			reqSlider.open("GET", urlSlider, true);
			reqSlider.send();
		}
	}

}

function processStateQuitarFavoritos() {
  	if(reqSlider.readyState==1){
/* 		document.getElementById("bttfav").innerHTML='<img src="/images/gif-load.gif" style="margin:50%;">'; */
    }else if (reqSlider.readyState == 4) { // Complete
      if (reqSlider.status == 200) { // OK response	     
		document.getElementById("bttfav").innerHTML = reqSlider.responseText;
      } else {
/*         alert("Problem: " + reqSlider.statusText); */
      }
    }
}           

function oredenarLista(parametros,orden){
		var url = "/listadopropiedades.asp?ordena="+orden+"&"+parametros;
		window.location=url;
}

function IrSector(){
	url=document.getElementById("irsector").value
	if(url == 0){
		alert("Debe elegir un sector");
	}else{
		location.href=url;
	}
}  