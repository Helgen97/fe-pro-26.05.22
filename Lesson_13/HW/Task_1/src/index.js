class Character {

    constructor({ name, height, mass, hair_color, birth_year, gender }) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.birth_year = birth_year;
        this.gender = gender;
    }

}

class Card {

    constructor() {};

    createCard = (character = Character) => {
        const div = document.createElement("div");
        div.classList.add("card");

        for (let key in character) {
            let p = document.createElement("p");
            let span = document.createElement("span");

            span.innerText = key + ": ";
            p.innerText = character[key];
            p.prepend(span)
            div.append(p);
        }
        return div;
    }
}

const cardBox = document.querySelector(".box");

const responce = fetch("https://swapi.dev/api/people", {
    method: "GET"
}).then(responce => {
    return responce.json()
}).catch(error => {
    console.error(error)
}).finally(() => {
    console.log("Fetching done");
});

responce.then((data) => {
    data.results.forEach(element => {
        let character = new Character(element);
        let card = new Card();
        cardBox.append(card.createCard(character));
    });
})

