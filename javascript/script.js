
const productcontainer=document.querySelector('.product-container');
const element=document.getElementById('myproduct');
const urlid=document.getElementById('indexlinkid');
const urlidshop=document.getElementById('shoplinkid');
const newarrivalproducts=document.querySelector('.newarrival-container');
const menubar=document.getElementById('menu-bar');
const closebar=document.getElementById('close');
const navbar=document.querySelector('.nav-bar-innerpara');
const logo=document.getElementById('logo');
const addtocart=document.querySelector('#cart');
const countnum=document.getElementById('countid');
let count=0;
let Bagitems;


let bagitemsstr=localStorage.getItem("Bagitems");
Bagitems= bagitemsstr ? JSON.parse(bagitemsstr) : [];
let array=[];


carticon();

menubar.addEventListener('click',()=>{
    navbar.classList.add('active');
})
 closebar.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
console.log();


    showproducts(items);
    shownewarrivalproducts(items);
   

function showproducts(items){

    
productcontainer.innerHTML=``;
    items.forEach(item=>{
        const {id,Compname,Productname,ratings,price,image,productdetails}=item;
        const productlist=document.createElement('div');
        productlist.classList.add(`miniprod-cont`);
        //productlist.setAttribute('id',`${id}`);
        productlist.innerHTML=` <a href="productdisc.html" onclick=""><img id=
        "product${id}" onclick="productdetc(${item.id})" src="${image}" alt=""></a>
        <p>${Compname}</p>
        <h4>${Productname}</h4>
        <div class="ratings">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        </div>
        <h6>${price}</h6>
        <i id="${id}" onclick="update(${item.id});" class="fa-solid fa-cart-shopping"></i>
        `
        productcontainer.appendChild(productlist);
        const addto= document.getElementById(id);
        let newid=Number(id);
        if( Bagitems.includes(newid)){
             addto.classList.remove("fa-cart-shopping");
            addto.setAttribute("class","fa-solid fa-check");
          }
       else{
        addto.classList.remove('fa-check')
        addto.setAttribute('class',' fa-solid fa-cart-shopping')
    }
         
         document.getElementById(id).addEventListener('click',()=>{
          
           
          
           console.log(Bagitems.includes(newid));
         
        
           if( Bagitems.includes(newid)){
                addto.classList.remove("fa-cart-shopping");
                addto.setAttribute("class","fa-solid fa-check");
                  alertmes();
            }
           else{
            addto.classList.remove('fa-check')
            addto.setAttribute('class',' fa-solid fa-cart-shopping')
            alertmesrem();
        }})
        let productdetclass=document.getElementById('product'+id);
       

    
    
        


    
})}







function update(Itemid){
  
    if (Bagitems.length==0){

    Bagitems.push(Itemid);
   
    }
    else{
        if(Bagitems.includes(Itemid)){
        Bagitems.forEach((itemid,idx)=>{
            if(itemid==Itemid){
                Bagitems.splice(idx,1);

            }})}
            else{
                Bagitems.push(Itemid);
            }

    
    }
    localStorage.setItem("Bagitems",JSON.stringify(Bagitems));
    carticon();
    





}

function carticon(){
 
  
    const baglength=Bagitems.length;
    console.log(baglength);
    if(baglength<=0){
        countnum.classList.remove("count");
        countnum.innerText=``;
    }
    else{
        countnum.setAttribute("class","count");
    countnum.innerHTML=`${baglength}`
   }

}
function alertmes(){
    alert("Item added successfully");
}
function alertmesrem(){
    alert("Item Removed succesfuly");
}


