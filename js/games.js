const button = document.getElementsByClassName("store-item-atc")


for (var i = 0; i < button.length; i++) {

    const click = button[i]

    click.addEventListener("click", function() {

        window.location.href = "./shoppingcart.html"

    })

}