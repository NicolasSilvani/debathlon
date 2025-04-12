window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Récupérer l'objet 'player' qui permet d'interagir avec Storyline
var player = GetPlayer();

// Liste des textes à tirer au sort
var textList = [
    "Emmanuel Macron",
    "Joséphine Ange Gardien",
    "Quasimodo",
    "Charles De Gaulle",
    "Barbie",
    "Nicolas Sarkozy",
    "Picsou",
    "Valérie Pécresse",
    "Hermione Granger",
    "Donald Trump",
    "Inspecteur Gadget",
    "Kim Jong-Un",
    "Phoebe (Friends)",
    "Elon Musk",
    "Willy Wonka",
    "Napoléon",
    "Aladdin",
    "Louis XIV",
    "Le Père-Noël",
    "Jeanne d'Arc",
    "Professeur Xavier (X-Men)",
    "Joseph Staline",
    "Bridget Jones",
    "Gandhi",
    "Sherlock Holmes",
    "Jules César",
    "Titeuf",
    "Cléopâtre",
    "Obélix",
    "Serge Gainsbourg",
    "Wonder Woman",
    "Renaud",
    "Charlie (Où est Charlie ?)",
    "Johnny Hallyday",
    "Gollum",
    "Madonna",
    "Edward (Twillight)",
    "Michael Jackson", 
    "Kirikou",
    "Angèle",
    "Zazie",
    "Superman",
    "Aya Nakamura",
    "Le monstre de Frankenstein",
    "Mulan",
    "Lady Gaga",
    "Tintin",
    "Miley Cyrus",
    "Bob l'éponge",
    "Francis Lalanne",
    "Voldemort",
    "Jul",
    "Brice de Nice",
    "John Lennon",
    "Dora l'Exploratrice",
    "Bob Marley",
    "Indiana Jones",
    "Zinedine Zidane",
    "James Bond",
    "Teddy Riner",
    "Cristiano Ronaldo",
    "Guignol (la marionnette)",
    "Jésus",
    "Usain Bolt",
    "Squeezie",
    "Shrek",
    "Lena Situations",
    "Amélie Poulain",
    "Susan (Desperate Housewives)",
    "Louis de Funes",
    "Rocky",
    "Elise Lucet",
    "Cyrano de Bergerac",
    "Omar Sy",
    "Gérard Depardieu",
    "Daenerys Targaryen",
    "Yoda",
    "Natalie Portman",
    "Dark Vador",
    "Marilyn Monroe",
    "Homer Simpson",
    "Sylvester Stallone",
    "L'Homme invisible",
    "Céline Dion",
    "Batman",
    "Zendaya",
    "Mickey Mouse",
    "Jim Carrey",
    "Dracula",
    "Jackie Chan",
    "Le Joker",
    "Cyril Hanouna",
    "Tarzan",
    "Pascal le grand frère",
    "Super Nanny",
    "Hercules",
    "Philippe Etchtebest",
    "Cendrillon",
    "Le Père Fourras",
    "Cristina Cordula",
    // Ajoutez plus de chaînes de texte ici, selon vos besoins
];

// Générer un indice aléatoire basé sur la longueur de la liste des textes
var randomIndex = Math.floor(Math.random() * textList.length);

// Utiliser l'indice aléatoire pour obtenir un texte aléatoire à partir de la liste
var selectedText = textList[randomIndex];

// Affecter le texte aléatoire à la variable Storyline nommée 'RandomText'
player.SetVar("Nom_Personnage", selectedText);
}

