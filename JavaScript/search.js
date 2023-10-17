var queryString = location.search;
var searchValue = queryString.split("=")[1].replace(/^\++|\++$/gm,'');
searchValue = searchValue.replace(/\++/,' ');
console.log(searchValue);

var xhr = new XMLHttpRequest();
xhr.open("GET", "pruducts.json", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var ResponseData = xhr.response;
        var data = JSON.parse(ResponseData);
        var products = data.products;
        console.log(products);
        const lowercaseQuery = searchValue.toLowerCase();

        // Filter products based on the search query
        const results = products.filter(function (product) {

            const lowercaseName = product.name.toLowerCase();
            const lowercaseCategory = product.category.toLowerCase();

            // Match product name or category with the search query
            return lowercaseName.includes(lowercaseQuery) || lowercaseCategory.includes(lowercaseQuery);
        });
        console.log(results);
        DisplayProducts(results);
    }
}

xhr.send();

function DisplayProducts(matchedProducts) {
    var container = document.getElementById("result");

    if (matchedProducts.length > 0) {
        matchedProducts.forEach(function (product) {

            var cardDiv = document.createElement("div");
            cardDiv.classList.add("search-card");

            cardDiv.addEventListener("click", function () {
                const url = '/Product_page.html';
                const QueryString = 'id=' + product.id;
                const redirectUrl = `${url}?${QueryString}`;

                window.location.href = redirectUrl;
            });

            var productName = document.createElement("p");
            productName.innerText = product.name;
            cardDiv.appendChild(productName);
            productName.classList.add("search-p");

            var Image = document.createElement("img");
            Image.setAttribute("src", product.img);
            cardDiv.appendChild(Image);

            container.appendChild(cardDiv);


        });
    } else {
        var divNoResult = document.createElement("div");
        divNoResult.innerText = "No result";
        divNoResult.classList.add("div-noResult");
        container.appendChild(divNoResult);
    }

}


