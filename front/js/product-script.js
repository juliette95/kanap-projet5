

//COLLECT QUERY STRING (récupération chaine de requète dans l'URL)  

const queryString_url_id = window.location.search; 
console.log(queryString_url_id); 

   //URLSearchParams method
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("productId");
console.log(id);

fetch ('http://localhost:3000/api/products/'+id) 
   .then(res => res.json())
   .then(data => injectProduct(data))
.catch(err => console.log(err))


let productPage = document.getElementsByClassName('item')
const title = document.getElementById('title')
const price = document.getElementById('price')
const description = document.getElementById('description')
const selectColorsID = document.getElementById('colors')  

const injectProduct = (produit)=>{
    const imgDivProductPage = document.getElementsByClassName('item__img')[0]
    const imgProductPage = document.createElement('img')
    imgDivProductPage.appendChild(imgProductPage)

    for (let value of produit.colors){ // colors drop-down menu 
        const optionsValueColors = document.createElement('option')
        optionsValueColors.textContent = value
        selectColorsID.appendChild(optionsValueColors)
    }

    title.textContent = produit.name
    price.textContent = produit.price
    description.textContent = produit.description
    imgProductPage.src = produit.imageUrl  

}
//----------------------------
let quantite = document.getElementById('quantity');
let bouton = document.getElementById('addToCart'); 

function validNumber(){ // function in order that the quantite value does not exceed 100 
   if (quantite.value <= 100){
       return true;
   } else {
       alert('Number of items cannot exceed 100'); 
       return false;  
   }
}

// register [id product+quantity product+color product]in array 
var boutonProductToCart = document.getElementById('addToCart'); 

/*function loadNewPage(url){
    window.location= url; 
}; */


boutonProductToCart.addEventListener('click', function(){
    validNumber()
//--------Déclaration de la variable "stockageInfoProduits" dans laquelle on met les key et values dans le local storage  
    let stockageInfoProduits = JSON.parse(window.localStorage.getItem('infoProduit')); // permet de déclarer stockageInfoProduits
    //permet de déclarer stockageInfoProduits
    console.log(stockageInfoProduits)
    let index= null; 
    if (stockageInfoProduits){ 
        for (const [i, valueStockage] of stockageInfoProduits.entries()) {  
                if (valueStockage.idPanierProduits === id && valueStockage.colorPanierProduits === selectColorsID.value){  // si il y a déjà des produits d'enregistré dans le local storage 
                index = i;
                }
        }
        if(index!=null) {
            stockageInfoProduits[index].quantitePanierProduits = quantite.value; 
        }
        else{ // (si il n'y a pas de produit d'enregistré dans le local storage)          
               // var panierProduct = []
            var myPanierProduits = {
                idPanierProduits : id,
                quantitePanierProduits : quantite.value, 
                colorPanierProduits : selectColorsID.value, 
            }
            stockageInfoProduits.push(myPanierProduits);
            window.localStorage.setItem('infoProduit', JSON.stringify(stockageInfoProduits)); //JSON.stringify c'est pour convertir les données au format JSON qui sont dans le localStorage en format javascript
        }
    }else{   // (sinon aucun produit n'est enregistré , ajouter cet array)
        var panierProduct = []
        var myPanierProduits = {
            idPanierProduits : id,
            quantitePanierProduits : quantite.value, 
            colorPanierProduits : selectColorsID.value, 
        }
        panierProduct.push(myPanierProduits); 
        window.localStorage.setItem('infoProduit', JSON.stringify(panierProduct)); 
        console.log('boooo'); 
    }
window.location.href= "cart.html";  
});

