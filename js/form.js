let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento){

    evento.preventDefault () //anula estrutura padrão, nesse caso em especifico anula a atualização

    let form = document.querySelector('#form-adiciona')  //primeiro é o evento que vai ser exectado, 2 é a funcao que vai escutar

    let paciente = obterValoresDoForm(form)

    adicionaPacienteNaTabela(paciente)

    console.log(paciente)

})


//ligção com o botão

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}



//colocando as informações para colocar os valores da tabela por cada parametro especifico
function montarTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}


function montarTd(dado, classe){
    //crianco a td e a ligação dela com o botão de maneira dinamica e autonoma
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function obterValoresDoForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
} 