window.Script2 = function()
{
  // Récupérer l'objet 'player' qui permet d'interagir avec Storyline
var player = GetPlayer();

// Liste des textes à tirer au sort
var textList = [
    "aurait du succès sur Tinder.",
    "survivrait sur une île déserte.",
    "se ferait facilement arrêter par la police.",
    "vote à droite.",
    "vote à gauche.",
    "serait un bon parent.",
    "arriverait à s'échapper d'une prison de haute sécurité.",
    "est une personne radine.",
    "est toujours choisi en premier quand on forme des équipes au foot.",
    "est une personne bonne perdante.",
    "aurait collaboré en 40.",
    "survirait lors d'une apocalypse zombie.",
    "est très romantique avec son/sa partenaire.",
    "ferait un carton d'audience dans une télé-réalité.",
    "aimerait gagner les éléctions présidentielles.",
    "gagnerait les Hunger Games.",
    "se laisse facilement influencer par la publicité.",
    "préfèrerait voyager dans le passé que dans le futur.",
    "est une personne toujours en retard.",
    "aimerait faire de la chirurgie esthétique.",
    "ment souvent à ses amis.",
    "est toujours le DJ de la soirée.",
    "irait au paradis une fois mort.e.",
    "irait en enfer une fois mort.e.",
    "offre toujours des cadeaux nuls à Noël.",
    "stalke régulièrement ses exs.",
    "s'énerve facilement.",
    "gagne contre tout le monde en combat singulier.",
    "est très naze en débat.",
    "déteste travailler.",
    "pratique le polyamour.",
    "croit en l'astrologie.",
    "serait un mauvais parent.",
    "se croit au dessus des autres.",
    "laisse toujours de mauvais avis sur Google.",
    "est une personne adorée par ses voisins.",
    "aime l'inconnu.",
    "reste calme en toutes circonstances.",
    "pourrait être chroniqueur à TPMP.",
    "resterait en vie dans un film d'horreur.",
    "fait partie d'un gang.",
    "a des goûts élitistes.",
    "était l'élève chouchou des professeurs.",
    "est en réalité un agent secret.",
    "cache aux autres personnes sa véritable passion...",
    "est une personne très macho.",
    "vient d'une autre planète.",
    "aimerait devenir une star sur TikTok.",
    "est anarchiste.",
    "aimerait changer de vie.",
    // Ajoutez plus de chaînes de texte ici, selon vos besoins
];

// Générer un indice aléatoire basé sur la longueur de la liste des textes
var randomIndex = Math.floor(Math.random() * textList.length);

// Utiliser l'indice aléatoire pour obtenir un texte aléatoire à partir de la liste
var selectedText = textList[randomIndex];

// Affecter le texte aléatoire à la variable Storyline nommée 'RandomText'
player.SetVar("Sujet_Débat", selectedText);
}

window.Script3 = function()
{
  // Récupérer l'objet 'player' qui permet d'interagir avec Storyline
var player = GetPlayer();

// Liste des textes à tirer au sort
var textList = [
    "Emmanuel Macron",
    "Joséphine Ange Gardien",
    "Quasimodo",
    "Charles De Gaulle",
    "Barbie",
    "Nicolas Sarkozy",
    "Picsou",
    "Valérie Pécresse",
    "Hermione Granger",
    "Donald Trump",
    "Inspecteur Gadget",
    "Kim Jong-Un",
    "Phoebe (Friends)",
    "Elon Musk",
    "Willy Wonka",
    "Napoléon",
    "Aladdin",
    "Louis XIV",
    "Le Père-Noël",
    "Jeanne d'Arc",
    "Professeur Xavier (X-Men)",
    "Joseph Staline",
    "Bridget Jones",
    "Gandhi",
    "Sherlock Holmes",
    "Jules César",
    "Titeuf",
    "Cléopâtre",
    "Obélix",
    "Serge Gainsbourg",
    "Wonder Woman",
    "Renaud",
    "Charlie (Où est Charlie ?)",
    "Johnny Hallyday",
    "Gollum",
    "Madonna",
    "Edward (Twillight)",
    "Michael Jackson", 
    "Kirikou",
    "Angèle",
    "Zazie",
    "Superman",
    "Aya Nakamura",
    "Le monstre de Frankenstein",
    "Mulan",
    "Lady Gaga",
    "Tintin",
    "Miley Cyrus",
    "Bob l'éponge",
    "Francis Lalanne",
    "Voldemort",
    "Jul",
    "Brice de Nice",
    "John Lennon",
    "Dora l'Exploratrice",
    "Bob Marley",
    "Indiana Jones",
    "Zinedine Zidane",
    "James Bond",
    "Teddy Riner",
    "Cristiano Ronaldo",
    "Guignol (la marionnette)",
    "Jésus",
    "Usain Bolt",
    "Squeezie",
    "Shrek",
    "Lena Situations",
    "Amélie Poulain",
    "Susan (Desperate Housewives)",
    "Louis de Funes",
    "Rocky",
    "Elise Lucet",
    "Cyrano de Bergerac",
    "Omar Sy",
    "Gérard Depardieu",
    "Daenerys Targaryen",
    "Yoda",
    "Natalie Portman",
    "Dark Vador",
    "Marilyn Monroe",
    "Homer Simpson",
    "Sylvester Stallone",
    "L'Homme invisible",
    "Céline Dion",
    "Batman",
    "Zendaya",
    "Mickey Mouse",
    "Jim Carrey",
    "Dracula",
    "Jackie Chan",
    "Le Joker",
    "Cyril Hanouna",
    "Tarzan",
    "Pascal le grand frère",
    "Super Nanny",
    "Hercules",
    "Philippe Etchtebest",
    "Cendrillon",
    "Le Père Fourras",
    "Cristina Cordula",
    // Ajoutez plus de chaînes de texte ici, selon vos besoins
];

// Générer un indice aléatoire basé sur la longueur de la liste des textes
var randomIndex = Math.floor(Math.random() * textList.length);

// Utiliser l'indice aléatoire pour obtenir un texte aléatoire à partir de la liste
var selectedText = textList[randomIndex];

// Affecter le texte aléatoire à la variable Storyline nommée 'RandomText'
player.SetVar("Nom_Personnage", selectedText);
}

