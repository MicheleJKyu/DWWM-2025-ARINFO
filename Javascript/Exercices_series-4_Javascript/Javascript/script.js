//Exercice 1
// Définissez trois variables numériques a, b et c.
// Si elles sont égales, écrire : « Les trois variables sont égales »
// Si seulement deux sont identiques, écrire : « Seulement deux des variables sont égales. »
// Sinon, écrire : « Les trois variables sont différentes. »
// Pour les plus courageux, vous pouvez définir de manière aléatoire les trois variables numériques

let variables = [
    Math.floor(Math.random() * 10) + 1, // Génère un nombre aléatoire entre 1 et 10 pour a.
    Math.floor(Math.random() * 10) + 1, // Génère un nombre aléatoire entre 1 et 10 pour b.
    Math.floor(Math.random() * 10) + 1 // Génère un nombre aléatoire entre 1 et 10 pour c.
]
let [a, b, c] = variables; // Déclaration des variables a, b et c.

if (a === b && b === c) { // Vérifie si les trois variables sont égales.
    console.log("Les trois variables sont égales.");
} else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) { // Vérifie si seulement deux variables sont égales.
    console.log("Seulement deux des variables sont égales.");
} else { // Si aucune des conditions précédentes n'est remplie.
    console.log("Les trois variables sont différentes.");
}

// Exercice 2
// compter la fortune de l'oncle Picsou.
// Le but de cet exercice est de transformer une valeur binaire abrégée en sa valeur non abrégée.
// Par exemple : 2K = 2 x 1000.

// Nous allons utiliser trois variables :
// La première quantite représente la quantité.
// La deuxième unite représente l'unité ("K" ,"T", "G", "M"),
// La troisième resultat contiendra le résultat.
// Rappel des unités : https://www.druide.com/fr/enquetes/billion-et-autres-grands-nombres

let quantite = 5; // Déclaration de la variable quantite.
let unite = "K, M, G, T"; // Déclaration de la variable unite.
let resultat = 0; // Déclaration de la variable resultat.
let uniteValeur = { // Déclaration d'un objet contenant les valeurs des unités.
    K: 1000,
    M: 1000000,
    G: 1000000000,
    T: 1000000000000
};
let uniteChoisie = "K"; // Déclaration de la variable uniteChoisie.
resultat = quantite * uniteValeur[uniteChoisie]; // Calcule le résultat en multipliant la quantité par la valeur de l'unité choisie.
console.log(resultat); // Affiche le résultat.

// Exercice 3
// Les octets.
// Créer une structure de code avec un switch qui transforme une variable de type string représentant un nombre d'octets abrégé : 150K, 400M, 5G, 3T, en nombre d'octets non abrégé.
// Créer une structure de code avec un switch qui transforme une variable de type string représentant un nombre d'octets abrégé : 150K, 400M, 5G, 3T, en nombre d'octets non abrégé.
// var bytes = '887';
// On supposera que la variable testée indique des octets.

// Pour rappel :
// 150K = 150 x 1024
// 400M = 400 x 1024 x 1024
// 5G = 5 x 1024 x 1024 x 1024
// 2T = 2 x 1024 x 1024 x 1024 x 1024

// 2- Rendre le code insensible à la casse de sorte qu'il pourra fonctionner indifféremment avec des majuscules ou des minuscules, par exemple '250M' ou '250m', '2g' ou '2G', etc.
// Pour ce faire, on utilisera la méthode toUpperCase qui permet de convertir une chaîne de caractères en majuscules.

// 3- Sécuriser le script en vérifiant avec isNaN que la variable testée respecte le format attendu et peut donc être convertie en valeur numérique.
// numérique. Dans le cas contraire, si par exemple var bytes = 'toto'; et plus généralement pour toute valeur non convertible, le code devra afficher le booléen false.

let exemples = ['150K', '400m', '5G', '3t', '887', 'toto'];

for (let bytes of exemples) { // Parcourt chaque élément de la liste exemples.
    let valeur = parseInt(bytes); // Convertit la chaîne de caractères en entier.
    let uniteOctet = bytes.slice(-1).toUpperCase(); // Récupère la dernière lettre de la chaîne et la convertit en majuscule.

    if (isNaN(valeur)) { // Vérifie si la valeur n'est pas un nombre.
        console.log(`${bytes} → false`); // Affiche false si la valeur n'est pas un nombre.
    } else { 
        // Si la valeur est un nombre, on effectue la conversion en octets.
        let resultatOctet = 0;
        // On utilise un switch pour déterminer l'unité et effectuer la conversion.

        switch (uniteOctet) { // Vérifie l'unité.
            case 'K': resultatOctet = valeur * 1024; break;
            case 'M': resultatOctet = valeur * 1024 ** 2; break; 
            case 'G': resultatOctet = valeur * 1024 ** 3; break;
            case 'T': resultatOctet = valeur * 1024 ** 4; break;
            // Convertit en octets.
            default:  resultatOctet = valeur;
            // Si aucune unité n'est spécifiée, on considère que c'est déjà en octets.
        }

        console.log(`${bytes} → ${resultatOctet} octets`);
        // Affiche le résultat de la conversion.
    }
}
for (let b of exemples) {
    // Parcourt chaque élément de la liste exemples.
    console.log(`${b} → ${convertirEnOctets(b)}`); // Affiche le résultat de la conversion.
}

// Exercice 4
// Déclarer et définir une variable value contenant une valeur de type nombre (number) ou chaîne de caractères (string).
// Les valeurs possibles sont value = 0 ou value = 1 ou value = 2 ou value = '0' ou value = '1' ou value = '2'.
// 1- À l'aide de l'instruction if...else afficher "La valeur est une chaîne de caractères" ou "La valeur est un nombre".
// 2- À l'aide de l'instruction switch afficher "La valeur est supérieure à 0" et/ou "La valeur est supérieure à 1" ou 
// "La valeur est égale à 0". Cela doit fonctionner qu'il s'agisse d'un nombre (number) ou d'une chaîne de caractères (string).

let value = 0; // Déclaration de la variable value.
let typeValue = typeof value; // Récupère le type de la variable value.

if ( typeValue === 'string') { // Vérifie si la variable est de type chaîne de caractères.
    console.log("La valeur est une chaîne de caractères.");
} else if (typeValue === 'number') { // Vérifie si la variable est de type nombre.
    console.log("La valeur est un nombre.");
} else {
    // Si la variable n'est ni un nombre ni une chaîne de caractères.
    console.log("La valeur n'est ni un nombre ni une chaîne de caractères."); // Affiche un message d'erreur.
} // Vérifie si la variable est de type nombre.
let valueNum = parseInt(value); // ou Number(value)
// Convertit la variable value en nombre entier avant de l'utiliser dans le switch.

switch (valueNum) { // Vérifie la valeur de la variable.
    case 0: // Si la valeur est 0.
        console.log("La valeur est égale à 0.");
        break;
    case 1: // Si la valeur est 1.
        console.log("La valeur est supérieure à 0.");
        break;
    case 2: // Si la valeur est 2.
        console.log("La valeur est supérieure à 1.");
        break;
    default: // Si la valeur n'est ni 0, ni 1, ni 2.
        console.log("La valeur n'est pas valide.");
}