// array [id produit+qté produit+couleur produit]
/*id  produit.color+ quantite 
let idProduit = ['','']; 
let quantiteProduit = ['',''];
let colorProduit = ['','']; 

// utiliser localStorage pour pouvoir accèder à l'array depuis la page panier 


//var cart = localStorage.getItem('produit'); 
console.log(localStorage); 

localStorage.setItem("", ""); */ 

//let stockageInfoProduits = JSON.stringify(panierProduct); 
//window.localStorage.setItem('infoProduit', stockageInfoProduits);
//console.log(window.localStorage.getItem('infoProduit')); 
//});


//---------------------------------------

//----- Récupération des données du local storage

    //prendre la key dans le localStorage et la mettre dans une variable 
let /*data*/stockageInfoProduits = window.localStorage.getItem('infoProduit');
    //convertir la chaine de caractère en objet javascript
let panierProduct = JSON.parse(/*data*/stockageInfoProduits);


// Déclaration des éléments 
const cartItems = document.getElementById('cart__items').setAttribute('value', panierProduct.quantitePanierProduits);  //.value = panierProduct.id;
   /* const newArticle = document.createElement("article")
    cartItems.appendChild(newArticle)
        const divNewArticleImage = document.createElement("div")
        newArticle.appendChild(divNewArticleImage)
            const newImage = document.createElement("img")
            divNewArticleImage.appendChild(newImage)

        const divNewArticleContent = document.createElement("div")
        newArticle.appendChild(divNewArticleContent)
            const divNewArticleContentTitlePrice = document.createElement("div")
            divNewArticleContent.appendChild(divNewArticleContentTitlePrice)
                const nameTitlePrice =document.createElement("h2")
                divNewArticleContentTitlePrice.appendChild(nameTitlePrice)
                   // nameTitlePrice.textContent= 'h2'
                const priceTitlePrice = document.createElement("p")
                divNewArticleContentTitlePrice.appendChild(priceTitlePrice)
                    priceTitlePrice.textContent="price p"
            const divNewArticleContentSettings = document.createElement("div") 
            divNewArticleContent.appendChild(divNewArticleContentSettings)
                const divNewArticleContentSettingsQuantity = document.createElement("div")
                divNewArticleContentSettings.appendChild(divNewArticleContentSettingsQuantity) 
                    const quantiteSettingsQuantity = document.createElement("p")
                    divNewArticleContentSettingsQuantity.appendChild(quantiteSettingsQuantity)
                        quantiteSettingsQuantity.textContent='qté'
                    const inputsettingsQuantity = document.createElement("input") 
                    divNewArticleContentSettingsQuantity.appendChild(inputsettingsQuantity)
                        inputsettingsQuantity.textContent='input'
                const divNewArticleContentSettingsDelete = document.createElement("div")
                divNewArticleContentSettings.appendChild(divNewArticleContentSettingsDelete)
                    const deleteItem = document.createElement("p")
                    divNewArticleContentSettingsDelete.appendChild(deleteItem)
                        deleteItem.textContent='delete'*/ 

/*function remplirChampDepuisLocalStorage (){
    document.querySelector().value = panierProduct
}*/ 


//const nouvelleImage = document.createElement("img"); 

/*const getInfoproduits = localStorage.getItem()
 //JSON.parse(localStorage.getItem('infoProduit')); 
console.log(getInfoproduits); 

const nouvelArticle = document.createElement("article"); 
    cartItems.appendChild('nouvelArticle'); */ 


  


/*for (let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i); 
    alert ()
}*/ 

/*let panierProduct = JSON.parse(stockageInfoProduits);*/ 

/*const nouvelArticle = document.createElement("article"); 
    cartItems.appendChild('nouvelArticle'); */ 

/*const divNouvelleImage = document.createElement("div"); 
const nouvelleImage = document.createElement("img");    
const divNouveauContent = document.createElement("div"); 
const divTitlePrice = document.createElement("div"); 
const nomTitlePrice =document.createElement("h2"); 
const prixTitlePrice = document.createElement("p"); 
const divSettings = document.createElement("div"); 
const divSettingsQuantity = document.createElement("div"); 
const quantiteSettingsQuantity = document.createElement("p"); 
const inputsettingsQuantity = document.createElement("input"); 
const divDelete = document.createElement("div"); 
const Delete = document.createElement("p"); */ 



/*document.getElementById("cart__items").appendChild("")*/ 

/*let stockageInfoProduits = window.localStorage.getItem('infoProduit');
let panierProduct = JSON.parse(stockageInfoProduits);*/ /*

//-------------
let nouveau = document.createElement("li"); // on créé un nouvel élément li 
nouveau.id = "surdoué"; // nouvel élément noueau l'ID "surdoué"
nouveau.textContent = "PIANO" // on assigne le contenu textuel à l'élément piano
document.getElementById("instrument").appendchil(PIANO); //on ajoute le nouvel élément piano dans la liste ayant pour ID instruments

/*for (let i=0; i < panierProduct.length-1; i++) {
    document.write(panierProduct[i] = "<br>"); 
    console.log(i)
} */ 


/*function ProductsCart(picture,name,price){
   this.picture = picture,
   this.name = name, 
   this.price = price 
}

/*const product1 = new ProductsCart('chemin img', 'nom du produit', 'prix du produit');*/

/*let products = []; */


/*let productCart1 = {
    name : "product1", 
    price : 55, 
}

let productCart2 = {
    name : "product2", 
    price : 20, 
}

let products = []; 
products.push(productCart1,productCart2); */ 
 

//console.log('toutes les valeurs sont enregistrées !'); 