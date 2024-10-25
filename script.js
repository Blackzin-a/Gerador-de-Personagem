// dados dos personagens
const nomesPersonagens = [
    "Aragorn", "Legolas", "Gimli", "Frodo", "Samwise",
    "Gandalf", "Boromir", "Gollum", "Sauron", "Eowyn",
    "Galadriel", "Thorin", "Bilbo", "Dwalin", "Kili", "Alaric", "Balin", "Caelum", "Daeron", "Eirik", "Fenrir", "Galen", "Haldor", "Ilyana", "Jorvik",
"Kaelen", "Lirael", "Maeglin", "Nienna", "Oropher", "Phaedra", "Quillian", "Rhaegar", "Seraphine", "Thranduil",
"Ulfgar", "Valeria", "Wulfric", "Xanthos", "Yara", "Zephyrus", "Aelric", "Brynja", "Cador", "Dorian",
"Elowen", "Faelan", "Gael", "Helios", "Idris", "Jareth", "Khadgar", "Lothar", "Morgana", "Nymeria"

];

const classesPersonagens = [
    "Guerreiro", "Mago", "Arqueiro", "Paladino"
];

const habilidadesPersonagens = [
    "Força", "Agilidade", "Inteligência", "Resistência", "Carisma", "Destreza", "Sabedoria", "Sorte"
];

const equipamentosPersonagens = [
    "Espada", "Escudo", "Arco", "Varinha", "Machado", "Adaga", "Cajado", "Lança", "Armadura", "Poção"
];

const descricoesPersonagens = [
    "Um guerreiro destemido em busca de aventura.",
    "Um mago sábio que conhece os segredos do universo.",
    "Um arqueiro ágil que nunca erra o alvo.",
    "Um ladino astuto que sempre tem um truque na manga.",
    "Um paladino justo que luta pela verdade."
];

// imagens de personagens
const imagensPersonagens = [
    "https://i.pinimg.com/236x/de/b0/51/deb0519f739744a9b97097d79af6108e.jpg",
    "https://i.pinimg.com/236x/be/6f/bc/be6fbc0220a78b830d88e76736f66df3.jpg",
    "https://i.pinimg.com/550x/fb/f8/71/fbf8715d0ef433390cc707b1aba575ea.jpg",
    "https://i.pinimg.com/236x/59/8c/b8/598cb897c68daaff5f82baed9dbfa9f1.jpg",
    "https://i.pinimg.com/236x/cb/81/f3/cb81f39095429e286435c14aaa8b9a11.jpg"
];

// Função que gera o personagem
document.getElementById('gerar-personagem').addEventListener('click', function() {
    // Gerar nome, classe e habilidades aleatórias
    const nomeAleatorio = nomesPersonagens[Math.floor(Math.random() * nomesPersonagens.length)];
    const classeAleatoria = classesPersonagens[Math.floor(Math.random() * classesPersonagens.length)];

    // Gera 2 habilidades aleatórias
    const habilidadeAleatoria1 = habilidadesPersonagens[Math.floor(Math.random() * habilidadesPersonagens.length)];
    let habilidadeAleatoria2;
    do {
        habilidadeAleatoria2 = habilidadesPersonagens[Math.floor(Math.random() * habilidadesPersonagens.length)];
    } while (habilidadeAleatoria1 === habilidadeAleatoria2);

    // Gera 2 equipamentos aleatórios
    const equipamentoAleatorio1 = equipamentosPersonagens[Math.floor(Math.random() * equipamentosPersonagens.length)];
    let equipamentoAleatorio2;
    do {
        equipamentoAleatorio2 = equipamentosPersonagens[Math.floor(Math.random() * equipamentosPersonagens.length)];
    } while (equipamentoAleatorio1 === equipamentoAleatorio2);

    // Gera valores aleatórios para vida e mana (entre 50 e 150)
    const vidaAleatoria = Math.floor(Math.random() * 101) + 50; // Vida aleatória
    const manaAleatoria = Math.floor(Math.random() * 101) + 50; // Mana aleatória

    // Gera uma descrição aleatória
    const descricaoAleatoria = descricoesPersonagens[Math.floor(Math.random() * descricoesPersonagens.length)];

    // Escolhe uma imagem aleatória de personagem
    const imagemAleatoria = imagensPersonagens[Math.floor(Math.random() * imagensPersonagens.length)];

    // Atualiza o HTML com os valores gerados
    document.getElementById('nome-personagem').innerText = nomeAleatorio;
    document.getElementById('classe-personagem').innerText = classeAleatoria;
    document.getElementById('habilidades-personagem').innerText = `${habilidadeAleatoria1}, ${habilidadeAleatoria2}`;
    document.getElementById('equipamentos-personagem').innerText = `${equipamentoAleatorio1}, ${equipamentoAleatorio2}`;
    document.getElementById('vida-personagem').value = vidaAleatoria; // Atualiza a barra de vida
    document.getElementById('mana-personagem').value = manaAleatoria; // Atualiza a barra de mana
    document.getElementById('imagem-personagem').src = imagemAleatoria; // Atualiza a imagem do personagem
    document.getElementById('descricao-personagem').innerText = descricaoAleatoria; // Atualiza a descrição do personagem 

    // Animação de fade-in para exibição
    const personagemDiv = document.getElementById('personagem');
    personagemDiv.style.opacity = 0; // Reseta a opacidade
    setTimeout(() => {
        personagemDiv.style.opacity = 1; // Aplica a animação de fade-in
    }, 10); // Pequeno atraso para resetar a opacidade
});

