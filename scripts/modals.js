// show course box

$(".course-box__img").click(function (image) {
  $(".course-content").css("filter", "blur(100px)");

  $(".modal-parent").css("display", "flex");
  $(".modal-parent").css("justify-content", "center");
  $(".modal-parent").css("align-items", "center");

  $(".modal__img").css("width", "600px");
  $(".modal__img").css("height", "400px");
  $(".modal__img").attr("src", image.target.attributes[0].value);

  console.log(image);
});

// close course box

$(".X").click(function () {
  $(".course-content").css("filter", "blur()");
  $(".modal-parent").css("display", "none");
});

// show login modal

$(".nav-link-login").click(function () {
  $(".login-modal").css("display", "none");
  $(".register-modal").css("display", "none");
  $(".login-modal").css("display", "block");
  $(".login-register-modal").css("height", "70rem");
});

// show register modal

$(".nav-link-register").click(function () {
  $(".login-modal").css("display", "none");
  $(".register-modal").css("display", "none");
  $(".register-modal").css("display", "block");
  $(".login-register-modal").css("height", "85rem");
});

// close login modal and register modal

$(".X").click(function () {
  $(".login-modal").css("display", "none");
  $(".register-modal").css("display", "none");
});

// switch between login modal and register modal

$(".go-to-register").click(function () {
  $(".login-modal").css("display", "none");
  $(".register-modal").css("display", "none");
  $(".register-modal").css("display", "block");
  $(".login-register-modal").css("height", "85rem");
});

$(".go-to-login").click(function () {
  $(".login-modal").css("display", "none");
  $(".register-modal").css("display", "none");
  $(".login-modal").css("display", "block");
  $(".login-register-modal").css("height", "70rem");
});
