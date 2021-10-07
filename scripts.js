"use strict";	
const link = document.querySelector(".log");
const popup = document.querySelector(".modal-form");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const login = popup.querySelector("[name=Login]");
const password = popup.querySelector("[name=Password]");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("login"); // geting key value from storage
	
}
catch (err){
	isStorageSupport = false;
}
link.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.add("modal-show");
	popup.classList.add("modal-fallout");
	if (storage) {
		login.value = storage;
		password.focus();
	} else{
		login.focus();
	}
});
close.addEventListener("click", function(e){
	e.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-fallout");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(e) {
	if(!login.value || !password.value) {
		e.preventDefault();
		popup.classList.remove("modal-fallout");
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

function checkbox(){
	const checkstatus = document.getElementById('modal-checkbox');
	const status = document.getElementById('check');
	if (status.checked == true){
		checkstatus.style.opacity='1';
	}
	else {
		checkstatus.style.opacity='0';
		}
}

const maplink = document.querySelector(".map-button");
const mappopup = document.querySelector(".modal-map");
const mapclose = mappopup.querySelector(".modal-close");
	
maplink.addEventListener("click", function(e){
	e.preventDefault();
	mappopup.classList.add("modal-show");
});
mapclose.addEventListener("click", function(e){
	e.preventDefault();
	mappopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (e) {
	if(e.keyCode === 27) {
		if (mappopup.classList.contains("modal-show")) {
		e.preventDefault();
		mappopup.classList.remove("modal-show");
		}
	}
});
