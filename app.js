/*
* Name: Arturo Ramirez 
* Task: Create mock-up of a famous UI
* Date: September 22, 2021 
*/

const menu = document.querySelector("#menu");
console.log(menu);

const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
