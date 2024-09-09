function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for igual a uma string vazia
    if(!campoPesquisa){
        section.innerHTML = "<p>Personagem não encontrado. Digite o nome do Personagem</p>"
        return
    }

    // Pesquisa com letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let personagem = "";
    let descricao = "";
    let tags = "";

     // Itera sobre cada dado da lista de dados
    for (let dado of dados){
        // Se o titulo ou a descrição for pesquisado com letra minuscula
        personagem = dado.personagem.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se o titulo, a descrição ou as tags inclui campoPesquisa. Se não quiser que o campoPesquisa pesquise a partir da descrição é só remover a parte da descrição. 
        if (personagem.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))){
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
                <img class="personagem" src="${dado.imagem}" alt="" style=" width: 180px; height: auto;object-fit: fill;">
                <h2>
                    <a href="#" target="_blank">${dado.personagem}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }

    //Se o resultado não for encontrado ou se ele fosse negativo
    if (!resultados) {
        resultados = "<p>Personagem não encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}