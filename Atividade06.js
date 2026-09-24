const verificalidade = function (idade) {
    return idade > 18 ? "permitido" : "Bloqueado";
};

console.log(verificalidade(20));
console.log(verificalidade(15));