////     корзина
//var basketLink = document.querySelectorAll(".catalog .buy");
//var basketPopup = document.querySelector(".modal-popup-basket");
//var basketClose = basketPopup.querySelector(".modal-close");
//
//basketLink.addEventListener("click", function (evt) {
//  evt.preventDefault();
//  basketPopup.classList.add("modal-popup-basket-show");
//});
//
//basketClose.addEventListener("click", function (evt) {
//  evt.preventDefault();
//  basketPopup.classList.remove("modal-popup-basket-show");
//});

//     карта
if(document.querySelector(".modal-popup-map"){
  var mapLink = document.querySelector(".map");
  var mapPopup = document.querySelector(".modal-popup-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-popup-map-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-popup-map-show");
  });
};
//напишите нам


var contactsLink = document.querySelector(".btn-contacts");
var contactsPopup = document.querySelector(".modal-write-us");
var contactsClose = contactsPopup.querySelector(".modal-close");
var contactsName = contactsPopup.querySelector("[name=name]");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-write-us-show");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-write-us-show");
});
