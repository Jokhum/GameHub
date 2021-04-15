getGames().then(() => {


    const gameButton = document.getElementsByClassName("store-item-atc")
    
    console.log(gameButton);
    
        for (var i = 0; i < gameButton.length; i++) {
    
        const click = gameButton[i]
    
        click.addEventListener("click", function() {
    
            window.location.href = "./shoppingcart.html";
    
        })
    
    }
    });