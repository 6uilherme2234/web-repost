/*criar função que esta sendo chamada no form
validação
1 palavra function + nome da função + () -> sem paramentros
2 abra a função ->{}
3 obtenção dos valores(criar variaveis) dos campos inserido pelo usuario:
4) impedir o envio do form, caso o usuario deixe algum campo vzio....(if)
*/
function teste() {
    //obtenção de valores inseridos pelos usuários 
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var msg = document.getElementById('msg').value
    //validação dos campos nos form
    if (nome == '') {
        alert('Digite seu nome');
        return false; //Impede o envio do formulário
    }
    if (email == '') {
        alert('Digite seu email');
        return false; //Impede o envio do formulario
    }
    if (msg == '') {
        alert('Digite sua mensagem');
        return false; //Impede o envio do formulario
    }
    //Gravar os cookies codificados
    document.cookie = `nome=${encodeURIComponent(nome)}`;
    document.cookie = `email=${encodeURIComponent(email)}`;
    document.cookie = `msg=${encodeURIComponent(msg)}`;

    //Enviar o form valido
    return true;
}
