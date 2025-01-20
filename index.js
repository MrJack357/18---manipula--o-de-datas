// Manipulação de datas usando JS:

// Criando uma variável global para a data atual
const dataAtual = new Date();

//Formataçao para formato do Brasil
const opcoes = {
    year: "numeric",
    month:"long",
    day: "numeric",
}
const opcoes2 = {
    weekday: "long",
    year: "numeric",
    month:"long",
    day: "numeric",
}


// Para saber o dia, a data atual, basta utilizar new Date(), segue exemplo:
console.log(dataAtual);

// Obter informações específicas como dia, mês e ano. Segue exemplo:
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // +1 pois janeiro seria mês 0 então se adiciona 1
const ano = dataAtual.getFullYear();

console.log(dia);
console.log(mes);
console.log(ano);

// Datas no futuro ou no passado, segue exemplo:
const dataFutura = new Date(dataAtual); // Criando uma cópia para não alterar a original
dataFutura.setDate(dataFutura.getDate() + 7);
console.log(dataFutura);

// Calculando a idade com base na data de nascimento:
// Criando um objeto Date para a data de nascimento
const dataDeNascimento = new Date("1997-11-05");

// Calculando a diferença em milissegundos entre a data atual e a de nascimento
const diferencaEmMilissegundos = dataAtual - dataDeNascimento;
console.log(diferencaEmMilissegundos);

// Convertendo a diferença de milissegundos para anos:
// Dividimos pelo número total de milissegundos em um ano (365.25 dias para incluir anos bissextos)
// e utilizamos Math.floor para obter apenas a parte inteira (anos completos).
const idade = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000)); // Anos, Horas, Minutos, Segundos, Milissegundos

// Exibindo a idade no console
console.log(idade);

// Exibindo uma mensagem com a idade calculada
console.log("Hoje dia 12 de novembro de 2024, estou com " + idade + " anos de idade");

// Formatando Data com toLocaleDateString, segue exemplo:
const formatarData = dataAtual.toLocaleDateString("pt-BR" , opcoes);
console.log(formatarData);

// toLocaleDateString -> Permite formatar a data de acordo com a localização do usuário.



//Formatando Data com API Intl.DateTimeFormatm segue exemplo:
//Código Javascript:

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes2)

const dataFormatada = formatador.format(dataAtual)
console.log(dataFormatada);
