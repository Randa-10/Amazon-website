const cartProducts = document.getElementById("cart-products");
const checkoutButton = document.getElementById("checkout-button");


var cartItems = JSON.parse(localStorage.getItem("cart")) || [];


const xhr = new XMLHttpRequest();
xhr.open("GET", "../pruducts.json", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const products = response.products;

        cartItems.forEach(function (cartItemId) {
            const product = products.find(function (p) {
                return p.id === cartItemId;
            });

           
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";

            cartItem.innerHTML = `
            <div class="cart-product">
                <img src="${product.img}" alt="${product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Category: ${product.category}</p>
                    <br
                    <p>Price: ${product.price}</p>
                    <div class="div-remove-button">
                    <button class="remove-button" data-product-id="${product.id}">&times; </button>
                    
                    </div>
                    
                </div>
               
                </div>
                
            `;

            cartProducts.appendChild(cartItem);
        });
        updateTotalPrice(products);
    } else {
        console.error("Error loading products.");
    }
};
xhr.send();

function updateTotalPrice(products) {
    var total = 0;
  
    cartItems.forEach(function (cartItemId) {
      var product = products.find(function (p) {
        return p.id == cartItemId;
      });
  
      total += product.price;
    });
  
    var totalPriceElement = document.querySelector("#total");
    totalPriceElement.textContent = "$" + total.toFixed(2); // Display the total price with 2 decimal places
  }

function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartCountElement = document.querySelector(".cart_num");
    
    cartCountElement.textContent = cartItems.length;
  }

  window.addEventListener("load", function () {
    updateCartCount();
  });

  cartProducts.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-button")) {
        var productId = event.target.getAttribute("data-product-id");
        
        
        var updatedCartItems = [];
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i] != productId) {
                updatedCartItems.push(cartItems[i]);
            }
        }

        console.log(updatedCartItems);

        // localStorage.removeItem("cart");
        
       
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        
        
        event.target.closest(".cart-item").remove();
        
        
        
        updateCartCount();
    }
});


  

var checkoutBottun = document.getElementById('checkout-button');

checkoutBottun.addEventListener('click',function(){
    window.location.href = "pay.html";
})


