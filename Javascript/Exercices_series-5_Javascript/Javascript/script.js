// Exercice 1 : Afficher les éléments d'un tableau
// Créez un tableau nombres contenant les nombres de 1 à 5.
// Utilisez une boucle for pour afficher chaque nombre du tableau dans la console.

let nombres = [1, 2, 3, 4, 5]; // Le tableau contenant les nombres de 1 à 5
for (let i = 0; i < nombres.length; i++) { // La boucle for qui itère sur chaque élément du tableau dans la console.
    console.log(nombres[i]); // Affiche chaque nombre dans la console
}


// Exercice 2
// Écrivez une fonction sommeTableau(tableau) qui prend un tableau de nombres en paramètre et retourne la somme de tous les éléments.

function sommeTableau(tableau) { // La fonction qui prend un tableau de nombres en paramètre
    let somme = 0; // Initialisation de la variable somme à 0
    for (let i = 0; i < tableau.length; i++) { // La boucle for qui itère sur chaque élément du tableau
        somme += tableau[i]; // Ajoute chaque élément à la somme
    }
    return somme; // Retourne la somme totale
}


// Exercice 3 : Trouver le mot le plus long dans un tableau.
// Créez une fonction motPlusLong(tableauMots) qui prend un tableau de mots et retourne le mot ayant le plus grand nombre de caractères.

function motPlusLong(tableauMots) { // La fonction qui prend un tableau de mots en paramètre
    let motLong = ""; // Initialisation de la variable motLong à une chaîne vide
    for (let i = 0; i < tableauMots.length; i++) { // La boucle for qui itère sur chaque mot du tableau
        if (tableauMots[i].length > motLong.length) { // Vérifie si le mot actuel est plus long que le mot le plus long trouvé jusqu'à présent
            motLong = tableauMots[i]; // Met à jour le mot le plus long
        }
    }
    return motLong; // Retourne le mot le plus long trouvé
}



// Exercice 4 : Inverser une chaîne de caractères
// Écrivez une fonction inverserChaine(chaine) qui prend une chaîne de caractères et retourne la chaîne inversée en utilisant une boucle.

function inverserChaine(chaine) { // La fonction qui prend une chaîne de caractères en paramètre
    let chaineInversee = ""; // Initialisation de la variable chaineInversee à une chaîne vide
    for (let i = chaine.length - 1; i >= 0; i--) { // La boucle for qui itère sur chaque caractère de la chaîne en partant de la fin
        chaineInversee += chaine[i]; // Ajoute chaque caractère à la chaîne inversée
    }
    return chaineInversee; // Retourne la chaîne inversée
} console.log(inverserChaine("bonjour")); // Affiche "Bonjour" dans la console



// Exercice 5 : Compter le nombre de voyelles dans une chaîne.
// Créez une fonction compterVoyelles(chaine) qui retourne le nombre de voyelles dans une chaîne de caractères.

function nombresPairs(tableau) { // La fonction qui prend un tableau de nombres en paramètre
    let tableauPairs = []; // Initialisation d'un tableau vide pour stocker les nombres pairs
    for (let i = 0; i < tableau.length; i++) { // La boucle for qui itère sur chaque élément du tableau
        if (tableau[i] % 2 === 0) { // Vérifie si le nombre est pair
            tableauPairs.push(tableau[i]); // Ajoute le nombre pair au nouveau tableau
        }
    }
    return tableauPairs; // Retourne le tableau contenant uniquement les nombres pairs
}

// Exercice 6 : Filtrer les nombres pairs d'un tableau.
// Écrivez une fonction nombresPairs(tableau) qui retourne un nouveau tableau contenant uniquement les nombres pairs du tableau d'origine en utilisant une boucle.

function nombresPairs(tableau) { // La fonction qui prend un tableau de nombres en paramètre
    let tableauPairs = []; // Initialisation d'un tableau vide pour stocker les nombres pairs
    for (let i = 0; i < tableau.length; i++) { // La boucle for qui itère sur chaque élément du tableau
        if (tableau[i] % 2 === 0) { // Vérifie si le nombre est pair
            tableauPairs.push(tableau[i]); // Ajoute le nombre pair au nouveau tableau
        }
    }
    return tableauPairs; // Retourne le tableau contenant uniquement les nombres pairs
}
console.log(nombresPairs([1, 2, 3, 4, 5])); // Affiche [2, 4] dans la console



