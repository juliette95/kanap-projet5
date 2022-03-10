
//COLLECT QUERY STRING (récupération chaine de requète dans l'URL)  

const queryString_url_id = window.location.search; 
console.log(queryString_url_id); 

   //URLSearchParams method
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("productId");

 //items total price and quantity var 

 var total = 0; 
 var quantityProduct = 0; 

//----- retrieve local storage data -------------- 
let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));

function InsertInfoProduct() {
for (const [i,key] of stockageInfoProduit.entries()){ // entries = méthode qui permet de récupérer la clef et la valeur
  //  getProductsListCart(key.id) 
    
    const cartItems= document.getElementById('cart__items');
   
    const totalPrice = document.getElementById('totalPrice');
    const totalQuantity = document.getElementById('totalQuantity')


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

         deleteItem.textContent = "Supprimer" //appears at each div creation 
         quantiteSettingsQuantity.textContent = "Qté : ";  

            fetch('http://localhost:3000/api/products/' + key.idPanierProduits)
            .then(res => res.json())
            .then(data => InfoProduct(data))
                .catch(err => console.log(err))
        
        const InfoProduct = (product) => { 
            nameTitlePrice.textContent = product.name
            priceTitlePrice.textContent = product.price + ' €'
            newImage.src = product.imageUrl
            newImage.setAttribute('alt', product.altTxt)
                // total calculation, use the API which returns the price according to idPanierProduit and complete it in totalPrice 
            total+= product.price;
            totalPrice.textContent = total; 
           
          }
                // quantity calculation, use the loop (for) to get back products and add them to the totalQuantity
  
        quantityProduct+=parseInt(key.quantitePanierProduits); //parseInt() to convert the argument in a string
        totalQuantity.textContent = quantityProduct; 
        
        inputsettingsQuantity.addEventListener('change', function(){ // modify quantity
            inputsettingsQuantity./*getattribute*/textContent=this.value; // quantite.value  
            console.log()     
            validNumber(i)
            window.location.reload(true) // reload the page 
            console.log(/*stockageInfoProduit[v].quantitePanierProduits*/ 'hello')
            
        }); 

        function validNumber(v){ // function in order that the quantite value does not exceed 100 
            if (inputsettingsQuantity.value <= 100 ){
                stockageInfoProduit[v].quantitePanierProduits = inputsettingsQuantity.value;  
               // stockageInfoProduit[v].quantitePanierProduits
                //console.log(stockageInfoProduit[v].quantitePanierProduits)
                //window.location.reload(true) // reload the page 
            } else {
                alert('Number of items cannot exceed 100'); 
                return false;  
            }
        }
    
        
        deleteItem.addEventListener('click', function(){//delete item when click on "supprimer"
        stockageInfoProduit.splice(/*index*/i, 1/*,index*/); 
        window.localStorage.setItem('infoProduit', JSON.stringify(stockageInfoProduit)); //create an other localsorage with new informations (delete element)
        window.location.reload(true) // reload the page 
        }); 

         // TOTAL PRICE

        /*console.log(priceTitlePrice.textContent)
            const total = 0; 
            for (var k=0; k<stockageInfoProduit.length; k++){
                console.log(document.getElementsByClassName('cart__item__content__titlePrice')[0].lastChild.innerHTML/*.firstChild.nodeName*/ /*)
            }*/ 


}
}

// ATTENTION , MEME ID ET COULEUR 


InsertInfoProduct()
console.log(stockageInfoProduit)
//console.log(stockageInfoProduit[1].colorPanierProduits)


// utiliser dataset


//----FORM----


/*form.addEventListener('sumit',function(event){
    event.preventDefault();

    */ 
// ROUTE POST - OBJET CONTACT ENVOYÉ AU SERVEUR 
    // Doit contenir les champs firstName, Lastname, address, city, email 
    // Le tableau des produits envoyé au back-end doit être un array de strings product-ID. 
    // les types de ces champs et leur présence doivent être validés avant l'envoi des données au serveur
function Formbase(f,l,a,c,e){
    this.firstName=f;
    this.lastName=l; 
    this.address=a; 
    this.city=c;
    this.email=e;   
}
let newForm = new FormData (/* form values */ )
   


//fonction CREATION OBJECT NEW CONTACT 
    // Créer un tableau de phrases 
/*const newContact = {
    name = "contactForm"
    
}; 

fetch('http://localhost:3000/api/products/'+order) {
    method: "POST", 
    body: JSON.stringify(newContact), 
    header: {
        "Content-Type" : "application/json", 

    }
}*/ 

// fonction VERIFY DATA via REGEX 

//fonction RECUPERER ET ANALYSER LES DONNÉES 


//fonction ERROR MESSAGE 
    //const errorMessage = document.getElementById('firstNameErrorMsg');

// click on submit 
    //FormData.addEventListener('sumit',function(event){

//});