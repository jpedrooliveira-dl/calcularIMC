const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const resultado = document.getElementById('resultado')
const botaoCalcular = document.getElementById('calcular')

function calcularIMC() {


    const nomeUser = (nome.value)
    const alturaUser = parseFloat(altura.value)
    const pesoUser = parseFloat(peso.value)


    if (nomeUser !== '' && !isNaN(alturaUser) && !isNaN(pesoUser) && alturaUser > 0 && pesoUser > 0) {

        const resultadoDoCalculo = (pesoUser / (alturaUser * alturaUser)).toFixed(2);

        resultado.textContent = `Ola ${nomeUser}, o seu IMC e: ${resultadoDoCalculo}`
        console.log(`Ola ${nomeUser}, o seu IMC e: ${resultadoDoCalculo}`)

    } else {
        resultado.textContent = 'Erro! Verifique a sua altura ou o seu peso'
        console.log('erro')
    }
}

botaoCalcular.addEventListener('click', calcularIMC)