// Exercice 7 : Compter les propriétés d'un objet.
// Créez une fonction compterProprietes(objet) qui retourne le nombre de propriétés (clés) dans un objet.

function compterProprietes(objet) { // La fonction qui prend un objet en paramètre
    let compteur = 0; // Initialisation d'un compteur à 0
    for (let cle in objet) { // La boucle for qui itère sur chaque clé de l'objet
        if (objet.hasOwnProperty(cle)) { // Vérifie si la clé appartient à l'objet
            compteur++; // Incrémente le compteur pour chaque propriété trouvée
        }
    }
    return compteur; // Retourne le nombre total de propriétés
}

const chat = {
    nom: "Minou",
    age: 3,
    couleur: "gris"
};

console.log(compterProprietes(chat)); // Doit afficher 3



// Exercice 8 : Convertir un tableau d'objets en un tableau de valeurs.
// Supposons que vous avez un tableau d'objets représentant des produits :
// let produits = [
// { nom: "Stylo", prix: 2 },
// { nom: "Cahier", prix: 5 },
// { nom: "Gomme", prix: 1 }
// ];
// Écrivez une fonction extraireNoms(produits) qui retourne un tableau contenant uniquement les noms des produits.

let produits = [ // Le tableau d'objets représentant des produits
    { nom: "Stylo", prix: 2 }, // Un objet représentant un produit
    { nom: "Cahier", prix: 5 }, // Un autre objet représentant un produit
    { nom: "Gomme", prix: 1 } // Un autre objet représentant un produit
];
function extraireNoms(produits) { // La fonction qui prend un tableau d'objets en paramètre
    let noms = []; // Initialisation d'un tableau vide pour stocker les noms des produits
    for (let i = 0; i < produits.length; i++) { // La boucle for qui itère sur chaque objet du tableau
        noms.push(produits[i].nom); // Ajoute le nom du produit au tableau des noms
    }
    return noms; // Retourne le tableau contenant uniquement les noms des produits
}
console.log(extraireNoms(produits)); // Affiche ["Stylo", "Cahier", "Gomme"] dans la console


// Exercice 9 : Calculer la factorielle d'un nombre.
// Créez une fonction factorielle(n) qui calcule et retourne la factorielle d'un nombre entier positif n en utilisant une boucle.
// Indice : La factorielle de n (notée n!) est le produit de tous les entiers de 1 à n.

function factorielle(n) { // La fonction qui prend un nombre entier positif en paramètre
    let resultat = 1; // Initialisation de la variable resultat à 1
    for (let i = 1; i <= n; i++) { // La boucle for qui itère de 1 à n
        resultat *= i; // Multiplie le résultat par chaque entier
    }
    return resultat; // Retourne la factorielle calculée
}
console.log(factorielle(5)); // Affiche 120 dans la console (5! = 5 * 4 * 3 * 2 * 1 = 120)

factorielle(0); // → 1 (par convention)
factorielle(1); // → 1
factorielle(6); // → 720
factorielle(10); // → 3628800


// Exercice 10 : Vérifier si un tableau est trié en ordre croissant.
// Écrivez une fonction estTrie(tableau) qui retourne true si les éléments du tableau sont triés en ordre croissant, false sinon.

function estTrie(tableau) { // La fonction qui prend un tableau en paramètre
    for (let i = 0; i < tableau.length - 1; i++) { // La boucle for qui itère sur chaque élément du tableau
        if (tableau[i] > tableau[i + 1]) { // Vérifie si l'élément actuel est supérieur au suivant
            return false; // Retourne false si le tableau n'est pas trié
        }
    }
    return true; // Retourne true si le tableau est trié
}
console.log(estTrie([1, 2, 3, 4, 5])); // Affiche true dans la console
console.log(estTrie([5, 3, 4, 2, 1])); // Affiche false dans la console

console.log(estTrie([])); // true (tableau vide considéré comme trié)
console.log(estTrie([3])); // true (un seul élément)
console.log(estTrie([2, 2, 2])); // true (égalité autorisée)
console.log(estTrie([1, 2, 3, 2])); // false (non trié)
console.log(estTrie([1, 2, 3, 4, 5])); // true (trié)