let nomesUsados = [];
let classesUsadas = [];
let habilidadesUsadas = [];
let equipamentosUsados = [];
let imagensUsadas = [];
let descricoesUsadas = [];

// Função auxiliar para gerar itens não repetidos
function gerarItemUnico(array, usados) {
    let itemAleatorio;
    do {
        itemAleatorio = array[Math.floor(Math.random() * array.length)];
    } while (usados.includes(itemAleatorio));
    usados.push(itemAleatorio);

    // Reinicia o array se todos os itens já foram utilizados
    if (usados.length === array.length) {
        usados.length = 0; // Limpa o array
    }
    return itemAleatorio;
}

// Função que gera o personagem
document.getElementById('gerar-personagem').addEventListener('click', function() {
    // Gerar nome, classe, habilidades, equipamentos, descrição e imagem de forma única
    const nomeAleatorio = gerarItemUnico(nomesPersonagens, nomesUsados);
    const classeAleatoria = gerarItemUnico(classesPersonagens, classesUsadas);

    // Gera 2 habilidades aleatórias não repetidas
    const habilidadeAleatoria1 = gerarItemUnico(habilidadesPersonagens, habilidadesUsadas);
    let habilidadeAleatoria2;
    do {
        habilidadeAleatoria2 = gerarItemUnico(habilidadesPersonagens, habilidadesUsadas);
    } while (habilidadeAleatoria1 === habilidadeAleatoria2);

    // Gera 2 equipamentos aleatórios não repetidos
    const equipamentoAleatorio1 = gerarItemUnico(equipamentosPersonagens, equipamentosUsados);
    let equipamentoAleatorio2;
    do {
        equipamentoAleatorio2 = gerarItemUnico(equipamentosPersonagens, equipamentosUsados);
    } while (equipamentoAleatorio1 === equipamentoAleatorio2);

    // Gera uma descrição e imagem únicas
    const descricaoAleatoria = gerarItemUnico(descricoesPersonagens, descricoesUsadas);
    const imagemAleatoria = gerarItemUnico(imagensPersonagens, imagensUsadas);

    // Gera valores aleatórios para vida e mana (entre 50 e 150)
    const vidaAleatoria = Math.floor(Math.random() * 101) + 50; 
    const manaAleatoria = Math.floor(Math.random() * 101) + 50; 

    // Atualiza o HTML com os valores gerados
    document.getElementById('nome-personagem').innerText = nomeAleatorio;
    document.getElementById('classe-personagem').innerText = classeAleatoria;
    document.getElementById('habilidades-personagem').innerText = `${habilidadeAleatoria1}, ${habilidadeAleatoria2}`;
    document.getElementById('equipamentos-personagem').innerText = `${equipamentoAleatorio1}, ${equipamentoAleatorio2}`;
    document.getElementById('vida-personagem').value = vidaAleatoria; 
    document.getElementById('mana-personagem').value = manaAleatoria;
    document.getElementById('imagem-personagem').src = imagemAleatoria; 
    document.getElementById('descricao-personagem').innerText = descricaoAleatoria;

    // Animação de fade-in para exibição
    const personagemDiv = document.getElementById('personagem');
    personagemDiv.style.opacity = 0; 
    setTimeout(() => {
        personagemDiv.style.opacity = 1; 
    }, 10);
});
