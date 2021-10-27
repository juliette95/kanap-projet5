
/*function allproducts(){
    fetch ("http://localhost:3000/api/products")
     .then(function(res) {
        if (res.ok) {
           return res.json();
        }
     })
   .catch(function(err){
 //there is a mistake 
 //console.log('il y a eu un problème avec fetch' + error.message);
     });
   }
   console.log(allproducts); */ 





  const items = document.getElementById('items');

     //function allproducts() {
      fetch("http://localhost:3000/api/products")
      .then(res => {
         if(res.ok){
         res.json().then(data => {
            items.src = data[0].imageUrl
         })
      } else {
         console.log("ERREUR");
      }
   })
      /*.then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function(value) {
        document
            .getElementById("items")
           //.innerText = value.queryString.greetings;
      })
      .catch(function(err) {
        // Une erreur est survenue
      });
    }*/ 
    
   /* document
      .getElementById("ask-hello")
      .addEventListener("click", askHello);*/ 
