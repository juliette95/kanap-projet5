// WARNING : IN PROCESS 
//---------------------------------------

//----- Récupération des données du local storage


let stockageInfoProduit = JSON.parse(window.localStorage.getItem('infoProduit'));

console.log(stockageInfoProduit.length)
for ( let i in stockageInfoProduit) {
   
    //Declare elements
    const cartItems= document.getElementById('cart__items')
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
          
        
    console.log(stockageInfoProduit);

var Popped = stockageInfoProduit.pop();

}

var object2 = JSON.parse(localStorage.getItem('infoProduit'))[1]; 
console.log(object2)
