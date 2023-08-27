import simon from "/public/projects/simon.png";
import drumKit from "/public/projects/drum-kit.jpeg";
import theDiceGame from "/public/projects/the-dice-game.jpeg";
import weatherProject from "/public/projects/weather-project.jpeg";
import resultssumarycomponent from "/public/projects/results-summary-component-main.png";
import previewcard from "/public/projects/previewcard.png";
import todolist from "/public/projects/ToDoList.jpg";
import keeper from "/public/projects/Keeper.jpeg";

const projects = [
    {
        title: "Weather Project",
        description: "Desenvolvi o Projeto Clima, uma aplicação com uma API que fornece informações meteorológicas em tempo real para cidades. Com uma interface amigável, onde os usuários podem buscar dados como temperatura, umidade e velocidade do vento. Utilizando a API do OpenWeatherMap, integrei os dados necessários para fornecer informações atualizadas. Explore o meu Projeto Clima e confira as condições climáticas de suas cidades favoritas! O código-fonte está disponível no meu repositório do GitHub: ",
        path: weatherProject,
        flexDirection: "row",
        link: "https://felipemt21.github.io/simon-game-challenge/",
        github: "https://github.com/FelipeMT21/weather-project"
    },
    {
        title: "Keeper",
        description: "Neste projeto, criei um aplicativo chamado Keeper que permite ao usuário adicionar e apagar notas. O objetivo deste desafio foi aprimorar meus conhecimentos em React, JavaScript, manipulação do DOM e Node.js. O código-fonte está disponível no meu repositório do GitHub:",
        path: keeper,
        flexDirection: "row-reverse",
        link: "https://keeper-note-xi.vercel.app/",
        github: "https://github.com/FelipeMT21/keeper-note"
    },
    {
        title: "To Do List",
        description: "Neste projeto, criei uma To-Do List integrada com o banco de dados MongoDB, permitindo ao usuário adicionar e apagar itens da lista, além de criar listas personalizadas através da URL, adicionando um nome após a barra '/'. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript, Node.js, EJS, bancos de dados NoSQL e MongoDB. O código-fonte está disponível no meu repositório do GitHub:",
        path: todolist,
        flexDirection: "row",
        link: "",
        github: "https://github.com/FelipeMT21/todolist-project"
    },
    {
        title: "Simon Game",
        description: "Desafio proposto no curso The Complete 2023 Web Development Bootcamp. Neste projeto, criei um jogo do Simon que consiste em um desafio de memória com sequências de cores ou sons. O objetivo é repetir a sequência corretamente. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript, funções e manipulação do DOM e jQuery para atualização da página.  O código-fonte está disponível no meu repositório do GitHub:",
        path: simon,
        flexDirection: "row-reverse",
        link: "https://felipemt21.github.io/simon-game-challenge/",
        github: "https://felipemt21.github.io/simon-game-challenge/"
    }
];

export const allProjects = [
    {
        title: "Weather Project",
        description: "Desenvolvi o Projeto Clima, uma aplicação com uma API que fornece informações meteorológicas em tempo real para cidades. Com uma interface amigável, onde os usuários podem buscar dados como temperatura, umidade e velocidade do vento. Utilizando a API do OpenWeatherMap, integrei os dados necessários para fornecer informações atualizadas. Explore o meu Projeto Clima e confira as condições climáticas de suas cidades favoritas! O código-fonte está disponível no meu repositório do GitHub:",
        path: weatherProject,
        flexDirection: "row",
        link: "https://www.linkedin.com/posts/jo%C3%A3o-felipe-1028aa210_api-jquery-fullstack-activity-7068895592818589696-vCTm?utm_source=share&utm_medium=member_desktop",
        github: ""
    },
    {
        title: "Keeper",
        description: "Neste projeto, criei um aplicativo chamado Keeper que permite ao usuário adicionar e apagar notas. O objetivo deste desafio foi aprimorar meus conhecimentos em React, JavaScript, manipulação do DOM e Node.js. O código-fonte está disponível no meu repositório do GitHub:",
        path: keeper,
        flexDirection: "row-reverse",
        link: "https://keeper-note-xi.vercel.app/",
        github: "https://github.com/FelipeMT21/keeper-note"
    },
    {
        title: "To Do List",
        description: "Neste projeto, criei uma To-Do List integrada com o banco de dados MongoDB, permitindo ao usuário adicionar e apagar itens da lista, além de criar listas personalizadas através da URL, adicionando um nome após a barra '/'. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript, Node.js, EJS, bancos de dados NoSQL e MongoDB. O código-fonte está disponível no meu repositório do GitHub:",
        path: todolist,
        flexDirection: "row",
        link: "",
        github: "https://github.com/FelipeMT21/todolist-project"
    },
    {
        title: "Simon Game",
        description: "Desafio proposto no curso The Complete 2023 Web Development Bootcamp. Neste projeto, criei um jogo do Simon que consiste em um desafio de memória com sequências de cores ou sons. O objetivo é repetir a sequência corretamente. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript, funções e manipulação do DOM e jQuery para atualização da página. O código-fonte está disponível no meu repositório do GitHub:",
        path: simon,
        flexDirection: "row-reverse",
        link: "https://felipemt21.github.io/simon-game-challenge/",
        github: "https://github.com/FelipeMT21/simon-game-challenge#my-process"
    },
    {
        title: "Drum Kit",
        description: "Desafio proposto no curso The Complete 2023 Web Development Bootcamp. Neste projeto, criei uma bateria virtual que toca sons de instrumentos quando clicada com o mouse ou quando as teclas corretas são pressionadas. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript, funções e manipulação do DOM para atualização da página. O código-fonte está disponível no meu repositório do GitHub:",
        path: drumKit,
        flexDirection: "row",
        link: "https://felipemt21.github.io/drum-kit/",
        github: "https://github.com/FelipeMT21/drum-kit"

    },
    {
        title: "The Dice Game",
        description: "Desafio proposto no curso The Complete 2023 Web Development Bootcamp. Neste projeto, construí um jogo de dados que atualiza aleatoriamente os valores dos dados e exibe qual jogador venceu: Jogador 1 ou Jogador 2. O objetivo deste desafio foi aprimorar meus conhecimentos em JavaScript e no uso do DOM para manipulação da página. O código-fonte está disponível no meu repositório do GitHub:",
        path: theDiceGame,
        flexDirection: "row-reverse",
        link: "https://felipemt21.github.io/the-dice-game/",
        github: "https://github.com/FelipeMT21/drum-kit"
    },
    {
        title: "Results Sumary Component",
        description: "Esta é uma solução que desenvolvi para o desafio de construir um componente de resumo de resultados de testes, com o objetivo de aprimorar meus conhecimentos em HTML, CSS, Grid, Flexbox e adaptação para mobile. O código-fonte está disponível no meu repositório do GitHub:",
        path: resultssumarycomponent,
        flexDirection: "row",
        link: "https://felipemt21.github.io/results-summary-component/",
        github: "https://github.com/FelipeMT21/drum-kit"
    },
    {
        title: "Preview Card",
        description: "Esta é uma solução que desenvolvi para o desafio de construir um componente de visualização de produto, com o objetivo de aprimorar meus conhecimentos em HTML, CSS, Grid e Flexbox. O código-fonte está disponível no meu repositório do GitHub:",
        path: previewcard,
        flexDirection: "row-reverse",
        link: "https://felipemt21.github.io/product-preview-card-component-main/",
        github: "https://github.com/FelipeMT21/product-preview-card-component-main"
    }
];

export default projects;