// REMOVING ITEMS FROM CART!

const removeItemButton = document.getElementsByClassName("remove-button")


for (var i = 0; i < removeItemButton.length; i++) {

    const button = removeItemButton[i]

    button.addEventListener("click", function(event) {

        const buttonClick = event.target

        buttonClick.parentElement.remove();

        cartTotal();

    })
}


// Changing the quantity value for Cart Total value.

let quantityProducts = document.getElementsByClassName("cart-quantity")

for (var i = 0; i < quantityProducts.length; i++) {

    let amount = quantityProducts[i]

    amount.addEventListener("change", amountChanged)
}

// Removing the ability to set quantity to a negative value or not a number.


function amountChanged(event) {

    const amount = event.target

    if (isNaN(amount.value) || amount.value <= 0) {

        amount.value = 1

    }

    cartTotal()
    
}


// UPDATING CART TOTAL PRICE

function cartTotal() {

    let cartItemRows = document.getElementsByClassName("cart-rows")[0]

    let itemRows = cartItemRows.getElementsByClassName("cart-item")

    let total = 0

    for (var i = 0; i < itemRows.length; i++) {
        
        let cartRow = itemRows[i]

        let priceItem = cartRow.getElementsByClassName("pricetag")[0]

        let amountItem = cartRow.getElementsByClassName("cart-quantity")[0]

        // Find Price & Remove Valuta Sign

        let price = parseFloat(priceItem.innerText.replace("$", ""))

        // Find Quantity of Items

        let quantity = amountItem.value

        // Add up to the total

        total = total + (price * quantity)
    }

    // Adding the total to Cart-Total-Price element.

    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total

}


