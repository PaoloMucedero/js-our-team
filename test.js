/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
*/
// SELEZIONO L'ELEMENTO HTML IN CUI INSERIRE LE CARDS
const container = document.getElementById("team-members-card-container");

// RENDER INIZIALE DEL TEAM (APPENA CARICA LA PAGINA)
renderTeam(container);

/* ------------------------------------
   GESTIONE FORM PER AGGIUNGERE MEMBRI
------------------------------------ */

// SELEZIONO IL FORM
const submitForm = document.getElementById("new-member-form");

// INTERCETTO L'INVIO DEL FORM
submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); // blocco il refresh della pagina

    // PRENDO I VALORI DAGLI INPUT
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;

    // CREO NUOVO OGGETTO MEMBRO CON I DATI DEL FORM
    const newMember = {
        name,
        role,
        email,
    };

    // AGGIUNGO IL NUOVO MEMBRO ALL'ARRAY
    teamMembers.push(newMember);

    // RENDER AUTOMATICO AGGIORNATO
    renderTeam(container);

    // RESETTO IL FORM
    submitForm.reset();
});