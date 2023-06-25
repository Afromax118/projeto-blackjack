// Função para sortear uma carta
function comprarCarta() {
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
   const valores = [
     "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
   ]
 
   const naipe = naipes[Math.floor(Math.random() * 4)]
   const valor = valores[Math.floor(Math.random() * 13)]
 
   let pontuacao = 0
 
   if (valor === "A") {
     pontuacao = 11
   } else if (valor === "J" || valor === "Q" || valor === "K") {
     pontuacao = 10
   } else {
     pontuacao = Number(valor)
   }
 
   const carta = {
     texto: valor + naipe,
     valor: pontuacao
   }
 
   return carta
 }
 
 // Função para calcular a pontuação do jogador
 function calcularPontuacao(cartas) {
   let pontuacao = 0
   let possuiAs = false
 
   for (let i = 0; i < cartas.length; i++) {
     pontuacao += cartas[i].valor
 
     if (cartas[i].texto.startsWith("A")) {
       possuiAs = true
     }
   }
 
   if (possuiAs && pontuacao > 21) {
     pontuacao -= 10
   }
 
   return pontuacao
 }
 
 // Função para exibir as cartas e pontuação de um jogador
 function exibirCartasPontuacao(jogador, cartas) {
   let texto = jogador + " - cartas: "
 
   for (let i = 0; i < cartas.length; i++) {
     texto += cartas[i].texto + " "
   }
 
   const pontuacao = calcularPontuacao(cartas)
 
   texto += "- pontuação " + pontuacao
 
   console.log(texto)
 }
 
 // Função para verificar o resultado do jogo
 function verificarResultado(pontuacaoUsuario, pontuacaoComputador) {
   if (pontuacaoUsuario > 21) {
     return "O usuário perdeu!"
   } else if (pontuacaoComputador > 21) {
     return "O usuário ganhou!"
   } else if (pontuacaoUsuario === pontuacaoComputador) {
     return "Empate!"
   } else if (pontuacaoUsuario > pontuacaoComputador) {
     return "O usuário ganhou!"
   } else {
     return "O usuário perdeu!"
   }
 }
 
 // Sortear cartas para o usuário e o computador
 const cartasUsuario = [comprarCarta(), comprarCarta()]
 const cartasComputador = [comprarCarta(), comprarCarta()]
 
 // Exibir cartas e pontuação do usuário
 exibirCartasPontuacao("Usuário", cartasUsuario)
 
 // Exibir primeira carta do computador
 console.log("Computador - carta revelada:", cartasComputador[0].texto)
 
 // Perguntar ao usuário se deseja comprar mais cartas
 const resposta = confirm(
   "Deseja comprar mais uma carta?"
 )
 
 if (resposta) {
   cartasUsuario.push(comprarCarta())
   exibirCartasPontuacao("Usuário", cartasUsuario)
 }
 
 // Calcular pontuação do usuário
 const pontuacaoUsuario1 = calcularPontuacao(cartasUsuario)
 
 // Comprar cartas para o computador
 while (calcularPontuacao(cartasComputador) <= pontuacaoUsuario && pontuacaoUsuario <= 21) {
   cartasComputador.push(comprarCarta())
 }
 
 // Exibir cartas e pontuação do computador
 exibirCartasPontuacao("Computador", cartasComputador)
 
 // Verificar resultado do jogo
 const resultado = verificarResultado(pontuacaoUsuario, calcularPontuacao(cartasComputador))
 
 // Exibir resultado
 alert(resultado)
 






/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

