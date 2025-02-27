function alterarSecao(secao) {
    const secoes = {
        tabaco: "Informações sobre tabaco.",
        eucalipto: "Dados sobre cultivo de eucalipto.",
        clima: "Previsão do tempo e clima na região.",
        perfil: "Perfil e configurações do usuário.",
        principal: "Área Principal com lista de tarefas e controle de saldo"
    };
    document.getElementById("conteudo-principal").innerText = secoes[secao];
    document.getElementById("titulo-secao").innerText = secao.charAt(0).toUpperCase() + secao.slice(1);
}
