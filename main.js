// creo un array di oggetti.

const teamCards = [
    {
        image: "img/wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        job: "Founder & CEO",
    },

    {
        image: "img/angela-caroll-chief-editor.jpg",
        name: "Angela Caroll",
        job: "Chief Editor",
    },
    
    {
        image: "img/walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        job: "Office Mananger",
    },
    
    {
        image: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        job: "Social Media Manager",
    },
    
    {
        image: "img/scott-estrada-developer.jpg",
        name: "Scott Estrada",
        job: "Developer",
    },
    
    {
        image: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramos",
        job: "Graphic Designer",
    },

]

// seleziono il container e lo inserisco in una variabile js.

const teamContainer = document.querySelector(".team-container");


// creo un ciclo in modo tale da inserire ogni singola card all'interno di teamContainer.

for(let i = 0; i < teamCards.length; i++) {
    const teamCard = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${teamCards[i].image}"
                alt="${teamCards[i].name}"
              />
            </div>
            <div class="card-text">
              <h3>${teamCards[i].name}</h3>
              <p>${teamCards[i].job}</p>
            </div>
          </div>
    `;
    teamContainer.innerHTML += teamCard;
}

/*------- BONUS -------*/ 

// seleziono gli elementi del dom e li importo in una variabile js.

const memberName = document.getElementById("name");
const memberRole = document.getElementById("role");
const memberImage = document.getElementById("image");
const btnMember = document.getElementById("addMemberButton");


// faccio in modo che i dati inseriti nelle precedenti variabili mi creino un nuovo oggetto.
// faccio in modo che il nuovo oggetto venga aggiunto in teamCards.
// aggiungo un evento click a btnMember e creo una funzione che mi possa aggiungere la nuova card.

btnMember.addEventListener("click",
    function() {
        const newMember = {
            image: memberImage.value,
            name: memberName.value,
            job: memberRole.value,
        }
        const teamCard = `
        <div class="team-card">
                <div class="card-image">
                <img
                    src="${newMember.image}"
                    alt="${newMember.name}"
                />
                </div>
                <div class="card-text">
                <h3>${newMember.name}</h3>
                <p>${newMember.job}</p>
                </div>
            </div>
        `;
        teamContainer.innerHTML += teamCard;
        teamCards.push(teamCard);
    }
);



 
