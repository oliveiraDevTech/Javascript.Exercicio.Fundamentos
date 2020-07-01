//Função em JS é First-Class Object (Citizens)
//Higher order function

// criar de forma literal
function func1 () {}

//Armazenar numa variável
const func2 = function () {}

//Armazenar em um Array
const array = [
  function (a, b) {
    return a + b
  },
  func1,
  func2
]
console.log(array[0](2, 3))

//Armazaenar em um atributo de objeto
const obj = {}
obj.falar = function () {
  return 'Opa'
}
console.log(obj.falar())

//Passar função como parâmetro
function run (func) {
  func()
}

run(function () {
  console.log('Executanto...')
})

//uma função pode retornar/conter uma função
function soma (a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
