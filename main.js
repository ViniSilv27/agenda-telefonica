const form = document.getElementById('form-contacts')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionaContatos()

})

function adicionaContatos(){
    const nome = document.getElementById('form-nome')
    const numero =document.getElementById('form-numero')
    const email = document.getElementById('form-email')
    let linha = ''
    linha += `<tr>`
    linha += `<td><img src="./imagens/cell.png" alt="cell"></td>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += `<td>${email.value}</td>`
    linha += `</tr>`
    linhas += linha
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML= linhas


    nome.value =''
    numero.value=''
    email.value=''

}
function mascaraTelefone(input) {
    let telefone = input.value.replace(/\D/g, '');
    
    if (telefone.length <= 2) {
        input.value = `(${telefone}`;
    } else if (telefone.length <= 7) {
        input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2)}`;
    } else if(telefone.length== 7){
        input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
    } else{
        input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7,11)}`;


    }
}