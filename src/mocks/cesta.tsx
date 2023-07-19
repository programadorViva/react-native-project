
const tomate =  require("../../assets/frutas/Tomate.png");
const batata =  require("../../assets/frutas/Batata.png");
const pepino =  require("../../assets/frutas/Pepino.png");
const abobora =  require("../../assets/frutas/Abóbora.png");
const brocolis =  require("../../assets/frutas/Brócolis.png");

const cesta = {
    top: {
        title: "Detalhe da cesta",
    },
    details:{
        name: 'Cesta de verduras',
        farmName: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.',
        price: 'R$ 40,00',
        button: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          },
        ]
      }
}

export default cesta;