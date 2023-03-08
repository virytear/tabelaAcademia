let titulo = document.querySelector('.titulo') //seleciona a classe do html e faço alteração nela usando o document - alem de deixar dinamico //
titulo.textContent = 'Aparecida Nutricionista' //atualizar o conteudo

//--------------------------------------//

let pacientes = document.querySelectorAll('.paciente')
//console.log(pacientes)

for (var i = 0; i <= pacientes.length; i++){ // laço de repetição
    let paciente = pacientes [i]

     //peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    //altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent 

    let imcTd = paciente.querySelector('.info-imc') //pega a cedula
    
    let imc = calculaImc (peso, altura)
    imcTd.textContent = imc

}


    function calculaImc (peso, altura){
        let imc = 0
        imc = peso / (altura * altura) //calculo 
        return imc.toFixed(2) //ajuste das casas decimais 
}


