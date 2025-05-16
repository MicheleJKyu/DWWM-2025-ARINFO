// Exercice 1 : Trouver la longueur d'une chaîne
// Écrivez une fonction longueurChaine(chaine) qui prend une chaîne de caractères en paramètre et retourne sa longueur.
// Indice : Utilisez la propriété .length des chaînes de caractères.

function longueurChaine(chaine) { // Cette fonction prend une chaîne de caractères en paramètre.
    return chaine.length; // retourne la longueur de la chaîne.
} 
console.log(longueurChaine("Michèle")); // Affiche 7


// Exercice 2 : Vérifier la présence d'un élément dans un tableau
// Créez une fonction elementPresent(tableau, element) qui retourne true si l'élément est présent dans le tableau, false sinon.
// Indice : Utilisez la méthode .includes() des tableaux.

function elementPresent(tableau, element) { // Cette fonction prend un tableau et un élément en paramètre.
    return tableau.includes(element); // retourne true si l'élément est présent dans le tableau, false sinon.
}
console.log(elementPresent([1, 2, 3, 4], 3)); // Affiche true
console.log(elementPresent([1, 2, 3, 4], 5)); // Affiche false


// Exercice 3 : Compter les éléments d'un tableau
// Écrivez une fonction compterElements(tableau) qui retourne le nombre d'éléments dans un tableau.
// Indice : Utilisez la propriété .length des tableaux.

function compterElements(tableau) { // Cette fonction prend un tableau en paramètre.
    return tableau.length; // retourne le nombre d'éléments dans le tableau.
}
console.log(compterElements([1, 2, 3, 4])); // Affiche 4
console.log(compterElements(["a", "b", "c"])); // Affiche 3


// Exercice 4 : Convertir une chaîne en tableau de mots.
// Créez une fonction chaineEnMots(phrase) qui prend une phrase en chaîne de caractères et retourne un tableau contenant chaque mot de la phrase.
// Indice : Utilisez la méthode .split() avec l'espace comme séparateur.

function chaineEnMots(phrase) { // Cette fonction prend une phrase en chaîne de caractères en paramètre.
    return phrase.split(" "); // retourne un tableau contenant chaque mot de la phrase.
}
console.log(chaineEnMots("Bonjour le monde")); // Affiche ["Bonjour", "le", "monde"]
console.log(chaineEnMots("Je suis un développeur")); // Affiche ["Je", "suis", "un", "développeur"]



// Exercice 5 : Filtrer les nombres supérieurs à une valeur donnée
// Écrivez une fonction filtrerNombres(tableau, valeur) 
// qui prend un tableau de nombres et une valeur, puis retourne un nouveau tableau contenant uniquement les nombres supérieurs à la valeur donnée.
// Indice : Utilisez la méthode .filter() avec une condition appropriée.

function filtrerNombres(tableau, valeur) { // Cette fonction prend un tableau de nombres et une valeur en paramètre.
    return tableau.filter(function(nombre) { // Utilise la méthode .filter() pour filtrer les nombres.
        return nombre > valeur; // retourne un nouveau tableau contenant uniquement les nombres supérieurs à la valeur donnée.
    });
}
console.log(filtrerNombres([1, 2, 3, 4, 5], 3)); // Affiche [4, 5]
console.log(filtrerNombres([10, 20, 30, 40], 25)); // Affiche [30, 40]


// Exercice 6 : Ajouter une propriété à un objet
// Créez une fonction ajouterPropriete(objet, cle, valeur) qui ajoute une nouvelle propriété à un objet existant et retourne l'objet mis à jour.
// Indice : Utilisez la notation par point ou les crochets pour ajouter une nouvelle propriété.

function ajouterPropriete(objet, cle, valeur) { // Cette fonction prend un objet, une clé et une valeur en paramètre.
    objet[cle] = valeur; // Ajoute une nouvelle propriété à l'objet existant.
    return objet; // retourne l'objet mis à jour.
}
console.log(ajouterPropriete({ nom: "Alice" }, "age", 25)); // Affiche { nom: "Alice", age: 25 }
console.log(ajouterPropriete({ nom: "Bob" }, "ville", "Paris")); // Affiche { nom: "Bob", ville: "Paris" }

