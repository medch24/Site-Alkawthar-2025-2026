(function() {
  // --- Données du calendrier scolaire ---
  const calendarData = [
    { "Mois": "Août", "Semaine": "Semaine 1", "Jour": "Dimanche", "Date": "31/08/2025", "Type": "Rentrée scolaire (Début de l'année)" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Lundi", "Date": "01/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Mardi", "Date": "02/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Mercredi", "Date": "03/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 1", "Jour": "Jeudi", "Date": "04/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Dimanche", "Date": "07/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Lundi", "Date": "08/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Mardi", "Date": "09/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Mercredi", "Date": "10/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 2", "Jour": "Jeudi", "Date": "11/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Dimanche", "Date": "14/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Lundi", "Date": "15/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Mardi", "Date": "16/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Mercredi", "Date": "17/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 3", "Jour": "Jeudi", "Date": "18/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Dimanche", "Date": "21/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Lundi", "Date": "22/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Mardi", "Date": "23/09/2025", "Type": "Congé : Fête nationale saoudienne" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Mercredi", "Date": "24/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 4", "Jour": "Jeudi", "Date": "25/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Dimanche", "Date": "28/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Lundi", "Date": "29/09/2025", "Type": "Cours" },
    { "Mois": "Septembre", "Semaine": "Semaine 5", "Jour": "Mardi", "Date": "30/09/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 5", "Jour": "Mercredi", "Date": "01/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 5", "Jour": "Jeudi", "Date": "02/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Dimanche", "Date": "05/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Lundi", "Date": "06/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Mardi", "Date": "07/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Mercredi", "Date": "08/10/2025", "Type": "Examen de mi-semestre (Début) + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 6", "Jour": "Jeudi", "Date": "09/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Dimanche", "Date": "12/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Lundi", "Date": "13/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Mardi", "Date": "14/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Mercredi", "Date": "15/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 7", "Jour": "Jeudi", "Date": "16/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Dimanche", "Date": "19/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Lundi", "Date": "20/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Mardi", "Date": "21/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Mercredi", "Date": "22/10/2025", "Type": "Examen de mi-semestre + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 8", "Jour": "Jeudi", "Date": "23/10/2025", "Type": "Examen de mi-semestre (Fin) + Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Dimanche", "Date": "26/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Lundi", "Date": "27/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Mardi", "Date": "28/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Mercredi", "Date": "29/10/2025", "Type": "Cours" },
    { "Mois": "Octobre", "Semaine": "Semaine 9", "Jour": "Jeudi", "Date": "30/10/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Dimanche", "Date": "02/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Lundi", "Date": "03/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Mardi", "Date": "04/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Mercredi", "Date": "05/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 10", "Jour": "Jeudi", "Date": "06/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Dimanche", "Date": "09/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Lundi", "Date": "10/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Mardi", "Date": "11/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Mercredi", "Date": "12/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 11", "Jour": "Jeudi", "Date": "13/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Dimanche", "Date": "16/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Lundi", "Date": "17/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Mardi", "Date": "18/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Mercredi", "Date": "19/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 12", "Jour": "Jeudi", "Date": "20/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Dimanche", "Date": "23/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Lundi", "Date": "24/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Mardi", "Date": "25/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Mercredi", "Date": "26/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 13", "Jour": "Jeudi", "Date": "27/11/2025", "Type": "Cours" },
    { "Mois": "Novembre", "Semaine": "Semaine 14", "Jour": "Dimanche", "Date": "30/11/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Lundi", "Date": "01/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Mardi", "Date": "02/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Mercredi", "Date": "03/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 14", "Jour": "Jeudi", "Date": "04/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Dimanche", "Date": "07/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Lundi", "Date": "08/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Mardi", "Date": "09/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Mercredi", "Date": "10/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 15", "Jour": "Jeudi", "Date": "11/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Dimanche", "Date": "14/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Lundi", "Date": "15/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Mardi", "Date": "16/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Mercredi", "Date": "17/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 16", "Jour": "Jeudi", "Date": "18/12/2025", "Type": "Cours" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Dimanche", "Date": "21/12/2025", "Type": "Cours / Révision" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Lundi", "Date": "22/12/2025", "Type": "Cours / Révision" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Mardi", "Date": "23/12/2025", "Type": "Cours / Révision" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Mercredi", "Date": "24/12/2025", "Type": "Examen final 1er Trimestre (Début)" },
    { "Mois": "Décembre", "Semaine": "Semaine 17", "Jour": "Jeudi", "Date": "25/12/2025", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Décembre", "Semaine": "Examen final", "Jour": "Dimanche", "Date": "28/12/2025", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Décembre", "Semaine": "Examen final", "Jour": "Lundi", "Date": "29/12/2025", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Décembre", "Semaine": "Examen final", "Jour": "Mardi", "Date": "30/12/2025", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Décembre", "Semaine": "Examen final", "Jour": "Mercredi", "Date": "31/12/2025", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Jeudi", "Date": "01/01/2026", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Dimanche", "Date": "04/01/2026", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Lundi", "Date": "05/01/2026", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Mardi", "Date": "06/01/2026", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Mercredi", "Date": "07/01/2026", "Type": "Examen final 1er Trimestre" },
    { "Mois": "Janvier", "Semaine": "Examen final", "Jour": "Jeudi", "Date": "08/01/2026", "Type": "Examen final 1er Trimestre (Fin)" },
    { "Mois": "Janvier", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "11/01/2026", "Type": "Vacances de mi-année" },
    { "Mois": "Janvier", "Semaine": "Vacances", "Jour": "Lundi", "Date": "12/01/2026", "Type": "Vacances de mi-année" },
    { "Mois": "Janvier", "Semaine": "Vacances", "Jour": "Mardi", "Date": "13/01/2026", "Type": "Vacances de mi-année" },
    { "Mois": "Janvier", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "14/01/2026", "Type": "Vacances de mi-année" },
    { "Mois": "Janvier", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "15/01/2026", "Type": "Vacances de mi-année" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Dimanche", "Date": "18/01/2026", "Type": "Début du 2ème Semestre + Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Lundi", "Date": "19/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Mardi", "Date": "20/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Mercredi", "Date": "21/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 18", "Jour": "Jeudi", "Date": "22/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Dimanche", "Date": "25/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Lundi", "Date": "26/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Mardi", "Date": "27/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Mercredi", "Date": "28/01/2026", "Type": "Cours" },
    { "Mois": "Janvier", "Semaine": "Semaine 19", "Jour": "Jeudi", "Date": "29/01/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 20", "Jour": "Dimanche", "Date": "01/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 20", "Jour": "Lundi", "Date": "02/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 20", "Jour": "Mardi", "Date": "03/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 20", "Jour": "Mercredi", "Date": "04/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 20", "Jour": "Jeudi", "Date": "05/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Dimanche", "Date": "08/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Lundi", "Date": "09/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Mardi", "Date": "10/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Mercredi", "Date": "11/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 21", "Jour": "Jeudi", "Date": "12/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Dimanche", "Date": "15/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Lundi", "Date": "16/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Mardi", "Date": "17/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Mercredi", "Date": "18/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 22", "Jour": "Jeudi", "Date": "19/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Dimanche", "Date": "22/02/2026", "Type": "Congé : Jour de la Fondation" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Lundi", "Date": "23/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Mardi", "Date": "24/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Mercredi", "Date": "25/02/2026", "Type": "Cours" },
    { "Mois": "Février", "Semaine": "Semaine 23", "Jour": "Jeudi", "Date": "26/02/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 24", "Jour": "Dimanche", "Date": "01/03/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 24", "Jour": "Lundi", "Date": "02/03/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 24", "Jour": "Mardi", "Date": "03/03/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 24", "Jour": "Mercredi", "Date": "04/03/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 24", "Jour": "Jeudi", "Date": "05/03/2026", "Type": "Cours (Dernier jour avant vacances Aïd)" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "08/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Lundi", "Date": "09/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mardi", "Date": "10/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "11/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "12/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "15/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Lundi", "Date": "16/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mardi", "Date": "17/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "18/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "19/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "22/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Lundi", "Date": "23/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mardi", "Date": "24/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "25/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "26/03/2026", "Type": "Vacances Aïd el-Fitr" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Dimanche", "Date": "29/03/2026", "Type": "Retour des cours" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Lundi", "Date": "30/03/2026", "Type": "Cours" },
    { "Mois": "Mars", "Semaine": "Semaine 25", "Jour": "Mardi", "Date": "31/03/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 25", "Jour": "Mercredi", "Date": "01/04/2026", "Type": "Examen de mi-semestre 2 (Début) + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 25", "Jour": "Jeudi", "Date": "02/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Dimanche", "Date": "05/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Lundi", "Date": "06/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Mardi", "Date": "07/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Mercredi", "Date": "08/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 26", "Jour": "Jeudi", "Date": "09/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Dimanche", "Date": "12/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Lundi", "Date": "13/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Mardi", "Date": "14/04/2026", "Type": "Examen de mi-semestre 2 + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Mercredi", "Date": "15/04/2026", "Type": "Examen de mi-semestre 2 (Fin)  + Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 27", "Jour": "Jeudi", "Date": "16/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Dimanche", "Date": "19/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Lundi", "Date": "20/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Mardi", "Date": "21/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Mercredi", "Date": "22/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 28", "Jour": "Jeudi", "Date": "23/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Dimanche", "Date": "26/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Lundi", "Date": "27/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Mardi", "Date": "28/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Mercredi", "Date": "29/04/2026", "Type": "Cours" },
    { "Mois": "Avril", "Semaine": "Semaine 29", "Jour": "Jeudi", "Date": "30/04/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 30", "Jour": "Dimanche", "Date": "03/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 30", "Jour": "Lundi", "Date": "04/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 30", "Jour": "Mardi", "Date": "05/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 30", "Jour": "Mercredi", "Date": "06/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 30", "Jour": "Jeudi", "Date": "07/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Dimanche", "Date": "10/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Lundi", "Date": "11/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Mardi", "Date": "12/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Mercredi", "Date": "13/05/2026", "Type": "Cours" },
    { "Mois": "Mai", "Semaine": "Semaine 31", "Jour": "Jeudi", "Date": "14/05/2026", "Type": "Cours (Dernier jour avant vacances)" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "17/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Lundi", "Date": "18/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Mardi", "Date": "19/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "20/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "21/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "24/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Lundi", "Date": "25/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Mardi", "Date": "26/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Mercredi", "Date": "27/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Jeudi", "Date": "28/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Mai", "Semaine": "Vacances", "Jour": "Dimanche", "Date": "31/05/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "Vacances", "Jour": "Lundi", "Date": "01/06/2026", "Type": "Vacances Aïd al-Adha" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mardi", "Date": "02/06/2026", "Type": "Retour des cours / Révision" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mercredi", "Date": "03/06/2026", "Type": "Examen final 2ème Trimestre (Début)" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Jeudi", "Date": "04/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Dimanche", "Date": "07/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Lundi", "Date": "08/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mardi", "Date": "09/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mercredi", "Date": "10/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Jeudi", "Date": "11/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Dimanche", "Date": "14/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Lundi", "Date": "15/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mardi", "Date": "16/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Mercredi", "Date": "17/06/2026", "Type": "Examen final 2ème Trimestre" },
    { "Mois": "Juin", "Semaine": "Examen", "Jour": "Jeudi", "Date": "18/06/2026", "Type": "Examen final 2ème Trimestre (Fin)" },
    { "Mois": "Juin", "Semaine": "Arret de cours", "Jour": "Dimanche", "Date": "21/06/2026", "Type": "Fin de l'année scolaire" }
  ];

  // --- Fonction pour obtenir l'icône et la couleur selon le type ---
  function getTypeStyle(type) {
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('rentrée') || lowerType.includes('début')) {
      return { icon: '🎓', color: '#667eea', bg: '#e0e7ff' };
    } else if (lowerType.includes('cours') && !lowerType.includes('examen')) {
      return { icon: '📚', color: '#10b981', bg: '#d1fae5' };
    } else if (lowerType.includes('examen') || lowerType.includes('révision')) {
      return { icon: '📝', color: '#f59e0b', bg: '#fef3c7' };
    } else if (lowerType.includes('vacances')) {
      return { icon: '🏖️', color: '#06b6d4', bg: '#cffafe' };
    } else if (lowerType.includes('congé') || lowerType.includes('fête')) {
      return { icon: '🎉', color: '#ec4899', bg: '#fce7f3' };
    } else if (lowerType.includes('fin')) {
      return { icon: '🎊', color: '#8b5cf6', bg: '#ede9fe' };
    } else if (lowerType.includes('retour')) {
      return { icon: '🔙', color: '#3b82f6', bg: '#dbeafe' };
    }
    
    return { icon: '📅', color: '#6b7280', bg: '#f3f4f6' };
  }

  // --- Éléments du DOM ---
  const calendarBody = document.getElementById('academic-calendar')?.querySelector('tbody');
  const monthFilter = document.getElementById('month-filter');
  const typeFilter = document.getElementById('type-filter');
  const viewModeButtons = document.querySelectorAll('.view-mode-btn');
  const openCalendarBtn = document.getElementById('open-calendar-btn');
  const calendarModal = document.getElementById('calendar-modal');
  const closeModalBtn = calendarModal?.querySelector('.modal-close');
  const statsContainer = document.getElementById('calendar-stats');
  const calendarViewContainer = document.querySelector('.calendar-view');
  const timelineView = document.getElementById('timeline-view');
  
  // Éléments pour les nouveaux modals
  const openPlanBtn = document.getElementById('open-plan-modal');
  const planModal = document.getElementById('plan-modal');
  const closePlanBtn = planModal?.querySelector('.modal-close');
  
  const openDevoirsBtn = document.getElementById('open-devoirs-modal');
  const devoirsModal = document.getElementById('devoirs-modal');
  const closeDevoirsBtn = devoirsModal?.querySelector('.modal-close');

  let currentViewMode = 'all'; // 'all', 'timeline', 'grid'

  /**
   * Génère les statistiques du calendrier
   */
  function generateStats() {
    const stats = {
      cours: 0,
      examens: 0,
      vacances: 0,
      conges: 0,
      total: calendarData.length
    };

    calendarData.forEach(item => {
      const type = item.Type.toLowerCase();
      if (type.includes('cours') && !type.includes('examen')) {
        stats.cours++;
      } else if (type.includes('examen') || type.includes('révision')) {
        stats.examens++;
      } else if (type.includes('vacances')) {
        stats.vacances++;
      } else if (type.includes('congé') || type.includes('fête')) {
        stats.conges++;
      }
    });

    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="stat-card" data-type="cours">
          <div class="stat-icon">📚</div>
          <div class="stat-content">
            <div class="stat-number">${stats.cours}</div>
            <div class="stat-label">Jours de Cours</div>
          </div>
        </div>
        <div class="stat-card" data-type="examen">
          <div class="stat-icon">📝</div>
          <div class="stat-content">
            <div class="stat-number">${stats.examens}</div>
            <div class="stat-label">Examens / Révision</div>
          </div>
        </div>
        <div class="stat-card" data-type="vacances">
          <div class="stat-icon">🏖️</div>
          <div class="stat-content">
            <div class="stat-number">${stats.vacances}</div>
            <div class="stat-label">Jours de Vacances</div>
          </div>
        </div>
        <div class="stat-card" data-type="conge">
          <div class="stat-icon">🎉</div>
          <div class="stat-content">
            <div class="stat-number">${stats.conges}</div>
            <div class="stat-label">Jours Fériés</div>
          </div>
        </div>
      `;

      // Ajouter animation aux stats
      document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }

  /**
   * Peuple la vue timeline
   */
  function populateTimeline(filter = 'all', typeFilter = 'all') {
    if (!timelineView) return;
    timelineView.innerHTML = '';

    let filteredData = calendarData;
    
    // Filtre par mois
    if (filter !== 'all') {
      filteredData = filteredData.filter(item => item.Mois === filter);
    }
    
    // Filtre par type
    if (typeFilter !== 'all') {
      filteredData = filteredData.filter(item => {
        const lowerType = item.Type.toLowerCase();
        if (typeFilter === 'cours') return lowerType.includes('cours') && !lowerType.includes('examen');
        if (typeFilter === 'examen') return lowerType.includes('examen') || lowerType.includes('révision');
        if (typeFilter === 'vacances') return lowerType.includes('vacances');
        if (typeFilter === 'conge') return lowerType.includes('congé') || lowerType.includes('fête');
        return true;
      });
    }

    filteredData.forEach((item, index) => {
      const style = getTypeStyle(item.Type);
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.style.animationDelay = `${index * 0.05}s`;
      
      timelineItem.innerHTML = `
        <div class="timeline-marker" style="background: ${style.color};">
          <span>${style.icon}</span>
        </div>
        <div class="timeline-content" style="border-left-color: ${style.color};">
          <div class="timeline-date" style="background: ${style.bg}; color: ${style.color};">
            <strong>${item.Jour}</strong> ${item.Date}
          </div>
          <div class="timeline-type" style="color: ${style.color};">
            ${style.icon} ${item.Type}
          </div>
          <div class="timeline-week">${item.Semaine}</div>
        </div>
      `;
      
      timelineView.appendChild(timelineItem);
    });
  }

  /**
   * Peuple le tableau du calendrier (vue tableau)
   */
  function populateCalendar(filter = 'all', typeFilter = 'all') {
    if (!calendarBody) return;
    calendarBody.innerHTML = '';

    let filteredData = calendarData;
    
    if (filter !== 'all') {
      filteredData = filteredData.filter(item => item.Mois === filter);
    }
    
    if (typeFilter !== 'all') {
      filteredData = filteredData.filter(item => {
        const lowerType = item.Type.toLowerCase();
        if (typeFilter === 'cours') return lowerType.includes('cours') && !lowerType.includes('examen');
        if (typeFilter === 'examen') return lowerType.includes('examen') || lowerType.includes('révision');
        if (typeFilter === 'vacances') return lowerType.includes('vacances');
        if (typeFilter === 'conge') return lowerType.includes('congé') || lowerType.includes('fête');
        return true;
      });
    }

    filteredData.forEach((item, index) => {
      const style = getTypeStyle(item.Type);
      const row = document.createElement('tr');
      row.style.animationDelay = `${index * 0.02}s`;
      row.style.backgroundColor = style.bg;
      row.style.borderLeftColor = style.color;
      row.style.borderLeftWidth = '4px';
      row.style.borderLeftStyle = 'solid';
      
      row.innerHTML = `
        <td><strong>${item.Mois}</strong></td>
        <td>${item.Semaine}</td>
        <td>${item.Jour}</td>
        <td><strong>${item.Date}</strong></td>
        <td>
          <span class="type-badge" style="background: ${style.color}; color: white;">
            ${style.icon} ${item.Type}
          </span>
        </td>
      `;
      
      calendarBody.appendChild(row);
    });
  }

  /**
   * Change le mode d'affichage
   */
  function switchViewMode(mode) {
    currentViewMode = mode;
    
    viewModeButtons.forEach(btn => {
      if (btn.dataset.view === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const monthFilterValue = monthFilter?.value || 'all';
    const typeFilterValue = typeFilter?.value || 'all';

    if (mode === 'timeline') {
      if (calendarViewContainer) calendarViewContainer.style.display = 'none';
      if (timelineView) timelineView.style.display = 'block';
      populateTimeline(monthFilterValue, typeFilterValue);
    } else {
      if (calendarViewContainer) calendarViewContainer.style.display = 'block';
      if (timelineView) timelineView.style.display = 'none';
      populateCalendar(monthFilterValue, typeFilterValue);
    }
  }

  // --- Gestion du Modal Calendrier ---
  openCalendarBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    calendarModal?.classList.add('visible');
    generateStats();
    switchViewMode('all');
  });

  closeModalBtn?.addEventListener('click', () => {
    calendarModal?.classList.remove('visible');
  });

  calendarModal?.addEventListener('click', (e) => {
    if (e.target === calendarModal) {
      calendarModal.classList.remove('visible');
    }
  });

  // --- Gestion des boutons de vue ---
  viewModeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchViewMode(btn.dataset.view);
    });
  });

  // --- Gestion des filtres ---
  monthFilter?.addEventListener('change', (event) => {
    const typeFilterValue = typeFilter?.value || 'all';
    if (currentViewMode === 'timeline') {
      populateTimeline(event.target.value, typeFilterValue);
    } else {
      populateCalendar(event.target.value, typeFilterValue);
    }
  });

  typeFilter?.addEventListener('change', (event) => {
    const monthFilterValue = monthFilter?.value || 'all';
    if (currentViewMode === 'timeline') {
      populateTimeline(monthFilterValue, event.target.value);
    } else {
      populateCalendar(monthFilterValue, event.target.value);
    }
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
  generateStats();
  populateCalendar();

})();
