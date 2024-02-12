


let indidobject;
function product(indidobject){
  console.log(indidobject.image);

  console.log("hi");
  let productdetails=document.getElementById('product-details');
  console.log(productdetails);
  let details=document.createElement('div');
  details.classList.add('product-details1');
  console.log(details);
  details.innerHTML=`<div class="productdetailscont">
  <img src="i${indidobject.image}" alt="">
  <div class="buttonssize">
  <button>S</button>
  <button>M</button>
  <button>L</button>
  <button>XL</button>
  <button>XL</buton>
  </div>
  
  </div>
  <div class="productdetails-name">
  <h2>${indidobject.Productname}</h2>
  <h4>${indidobject.Compname}</h4>
  <p>${indidobject.productdetails}</p>
  <div class="reviewsproduct">
  
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
  </div>
  <div class="pricetag">
   <h2>$ ${indidobject.price}</h2>
   <h4>Add to Cart  <i class="fa-solid fa-cart-shopping"></i></h4>
  </div>
  <div class="sizetag">
   <h4>Size you have selected:</h4> 
  
  </div>
  <h2 id="h2">Reviews</h2>
  <div class="writtenreviews">
  
   <span>Name</span>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias rem amet maiores?</p>
   
   <span>Name</span>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias rem amet maiores?</p>
   
   <span>Name</span>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias rem amet maiores?</p>
   
   <span>Name</span>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias rem amet maiores?</p>
  </div>
  </div>`
  document.body+=details.innerHTML;
console.log(details.innerHTML);
}




function productdetc(indId){
  array.push(indId);
  console.log(array); 
  indidobject= loop();
  console.log(indidobject);
  product(indidobject);
 
  function loop(){
  for(let i=0;i<items.length;i++){
     if(array[0]==items[i].id){
         return items[i]
     }
  }}
 
 
  
 }
