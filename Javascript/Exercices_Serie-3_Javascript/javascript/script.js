//Exercice 1
// Définir une variable nom puis lui assigner Martin.
// Définir une variable anneeNaissance puis lui assigner 2000.
// Afficher à l’écran « Bonjour Mr Martin vous avez ... ans ».
// Martin et l’âge sont bien sûr issus des variables nom et anneeNaissance. Le calcul de l’âge est simplement le résultat de l’année en cours moins l’année de naissance.

let nom = "Martin";
let anneeNaissance = 2000;
console.log("Bonjour Mr " + nom + " vous avez " + (2025 - anneeNaissance) + " ans.");



// Exercice 2
// Définir une variable note_maths puis lui assigner 15.
// Définir une variable note_français et lui assigner 12.
// Définir une variable note_HG et lui assigner 9.
// Afficher à l’écran « La moyenne est de (la moyenne) / 20. ».

let note_maths = 15;
let note_français = 12;
let note_HG = 9; // note d'histoire-géographie
console.log("La moyenne est de " + ((note_maths + note_français + note_HG) / 3).toFixed(2) + " / 20.");



// Exercice 3
// Déclarer une variable sexe qui contient une chaîne de caractères. Créer une condition qui affiche un message différent en fonction de la valeur de la variable.

let promptSexe = prompt("Quel est votre sexe ? (Homme/Femme)");
let sexe = promptSexe.trim().toLowerCase(); 
//ligne 26 qui perrmet de normaliser la saisie et permet à l'utilisateur de saisir "homme" ou "femme" sans tenir compte de l'écriture de la forme.

if (promptSexe === "Homme") {
    console.log("Bonjour Monsieur !");
} else if (promptSexe === "Femme") {
    console.log("Bonjour Madame !");
} else {
    console.log("Erreur de saisie.");
}

// Exercice 4
// Déclarer une variable heure qui contient la valeur de type integer de votre choix compris entre 0 et 24. 
// Créer les conditions qui affichent un message si l'heure est le matin, l'après-midi ou la nuit.

let promptHeure = prompt("Quelle heure est-il ? (0-24)"); // demande à l'utilisateur de saisir une heure.
let heure = parseInt(promptHeure); // convertit la saisie de l'utilisateur en entier.

if (heure >= 6 && heure < 12) { 
    console.log("Bonjour ! Il est " + heure + " heures du matin."); // si l'heure est comprise entre 6 et 12, affiche "Bonjour ! Il est [heure] heures du matin."
} else if (heure === 12) {
    console.log("Bonjour ! Il est midi." ) // si l'heure est 12, affiche "Bonjour ! Il est midi."
} else if (heure > 12 && heure < 18) {
    console.log("Bonjour ! Il est " + heure + " heures de l'après-midi."); // si l'heure est comprise entre 12 et 18, affiche "Bonjour ! Il est [heure] heures de l'après-midi."
} else if (heure >= 18 && heure < 24) {
    console.log("Bonsoir ! Il est " + heure + " heures du soir.");  // si l'heure est comprise entre 18 et 24, affiche "Bonsoir ! Il est [heure] heures du soir."
} else if (heure === 24 || heure === 0) {
    console.log("Bonsoir ! Il est minuit."); // si l'heure est 24 ou 0, affiche "Bonsoir ! Il est minuit."
} else if (heure >= 0 && heure < 6) {
    console.log("Bonjour ! Il est " + heure + " heures de nuitfemme."); // si l'heure est comprise entre 0 et 6, affiche "Bonjour ! Il est [heure] heures du matin."
} else {
    console.log("Erreur de saisie.");  // si l'heure n'est pas comprise entre 0 et 24, affiche "Erreur de saisie."
}


// Exercice 5
// Créer une variable choix qui vaut 2.
// Si choix a pour valeur 1 afficher « Insérer ».
// Si choix a pour valeur 2 afficher « Supprimer ».
// Si choix a pour valeur 3 afficher « Afficher ».
// Si choix a pour valeur 4 afficher « Ce choix n’existe pas».

let choix = 2; // Déclaration de la variable choix avec la valeur 2.
if (choix === 1) {
    console.log("Insérer"); // si choix est égal à 1, affiche "Insérer".
} else if (choix === 2) {
    console.log("Supprimer");  // si choix est égal à 2, affiche "Supprimer".
} else if (choix === 3) {
    console.log("Afficher"); // si choix est égal à 3, affiche "Afficher".
} else if (choix === 4) {
    console.log("Ce choix n'existe pas"); // si choix est égal à 4, affiche "Ce choix n'existe pas".
}

// Exercice 6
// Rédiger une expression conditionnelle pour tester si un nombre est à la fois un multiple de 3 et de 5.
// Indice : utilisez le modulo.

let promptNombre = prompt("Entrez un nombre :"); // demande à l'utilisateur de saisir un nombre.
let nombre = parseInt(promptNombre); // convertit la saisie de l'utilisateur en entier.
if (nombre % 3 === 0 && nombre % 5 === 0) {
    console.log(nombre + " est un multiple de 3 et de 5."); // si le nombre est un multiple de 3 et de 5, affiche "[nombre] est un multiple de 3 et de 5."
} else {
    console.log(nombre + " n'est pas un multiple de 3 et de 5."); // sinon, affiche "[nombre] n'est pas un multiple de 3 et de 5."
}

