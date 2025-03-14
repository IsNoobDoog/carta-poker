window.onload = function () {
  const carta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const palos = ["♦", "♥", "♠", "♣"];

  let cartaAleatoria = carta[Math.floor(Math.random() * carta.length)]
  let simboloAleatorio = palos[Math.floor(Math.random() * palos.length)]

  document.getElementById("palo").innerText = simboloAleatorio;
  document.getElementById("numero").innerText = cartaAleatoria;
  document.getElementById("paloInvertido").innerText = simboloAleatorio;

  if (simboloAleatorio === "♥" || simboloAleatorio === "♦") {
    document.getElementById("palo").classList.add("rojo");
    document.getElementById("paloInvertido").classList.add("rojo");
  }
  document.getElementById("recargar").addEventListener("click", function () {
    location.reload();
  });

  setInterval(function () {
    location.reload();
  }, 10000)

  //write your code here

};
