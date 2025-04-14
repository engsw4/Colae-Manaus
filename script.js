const eventos = [
  {
    title: "Teatro Amazonas",
    date: "Segunda a Sábado - 09h às 17h",
    location: "Centro",
    category: "exposicao",
    gratuito: false,
    description: "Um dos teatros mais bonitos do Brasil, símbolo cultural do estado.",
    link: ""
  },
  {
    title: "Musa - Museu da Amazônia",
    date: "Todos os dias - 08h às 17h",
    location: "Reserva Florestal Adolpho Ducke",
    category: "exposicao",
    gratuito: false,
    description: "Trilhas, torre de observação e muita biodiversidade.",
    link: ""
  },
  {
    title: "Ponta Negra",
    date: "Livre acesso",
    location: "Zona Oeste",
    category: "gratuito",
    gratuito: true,
    description: "Praia urbana, ideal para passeios, fotos e eventos ao ar livre.",
    link: ""
  },
  {
    title: "Encontro das Águas",
    date: "Todos os dias - Passeios de barco",
    location: "Rio Negro e Solimões",
    category: "gratuito",
    gratuito: false,
    description: "Fenômeno natural onde dois rios correm lado a lado sem se misturar.",
    link: ""
  },
  {
    title: "Manaura Shopping",
    date: "Todos os dias - 10h às 22h",
    location: "Av. Mário Ypiranga",
    category: "gratuito",
    gratuito: true,
    description: "Centro comercial com lojas, cinema e gastronomia local.",
    link: ""
  },
  {
    title: "Mercado Municipal Adolpho Lisboa",
    date: "Seg a Sáb - 06h às 17h",
    location: "Centro",
    category: "exposicao",
    gratuito: true,
    description: "Mercado histórico com artesanato e produtos regionais.",
    link: ""
  },
  {
    title: "Cigs Zoo",
    date: "Ter a Dom - 09h às 17h",
    location: "São Jorge",
    category: "exposicao",
    gratuito: false,
    description: "Zoológico mantido pelo Exército com animais da Amazônia.",
    link: ""
  },
  {
    title: "Arena da Amazônia",
    date: "Visitas agendadas",
    location: "Av. Constantino Nery",
    category: "exposicao",
    gratuito: false,
    description: "Estádio moderno utilizado na Copa de 2014.",
    link: ""
  },
  {
    title: "Largo São Sebastião",
    date: "Livre acesso",
    location: "Centro",
    category: "gratuito",
    gratuito: true,
    description: "Praça em frente ao Teatro Amazonas, com eventos e arte de rua.",
    link: ""
  },
  {
    title: "Palácio Rio Negro",
    date: "Ter a Sáb - 09h às 15h",
    location: "Centro",
    category: "exposicao",
    gratuito: true,
    description: "Residência histórica de governadores, hoje centro cultural.",
    link: ""
  },
  {
    title: "Bosque da Ciência",
    date: "Seg a Sáb - 09h às 14h",
    location: "INPA",
    category: "exposicao",
    gratuito: false,
    description: "Parque com biodiversidade, lagos, peixes-boi e ciência.",
    link: ""
  },
  {
    title: "Parque Jefferson Péres",
    date: "Livre acesso",
    location: "Centro",
    category: "gratuito",
    gratuito: true,
    description: "Área verde urbana com trilhas e espaços para relaxar.",
    link: ""
  },
  {
    title: "Museu Paço da Liberdade",
    date: "Ter a Sáb - 09h às 15h",
    location: "Centro",
    category: "exposicao",
    gratuito: true,
    description: "Antiga sede da prefeitura, hoje museu de história e arte.",
    link: ""
  },
  {
    title: "Hope Bay Parque",
    date: "Todos os dias - 10h às 21h",
    location: "Av. das Torres",
    category: "exposicao",
    gratuito: false,
    description: "Parque aquático com atrações para todas as idades.",
    link: ""
  }
];

function exibirEventos(lista) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  lista.forEach(e => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${e.title}</h3>
      <p><strong>🕒Data e Hora:</strong> ${e.date}</p>
      <p><strong>📍Local:</strong> ${e.location}</p>
      <p><strong>Descrição:</strong> ${e.description}</p>
      ${e.link ? `<p><a href="${e.link}" target="_blank">Mais informações</a></p>` : ""}
      ${e.gratuito ? `<p><strong style="color: green;">🌿Evento Gratuito</strong></p>` : ""}
    `;

    container.appendChild(card);
  });
}

function filtrar(tipo) {
  if (tipo === "todos") {
    exibirEventos(eventos);
  } else if (tipo === "gratuito") {
    const gratuitos = eventos.filter(e => e.gratuito);
    exibirEventos(gratuitos);
  } else {
    const filtrados = eventos.filter(e => e.category === tipo);
    exibirEventos(filtrados);
  }
}

// Inicializa
document.addEventListener("DOMContentLoaded", () => {
  exibirEventos(eventos);

  const modoSalvo = localStorage.getItem("modoNoturno") === "true";
  if (modoSalvo) document.body.classList.add("dark-mode");

  document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modoAtual = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoNoturno", modoAtual);
  });
});
