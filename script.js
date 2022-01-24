const body = document.getElementById("body")
const buttonDark = document.getElementById("btnDark")
const buttonLight = document.getElementById("btnLight")

const valueColor =localStorage.getItem("colour")
body.style.backgroundColor = valueColor;
if(valueColor=="black"){
  buttonLight.style.display = "block"
  buttonDark.style.display = "none"
}
else{
  buttonLight.style.display = "none"
  buttonDark.style.display = "block"
}

buttonDark.addEventListener("click", function (event) {
  localStorage.setItem("colour", "black")
  body.style.backgroundColor = "Black"
  buttonDark.style.display = "none"
  buttonLight.style.display = "block"
})

buttonLight.addEventListener("click", function (event) {
  localStorage.setItem("colour", "white")
  body.style.backgroundColor = "White"
  buttonDark.style.display = "block"
  buttonLight.style.display = "none"
})

