//Exercice 1
// Créez une variable prenom et une variable âge
// Affectez une valeur à chaque variable
// Affichez dans la console : "Je m'appelle [prenom] et j'ai [âge] ans"
const prenom = "Michèle";
let âge = 28;

âge++;

console.log ('Je m\'appelle ' + prenom + ' et j\'ai ' + âge + ' ans.');


//Exercice 2
// Ecrire un programme JS et déclarer une vaiable "Longeur" et une variable "Largeur"
// Initialiser la variable "Longeur" à 10 et la variable "Largeur" à 5
// Créer la varible surface et affecter la valeur de la surface (Longeur * Largeur)
// Afficher dans la console du navigateur la phrase suivante : " le rectangle de longeur [cm] et de largeur [cm] a une surface de [cm²]"

let longeur = 10;
let largeur = 5;

let aire = longeur * largeur;
console.log('L\'aire du rectangle est de ' + aire + ' m².');

//Exercice 3
// Convertir des températures.
// Ecrire un programme JS et déclarer une variable "températureCelsius".
// Initialiser la variable "températureCelsius" à 0.
// Créer la variable "TemprératureKelvin" et affecter la valeur de la température en Kelvin.
// Affichez dans la console du navigateur la phrase suivante : « la temperature de ... °Celsius vaut ... en Kelvin»

let temperatureCelsius = 0;
let temperatureKelvin = temperatureCelsius + 273.15;
console.log('La température de ' + temperatureCelsius + '°C vaut ' + temperatureKelvin + ' en Kelvin.');

//Exercice 4
// Tirer un nombre aléatoire.
// Écrivez le programme pour afficher dans la console un nombre aléatoire tiré entre 0 et 100.

let nombre = (Math.random() * 100).toFixed(0);
console.log('Le nombre aléatoire tiré entre 0 et 100 est : ' + nombre);

//Exercice 5
// Calcul de la surface d’un cercle.
// Écrire un programme javascript et déclarez une variable « rayon ».
// Créez la variable surface et affectez-lui la valeur de la surface du cercle de rayon « rayon ».
// Affichez dans la console du navigateur la phrase suivante : « le cercle de rayon [cm] a une surface de [cm²] ».

let rayon = 5;
let surfaceCercle = Math.PI * Math.pow(rayon, 2);
console.log('Le cercle de rayon ' + rayon + ' cm a une surface de ' + surfaceCercle.toFixed(2) + ' cm².');