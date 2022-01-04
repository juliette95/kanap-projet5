// WARNING : IN PROCESS 
//---------------------------------------

//----- Récupération des données du local storage
let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));

                //console.log(stockageInfoProduit.length)

//for ( let i in stockageInfoProduit) {
  
    //function browseTheArray(){
            
           // var x = 0;

//---------------DEBUT TEST 1-------
            // this function manipulates DOM and displays content of our stockageInfoProduit
            function displayShoppingCart(){
            var cartItems= document.getElementById('cart__items'); 
            // ensure we delete all previously added rows from ordered products table 
            while(cartItems.rows.lenght>0){
                cartItems.deleteRow(0);
            }
            
            // variable to hold total price of shopping cart
            var cart_total_price = 0; 

            // iterate over array of objects
            for (var product in stockageInfoProduit){
                //add new row
                var row= cartItems.insertRow(); 
                //create three cells for product properties 
                var cellName = row.insertCell(0); 
                var cellPrice = row.insertCell(1); 
                var cellQuantity = row.insertCell(2); 
                cellPrice.align="right"; 
                //fill cells with values from current product object of our array 
                cellName.innerHTML = stockageInfoProduit[product].Name; 
                cellPrice.innerHTML = stockageInfoProduit[product].Price; 
                cellQuantity.innerHTML = stockageInfoProduit[product].Price; 
                cart_total_price += stockageInfoProduit[product].Price; 
            }
            //fill total cost of our shopping cart 
            document.getElementById("totalQuantity").innerHTML=cart_total_price; 
        }

            function addToCart (name,price,quantity){
                //below we create javascript object that will fold three properties : name, price & quantity
                var singleProduct = {}; 
                //fill the product object with data
                singleProduct.Name = name ; 
                singleProduct.Price = price ; 
                singleProduct.Quantity = quantity;
                //Add newly created product to our shopping cart 
                stockageInfoProduit.push(singleProduct); 
                //call display function to show on screen 
                displayShoppingCart(); 

            }
            console.log(addToCart)
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
