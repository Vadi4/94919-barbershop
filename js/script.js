var linkFeedback = document.querySelector(".btn-feedback");
var popupFeedback = document.querySelector(".modal-login");
var closeFeedback = popupFeedback.querySelector(".modal-login-close");
var loginFeedback = popupFeedback.querySelector(".input-user");

	linkFeedback.addEventListener("click", function(event) {
		event.preventDefault();
		popupFeedback.classList.add("modal-login-show");
		loginFeedback.focus();
	});
	
	closeFeedback.addEventListener("click", function(event) {
		event.preventDefault();
		popupFeedback.classList.remove("modal-login-show");
	});

console.log(loginFeedback);  