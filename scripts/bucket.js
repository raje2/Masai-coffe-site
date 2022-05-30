// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffee=JSON.parse(localStorage.getItem("coffee")) || [];

append(coffee);
console.log(coffee);

function append(data){
let container= document.getElementById("bucket");

data.forEach(function(el,index){

  let poster=document.createElement("div");
  poster.id="poster";

  let img=document.createElement("img");
  img.src=el.image;
  img.id="pic"

 let h3= document.createElement("h3");
 h3.innerText=`Name: ${el.title}`;
 
 let p= document.createElement("p");
 p.innerText=`Price: ${el.price}`;



 let btn2= document.createElement("button");
 btn2.innerText="Checkout"
 btn2.id="confirm_checkout"
 btn2.addEventListener("click",checkOut)
 

 let btn= document.createElement("button");
 btn.innerText="Remove"
 btn.id="remove_coffee"
 btn.addEventListener("click", function(){
     myClick(el,index);
 })

 poster.append(img,h3,p, btn2, btn);
container.append(poster);

})

}

function myClick(el,index){
  
  coffee.splice(index,1)
  localStorage.setItem("coffee",JSON.stringify(coffee));
  window.location.reload();
}



function checkOut(){
  window.location.href="checkout.html"
}

