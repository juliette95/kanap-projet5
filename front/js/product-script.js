

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

// Enregistrer [id produit+quantité produit+couleur produit] dans array 
var boutonProductToCart = document.getElementById('addToCart'); 

/*function loadNewPage(url){
    window.location= url; 
}; */


boutonProductToCart.addEventListener('click', function(){
validNumber()

//--------Déclaration de la variable "stockageInfoProduits" dans laquelle on met les key et values dans le local storage  

/*window.localStorage.setItem('infoProduit', JSON.stringify(panierProduct)); */ 
/*let stockageInfoProduits = JSON.stringify(panierProduct); 
window.localStorage.setItem('infoProduit', stockageInfoProduits);
console.log(window.localStorage.getItem('infoProduit')); */ 

let stockageInfoProduits = JSON.parse(window.localStorage.getItem('infoProduit')); // permet de déclarer stockageInfoProduits

/*let containSomething = stockageInfoProduits.includes(id); */ 

if (stockageInfoProduits){ 
   for (const valueStockage of stockageInfoProduits /* let i=0; i<stockageInfoProduits.length; i++*/ ) {
        if (valueStockage.idPanierProduits == id && valueStockage.colorPanierProduits == selectColorsID.value)  {  // si il y a déjà des produits d'enregistré dans le local storage 
       
   
        /* valueStockage.quantitePanierProduits = quantite.value */ 
        alert('hey');
       
        
                //JSON.stringify c'est pour convertir les données au format javascript qui sont dans le localStorage en format JSON 
        //window.localStorage.setItem('infoProduit', JSON.stringify(stockageInfoProduits)); 
        //console.log(stockageInfoProduits); 
            //panierProduct.push(quantitePanierProduits);    
         } else{ // si il n'y a pas de produit d'enregistré dans le local storage  
         
    // ce else ne fonctionne pas, il ajoute à chaque fois un array ! 
                var panierProduct = []
                var myPanierProduits = {
                    idPanierProduits : id,
                    quantitePanierProduits : quantite.value, 
                    colorPanierProduits : selectColorsID.value, 
                }
        stockageInfoProduits.push(myPanierProduits);
        window.localStorage.setItem('infoProduit', JSON.stringify(stockageInfoProduits)); //JSON.stringify c'est pour convertir les données au format JSON qui sont dans le localStorage en format javascript
        console.log(stockageInfoProduits);  
        alert ('hello')
        
            }  
    }
}else {   // sinon aucun produit n'est enregistré , ajouter cet array []
   var panierProduct = []
    var myPanierProduits = {
        idPanierProduits : id,
        quantitePanierProduits : quantite.value, 
        colorPanierProduits : selectColorsID.value, 
    }
    panierProduct.push(myPanierProduits); 
    window.localStorage.setItem('infoProduit', JSON.stringify(panierProduct)); 
    console.log(panierProduct); 
    }
//window.location.href= "cart.html";
});





//-----------------------------------------------------------------------------------------------------------------------
//loadNewPage ('cart.html'); 
// window.location.href='cart.html'; 

/*function tableListCart(){
    let listOfProduct = ''; 

    panierProduct.forEach( prod =>
        let listOfProduct +=' '

        )
}
);*/ 

//var addValue = panierProduct.push(x); 
//document.write()


// Données panierProduits stockées dans localStorage pour les réutiliser

//Option 2 
/*var myPanierProduits = new PanierProduits(); 
myPanierProduits.idProduitPanier = id; 
myPanierProduits.quantiteProduitpanier = validNumber;
myPanierProduits.colorProduitPanier = optionsValueColors; 

myPanierProduits = []; */ 

//console.log(myPanierProduits);
//document.write (myPanierProduits.length); 
 

// Ajouter nouveaux éléments à la fin du tableau 
//var ajouterElementTableau = panierProduits.push(newInfoPanierProduits); 

//--------------
// Retourne nouveau tableau éléments ajoutés ou supprimés
/*var tableMisajour = panierProduits.splice();*/ 

/*cartProduit[0]=id;
cartProduit[1]=validNumber; 
cartProduit[2]=produit.colors; */ 

 

/*var cartProduit = [
    id= ; 

]

cartProduit = []; 

cart.push 


window.localStorage.setItem('infoProduit', json.strify(cartProduit));*/ 


//--------------

/*let itemQuantity = document.getElementById('quantity')
let itemQuantityMax = 100; 
//let maxMessage = ''; 

function quantityMax (){
 if (itemQuantity<=itemQuantityMax){
     //maxMessage = 'valid quantity';
    return true;
     //console.log("Utilisateur connecté!"); 
 } else {
     return false; 
     //maxMessage = 'quantity cannot be valid';
    //console.log("Alerte, intrus!")
 }

 console.log(maxMessage); 
}*/ 
//let quantity; 
/*let quantityMax = 100; */ 

/*function valider(){
    espaceMessage.innerHTML = 'Number of items is valid'; 
}*/ 

/*function refuser(){
    alert('this quantity is not valid');
}*/ 

/*var erreur; 
var quantite = document.getElementById('quantity');

if (erreur){
    e
}

if (quantite){
    var erreurMessage = document.createElement('mistake').innerHTML=erreur;
}else {
    alert('message envoyé'); 
}*/ 

/* quantity = parseInt(quantityMax.value); 
 if (isNaN(quantity)){
     alert('It is not a number'); 
     return; 
 }
*/ 
 /*if (itemQuantity.value == ''){
    alert('Number field cannot be empty');
    return false; 
 }*/ 
 /*if(!itemQuantity>1){
     alert('Number cannot be greater than 100');
     return false;
 } else {
     return true;
    /*alert('this quantity is not valid');*/  
 //}
// quantityMax.value =""; 


//itemQuantity.addEventListener ('click', onConfirm);




//const n = itemQuantity.value; 
//n = Number (n); 

   // if (itemQuantity <= 100) {
     //   itemQuantity = true; 
    //} else {
      //  itemQuantity = false;
    //}

/*console.log(itemQuantity.size);
    itemQuantity.size= 10; 
    itemQuantity.maxLength = 1; */ 
  
/*function quantityLimit(quantity){
        if (quantity.value < 0) quantity.value=0; 
        if (quantity.value >100) quantity.value=100; 
        isValid = true; 
     } else {
         isValid = false; 
             
         });
     }*/ 


    

  /*function charger_colors()
{
   /* let tab_colors=""; 
   let nb_colors=0; 
   let chaine_liste=""; 
    let colors_texte = document.getElementById('colors').value;
    let colorOptionsInitialValue = document.getElementsByTagName('option') [0];*/ 
   
  /*  let colorOptionsInitialValue = document.getElementsByTagName("option")[0];
    let colorList = document.createElement("table");
    let colorListOption = document.createElement("OptionColor"); 
}*/


//----------------------------------------------------------------------

//ONCLICK


/*getProduct.onclick = function(productPage) {
   console.log(productPage)
}*/ 

//const imgProductPage = document.getElementsByClassName('item_img');
//const firstContent = contents[0];

//----------------------------------------------------------------------
//RECUPERER DONNEES API POUR PAGE PRODUCTS 

/*let productPage = document.getElementsByClassName('item');

const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const color = document.getElementById('colors');
const imgProductPage = document.createElement('img')

title.addEventListener('click', function() {      */ 


//-----------------------------------------------------------------------