window.Script4 = function()
{
  // Récupérer l'objet 'player' qui permet d'interagir avec Storyline
var player = GetPlayer();

// Liste des textes à tirer au sort
var textList = [
    "aurait du succès sur Tinder.",
    "survivrait sur une île déserte.",
    "se ferait facilement arrêter par la police.",
    "vote à droite.",
    "vote à gauche.",
    "serait un bon parent.",
    "arriverait à s'échapper d'une prison de haute sécurité.",
    "est une personne radine.",
    "est toujours choisi en premier quand on forme des équipes au foot.",
    "est une personne bonne perdante.",
    "aurait collaboré en 40.",
    "survirait lors d'une apocalypse zombie.",
    "est très romantique avec son/sa partenaire.",
    "ferait un carton d'audience dans une télé-réalité.",
    "aimerait gagner les éléctions présidentielles.",
    "gagnerait les Hunger Games.",
    "se laisse facilement influencer par la publicité.",
    "préfèrerait voyager dans le passé que dans le futur.",
    "est une personne toujours en retard.",
    "aimerait faire de la chirurgie esthétique.",
    "ment souvent à ses amis.",
    "est toujours le DJ de la soirée.",
    "irait au paradis une fois mort.e.",
    "irait en enfer une fois mort.e.",
    "offre toujours des cadeaux nuls à Noël.",
    "stalke régulièrement ses exs.",
    "s'énerve facilement.",
    "gagne contre tout le monde en combat singulier.",
    "est très naze en débat.",
    "déteste travailler.",
    "pratique le polyamour.",
    "croit en l'astrologie.",
    "serait un mauvais parent.",
    "se croit au dessus des autres.",
    "laisse toujours de mauvais avis sur Google.",
    "est une personne adorée par ses voisins.",
    "aime l'inconnu.",
    "reste calme en toutes circonstances.",
    "pourrait être chroniqueur à TPMP.",
    "resterait en vie dans un film d'horreur.",
    "fait partie d'un gang.",
    "a des goûts élitistes.",
    "était l'élève chouchou des professeurs.",
    "est en réalité un agent secret.",
    "cache aux autres personnes sa véritable passion...",
    "est une personne très macho.",
    "vient d'une autre planète.",
    "aimerait devenir une star sur TikTok.",
    "est anarchiste.",
    "aimerait changer de vie.",
    // Ajoutez plus de chaînes de texte ici, selon vos besoins
];

// Générer un indice aléatoire basé sur la longueur de la liste des textes
var randomIndex = Math.floor(Math.random() * textList.length);

// Utiliser l'indice aléatoire pour obtenir un texte aléatoire à partir de la liste
var selectedText = textList[randomIndex];

// Affecter le texte aléatoire à la variable Storyline nommée 'RandomText'
player.SetVar("Sujet_Débat", selectedText);
}

};
