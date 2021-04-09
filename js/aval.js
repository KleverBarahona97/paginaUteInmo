$(document).ready(function(){	
  $(":date").dateinput();
 });


function cargaSelect(modulo,nom_select,actual){
	cod = $(actual).val();
	bloqueo(actual.id);
	$.ajax({  
		type: 'POST',
    	url: '/Avaluador/AjaxSelect.asp',  
   		data: { codigo:cod, modulo:modulo},
  		success: function(data) { 
  			$(nom_select).html(data);
  			$('#resultado').html("");
  	     }  
	});		

}

function bloqueo(nombre){
	if (nombre == "provincia"){
		$('#canton').html('<option value="0">- Todos -</option>');
		$('#ciudad').html('<option value="0">- Todas -</option>');
		$('#zona').html('<option value="0">- Todas -</option>');
		$('#sector').html('<option value="0">- Todos -</option>');
	}
	if (nombre == "canton"){
		$('#ciudad').html('<option value="0">- Todas -</option>');
		$('#zona').html('<option value="0">- Todas -</option>');
		$('#sector').html('<option value="0">- Todos -</option>');
	}
	if (nombre == "ciudad"){
		$('#zona').html('<option value="0">- Todas -</option>');
		$('#sector').html('<option value="0">- Todos -</option>');
	}
	if (nombre == "zona"){
		$('#sector').html('<option value="0">- Todos -</option>');
	}
}
	
 function avaluo(){
 	f_desde = $('#fech_desde').val();
 	f_hasta = $('#fech_hasta').val();
 	
 	if (f_desde == "" || f_hasta == ""){
 		alert("Debe ingresar un rango de fechas");
 	}else{
 		if (new Date(f_hasta).getTime() <= new Date(f_desde).getTime()){
 			alert("la fecha fin debe ser mayor a la fecha inicio");
 		}else{
 			
 			regimen = $('#regimen').val();
 			base = $('#base').val();
 			provincia = $('#provincia').val();
 			canton = $('#canton').val();
 			ciudad = $('#ciudad').val();
 			zona = $('#zona').val();
 			sector = $('#sector').val();
 			tipo = $('#tipo').val();
 			titulo = "Precio promedio de "+$("#tipo option:selected").text()+" en "+$("#regimen option:selected").text()+" por "+$("#base option:selected").text();
 			localidad_str = localidad();
 			deplazaGrafico();
 			$.ajax({  
				type: 'GET',
		    	url: '/Avaluador/AjaxAvaluo.asp',  
		   		data: { f_desde:f_desde,f_hasta:f_hasta,regimen:regimen,base:base,provincia:provincia,canton:canton,ciudad:ciudad,zona:zona,sector:sector,tipo:tipo,titulo:titulo,localidad_str:localidad_str},
		  		success: function(data) { 
		  			if (data == "no"){
		  				$('#resultado').html("No se a registrado un historial de propiedades con estas caracter&iacute;sticas");	
		  			}else{
		  				$('#resultado').html(data);
			  			var medio = document.getElementById('c-medio').value;
			  			document.getElementById('c-valor').value = medio;
			  			formatoPrecio('c-valor');
			  			formatoPrecio('c-metros');
			  			calculadora();
			  			var textX = document.getElementById("textXml").value;
			  			obtenerScript('myNext','/Graficos/MSLine.swf',textX,'800','500');
		  			}

		  	     }  
			});
 		}
 	}
 }
 
 
 	var chart_myNext;
	  
	  function obtenerScript(nombre,swf,textXML,alto,ancho){
	  	chart_myNext = new FusionCharts(swf, nombre, alto, ancho);
	  	chart_myNext.setDataXML(textXML);
	  	chart_myNext.render(nombre+"Div");
	  
	  }
	  
	  function deplazaGrafico(){
		var elemento = $("#resultado");
		var posicion = elemento.position();
		$('body,html').animate({scrollTop: posicion.top-50}, 900);
	}
	
	function localidad(){
 			provincia = $('#provincia').val();
 			canton = $('#canton').val();
 			zona = $('#zona').val();
 			sector = $('#sector').val();
 			localidad_str = "";
 			if (provincia != 0){
 				localidad_str = localidad_str + $("#provincia option:selected").text();
 			}else{
 				localidad_str = localidad_str + "Ecuador";
 			}
 			if (canton != 0){
 				localidad_str = localidad_str + "-" +$("#canton option:selected").text();
 			}
 			if (zona != 0){
 				localidad_str = localidad_str + "-" +$("#zona option:selected").text();
 			}
 			if (sector != 0){
 				localidad_str = localidad_str + "-" +$("#sector option:selected").text();
 			}
 			
 			return localidad_str;

	}
	
	function cambiar_mapa(){
		var num = $("#provincia").val();
		num = "#provincia option[value="+num+"]";
		var url=$(num).attr("link-mapa"); 
		$('#map_ecuador').attr('src', url);
        $('#map_ecuador').reload();
	}
	
	function calculadora(){
		var metros = $("#c-metros").val();
		var valor = $("#c-valor").val();
		metros = metros.replace(/[.']/g,"");
		valor = valor.replace(/[.']/g,"");
		var result = metros * valor;
		document.getElementById('c-resultado').value = result;
		formatoPrecio('c-resultado');
	}
	
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
	
	function formatoPrecio(campo){
	  	var contenido = document.getElementById(campo).value;
	  		contenido = contenido.replace(/[.']/g,"");
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
		
		document.getElementById(campo).value = contenido;
	}