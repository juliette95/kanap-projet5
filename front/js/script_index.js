
function allproducts(){
    fetch ("http://localhost:3000/api/products")
     .then(function(res) {
        if (res.ok) {
           return res.json();
        }
     })
     .catch(function(err) {
 //there is a mistake 
     });