// Exercice 7
// En utilisant une boucle, afficher tous les codes postaux possibles pour le département 44.
// soit on le fait soit meme ou en avancé mais pas de génération de code postal.

// Méthode 1 : à la main
for (let i=44000; i <= 44990; i+=10) { // Boucle qui commence à 44000 et s'arrête à 44990, en incrémentant de 10 à chaque itération.
    console.log(i); // Affiche le code postal actuel.
}
for (let i=44115; i <= 44120; i+=1) { // Boucle qui commence à 44115 et s'arrête à 44120, en incrémentant de 1 à chaque itération.
    console.log(i); // Affiche le code postal actuel.
}

// Méthode 2 : génération automatique sans IA.
let i = 44000; // Initialisation de la variable i à 44000.
let code = [];
for (let i = 44000; i <= 44990; i+=10) { // Boucle qui commence à 44000 et s'arrête à 44990, en incrémentant de 10 à chaque itération.
    code.push(i); // Ajoute le code postal actuel au tableau code.
}
for (let i = 44115; i <= 44120; i+=1) { // Boucle qui commence à 44115 et s'arrête à 44120, en incrémentant de 1 à chaque itération.
    code.push(i); // Ajoute le code postal actuel au tableau code.
}

// Méthode 3 : génération avec while
let codes = [];
while (i <= 44990) {
    codes.push(i); // 44000, 44010, 44020, ..., 44990
    i += 10;
}

let j = 44115;
while (j <= 44120) {
    codes.push(j); // 44115, 44116, ..., 44120
    j++;
}

console.log(codes);

// Exercice 8
// Déclarer une variable avec le nom de votre choix et avec la valeur 0. Tant que cette variable n'atteint pas 20, il faut :
// l'afficher, incrémenter sa valeur de 2.
// Si la valeur de la variable est égale à 10, la mettre en valeur.

let variable = 0; // Déclaration de la variable avec la valeur initiale de 0.

while (variable < 20) { // Tant que la variable est inférieure à 20
    if (variable === 10) { // Si la variable est égale à 10.
        console.log(">>> " + variable + " <<<"); // Met en valeur la variable.
    } else {
        console.log(variable);
    }
variable += 2; // Incrémente la variable de 2.
}

// Exercice 9
// Trouvez un moyen de vérifier si un chiffre est pair ou impair.
// Allez dans la documentation JS et cherchez comment générer un nombre aléatoirement.
// Effectuez une suite de tirages de nombres aléatoires jusqu’à obtenir une suite composée d’un nombre pair suivi de deux nombres impairs.

let randomNumber = Math.floor(Math.random() * 100); // Génère un nombre aléatoire entre 0 et 99.
let n = randomNumber; // Assigne le nombre aléatoire à la variable n.

if (n % 2 === 0) { // Vérifie si le nombre est pair.
    console.log(n + " est un nombre pair.");
} else {
    console.log(n + " est un nombre impair.");
}

// Exercice 10
// Choisir un nombre de trois chiffres.
// Effectuer ensuite des tirages aléatoires et compter le nombre de tirages nécessaire pour obtenir le nombre initial.
// Réaliser ce script d’abord avec l’instruction while puis avec l’instruction for.

let nombreTroisChiffres = Math.floor(Math.random() * 900) + 100; // Génère un nombre aléatoire entre 100 et 999.
let n = nombreTroisChiffres; // Assigne le nombre aléatoire à la variable n.
let tirages = 0; // Initialise le compteur de tirages à 0.

while (true) { // boucle infinie
    let tirage = Math.floor(Math.random() * 900) + 100; // Génère un nombre aléatoire entre 100 et 999.
    tirages++; // Incrémente le compteur de tirages.
    if (tirage === n) { // Si le tirage est égal au nombre initial.
        console.log("Nombre de tirages avec while : " + tirages); // Affiche le nombre de tirages.
        break; // Sort de la boucle.
    }
} // On peut aussi le faire avec une boucle for


// Exercice 11
// Affichez dans la console à l’aide de la méthode date “Aujourd’hui nous somme le JOUR/MOIS/ANNÉE et il est HEURE.

let date = new Date(); // Crée un nouvel objet Date avec la date et l'heure actuelles.
let jour = date.getDate(); // Récupère le jour du mois.
let mois = date.getMonth() + 1; // Récupère le mois (0-11) et ajoute 1 pour obtenir le mois (1-12).
let annee = date.getFullYear(); // Récupère l'année.
let heure = date.getHours(); // Récupère l'heure (0-23).
let minutes = date.getMinutes(); // Récupère les minutes (0-59).
let secondes = date.getSeconds(); // Récupère les secondes (0-59).
console.log("Aujourd'hui nous sommes le " + jour + "/" + mois + "/" + annee + " et il est " + heure + ":" + minutes + ":" + secondes); // Affiche la date et l'heure actuelles.