var link = document.querySelector(".login");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-login-close");
var login = popup.querySelector(".input-user");
var password = popup.querySelector(".input-password");
var form = popup.querySelector(".modal-login-form");
var storageLogin = localStorage.getItem("login");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-login-show");
		
		if (storageLogin) {
			login.value = storageLogin;
			password.focus();
		} else {
			login.focus();
		}
	});
	
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-login-show");
		popup.classList.remove("modal-error");
	});
	
	form.addEventListener("submit", function(event) {
		if (!login.value || !password.value) {
			event.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
			console.log("Вам нужно ввести логин и пароль");
		} else {
			localStorage.setItem("login", login.value);
		}	
	});
	
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27 ) {
			if(popup.classList.contains("modal-login-show")) {
				popup.classList.remove("modal-login-show");
				popup.classList.remove("modal-error");
			}
		}
	});
	

if(document.querySelector(".content-map")) {
	var openMap = document.querySelector(".btn-driveway");
	var popupMap = document.querySelector(".content-map");
	var closeMap = popupMap.querySelector(".content-map-close");	
		
		
		openMap.addEventListener("click", function(event) {
			event.preventDefault();
			popupMap.classList.add("content-map-show");
		});
		
		closeMap.addEventListener("click", function(event) {
			event.preventDefault();
			popupMap.classList.remove("content-map-show");
		});
		
		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27 ) {
				if(popupMap.classList.contains("content-map-show")) {
					popupMap.classList.remove("content-map-show");
				}
			}
		});
}