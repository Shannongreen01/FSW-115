var anime = [
    {
        "anime": "Gintama",
        "character": "Katsura Kotarou",
        "quote": "If you have faith, your dreams will surely come true."
    },
    {
        "anime": "Aikatsu!",
    "character": "Johnny Beppu",
    "quote": "Become an idol who can laugh through the bitterness. If you do that, you can make everyone happy."
    },
    {
        "anime": "Yu Yu Hakusho",
        "character": "Kazuma Kuwabara",
        "quote": "*to Urameshi* Sacrificing your life to save billions of others. You've lit our torches and I won't let your death be in vain... even if it means I'll be joining you soon."
    },
    {
        "anime": "Yahari Ore No Seishun Love Come Wa Machigatteiru",
        "character": "Yukino Yukinoshita",
        "quote": "If all you're good for is breathing in and out, then even an AC unit is more useful than you."
    },
    {
        "anime": "Devil Survivor 2",
        "character": "Hibiki Kuze",
        "quote": "A wounded heart needs time to heal."
    },
    {
        "anime": "Ef - A Fairy Tale Of The Two",
        "character": "Amamiya Yuuko",
        "quote": "A miracle never comes to those who seek it."
    },
]


var List = document.getElementById("characters");
for (var i = 0; i < anime.length; i++){
    List.innerHTML += "<li>" + Object.values(anime[i]) + "</li>"
};

List.style.color = "black"
List.style.fontSize = "25px"
