function calcularIMC() {
  let altura = parseFloat(document.getElementById("altura").value) / 100;
  let peso = parseFloat(document.getElementById("peso").value);
  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos para altura e peso.");
    return;
  }
  const IMC = peso / (altura * altura);

  const imcShow = document.getElementById("imc");
  imcShow.innerHTML = IMC.toFixed(1);

  const resultado = document.getElementById("classificacao");
  const imagem = document.querySelector("img");

  if (IMC < 18.5) {
    resultado.innerHTML = "Abaixo do peso";
    imagem.src = "assets/magro.png";
  } else if (IMC >= 18.5 && IMC < 25) {
    resultado.innerHTML = "Peso normal";
    imagem.src = "assets/normal.png";
  } else {
    resultado.innerHTML = "Obesidade";
    imagem.src = "assets/obeso.png";
  }
}
