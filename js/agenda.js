let tareas = function(){
	Array.from(parrafo).forEach(function(elem) {
		if(elem.style.display === "grid"){
			elem.style.display = "none";
			menu.style = "";
		}else{
			elem.style.display = "grid";
			menu.style = "transform: rotate(180deg)";
		}
	});
}



let texto = function(param){
		console.log(param);	
		let tarea = document.getElementById("tarea_"+param);
		let enlace = document.getElementById('texto_'+param);
		if(enlace.style.display === "block" || enlace.style.display === null || enlace.style.display === ""){
			enlace.style.display = "none";
			tarea.style = "";
		}else{
			enlace.style.display = "block";
			tarea.style = "transform: rotate(180deg)";
		}
	}
let formulario = function(){
	if(form.style.display === "block" || form.style.display === null || form.style.display === ""){
		form.style.display = "none";
	}else{
		form.style.display = "block";
	}
}

let enviar = function(){
	let titulo = document.getElementById("title").value;
	let fecha = document.getElementById("date").value;
	let patron = /[0-9]/;
	if(patron.test(titulo) || / /.test(titulo)){
		alert("Campo erroneo");
	}else if(titulo !== "" && fecha !== ""){
		location.href="index.html"
	}else{
		alert("Completa los campos obligatorios");
	}
}

let form = document.getElementById("form");
let parrafo = document.getElementsByClassName("tarea");
let menu = document.getElementById("menu_1");
menu.addEventListener("click",tareas);


