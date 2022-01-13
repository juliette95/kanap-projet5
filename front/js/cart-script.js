// WARNING : IN PROCESS 
//---------------------------------------
//COLLECT QUERY STRING (récupération chaine de requète dans l'URL)  

const queryString_url_id = window.location.search; 
console.log(queryString_url_id); 

   //URLSearchParams method
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("productId");
console.log(id);

/*fetch("http://localhost:3000/api/products"+id) 
   .then(res => res.json())
   .then(data => InsertInfoProduct(data))
.catch(err => console.log(err))*/ 




//----- Récupération des données du local storage - 


let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));



function InsertInfoProduct() {
for (let key of stockageInfoProduit){

  //  getProductsListCart(key.id) 

    const cartItems= document.getElementById('cart__items');


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
    //inputsettingsQuantity.setAttribute('value', couch.quantity)
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


        //async (id) => {
            /*await*/ 
            fetch('http://localhost:3000/api/products/' + key.id/*"415b7cacb65d43b2b5c1ff70f3393ad1"*/ )
            .then(res => res.json())
            .then(data => console.log(data.name))
                .catch(err => console.log(err))
        
        const InsertInfoProduct = (product) => {
            nameTitlePrice.textContent = product.name
            priceTitlePrice.textContent = product.price + ' €'
            newImage.src = product.imageUrl
            newImage.setAttribute('alt', product.altTxt)
          }
        
         /*cartItems.innerHTML= key+"-",stockageInfoProduit[key]; */ 
       // nameTitlePrice.textContent= key.name; 
        /*priceTitlePrice.textContent= "price"; 
        quantiteSettingsQuantity.innerHTML= stockageInfoProduit[0].quantitePanierProduits; 
        console.log (nameTitlePrice.textContent = key.price)*+ 

 /* text += stockageInfoProduit[key]; */ 

 //fetch 
//} 

}
}
/*
fetch ('http://localhost:3000/api/products/') 
   .then(response => response.json())
   .then(data => insertInfoProduct(data))
.catch(error => console.log(error))
*/ 
console.log(InsertInfoProduct())
console.log(stockageInfoProduit)
console.log(stockageInfoProduit[0].colorPanierProduits)


/*function insertInfoCartPage(){
    if(stockageInfoProduit != null) {//si le localstorage est différent de null alors récupérer les éléments
    
    const cartItems= document.getElementById('cart__items');//retrieve the section "cart_items" that contains img, title, price,qty   
        

               
    
                //cartItems.innerHTML= "section"; 
                nameTitlePrice.innerHTML= stockageInfoProduit[0].idPanierProduits; 
                priceTitlePrice.innerHTML = stockageInfoProduit[0].pricePanierProduits;
                quantiteSettingsQuantity.innerHTML=stockageInfoProduit[0].quantitePanierProduits;  
                
                   
    }
}*/ 



/*const injectProduct = (produit)=>{
    const imgDivProductPage = document.getElementsByClassName('item__img')[0]
    const imgProductPage = document.createElement('img')
    imgDivProductPage.appendChild(imgProductPage)

    for (let value of produit.colors){ // colors drop-down menu 
        const optionsValueColors = document.createElement('option')
        optionsValueColors.textContent = value
        selectColorsID.appendChild(optionsValueColors)
    }*/

    /*title.textContent = produit.name
    price.textContent = produit.price
    description.textContent = produit.description
    imgProductPage.src = produit.imageUrl  

}*/ 


    //console.log(stockageInfoProduit.length)

//for ( let i in stockageInfoProduit) {
  
    //function browseTheArray(){
            
           // var x = 0;

//---------------DEBUT TEST 1-------
            // this function manipulates DOM and displays content of our stockageInfoProduit
           /* function displayShoppingCart(){
            var cartItems= document.getElementById('cart__items');//retrieve the section "cart_items" that contains img, title, price,qty   
                
                
            // ensure we delete all previously added rows from ordered products table 
           while(cartItems.rows.lenght>0){
                cartItems.deleteRow(0); 
            }
            
            // variable to hold total price of shopping cart
            var cart_total_price = 0;  

            // iterate over array of objects
            for (var produit in stockageInfoProduit){
                //add new row
                var row = cartItems.insertRow(); 
                //create three cells for product properties 
              var cellName = row.insertCell(0); 
                var cellPrice = row.insertCell(1); 
                var cellQuantity = row.insertCell(2); 
                cellPrice.align="right"; 
                //fill cells with values from current product object of our array 
                nameTitlePrice.innerHTML = stockageInfoProduit[produit].Name; 
                priceTitlePrice.innerHTML = stockageInfoProduit[produit].Price; 
                quantiteSettingsQuantity.innerHTML = stockageInfoProduit[produit].Price; 
               cart_total_price += stockageInfoProduit[product].Price; 
            }
            //fill total cost of our shopping cart 
           document.getElementById("totalQuantity").innerHTML=cart_total_price; 
        
        }*/
            /*function addToCart (name,price,quantity){
                //below we create javascript object that will fold three properties : name, price & quantity
                var singleProduct = {}; 
                //fill the product object with data
                nameTitlePrice.Name = name ; 
                priceTitlePrice.Price = price ; 
                quantiteSettingsQuantity.Quantity = quantity;
                //Add newly created product to our shopping cart 
                stockageInfoProduit.push(singleProduct); 
                //call display function to show on screen 
                /*displayShoppingCart(); */ 

            /*}*/ 
        
           
//----------FIN TEST 1 --------------
            
//----------DEBUT TEST 2------------------
//---- Parcourir l'array  
            /*for (var x=0; x<stockageInfoProduit.length; x++){
                    //Declare elements
                    //const cartItems= document.getElementById('cart__items')
            const cartItems= document.getElementById('cart__items') //retrieve the section "cart_items" that contains img, title, price,qty   
            const newArticle = document.createElement("article")
            const divNewArticleImage = document.createElement("div")
            const newImage = document.createElement("img")
            const divNewArticleContent = document.createElement("div")  
            const divNewArticleContentTitlePrice = document.createElement("div")
            const nameTitlePrice =document.createElement("h2")
            const priceTitlePrice = document.createElement("p")
            const divNewArticleContentSettings = document.createElement("div")
            const divNewArticleContentSettingsQuantity = document.createElement("div")
            const quantiteSettingsQuantity = document.createElement("p")
            const inputsettingsQuantity = document.createElement("input")
            const divNewArticleContentSettingsDelete = document.createElement("div")
            const deleteItem = document.createElement("p")

            cartItems.innerHTML= "section"; 
            nameTitlePrice.innerHTML= "hello" ; 
            priceTitlePrice.innerHTML = "p"; 
            quantiteSettingsQuantity.innerHTML= "quantity"; 


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
                }
               console.log(stockageInfoProduit[0]);
               console.log(stockageInfoProduit.length); 
 //-----------------FIN TEST 2 -------------------------------        
        //}
        
        //---- Créer et insérer des éléments dans la page Panier
       
    //console.log(stockageInfoProduit.length);

//var Popped = stockageInfoProduit.pop();

//}

/*var object2 = JSON.parse(localStorage.getItem('infoProduit'))[1]; 
console.log(object2)*/