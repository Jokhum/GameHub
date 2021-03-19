// REMOVING ITEMS FROM CART!

const removeItemButton = document.getElementsByClassName("btn-danger")

for (var i = 0; i < removeItemButton.length; i++) {

    const button = removeItemButton[i]

    button.addEventListener("click", function(event) {

        const buttonPressed = event.target

        buttonPressed.parentElement.remove()

        cartTotal()

    })

}

// UPDATING CART TOTAL

function cartTotal() {

    const cartItemRow = document.getElementsByClassName("games-cart")[0]
    const cartRows = cartItemRow.getElementsByClassName("purchasedgames")

    for (var i = 0; i < cartRows.length; i++) {
        
        const cartRow = cartRows[i] 

        const priceItem = cartRow.getElementsByClassName("pricetag")[0]

        const amountItems = cartRow.getElementsByClassName("cart-quantity")[0]

        console.log(cartRow);
    }
}


