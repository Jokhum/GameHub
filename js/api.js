const url = "https://jkmzd.eu/api/wp-json/wc/store/products";


const gameContainer = document.querySelector(".gamecolumn");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const games = results.sort((a, b) => a - b);

    gameContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {

        gameContainer.innerHTML += `
                                    <div class="games">
                                    <a href="gameinfo.html?id=${games[i].id}">
                                    <img src="${games[i].images[0].src}" alt="Game Image" class="item-image">
                                    </a>
                                    <span class="store-item-title">${games[i].name}</span>
                                    <span class="store-item-price">£ ${games[i].prices.price}</span>
                                    <button class="store-item-atc" type="button">
                                    Add to Cart
                                    </button>
                                    </div
                                    `;
    }
}

getGames();
