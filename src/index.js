//Informe o nome do herói
let nomeHeroi = "Link"

//Informe o nível do herói
let xpHeroi = 20000

//Não preencher manualmente
let classificacaoHeroi

//Verificando se o valor informado em xpHeroi é um número
if (typeof xpHeroi === "number") {
    //Verificando a Classificação de acordo com a xp informada
    // Valores das condições diferem dos informados no guia para evitar erros
    switch (true) {
        case (xpHeroi <= 1000) : classificacaoHeroi = "Ferro"; break;
        case (xpHeroi > 1000 && xpHeroi <= 2000) : classificacaoHeroi = "Bronze"; break;
        case (xpHeroi > 2000 && xpHeroi <= 5000) : classificacaoHeroi = "Prata"; break;
        case (xpHeroi > 5000 && xpHeroi <= 7000) : classificacaoHeroi = "Ouro"; break;
        case (xpHeroi > 7000 && xpHeroi <= 8000) : classificacaoHeroi = "Platina"; break;
        case (xpHeroi > 8000 && xpHeroi <= 9000) : classificacaoHeroi = "Ascendente"; break;
        case (xpHeroi > 9000 && xpHeroi <= 10000) : classificacaoHeroi = "Imortal"; break;
        default : classificacaoHeroi = "Radiante"; break;
    }

    //Retornando a Classificação
    console.log("O Herói de nome " +nomeHeroi +" está no nível de " +classificacaoHeroi +".")
} else {
    //Retornando um aviso caso não seja informado um número
    console.log("O valor informado em xpHeroi não é válido!")
}