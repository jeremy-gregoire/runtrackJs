/**
 * Détermine si la date est un jour férié, un week-end ou un jour de travaille.
 * @param {Date} date La date à déterminer.
 */
function jourTravaille(date) {
  // La clef est constitué d'un pattern mois,jours (par exemple : 1,15 donne 15/01/<année>).
  const joursFeries = [
    { key: '1,1', title: "Jour de l'an" },
    { key: '4,1', title: 'Lundi de Pâques' },
    { key: '5,1', title: 'Fête du travail' },
    { key: '5,8', title: 'Fête de la victoire de 1945' },
    { key: '5,9', title: 'Ascension' },
    { key: '5,20', title: 'Lundi de Pantecôte' },
    { key: '7,14', title: 'Fête nationale du 14 juillet' },
    { key: '8,15', title: 'Assomption' },
    { key: '11,1', title: 'Toussaint' },
    { key: '11,11', title: "L'armistice" },
    { key: '12,25', title: 'Jour de Noël' },
  ];
  const jourSemaines = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];
  const moisAnnee = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  for (let i = 0; i < joursFeries.length; i++) {
    let jourFerie = joursFeries[i];
    let jourDateInfos = jourFerie.key.split(',');
    let numMois = jourDateInfos[0];
    let numJour = jourDateInfos[1];
    let nomJour = jourSemaines[date.getDay()].toLowerCase();
    let nomMois = moisAnnee[date.getMonth()].toLowerCase();

    if (date.getDate() == numJour && date.getMonth() == numMois - 1) {
      console.log(
        'Le',
        nomJour,
        date.getDate().toString(),
        nomMois,
        date.getFullYear().toString(),
        'est un jour férié',
        `(${jourFerie.title})`
      );
      break;
    } else if (nomJour == 'samedi' || nomJour == 'dimanche') {
      console.log(
        'Non, le',
        nomJour,
        date.getDate().toString(),
        nomMois,
        date.getFullYear().toString(),
        'est un week-end'
      );
      break;
    } else {
      console.log(
        'Oui, le',
        nomJour,
        date.getDate().toString(),
        nomMois,
        date.getFullYear().toString(),
        'est un jour de travaille'
      );
      break;
    }
  }
}

jourTravaille(new Date());
jourTravaille(new Date(2024, 0, 1));
jourTravaille(new Date(2024, 2, 30));
