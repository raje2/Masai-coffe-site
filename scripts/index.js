// Add the coffee to local storage with key "coffee"
let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

async function showMenu(){
  let res= await fetch(url);
  let data= await res.json();
  console.log(data.menu.data);
  append(data.menu.data)
}
showMenu();

function append(data){
let container= document.getElementById("grid");
data.forEach(function(el){
  let poster=document.createElement("div");
  poster.id="menu";

  let img=document.createElement("img");
  img.src=el.image;
  img.id="pic"
 let h3= document.createElement("h3");
 h3.innerText=`Name: ${el.title}`;
 
 let p= document.createElement("p");
 p.innerText=`Price: ${el.price}`;

 let p2=document.createElement("p");
 p2.innerText=`${el.ingredients}`

 let btn= document.createElement("button");
 btn.innerText="Bucket"
 btn.id="add_to_bucket"
 btn.addEventListener("click", function(){
     myClick(el);
 })


poster.append(img,h3, p, p2, btn);

 container.append(poster);
})
}

function myClick(el){
  
  let arr=JSON.parse(localStorage.getItem("coffee"))||[];

  arr.push(el);

 localStorage.setItem("coffee", JSON.stringify(arr));
}

document.getElementById("buckets").addEventListener("click",myFunction)

function myFunction(){
  window.location.href="bucket.html"
}