var resposta = document.getElementById('resposta');
function calcular(valor) {
    if (!valor) return alert('Valor inválido!');
    var resultado = '';
    for (var dinheiro of [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05]) {
        console.log(valor);
        var dividido = exactMath.floor(exactMath.div(valor, dinheiro));
        if (dividido) {
            resultado += `${dividido} ${(dinheiro < 1 ? ' 🪙 moeda' : ' 💵 cédula') + (dividido > 1 ? 's' : '' )} de ${dinheiro.toLocaleString('pt-BR')}<br />`;
            valor = exactMath.sub(valor, exactMath.mul(dinheiro, dividido));
        }
    }
    if (valor) return alert('Valor inválido!');
    resposta.innerHTML = resultado;
}