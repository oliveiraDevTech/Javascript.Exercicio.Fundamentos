function trararErroELancar(erro) {
//throw 10
//throw 'mensagem'
throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
}   
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');

    } catch (error) {
        trararErroELancar(error)
    }finally{
        console.log('final');
        
    }
    
}

const obj = {nome: "Roberto"}

imprimirNomeGritado(obj)