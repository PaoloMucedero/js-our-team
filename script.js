const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// FUNZIONE CHE CREA L'HTML DI UNA SINGOLA CARD
function creaTeamCard(member) {
  return `
    <div class="team-card">
      <img src="${member.img}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <p>${member.email}</p>
    </div>
  `;
}

// FUNZIONE CHE SI OCCUPA DI CREARE E MOSTRARE TUTTE LE CARDS IN PAGINA
function renderTeam(container) {
  let cards = ""; // variabile che conterrà tutte le cards

  // COME SEMPRE DEVO CICLARE L'ARRAY teamMembers
  for (let index = 0; index < teamMembers.length; index++) {
    const member = teamMembers[index]; // salvo il singolo membro
    const cardHTML = creaTeamCard(member); // creo la card HTML
    cards += cardHTML; // accumulo le cards
  }

  // SPINGO L'HTML IN PAGINA
  container.innerHTML = cards;
}