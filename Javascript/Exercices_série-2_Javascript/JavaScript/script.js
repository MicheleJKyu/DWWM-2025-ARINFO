// Exercice 1
// Faire une saluation personnalisée
// Écrire un programme javascript et demandez le prénom et l’âge de l’utilisateur.
// Ajoutez un an à cet âge.
// Affichez dans la console du navigateur la phrase suivante « je m’appelle ... et j’ai ... ans l’année prochaine ».

let prenom = prompt ("Quel est votre prénom ?");
let age = prompt ("Quel est votre âge ?");
age++;
console.log('Je m\'appelle ' + prenom + ' et j\'ai ' + age + ' ans l\'année prochaine.');


// Exercice 2
// Demander les dimensions d’un rectangle.
// Écrire un programme javascript et demandez une longueur et une largeur à l’utilisateur.
// Créez la variable surface et affectez-lui la valeur de la surface (longueur*largeur).
// Affichez dans la console du navigateur la phrase suivante : « le rectangle de longueur ... cm et de largeur ... cm a pour surface ... cm2 ».

let Longeur = prompt ("Quelle est la longueur du rectangle ?");
let Largeur = prompt ("Quelle est la largeur du rectangle ?");
let surface = parseInt(Longeur) * parseInt(Largeur);
console.log('Le rectangle de longueur ' + Longeur + ' cm et de largeur ' + Largeur + ' cm a pour surface ' + surface + ' cm².');

// Exercice 3
// Écrire un programme javascript et demandez une température en celsius à l’utilisateur.
// Créez la variable temperatureKelvin et affectez la valeur de la température en kelvin.
// Affichez dans la console du navigateur la phrase suivante : « la temperature de ... °Celsius vaut ... en Kelvin»

let temperatureCelsius = prompt ("Quelle est la température en celsius ?");
let temperatureKelvin = parseFloat(temperatureCelsius) + 273.15;
console.log('La température de ' + temperatureCelsius + '°C vaut ' + temperatureKelvin.toFixed(2) + ' en Kelvin.');

// Exercice 4
// Manipulation des variables.
// Faire saisir deux nombres (x et y) à l’utilisateur.
// Afficher dans le paragraphe avec l’identifiant p1 le message suivant :
// si x > y alors afficher “x est plus grand que y”.
// si x <= y alors afficher “x est plus petit que y”

let x = prompt ("Entrez le premier nombre (x) :");
let y = prompt ("Entrez le deuxième nombre (y) :");
console.log(typeof x);
console.log(typeof y);
if (parseInt(x)>parseInt(y)) {
    console.log(x + ' est plus grand que ' + y);
} else if (x===y) {
    console.log(x + ' est égal à ' + y);
} else {
    console.log(x + ' est plus petit que ' + y);
}