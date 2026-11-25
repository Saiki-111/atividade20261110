// ==================================================================
// IFPB - Desenvolvimento de Aplicações Web I
// Atividade 9 - JavaScript I
// Fundamentos · variáveis · tipos · operadores · condicionais
// ==================================================================

// Parte 1 — Preparação
console.log("JavaScript carregado!");


// ==================================================================
// Parte 2 — Variáveis e tipos
// Dados fictícios de um aluno.
// ==================================================================
const nomeAluno = "Ana Souza";
let idade = 20;
const matriculado = true;

console.log("--- Parte 2: Variáveis e tipos ---");
console.log("nomeAluno:", nomeAluno, "| tipo:", typeof nomeAluno);
console.log("idade:", idade, "| tipo:", typeof idade);
console.log("matriculado:", matriculado, "| tipo:", typeof matriculado);


// ==================================================================
// Parte 3 — Operadores
// Cria duas variáveis numéricas e mostra os resultados.
// ==================================================================
const a = 12;
const b = 5;

console.log("--- Parte 3: Operadores ---");
console.log("a =", a, "| b =", b);
console.log("soma (a + b):", a + b);
console.log("subtração (a - b):", a - b);
console.log("multiplicação (a * b):", a * b);
console.log("divisão (a / b):", a / b);
console.log("resto da divisão (a % b):", a % b);

// Resposta (comentário):
// O primeiro número (a = 12) é maior que o segundo (b = 5)? Sim -> a > b é true.
// Eles são estritamente iguais (mesmo valor E mesmo tipo)? Não -> a === b é false.
console.log("a > b?", a > b);
console.log("a === b (estritamente iguais)?", a === b);


// ==================================================================
// Parte 4 — Entrada e conversão
// prompt() sempre retorna texto; usamos Number() para converter.
// Teste com 10 e 5 -> a soma deve ser 15 (e não "105").
// Teste com "abc" -> Number("abc") resulta em NaN.
// ==================================================================
const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("--- Parte 4: Entrada e conversão ---");
console.log("n1 =", n1, "| tipo:", typeof n1);
console.log("n2 =", n2, "| tipo:", typeof n2);
console.log("Soma de n1 + n2 =", n1 + n2); // 10 + 5 = 15 (não "105")

// Testando entrada inválida (ex.: "abc")
const invalido = Number("abc");
console.log("Teste com entrada inválida:");
console.log("Number('abc') =", invalido, "| tipo:", typeof invalido, "| É NaN?", Number.isNaN(invalido));


// ==================================================================
// Parte 5 — Condicionais (if / else if / else)
// ==================================================================

// --- 5.1 — Maioridade ---
const idadeEntrada = Number(prompt("Digite a sua idade:"));
console.log("--- Parte 5.1: Maioridade ---");
if (idadeEntrada >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// --- 5.2 — Classificação de nota ---
const nota = Number(prompt("Digite a nota (0 a 100):"));
console.log("--- Parte 5.2: Classificação de nota ---");
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// --- 5.3 — Número par ou ímpar ---
const numero = Number(prompt("Digite um número inteiro:"));
console.log("--- Parte 5.3: Par ou ímpar ---");
if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}


// ==================================================================
// Parte 6 — Depuração
//
// Trecho original (com erros):
//   const idade = prompt("Idade:");
//   if (idade = 18) {
//     console.log("Tem exatamente 18 anos")
//   } else {
//     console.log("Idade diferente de 18");
//   }
//   console.log(Idade);
//
// Problemas encontrados (pelo menos 3):
//   1) prompt() retorna string; "idade" precisa ser convertida com Number().
//   2) if (idade = 18) usa "=" (atribuição) em vez de "===" (comparação estrita).
//      Atribuição sempre retorna o valor atribuído, então if vira "if (18)" -> true.
//   3) console.log(Idade) referencia uma variável "Idade" inexistente;
//      o correto é "idade" (minúsculo). JS diferencia maiúsculas de minúsculas.
//   4) (bônus) falta ponto e vírgula após console.log("Tem exatamente 18 anos").
//
// Versão corrigida:
// ==================================================================
const idadeCorrigida = Number(prompt("Idade:"));
if (idadeCorrigida === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Idade diferente de 18");
}
console.log(idadeCorrigida);


// ==================================================================
// Desafio final — Mini programa "Situação do aluno"
// ==================================================================
const nomeDesafio = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) / 2;
const situacao = media >= 70 ? "Aprovado" : "Reprovado";

console.log("--- Desafio final: Situação do aluno ---");
console.log(`Aluno: ${nomeDesafio} | Média: ${media} | Situação: ${situacao}`);
