	var link = document.querySelector(".log");
	var popup = document.querySelector(".modal-form");
	var close = popup.querySelector(".modal-close");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=Login]");
	var password = popup.querySelector("[name=Password]");
	
	var isStorageSupport = true;
	var storage = "";
	
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
		var checkstatus = document.getElementById('modal-checkbox');
		var status = document.getElementById('check');
		if (status.checked == true){
			checkstatus.style.opacity='1';
		}
		else {
			checkstatus.style.opacity='0';
		}
}
	var maplink = document.querySelector(".map-button");
	var mappopup = document.querySelector(".modal-map");
	var mapclose = mappopup.querySelector(".modal-close");
	
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
