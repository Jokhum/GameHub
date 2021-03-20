const atcButton = document.getElementsByClassName("store-item-atc")


    for (var i = 0; i < atcButton.length; i++) {

    const click = atcButton[i]

    click.addEventListener("click", function() {

        window.location.href = "./shoppingcart.html"

    })

}

