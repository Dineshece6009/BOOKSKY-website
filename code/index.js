var buttonPlus = document.getElementById("addbutn");
var addtitle = document.querySelector(".addtitle");
var popup = document.querySelector(".popup-over");
buttonPlus.addEventListener("click", function () {
  addtitle.style.display = "block";
  popup.style.display = "block";
});
var cancelbutn = document.getElementById("cancel");
cancelbutn.addEventListener("click", function (event) {
  event.preventDefault();
  addtitle.style.display = "none";
  popup.style.display = "none";
});
//selction all element booktitle-ip,bookauthor-ip,bookdes-ip,container,add
var container = document.querySelector(".container");
var add = document.getElementById("add");
var bookauthor = document.getElementById("bookauthor-ip");
var booktitle = document.getElementById("booktitle-ip");
var bookdes = document.getElementById("bookdes-ip");

add.addEventListener("click", function (event) {
  event.preventDefault();
  addtitle.style.display = "none";
  popup.style.display = "none";
  var div = document.createElement("div");
  div.setAttribute("class", "book-box");
  div.innerHTML = `<h1>${booktitle.value}</h1>
<h5>${bookauthor.value}</h5>
<p>${bookdes.value}</p>
<button onclick="remove(event)">Delete</button>`;
  container.append(div);
  addtitle.style.display = "none";
  popup.style.display = "none";

});
function remove(event){
    event.target.parentElement.remove()
}
