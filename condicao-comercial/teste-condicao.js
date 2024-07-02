// Função para validar o formulário e calcular o parcelamento
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Seleciona o formulário
        var form = document.getElementById('parcelamentoForm');
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();

function calcularParcelamento() {
    // Obtém os valores do formulário
    const valorPedidoMasked = document.getElementById('valorPedido').value;
    const valorPedido = parseFloat(valorPedidoMasked.replace(/\./g, '').replace(',', '.'));
    const categoriaProduto = document.getElementById('categoriaProduto').value;

    // Define as condições de parcelamento
    const condicoesParcelamento = {
        politica1: [500, 800, 1200, 1600, 2300, 3800, 5750, 8300],
        politica2: [300, 500, 700, 950, 1200, 1600, 2200, 3300],
        politica3: [500, 800, 1200, 1600, 2300, 3800, 5750, 8300],
        politica4: [300, 500, 700, 950, 1200, 1600, 2200, 3300]
    };

    // Calcula o número máximo de parcelas possível
    let maxParcelas = 0;
    for (let i = 0; i < condicoesParcelamento[categoriaProduto].length; i++) {
        if (valorPedido > condicoesParcelamento[categoriaProduto][i]) {
            maxParcelas++;
        }
    }

    // Limpa o resultado anterior
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Calcula e exibe as formas de parcelamento possíveis
    for (let i = maxParcelas; i > 0; i--) {
        let desconto = (maxParcelas - i) * 0.01;
        let valorComDesconto = valorPedido * (1 - desconto);
        let valorParcela = valorComDesconto / i;
        let valorTotalParcelas = valorPedido / i
        
        let item = document.createElement('li');
        item.className = 'list-group-item';
        let textoItem = `${i}x de R$ ${valorTotalParcelas.toFixed(2)} ou<br> ${i}x de R$ ${valorParcela.toFixed(2)} (R$ ${valorComDesconto.toFixed(2)}) - ${maxParcelas - i}% Desconto`;
        item.innerHTML = textoItem;
        resultadoElement.appendChild(item);
    }
}