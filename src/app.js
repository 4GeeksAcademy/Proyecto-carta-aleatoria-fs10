/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let card1 = document.querySelector(".card");
  let caja = document.querySelector(".container");
  let numeros = document.getElementById("number");
  let iconoTop = document.querySelector(".top-left");
  let iconoBottom = document.querySelector(".bottom-right");

  let iconos = ["♦", "♥", "♠", "♣"];
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function randomCard() {
    let randomIcons = Math.floor(Math.random() * iconos.length);
    let randomValue = Math.floor(Math.random() * valores.length);
    numeros.innerHTML = valores[randomValue];
    iconoTop.innerHTML = iconos[randomIcons];
    iconoBottom.innerHTML = iconos[randomIcons];

    if (randomIcons == 0 || randomIcons == 1) {
      numeros.style.color = "red";
      iconoTop.style.color = "red";
      iconoBottom.style.color = "red";
    } else {
      numeros.style.color = "black";
      iconoTop.style.color = "black";
      iconoBottom.style.color = "black";
    }
  }
};
