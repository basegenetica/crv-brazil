async function calcula() {
  var valor = document.getElementById("valor").value;
  var pasta = document.querySelector("input[name=pasta]:checked").value;
  valor = valor.toString().replace(".", "");
  valor = valor.toString().replace(",", ".");
  console.log(valor + " - " + pasta);
  //calcula!
  if (pasta == "corte") {
    if (valor < 500) {
      result = "a vista";
    } else if (valor < 800) {
      result =
        "1 parcela de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor);
    } else if (valor < 1200) {
      result =
        "2  parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 2);
    } else if (valor < 1600) {
      result =
        "3 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 3);
    } else if (valor < 2300) {
      result =
        "4 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 4);
    } else if (valor < 3800) {
      result =
        "5 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 5);
    } else if (valor < 5750) {
      result =
        "6 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 6);
    } else if (valor < 8300) {
      result =
        "7 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 7);
    } else if (valor > 8300) {
      result =
        "8 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 8);
    }
  } else if (pasta == "leite") {
    if (valor < 300) {
      result = "a vista";
    } else if (valor < 500) {
      result =
        "1 parcela de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor);
    } else if (valor < 700) {
      result =
        "2 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 2);
    } else if (valor < 950) {
      result =
        "3 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 3);
    } else if (valor < 1200) {
      result =
        "4 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 4);
    } else if (valor < 1600) {
      result =
        "5 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 5);
    } else if (valor < 2200) {
      result =
        "6 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 6);
    } else if (valor < 3300) {
      result =
        "7 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 7);
    } else if (valor > 3300) {
      result =
        "8 parcelas de " +
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor / 8);
    }
  }
  var textResult = document.getElementById("result");
  textResult.innerHTML = result;
}
