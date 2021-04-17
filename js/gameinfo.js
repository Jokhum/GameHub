const gamePage = document.querySelector(".gamepage");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const newUrl = "https://jkmzd.eu/api/wp-json/wc/store/products/" + id;

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


function createHtml(gameInfo) {

    const gameName = gameInfo.name;
    const gameImage = gameInfo.images[0].src;
    const gameDescription = gameInfo.description;
    const gameReview = gameInfo.short_description;

    try {

    gamePage.innerHTML = `<img src="${gameImage}" class="game-info-image"></img>
                             <div class="game-title-descript">
                               <h1>${gameName}</h1>
                               ${gameDescription}
                               <button class="store-item-atc" type="button">
                               Add to Cart
                           </button>
                           ${gameReview}
                            </div>`;
    }
    catch(error) {
        console.log(error);
        teamContainer.innerHTML = "An error has occurred."
    }
}

getGameInfo().then(() => {


    const gameButton = document.getElementsByClassName("store-item-atc")
    
    console.log(gameButton);
    
        for (var i = 0; i < gameButton.length; i++) {
    
        const click = gameButton[i]
    
        click.addEventListener("click", function() {
    
            window.location.href = "./shoppingcart.html";
    
        })
    
    }
    });