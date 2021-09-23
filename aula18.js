// Loop de Pares
// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

let loopDePares = num => {
    for (i = 0; i <= 100; i++) {
      ;(num + i) % 2 == 0
        ? console.log('O número ' + num + ' + ' + i + ' é par!')
        : console.log(i)
    }
  }
  
  loopDePares(3)
  
  // Loop ímpares com palavra
  // Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
  // Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.
  
  let loopDeImpares = (num, palavra) => {
    for (i = 0; i <= 100; i++) {
      ;(num + i) % 2 != 0 ? console.log(palavra) : console.log(i)
    }
  }
  
  loopDeImpares(3, 'ímpar')
  
  // Soma
  // 	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.
  // Exemplo:
  // soma(3) deve retornar 6 pois faz (1 +2 +3)
  // soma(8) deve retornar 36
  
  let somar = num => {
    let soma = num
    for (i = num; i > 0; i--) {
      return (soma = soma + i)
    }
  }
  
  console.log(somar(3))
  
  // Novo Array
  // Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.
  // Exemplo:
  // newArray(5) deve retornar [1,2,3,4,5]
  // newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]
  
  let newArray = num => {
    let array = []
    for (i = 1; i <= num; i++) {
      array.push(i)
    }
    return array
  }
  
  console.log(newArray(5))
  
  // String.split()
  // Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
  // Importante: Você não pode usar o String.split()
  // Exemplo:
  // split(“olá”) deve retornar [”o”,”l”,”á”]
  // split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]
  
  let split = palavra => {
    let stringArray = []
    for (i = 0; i < palavra.length; i++) {
      stringArray.push(palavra[i])
    }
    return stringArray
  }
  
  console.log(split('Mariana'))
  
  // Mover os zeros para o final
  // Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.
  
  // Exemplo:
  // moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
  // moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]
  
  let array1 = [false, 1, 0, 1, 2, 0, 1, 3, 'a']
  
  let moverZeros = array => {
    let arrayOrdenada = []
    array.filter(elemento => {
      if (elemento != 0) {
        arrayOrdenada.unshift(elemento)
      } else {
        arrayOrdenada.push(elemento)
      }
    })
    return arrayOrdenada
  }
  
  console.log(moverZeros(array1))