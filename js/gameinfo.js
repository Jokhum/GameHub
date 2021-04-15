const gamePage = document.querySelector(".gamepage");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const newUrl = "http://jkmzd.eu/api/wp-json/wc/store/products/" + id;

console.log(id);

async function getGameInfo() {

    try {

    const response = await fetch(newUrl);
    const gameInfo = await response.json();

    createHtml(gameInfo);

    console.log(gameInfo);

    }
    catch(error) {
        console.log(error);
        gamePage.innerHTML = "An error has occurred.";
    }
}

getGameInfo();

// CReate Game Info HTML //

function createHtml(gameInfo) {

    const gameName = gameInfo.name;
    const gameImage = gameInfo.images[0].src;
    const gameDescription = gameInfo.description;
    const gameReview = gameInfo.short_description;

    try {

    gamePage.innerHTML = `  <div class="game-centered-container">
                                <img src="${gameImage}"></img>
                                <h1>${gameName}</h1>
                                ${gameDescription}
                                ${gameReview}
                                <button class="store-item-atc" type="button">
                                Add to Cart
                                </button>
                                </div>
                                `;
    }
    catch(error) {
        console.log(error);
        teamContainer.innerHTML = "An error has occurred."
    }
}