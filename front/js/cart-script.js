
//COLLECT QUERY STRING (récupération chaine de requète dans l'URL)  

const queryString_url_id = window.location.search; 
console.log(queryString_url_id); 

   //URLSearchParams method
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("productId");


//----- retrieve local storage data -------------- 
let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));

function InsertInfoProduct() {
for (const [i,key] of stockageInfoProduit.entries()){ // entries = méthode qui permet de récupérer la clef et la valeur
  //  getProductsListCart(key.id) 
    var index = i; // récupérer l'index (position) du produit
    const cartItems= document.getElementById('cart__items');
   
    const totalPrice = document.getElementById('totalPrice');
    const errorMessage = document.getElementById('firstNameErrorMsg');


    const newArticle = document.createElement("article")
    const divNewArticleImage = document.createElement("div")
    const newImage = document.createElement("img")
    const divNewArticleContent = document.createElement("div")  
    const divNewArticleContentTitlePrice = document.createElement("div")
    const nameTitlePrice = document.createElement("h2")
    const priceTitlePrice = document.createElement("p")
    const divNewArticleContentSettings = document.createElement("div")
    const divNewArticleContentSettingsQuantity = document.createElement("div")
    const quantiteSettingsQuantity = document.createElement("p")
    const inputsettingsQuantity = document.createElement("input")
    const divNewArticleContentSettingsDelete = document.createElement("div")
    const deleteItem = document.createElement("p")
   

    //className 
    newArticle.className += "cart__item"; 
    divNewArticleImage.className += "cart__item__img";
    divNewArticleContent .className += "cart__item__content"
    divNewArticleContentTitlePrice .className += "cart__item__content__titlePrice"
    divNewArticleContentSettings.className+= "cart__item__content__settings" 
    divNewArticleContentSettingsQuantity.className+= "cart__item__content__settings__quantiy"
    inputsettingsQuantity.className+= "itemQuantity" 
    divNewArticleContentSettingsDelete.className+= "cart__content__settings__delete"
    deleteItem.className+= "deleteItem"

    //input
    inputsettingsQuantity.setAttribute('type', 'number')
    inputsettingsQuantity.setAttribute('min', '1')
    inputsettingsQuantity.setAttribute('max', '100')
    inputsettingsQuantity.setAttribute('name', 'itemQuantity')
    inputsettingsQuantity.setAttribute('value', key.quantitePanierProduits)
    //inputsettingsQuantity.setAttribute('data-id', index)
    //delete item 
    deleteItem.setAttribute('role', 'button')
   // deleteItem.setAttribute('data-id', index)

         //Link 
         cartItems.appendChild(newArticle)
         newArticle.appendChild(divNewArticleImage)
         divNewArticleImage.appendChild(newImage)    
         newArticle.appendChild(divNewArticleContent)    
         divNewArticleContent.appendChild(divNewArticleContentTitlePrice)
         divNewArticleContentTitlePrice.appendChild(nameTitlePrice)
         divNewArticleContentTitlePrice.appendChild(priceTitlePrice)
         divNewArticleContent.appendChild(divNewArticleContentSettings)
         divNewArticleContentSettings.appendChild(divNewArticleContentSettingsQuantity)
         divNewArticleContentSettingsQuantity.appendChild(quantiteSettingsQuantity)
         divNewArticleContentSettingsQuantity.appendChild(inputsettingsQuantity)
         divNewArticleContentSettings.appendChild(divNewArticleContentSettingsDelete)
         divNewArticleContentSettingsDelete.appendChild(deleteItem)

         deleteItem.textContent = "Supprimer" //apparaît a chaque creation de div
         quantiteSettingsQuantity.textContent = "Qté : "; 
        //console.log()/*inputsettingsQuantity.value);*/ 

        /*function updateTotalQuantity(){
            //const allQuantity = divNewArticleContentSettingsQuantity.inputsettingsQuantity; 
            for (const i=0; i<divNewArticleContentSettingsQuantity.length; i++){
                const quantity = allQuantity[i]
                const quantityElement = quantity.inputsettingsQuantity
                console.log(quantityElement)
            }
        }*/ 
         
       // divNewArticleContentSettingsQuantity.getElementById('quantiteSettingsQuantity'
        /*function totalQuantityFunction(){
            if (inputsettingsQuantity !== '' && field2 ''){
          */ 

          /*     
                var total = parse
            const totalQuantity = document.getElementById('totalQuantity');
            const total = 0; 
            for (var i=0; i<stockageInfoProduit.length; i++){
                if()
                    total= 
            }
            inputsettingsQuantity.value 
        } */ 
        /* totalQuantity.textContent= value; 
         totalPrice.textContent=value; 
         errorMessage.textContent=value; */

            fetch('http://localhost:3000/api/products/' + key.idPanierProduits )
            .then(res => res.json())
            .then(data => InfoProduct(data))
                .catch(err => console.log(err))
        
        const InfoProduct = (product) => { 
            nameTitlePrice.textContent = product.name
            priceTitlePrice.textContent = product.price + ' €'
            newImage.src = product.imageUrl
            newImage.setAttribute('alt', product.altTxt)
          }


        
          //console.log(priceTitlePrice.textContent = product.price + ' €')

        
         /*cartItems.innerHTML= key+"-",stockageInfoProduit[key]; */ 
       // nameTitlePrice.textContent= key.name; 
        /*priceTitlePrice.textContent= "price"; 
        quantiteSettingsQuantity.innerHTML= stockageInfoProduit[0].quantitePanierProduits; 
        console.log (nameTitlePrice.textContent = key.price)*+ 

 /* text += stockageInfoProduit[key]; */ 

 //fetch 
//} 

     
        inputsettingsQuantity.addEventListener('change', function(){ // modify Qty 
        inputsettingsQuantity./*getAttribute()*/ textContent=this.nodeValue; 
// quantite.value
        console.log()
        window.location.reload(true) // recharger la page

        //position ok, modifier le local storage / attention pas dépasser 100 - if 
        }); 
    

   // divNewArticleContentSettingsQuantity./*textContent */ getAttribute/*()*/  = modifyQty();
   
       

        deleteItem.addEventListener('click', function(){//delete item when click on "supprimer"
        stockageInfoProduit.splice(/*index*/i, 1/*,index*/); 
        window.localStorage.setItem('infoProduit', JSON.stringify(stockageInfoProduit)); //recré un local storage avec les nouvelles info (élément supprimé)
        window.location.reload(true) // recharger la page
      
        //1 index, 2 nm dd'élément à supprimer
      
       // var targetDeleteItem = deleteItem.closest() //cibler l’identifiant du produit à supprimer / de la quantité à modifier.
        //var el = document.elementById ('div-03') 
       /* var targetDeleteItem = */ 
       //let itemDelete = divNewArticleContentSettingsQuantity.removeChild(deleteItem); 


       // retrouver la position dans le local storage // splice dans local sotrage pour supprimer et récréer 
       }); 

         // TOTAL PRICE
      // const updateTotalPrice = totalPrice.innerText;
      // console.log(priceTitlePrice) // fait apparaitre 4 prix entre <p></p> -> trouver comment faire apparaitre les valeurs
       const totalQuantity = document.getElementById('totalQuantity');
            const total = 0; 
            for (var j=0; j<stockageInfoProduit.length; j++){
                console.log(document.getElementsByClassName('cart__item__content__titlePrice')[0].lastChild.innerHTML/*.firstChild.nodeName*/ )
            }

}
}

// ATTENTION , MEME ID ET COULEUR 


InsertInfoProduct()
console.log(stockageInfoProduit)
//console.log(stockageInfoProduit[1].colorPanierProduits)


// utiliser dataset