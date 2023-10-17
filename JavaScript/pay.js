function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartCountElement = document.querySelector(".cart_num");
    
    cartCountElement.textContent = cartItems.length;
  }

  window.addEventListener("load", function () {
    updateCartCount();
  });