

function createCard(product) {
  var card = document.createElement("div");
  card.classList.add("card1", "swiper-slide");
  var imageBox = document.createElement("div");
  imageBox.classList.add("image-box");
  var img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  imageBox.appendChild(img);
  card.appendChild(imageBox);
  img.addEventListener("click", function () {
    var queryParams = new URLSearchParams();
    queryParams.append("id", product.id);
  
    var url = './Product_page.html?' + queryParams.toString();
    window.open(url, '_self');
  });
  card.style = "cursor: pointer;";
  return card;
}

function populateSwiper(cardWrapperId) {
  var xhr = new XMLHttpRequest();
  var url = "./pruducts.json";
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var cardWrapper = document.getElementById(cardWrapperId);
        data.products.forEach(function (product) {
          var card = createCard(product);
          cardWrapper.appendChild(card);
        });
      } else {
        console.error("Failed to fetch data from the API.");
      }
    }
  };
  xhr.send();
}

populateSwiper("card-wrapper");
populateSwiper("card-wrapper2");
populateSwiper("card-wrapper3");
populateSwiper("card-wrapper4");
populateSwiper("card-wrapper5");
populateSwiper("card-wrapper6");

function updateCartCount() {
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  var cartCountElement = document.querySelector(".cart_num");
  
  cartCountElement.textContent = cartItems.length;
}

window.addEventListener("load", function () {
  updateCartCount();
});



