let dados = [
    {
        personagem: "Goro",
        descricao: "Um Shokan com quatro braços, Goro é um dos principais vilões da série. Ele possui força sobre-humana e é um lutador implacável.",
        link: "https://pt.wikipedia.org/wiki/Goro_(personagem)",
        imagem: "./src/imagens/Goro.png",
        tags: "Shokan Quatro Braços Força"
    },
    {
        personagem: "Jade",
        descricao: "Uma ninja Edeniana, Jade é uma aliada de Kitana e um dos personagens mais ágeis da série. Ela possui habilidades de combate corpo a corpo e utiliza armas como bumerangues.",
        link: "https://pt.wikipedia.org/wiki/Jade_(personagem)",
        imagem: "./src/imagens/Jade.png",
        tags: "Edenia Ninja Ágil Bumerangue"
    },
    {
        personagem: "Jax Briggs",
        descricao: "Um ex-oficial das Forças Especiais dos Estados Unidos, Jax Briggs possui braços biônicos de metal que lhe conferem força sobre-humana. Ele é um lutador leal e patriota, sempre pronto a defender Earthrealm.",
        link: "https://pt.wikipedia.org/wiki/Jax_Briggs",
        imagem: "./src/imagens/Jax.png",
        tags: "Braços Biônicos Força Militar"
    },
    {
        personagem: "Johnny Cage",
        descricao: "Um ator de Hollywood arrogante e egocêntrico, Johnny Cage busca fama e fortuna ao participar dos torneios de Mortal Kombat. Apesar de sua personalidade extravagante, ele é um lutador habilidoso e utiliza técnicas de artes marciais em suas batalhas.",
        link: "https://pt.wikipedia.org/wiki/Johnny Cage",
        imagem: "./src/imagens/Johnny_Cage.png",
        tags: "Ator Hollywood Arrogante Artes Marciais"
    },
    {
        personagem: "Kano",
        descricao: "Líder cruel e ambicioso do clã Black Dragon, Kano é conhecido por sua sede por poder e riqueza. Com um olho cibernético e uma lâmina implantada no braço, ele é um lutador brutal e sem escrúpulos.",
        link: "https://pt.wikipedia.org/wiki/Kano",
        imagem: "./src/imagens/Kano.png",
        tags: "Black Dragon Mercenário Cibernético Cruel"
    },
    {
        personagem: "Kenshi",
        descricao: "Um espadachim cego com habilidades psíquicas, Kenshi é um defensor da justiça e da paz. Ele utiliza sua espada e seus poderes para combater o mal e proteger aqueles que ama.",
        link: "https://pt.wikipedia.org/wiki/Kenshi",
        imagem: "./src/imagens/Kenshi.png",
        tags: "Espadachim Cego Psíquico Justiça"
    },
    {
        personagem: "Kitana",
        descricao: "Uma princesa de Edenia, Kitana é uma guerreira leal e habilidosa. Ela possui fãs letais e a capacidade de criar clones de si mesma. Kitana é frequentemente retratada como uma figura nobre e bondosa.",
        link: "https://pt.wikipedia.org/wiki/Kitana",
        imagem: "./src/imagens/Kitana.png",
        tags: "Princesa Leque Guerreira Nobre"
    },
    {
        personagem: "Kung Lao",
        descricao: "Monge shaolin e descendente do Grande Kung Lao, ele é um guerreiro honrado e habilidoso. Sua marca registrada é um chapéu afiado que utiliza como arma em suas batalhas.",
        link: "https://pt.wikipedia.org/wiki/Kung_Lao",
        imagem: "./src/imagens/Kung_Lao.png",
        tags: "Monge Shaolin Chapéu Hat Trick Artes Marciais"
    },
    {
        personagem: "Liu Kang",
        descricao: "Um monge shaolin e campeão de Earthrealm, Liu Kang é um dos personagens mais justos e honrados da série. Ele é um lutador habilidoso e utiliza técnicas de artes marciais chinesas em suas batalhas. Liu Kang é considerado um dos principais protagonistas da saga.",
        link: "https://pt.wikipedia.org/wiki/Liu_Kang",
        imagem: "./src/imagens/Liu_Kang.png",
        tags: "Shaolin Campeão Artes Marciais Punho"
    },
    {
        personagem: "Mileena",
        descricao: "Uma princesa tarkatan, resultado dos experimentos genéticos de Shang Tsung, Mileena é uma guerreira cruel e ambiciosa que busca o trono de Outworld. Com aparência similar à de Kitana, mas com características mais selvagens, ela é uma força a ser temida.",
        link: "https://pt.wikipedia.org/wiki/Mileena",
        imagem: "./src/imagens/Mileena.png",
        tags: "Tarkatan Princesa Guerreira Cruel Ambiciosa Clone de Kitana"
    },
    {
        personagem: "Noob Saibot",
        descricao: "Um espectro de Netherealm e o Sub-Zero original, Noob Saibot é um ninja sombrio e vingativo. Manipulado por Quan Chi, ele busca poder e vingança contra Scorpion.",
        link: "https://pt.wikipedia.org/wiki/Noob_Saibot",
        imagem: "./src/imagens/Noob_Saibot.png",
        tags: "Netherealm Espectro Ninja Vingativo Sub-Zero Original Quan Chi Scorpion"
    },
    {
        personagem: "Raiden",
        descricao: "O deus do trovão de Earthrealm, Raiden é o protetor do reino e um dos personagens mais poderosos da série. Ele possui habilidades elétricas e a capacidade de manipular a energia. Raiden é responsável por convocar os campeões de Earthrealm para os torneios de Mortal Kombat.",
        link: "https://pt.wikipedia.org/wiki/Raiden_(Mortal_Kombat)",
        imagem: "./src/imagens/Raiden.png",
        tags: "Deus Trovão Raio"
    },
    {
        personagem: "Reptile",
        descricao: "Um ser reptiliano capaz de se camuflar e cuspir ácido, Reptile é um ninja mortal e silencioso. Ele é conhecido por sua agilidade e por sua capacidade de se esconder à vista de todos. Reptile é um membro do clã Black Dragon e é leal a Shao Kahn.",
        link: "https://pt.wikipedia.org/wiki/Reptile_(personagem)",
        imagem: "./src/imagens/Reptile.png",
        tags: "Reptiliano Camuflagem Ácido Ninja Silencioso Black Dragon Shao Kahn Veneno"
    },
    {
        personagem: "Scorpion",
        descricao: "Um dos personagens mais reconhecíveis da série, Scorpion é um ninja vingativo com um passado trágico. Ele foi traído e morto por seu clã, e agora busca vingança imortal. Sua principal arma é seu kunai, uma espécie de adaga, e seu poder especial é a bola de fogo.",
        link: "https://pt.wikipedia.org/wiki/Scorpion_(personagem)",
        imagem: "./src/imagens/Scorpion.png",
        tags: "Fogo Caveira Lin Kuie Kunai Adaga"
    },
    {
        personagem: "Shang Tsung",
        descricao: "Um ancião feiticeiro imortal, Shang Tsung é capaz de assumir a forma de outros seres e utilizar magia negra. Ele é um dos principais antagonistas da série Mortal Kombat e busca constantemente poder e domínio.",
        link: "https://pt.wikipedia.org/wiki/Shang_Tsung",
        imagem: "./src/imagens/Shang_Tsung.png",
        tags: "Feiticeiro Ancião Imortal Magia Negra Antagonista"
    },
    {
        personagem: "Shao Kahn",
        descricao: "O imperador tirano de Outworld, Shao Kahn é um gigante musculoso e poderoso. Ele busca constantemente expandir seu império e conquistar outros reinos, utilizando qualquer meio necessário.",
        link: "https://pt.wikipedia.org/wiki/Shao_Kahn",
        imagem: "./src/imagens/Shao_Kahn.png",
        tags: "Imperador Tirano Gigante Musculoso Poderoso Outworld"
    },
    {
        personagem: "Smoke",
        descricao: "Um ninja Lin Kuei transformado em uma máquina, Smoke é capaz de se tornar invisível e controlar o fumo. Ele é um personagem complexo e trágico, dividido entre sua humanidade e sua programação.",
        link: "https://pt.wikipedia.org/wiki/Smoke_(personagem)",
        imagem: "./src/imagens/Smoke.png",
        tags: "Ninja Lin Kuei Máquina Invisível Fumo Complexo Trágico Fumaça"
    },
    {
        personagem: "Sonya Blade",
        descricao: "Uma tenente das Forças Especiais, Sonya Blade é uma combatente habilidosa e determinada. Ela busca vingança contra Kano, o homem que matou seu pai.",
        link: "https://pt.wikipedia.org/wiki/Sonya_Blade",
        imagem: "./src/imagens/Sonya_Blade.png",
        tags: "Tenente Forças Especiais Combatente Habilidosa Determinada Vingança Kano"
    },
    {
        personagem: "Sub Zero",
        descricao: "Outro ninja lendário, Sub-Zero é o líder do clã Lin Kuei. Conhecido por suas habilidades de congelamento, ele é um guerreiro frio e calculista. Ao longo da série, Sub-Zero passou por diversas transformações e evoluções, tanto em suas habilidades quanto em sua personalidade.",
        link: "https://pt.wikipedia.org/wiki/Sub-Zero",
        imagem: "./src/imagens/Sub_Zero.png",
        tags: "Gelo Lin Kuei Frio Sub-Zero"
    }
];