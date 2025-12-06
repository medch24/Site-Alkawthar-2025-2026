(function() {
  // --- Données du calendrier ---
  const calendarData = [
    { "Mois": "Août", "Semaine": "Semaine 1", "Jour": "Dimanche", "Date": "31/08/2025", "Type": "Orientation" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Lundi", "Date": "01/09/2025", "Type": "Orientation" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Mardi", "Date": "02/09/2025", "Type": "Orientation" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Mercredi", "Date": "03/09/2025", "Type": "Orientation" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Jeudi", "Date": "04/09/2025", "Type": "Orientation" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Dimanche", "Date": "07/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Lundi", "Date": "08/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Mardi", "Date": "09/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Mercredi", "Date": "10/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Jeudi", "Date": "11/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Dimanche", "Date": "14/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Lundi", "Date": "15/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Mardi", "Date": "16/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Mercredi", "Date": "17/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Jeudi", "Date": "18/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Dimanche", "Date": "21/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Lundi", "Date": "22/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Mardi", "Date": "23/09/2025", "Type": "Fête Nationale Saoudienne" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Mercredi", "Date": "24/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Jeudi", "Date": "25/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Dimanche", "Date": "28/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Lundi", "Date": "29/09/2025", "Type": "Cours Normale" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Mardi", "Date": "30/09/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 5", "Jour": "Mercredi", "Date": "01/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 5", "Jour": "Jeudi", "Date": "02/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Dimanche", "Date": "05/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Lundi", "Date": "06/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Mardi", "Date": "07/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Mercredi", "Date": "08/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Jeudi", "Date": "09/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Dimanche", "Date": "12/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Lundi", "Date": "13/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Mardi", "Date": "14/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Mercredi", "Date": "15/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Jeudi", "Date": "16/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Dimanche", "Date": "19/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Lundi", "Date": "20/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Mardi", "Date": "21/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Mercredi", "Date": "22/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Jeudi", "Date": "23/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Dimanche", "Date": "26/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Lundi", "Date": "27/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Mardi", "Date": "28/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Mercredi", "Date": "29/10/2025", "Type": "Cours Normale" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Jeudi", "Date": "30/10/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Dimanche", "Date": "02/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Lundi", "Date": "03/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Mardi", "Date": "04/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Mercredi", "Date": "05/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Jeudi", "Date": "06/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Dimanche", "Date": "09/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Lundi", "Date": "10/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Mardi", "Date": "11/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Mercredi", "Date": "12/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Jeudi", "Date": "13/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Dimanche", "Date": "16/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Lundi", "Date": "17/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Mardi", "Date": "18/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Mercredi", "Date": "19/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Jeudi", "Date": "20/11/2025", "Type": "Cours Normale" },
    { "Mois": "Novembre", "Semaine": "-", "Jour": "Dimanche", "Date": "23/11/2025", "Type": "Vacances" },
    { "Mois": "Novembre", "Semaine": "-", "Jour": "Lundi", "Date": "24/11/2025", "Type": "Vacances" },
    { "Mois": "Novembre", "Semaine": "-", "Jour": "Mardi", "Date": "25/11/2025", "Type": "Vacances" },
    { "Mois": "Novembre", "Semaine": "-", "Jour": "Mercredi", "Date": "26/11/2025", "Type": "Vacances" },
    { "Mois": "Novembre", "Semaine": "-", "Jour": "Jeudi", "Date": "27/11/2025", "Type": "Vacances" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Dimanche", "Date": "30/11/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 13", "Jour": "Lundi", "Date": "01/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 13", "Jour": "Mardi", "Date": "02/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 13", "Jour": "Mercredi", "Date": "03/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 13", "Jour": "Jeudi", "Date": "04/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Dimanche", "Date": "07/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Lundi", "Date": "08/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Mardi", "Date": "09/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Mercredi", "Date": "10/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Jeudi", "Date": "11/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Dimanche", "Date": "14/12/2025", "Type": "Long weekend" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Lundi", "Date": "15/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Mardi", "Date": "16/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Mercredi", "Date": "17/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Jeudi", "Date": "18/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Dimanche", "Date": "21/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Lundi", "Date": "22/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Mardi", "Date": "23/12/2025", "Type": "Cours Normale" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Mercredi", "Date": "24/12/2025", "Type": "Examen final" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Jeudi", "Date": "25/12/2025", "Type": "Examen final" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Dimanche", "Date": "28/12/2025", "Type": "Examen final" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Lundi", "Date": "29/12/2025", "Type": "Examen final" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Mardi", "Date": "30/12/2025", "Type": "Examen final" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Mercredi", "Date": "31/12/2025", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 17", "Jour": "Jeudi", "Date": "01/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Dimanche", "Date": "04/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Lundi", "Date": "05/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Mardi", "Date": "06/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Mercredi", "Date": "07/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Jeudi", "Date": "08/01/2026", "Type": "Examen final" },
    { "Mois": "Janvier", "Semaine": "-", "Jour": "Dimanche", "Date": "11/01/2026", "Type": "Vacances" },
    { "Mois": "Janvier", "Semaine": "-", "Jour": "Lundi", "Date": "12/01/2026", "Type": "Vacances" },
    { "Mois": "Janvier", "Semaine": "-", "Jour": "Mardi", "Date": "13/01/2026", "Type": "Vacances" },
    { "Mois": "Janvier", "Semaine": "-", "Jour": "Mercredi", "Date": "14/01/2026", "Type": "Vacances" },
    { "Mois": "Janvier", "Semaine": "-", "Jour": "Jeudi", "Date": "15/01/2026", "Type": "Vacances" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Dimanche", "Date": "18/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Lundi", "Date": "19/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Mardi", "Date": "20/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Mercredi", "Date": "21/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Jeudi", "Date": "22/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 20", "Jour": "Dimanche", "Date": "25/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 20", "Jour": "Lundi", "Date": "26/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 20", "Jour": "Mardi", "Date": "27/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 20", "Jour": "Mercredi", "Date": "28/01/2026", "Type": "Cours Normale" },
    { "Mois": "Janvier", "Semaine": "Semaine 20", "Jour": "Jeudi", "Date": "29/01/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Dimanche", "Date": "01/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Lundi", "Date": "02/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Mardi", "Date": "03/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Mercredi", "Date": "04/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Jeudi", "Date": "05/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Dimanche", "Date": "08/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Lundi", "Date": "09/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Mardi", "Date": "10/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Mercredi", "Date": "11/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Jeudi", "Date": "12/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Dimanche", "Date": "15/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Lundi", "Date": "16/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Mardi", "Date": "17/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Mercredi", "Date": "18/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Jeudi", "Date": "19/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 24", "Jour": "Dimanche", "Date": "22/02/2026", "Type": "Jour de la fondation saoudienne" },
    { "Mois": "Février", "Semaine": "Semaine 24", "Jour": "Lundi", "Date": "23/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 24", "Jour": "Mardi", "Date": "24/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 24", "Jour": "Mercredi", "Date": "25/02/2026", "Type": "Cours Normale" },
    { "Mois": "Février", "Semaine": "Semaine 24", "Jour": "Jeudi", "Date": "26/02/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Dimanche", "Date": "01/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Lundi", "Date": "02/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Mardi", "Date": "03/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Mercredi", "Date": "04/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Jeudi", "Date": "05/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Dimanche", "Date": "08/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Lundi", "Date": "09/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mardi", "Date": "10/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mercredi", "Date": "11/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Jeudi", "Date": "12/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Dimanche", "Date": "15/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Lundi", "Date": "16/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mardi", "Date": "17/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mercredi", "Date": "18/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Jeudi", "Date": "19/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Dimanche", "Date": "22/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Lundi", "Date": "23/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mardi", "Date": "24/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Mercredi", "Date": "25/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "-", "Jour": "Jeudi", "Date": "26/03/2026", "Type": "Vacances Aïd al-Fitr" },
    { "Mois": "Mars", "Semaine": "Semaine 26", "Jour": "Dimanche", "Date": "29/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 26", "Jour": "Lundi", "Date": "30/03/2026", "Type": "Cours Normale" },
    { "Mois": "Mars", "Semaine": "Semaine 26", "Jour": "Mardi", "Date": "31/03/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Mercredi", "Date": "01/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Jeudi", "Date": "02/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Dimanche", "Date": "05/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Lundi", "Date": "06/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Mardi", "Date": "07/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Mercredi", "Date": "08/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Jeudi", "Date": "09/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Dimanche", "Date": "12/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Lundi", "Date": "13/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Mardi", "Date": "14/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Mercredi", "Date": "15/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Jeudi", "Date": "16/04/2026", "Type": "Évaluations" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Dimanche", "Date": "19/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Lundi", "Date": "20/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Mardi", "Date": "21/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Mercredi", "Date": "22/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Jeudi", "Date": "23/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 30", "Jour": "Dimanche", "Date": "26/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 30", "Jour": "Lundi", "Date": "27/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 30", "Jour": "Mardi", "Date": "28/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 30", "Jour": "Mercredi", "Date": "29/04/2026", "Type": "Cours Normale" },
    { "Mois": "Avril", "Semaine": "Semaine 30", "Jour": "Jeudi", "Date": "30/04/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Dimanche", "Date": "03/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Lundi", "Date": "04/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Mardi", "Date": "05/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Mercredi", "Date": "06/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Jeudi", "Date": "07/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 32", "Jour": "Dimanche", "Date": "10/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 32", "Jour": "Lundi", "Date": "11/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 32", "Jour": "Mardi", "Date": "12/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 32", "Jour": "Mercredi", "Date": "13/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "Semaine 32", "Jour": "Jeudi", "Date": "14/05/2026", "Type": "Cours Normale" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Dimanche", "Date": "17/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Lundi", "Date": "18/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Mardi", "Date": "19/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Mercredi", "Date": "20/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Jeudi", "Date": "21/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Dimanche", "Date": "24/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Lundi", "Date": "25/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Mardi", "Date": "26/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Mercredi", "Date": "27/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Jeudi", "Date": "28/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "-", "Jour": "Dimanche", "Date": "31/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Lundi", "Date": "01/06/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mardi", "Date": "02/06/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mercredi", "Date": "03/06/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Jeudi", "Date": "04/06/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Dimanche", "Date": "07/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Lundi", "Date": "08/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mardi", "Date": "09/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mercredi", "Date": "10/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Jeudi", "Date": "11/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Dimanche", "Date": "14/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Lundi", "Date": "15/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mardi", "Date": "16/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Mercredi", "Date": "17/06/2026", "Type": "Examen Final" },
    { "Mois": "Juin", "Semaine": "-", "Jour": "Jeudi", "Date": "18/06/2026", "Type": "Examen Final" },
  ];

  // --- Éléments du DOM ---
  const calendarBody = document.getElementById('academic-calendar')?.querySelector('tbody');
  const monthFilter = document.getElementById('month-filter');
  const openCalendarBtn = document.getElementById('open-calendar-btn');
  const calendarModal = document.getElementById('calendar-modal');
  const closeModalBtn = calendarModal?.querySelector('.modal-close');
  
  // Éléments pour les nouveaux modals
  const openPlanBtn = document.getElementById('open-plan-modal');
  const planModal = document.getElementById('plan-modal');
  const closePlanBtn = planModal?.querySelector('.modal-close');
  
  const openDevoirsBtn = document.getElementById('open-devoirs-modal');
  const devoirsModal = document.getElementById('devoirs-modal');
  const closeDevoirsBtn = devoirsModal?.querySelector('.modal-close');

  /**
   * Peuple le tableau du calendrier avec les données, en fusionnant les cellules et en colorant les lignes.
   * @param {string} [filter='all'] - Le mois par lequel filtrer, ou 'all' pour tout afficher.
   */
  function populateCalendar(filter = 'all') {
    if (!calendarBody) return;
    calendarBody.innerHTML = '';

    const filteredData = (filter === 'all')
      ? calendarData
      : calendarData.filter(item => item.Mois === filter);

    let i = 0;
    while (i < filteredData.length) {
        const currentItem = filteredData[i];
        const typeSlug = currentItem.Type.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        
        // Compte les éléments consécutifs avec le même type
        let rowspanCount = 1;
        let j = i + 1;
        while (j < filteredData.length && filteredData[j].Type === currentItem.Type) {
            rowspanCount++;
            j++;
        }

        // Crée la première ligne de la séquence avec rowspan
        const row = document.createElement('tr');
        row.classList.add(`type-${typeSlug}`); // Ajoute la classe à la ligne
        
        row.innerHTML = `
            <td>${currentItem.Mois}</td>
            <td>${currentItem.Semaine}</td>
            <td>${currentItem.Jour}</td>
            <td>${currentItem.Date}</td>
            <td rowspan="${rowspanCount}">${currentItem.Type}</td>
        `;
        calendarBody.appendChild(row);

        // Crée les lignes suivantes sans la cellule 'Type'
        for (let k = 1; k < rowspanCount; k++) {
            const nextItem = filteredData[i + k];
            const subsequentRow = document.createElement('tr');
            subsequentRow.classList.add(`type-${typeSlug}`); // Ajoute la classe aux lignes suivantes
            subsequentRow.innerHTML = `
                <td>${nextItem.Mois}</td>
                <td>${nextItem.Semaine}</td>
                <td>${nextItem.Jour}</td>
                <td>${nextItem.Date}</td>
            `;
            calendarBody.appendChild(subsequentRow);
        }

        // Passe à la séquence suivante
        i += rowspanCount;
    }
  }

  // --- Gestion du Modal ---
  openCalendarBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    calendarModal?.classList.add('visible');
  });

  closeModalBtn?.addEventListener('click', () => {
    calendarModal?.classList.remove('visible');
  });

  calendarModal?.addEventListener('click', (e) => {
    // Ferme le modal si on clique sur l'arrière-plan
    if (e.target === calendarModal) {
      calendarModal.classList.remove('visible');
    }
  });

  // --- Gestion des filtres ---
  monthFilter?.addEventListener('change', (event) => {
    populateCalendar(event.target.value);
  });

  // --- Gestion du Modal Plan Hebdomadaire ---
  openPlanBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    planModal?.classList.add('visible');
  });

  closePlanBtn?.addEventListener('click', () => {
    planModal?.classList.remove('visible');
  });

  planModal?.addEventListener('click', (e) => {
    if (e.target === planModal) {
      planModal.classList.remove('visible');
    }
  });

  // --- Gestion du Modal Devoirs ---
  openDevoirsBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    devoirsModal?.classList.add('visible');
  });

  closeDevoirsBtn?.addEventListener('click', () => {
    devoirsModal?.classList.remove('visible');
  });

  devoirsModal?.addEventListener('click', (e) => {
    if (e.target === devoirsModal) {
      devoirsModal.classList.remove('visible');
    }
  });

  // --- Initialisation ---
  populateCalendar();

})();
