

let BagitemObjects;
onload();
localStorage.getItem('Bagitems');
console.log(Bagitems);
function getItemObjects(Bagitems){
   BagitemObjects= Bagitems.map(itemid=>{
      for(let i=0;i<items.length;i++){

        if(itemid==items[i].id){
            return items[i];
        }
      }
      
    })
    console.log(BagitemObjects);
}


function onload(){
   
    getItemObjects(Bagitems);
    displayBagItems(BagitemObjects);
    displaySummary(Bagitems,BagitemObjects);

}
console.log(Bagitems);
displayBagItems(BagitemObjects);
function displayBagItems(Bagitemss){
    let containerdet=document.querySelector('#product-details2');
    containerdet.innerHTML=``;
    Bagitemss.forEach(element => {
        const {id,Compname,Productname,ratings,price,image}=element;
              const productscart=document.createElement('div');
              productscart.classList.add('productdetailscont');
              productscart.innerHTML=` <img src="${image}" alt="" ">
              <div class="buttonssize" >
              <button id="${id}" >S</button>
              <button id="${id}">M</button>
              <button id="${id}">L</button>
              <button id="${id}">XL</button>
              <button id="${id}">XL</button>
              </div>
              
              </div>
              <div class="productdetails-name">
              <h2>${Productname}</h2>
              <h4>${Compname}</h4>
          
            
              <div class="pricetag">
               <h2>${price}</h2>
              
              </div>
              <div class="sizetag">
               <h4  id="sizeinfo${id}">Choose The size</h4> 
               <p style="color: grey;"><span style="color: black; ">14 Days</span> return available</p>
              
              </div>
            
             
              `;
              containerdet.appendChild(productscart);
              let sizeinfo=document.getElementById('sizeinfo'+id);
              let size=document.getElementById(id);
              let arr=[];
             console.log(size);
             
              
              console.log(arr[0]);



       

    });


  
       
   
}
 function displaySummary(Bagitems,BagitemObjects){
    let summary=document.querySelector('.bag-summary');
    let totalItem=Bagitems.length;
    let totalMRP=0;
    for(let i=0;i<BagitemObjects.length;i++){
        console.log(BagitemObjects[i].price)
        totalMRP=Number(totalMRP)+ Number(BagitemObjects[i].price);
    }
   console.log(totalMRP)
    console.log(BagitemObjects);
    console.log(BagitemObjects[0].price);
     
    let totalDiscount="100";
    let finalPayment=Number(totalMRP)-Number(totalDiscount) + 99;
    summary.innerHTML=`<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`
 }