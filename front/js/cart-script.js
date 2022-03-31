
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
for (const [i/*retourne la position du produit dans tab*/,key/* retourne le produit*/] of stockageInfoProduit.entries()){ // entries = méthode qui permet de récupérer la clef et la valeur
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
        
        inputsettingsQuantity.addEventListener('change', function(){ // modify Qty 
         
            // quantite.value
                    console.log(inputsettingsQuantity.value)
                    //position ok, modifier le local storage / attention pas dépasser 100 - if 
                    if(inputsettingsQuantity.value<=100){
                            stockageInfoProduit[i].quantitePanierProduits= inputsettingsQuantity.value;
                            console.log(stockageInfoProduit[i]);
                            localStorage.setItem("infoProduit", JSON.stringify(stockageInfoProduit)); 
                            window.location.reload(true);
            
                    }else if(inputsettingsQuantity.value>100){
                            alert("la valeur n\' est pas conforme")
                    }
                    }); 
    
        
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

InsertInfoProduct()
console.log(stockageInfoProduit)

//----FORM----

function form(){

const myForm = document.querySelector('form'); 
const myFormButtonOrder = document.getElementById('order');
const inputFirstName = document.getElementById('fisrtName');
const inputLastName = document.getElementById('lastName'); 
const inputAddress = document.getElementById('address');
const inputCity = document.getElementById('city');
const inputEmail = document.getElementById('email');

    // ROUTE POST - OBJET CONTACT ENVOYÉ AU SERVEUR 
    // Doit contenir les champs firstName, Lastname, address, city, email 
    // Le tableau des produits envoyé au back-end doit être un array de strings product-ID. 
    // les types de ces champs et leur présence doivent être validés avant l'envoi des données au serveur
fetch('http://localhost:3000/api/products/order', { //retourne objet contact
    method:"post",
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        //jsonBody)
        "contact":{
            firstName: '',
            lastName:'',
            address: 'xxx',
            city: 'xxxx',
            email: 'xxxx@xxxx'},
        "products":
        [], 
    })
})
  .then(res => res.json()) // récupère la response
  .then(data => window.location.href ='confirmation.html?order'=data.orderId)// permet redirection
  .catch(err => console.log(err)) 


/*myFormInput.addEventListener("input",function(e) {
   var value = e.target.value; 
   if (value.startsWith('hello ')){
       isValid = true; 
   } else {
      // isValid = false; 
       console.log("false ");
   }
   }); */ 
 
//modify input email
myForm.email.addEventListener('change', function(){
 ValidEmail(this);
}); 

const ValidEmail = function(inputEmail){ // fonction VALIDATION DATA via REGEX - for email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'/*marker*/ )
    
    let testEmail = emailRegExp.test(inputEmail.value); 

    let validationEmail = inputEmail.nextElementSibling; 
    if (testEmail == true){
    validationEmail.innerHTML = 'Adresse Valide' 
    }else{
    validationEmail.innerHTML = 'Adresse Non Valide';   
    }
}

//validation order
myFormButtonOrder.addEventListener("click", alert("Bonjour"));
console.log(alert('bonjourno'))
/*function Formbase(f,l,a,c,e){
    this.firstName=f;
    this.lastName=l; 
    this.address=a; 
    this.city=c;
    this.email=e;   
}*/ 

/*let newForm = new FormData */ /* form values */ 
   


//fonction CREATION OBJECT NEW CONTACT 
    // Créer un tableau de phrases 
/*const newContact = {
    name = "contactForm"
    
}; 
*/

//fonction RECUPERER ET ANALYSER LES DONNÉES 


//fonction ERROR MESSAGE 
    //const errorMessage = document.getElementById('firstNameErrorMsg');

// click on submit 
    //FormData.addEventListener('sumit',function(event){

//});
}