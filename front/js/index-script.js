

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
