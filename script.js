const activities = {
  croisiere: {
    title: "Croisière",
    description: "Prendre le large à bord de Pandora, au départ de Saint-Malo ou vers de nouveaux horizons. On partage la navigation, les escales et toutes les petites choses qui font la vie à bord.",
    practical: "Chaque sortie est encadrée par un chef de bord. Transport, nourriture et frais de port sont partagés entre les membres de l’équipage. Le club vous précisera les dates, le niveau et le budget de chaque bord."
  },
  competition: {
    title: "Compétition",
    description: "Progresser en équipage et découvrir l’intensité de la régate. Le groupe d’entraînement navigue sur J80 au Havre et sur Grand Surprise à Cherbourg, avec des échanges et des débriefings à Paris.",
    practical: "Cette activité s’adresse à des pratiquants déjà expérimentés et demande un engagement régulier sur l’année. Contactez le club pour échanger sur votre niveau et vos envies."
  },
  permis: {
    title: "Permis côtier",
    description: "Approfondir ses connaissances nautiques et prendre confiance. Le club propose une préparation théorique à Paris, complétée par une révision et une formation pratique sur la Seine avec un bateau-école partenaire.",
    practical: "L’adhésion à la section est nécessaire. Dates, places et tarif de la prochaine session sont à confirmer : les informations de l’ancien site présentent des incohérences."
  }
};

const dialog = document.querySelector("#activity-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogPractical = document.querySelector("#dialog-practical");
const dialogContact = document.querySelector("#dialog-contact");

document.querySelectorAll("[data-activity]").forEach((button) => {
  button.addEventListener("click", () => {
    const activity = activities[button.dataset.activity];
    dialogTitle.textContent = activity.title;
    dialogDescription.textContent = activity.description;
    dialogPractical.textContent = activity.practical;
    dialogContact.href = `mailto:atscaf.voile.paris@gmail.com?subject=${encodeURIComponent(`Découvrir l’activité ${activity.title}`)}`;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    dialog.close();
  }
});
