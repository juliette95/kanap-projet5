

    

/* test 3 : fonctionne jusqu'a l'étape data . */ 
     /* fetch("http://localhost:3000/api/products/")
         .then (response => response.json())
         .then (data => console.log(data['0','1','2','3','4','5','6','7']//que mettre ? imageUrl ? _id ? length ? car rien ne s'affiche
            )) 


   
            /*fetch("http://localhost:3000/api/products")
            .then (response => response.json())
            .then (data => {
                  items.onclick = () => {

                  }

            })*/



let items = document.getElementById("items")

const injectProductsIntoDOM = (products) => {
    for(let product of products){

        const newProduct = document.createElement('a')
        const newArticle = document.createElement('article')
        const imgProduct = document.createElement('img')
        const productName = document.createElement('h3')
        const productDescription = document.createElement('p')

        newProduct.appendChild(newArticle)
        newArticle.appendChild(imgProduct)
        newArticle.appendChild(productName)
        newArticle.appendChild(productDescription)

        imgProduct.src = product.imageUrl
        productName.textContent = product.name
        productDescription.textContent = product.description

        newProduct.href = "product.html?productId=" + product._id
        items.appendChild(newProduct)
    }
}

const getProduct = async () => {
    await fetch("http://localhost:3000/api/products")
        .then(res => res.json())
         .then(data => injectProductsIntoDOM(data))
   .catch(err => console.log(err))
}

getProduct()
//--------------------------------------------------------------------