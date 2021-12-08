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

let cartItems = document.getElementById('cart__items');
let stockageInfoProduits = window.localStorage.getItem('infoProduit');
let panierProduct = JSON.parse(stockageInfoProduits);


for (let i=0; i < panierProduct.length-1; i++) {
    document.write(panierProduct[i] = "<br>"); 
    console.log(i)
} 



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