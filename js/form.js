let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento){

    evento.preventDefault () //anula estrutura padrão, nesse caso em especifico anula a atualização

    let form = document.querySelector('#form-adiciona')  //primeiro é o evento que vai ser exectado, 2 é a funcao que vai escutar

    let paciente = obterValoresDoForm(form)

    let erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    let mensagemErro = document.querySelector("#mesagens-erro")
    mensagemErro.innerHTML = ''

})
//--------------------------------------------------------------------------------------//

function validaPaciente(paciente){
    let erros = []

    if(paciente.nome.length == 0){
        erros.push('o nome não pode estar em branco')
    } 
    if(paciente.gordura.length == 0){
        erros.push('A gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('o peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('A altura não pode estar em branco')
    }
    if(!validaPeso(paciente.peso)){
        erros.push('Peso valido')
    }
    if(!validaAltura(paciente.altura)){
        erros.push('Altura valida')
    }
    return erros
}


function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erro){
        let li = document.createElement('li')
        li.textContent = erro 
        ul.appendChild(li) //regras de negocio//
    })
}









//------------------------------------------------------------------------------------------//


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