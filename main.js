let btncard = document.querySelectorAll(".btncard")
let popup = document.getElementsByClassName("fgh")[0]


btncard.forEach(function(val,index){
    
    val.addEventListener("click", ()=>{
        // popup.classList.remove("active")
       if(index == 0){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
                src="https://www.whiskaffair.com/wp-content/uploads/2020/03/Masala-Macaroni-2-3.jpg" alt="">
            <h1>pasta(macroni)</h1>
        </div>
        <div class="rgt">
            <pre>            If you were to judge
      Italian cuisine by the food
     that is served in Italian
      restaurants across America,
      you might think that the food of Italy
      consists mainly of pasta with different
     types of sauces and pizza
     with an assortment of toppings.<a href="https://en.wikipedia.org/wiki/Pasta#Ingredients">RECIPE</a></pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
            

        
        
       }
       else if(index == 1){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
               src="spring-pasta-salad-20.webp" alt="">
            <h1>pasta(spring)</h1>
        </div>
        <div class="rgt">
            <pre>            this is another variety
      of pasta that is spring in shape
     this is amazing, tasty, and yummy
      this is very popular in
      restaurants across America,europe
      BLI manufacture high quality hyginic 
      spring pasta and you should definately
     try yummino brand spring pasta
     with an assortment of toppings.<a href="https://en.wikipedia.org/wiki/Pasta#Ingredients">RECIPE</a></pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
        
       }
       else if(index == 2){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjIQjVx1iL36-dpyqzxZjZiIsxfTD26e_ow&usqp=CAU" alt="">
            <h1>vermicelle</h1>
        </div>
        <div class="rgt">
            <pre>            Sweet, Delicious, Tasty, Yummy
      Vermicelle(seviyan) .this is 
     traditional indian sweet most
      popular among muslim community
      and if you want this tasty vermicelle
      than i tell you that BLI manufacture
       high quality hyginic vermicelle
      under the name "yummino" Brand
     try yummino brand vermicelle.<a href="https://pipingpotcurry.com/instant-pot-vermicelli-upma/#recipe">RECIPE</a></pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
       }
       else if(index == 3){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
            src="40241834-7_1-balasa-coloured-finger-fryums-crispy.webp" alt="">
            <h1>Colour Finger</h1>
        </div>
        <div class="rgt">
            <pre>            this is an crispy
      food item that you need to try
     this is an diwali special food
     you have to buy this unfried
      and than you have to fry this in 
      hot oil and BLI manufacture this also</pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
       }
       else if(index == 4){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
            src="https://www.bigbasket.com/media/uploads/p/l/40031033_4-balaji-foods-papad-gold-finger.jpg" alt="">
            <h1>Plain Finger</h1>
        </div>
        <div class="rgt">
            <pre>            this is an crispy
      food item that you need to try
      alternative of color finger
     this is an diwali special food
     you have to buy this unfried
      and than you have to fry this in 
      hot oil and BLI manufacture this also</pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
       }
       else if(index == 5){
        popup.innerHTML = `
        <div class="nchldr">
        <i class="fa-solid fa-xmark fa-fade sld"></i>
        <div class="htk">
            <img class="imgtsk"
            src="hygienic-prepared-wheat-flour-crunchy-and-salted-raw-papad-pipe-fryums-478.jpg" alt="">
            <h1>Pipe Finger</h1>
        </div>
        <div class="rgt">
            <pre>            this is an crispy
      food item that you need to try
      an long pipe finger
     this is an diwali special food
     you have to buy this unfried
      and than you have to fry this in 
      hot oil and BLI manufacture this also</pre>
        </div>

    </div>
        `
        popup.classList.remove("active")
        document.getElementsByClassName("sld")[0].addEventListener("click", ()=>{
            popup.classList.add("active")
            })
       }

    })
    
})

let btnimp1 = document.getElementById("btnimp1")
let btnimp2 = document.getElementById("btnimp2")
let btnimp3 = document.getElementById("btnimp3")

let han = document.getElementsByClassName("hndlrk")[0]

btnimp1.addEventListener("click", ()=>{
    han.innerHTML = `
    <div class="box1">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">pasta</h1>
    <img src="WhatsApp Image pasta.jpg" alt="">
    <h1 class="leftk">500 Grams:</h1>
    <h1 class="rightk">24 INR</h1>
</div>


<div class="box1">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">pasta</h1>
    <img src="WhatsApp Image pasta.jpg" alt="">
    <h1 class="leftk">1 kg:</h1>
    <h1 class="rightk">43 INR</h1>
</div>



<div class="box1">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">pasta</h1>
    <img src="WhatsApp Image pasta.jpg" alt="">
    <h1 class="leftk">5 kg:</h1>
    <h1 class="rightk">40 per Kg</h1>
</div>
    `

    han.classList.remove("activecz")
})



btnimp2.addEventListener("click", ()=>{

    han.innerHTML = `
    <div class="box1" style="background:black;">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">Vermicelle</h1>
    <img src="vermicille.jpg" alt="">
    <h1 class="leftk" style="color:white;">300Grams</h1>
    <h1 class="rightk">15PerPiece</h1>
</div>


<div class="box1" style="background:black;">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">Vermicelle</h1>
    <img src="vermicille.jpg" alt="">
    <h1 class="leftk" style="color:white;">500 Grams:</h1>
    <h1 class="rightk">24 INR</h1>
</div>



<div class="box1" style="background:black;">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">Vermicelle</h1>
    <img src="vermicille.jpg" alt="">
    <h1 class="leftk" style="color:white;">1 kg:</h1>
    <h1 class="rightk">42 INR</h1>
</div>
    `
    han.classList.remove("activecz")
})

btnimp3.addEventListener("click", ()=>{
    han.innerHTML = `
    <div class="box1" style="background:cyan;">
    <h1 class="hgff" style="text-align: center;color: rgb(181, 6, 129);border: 3px solid black;">Vermicelle</h1>
    <img src="https://5.imimg.com/data5/ANDROID/Default/2022/6/QX/PB/PO/2077506/product-jpeg-500x500.jpg" alt="">
    <h1 class="leftk" style="color:red;border:none; ">---As Per Your Order---</h1>
    
</div>
    `
    han.classList.remove("activecz")
})


let scrolltotopbtn = document.getElementById("scrtop")
let impmedia = document.documentElement


function scrolltobtm(){
 impmedia.scrollTo({
    top:5000,
    behavior:"smooth"
})
}
scrolltotopbtn.addEventListener("click", scrolltobtm)


let scrolltotopbtn2 = document.getElementById("scr2")



function scrolltobtm2(){
 impmedia.scrollTo({
    top:700,
    behavior:"smooth"
})
}
scrolltotopbtn2.addEventListener("click", scrolltobtm2)



let scrolltotopbtn3 = document.getElementById("scr3")



function scrolltobtm3(){
 impmedia.scrollTo({
    top:1550,
    behavior:"smooth"
})
}
scrolltotopbtn3.addEventListener("click", scrolltobtm3)



let scrolltotopbtn4 = document.getElementById("scr4")



function scrolltobtm4(){
 impmedia.scrollTo({
    top:2200,
    behavior:"smooth"
})
}
scrolltotopbtn4.addEventListener("click", scrolltobtm4)