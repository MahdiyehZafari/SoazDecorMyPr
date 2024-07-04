// particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#e68b4c"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

let toggleThemeBtn = document.querySelectorAll(".toggle-theme");
let submenuArow= document.querySelector(".submenu-arow");
let bars= document.querySelector(".bars");
let barsOpen = document.querySelector(".bars-open");
let barsClose = document.querySelector(".close");
let submenu= document.querySelector(".submenu");
let btn;

const overlay= document.querySelector(".overlay")
toggleThemeBtn.forEach(btn  =>{
    btn.addEventListener('click',function()
    {
        if (localStorage.theme === "dark")
        {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } 
        else
         {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    }
)} )



submenuArow.addEventListener("click",() =>
    {   
        submenu.classList.toggle("submenu-open");
    })
    
    bars.addEventListener("click",()=>
    {
        barsOpen.classList.remove("-left-64");
        barsOpen.classList.add("left-0");
        overlay.classList.add("overlay-show")
    })
    barsClose.addEventListener("click",() =>
    {
        barsOpen.classList.add("-left-64");
        barsOpen.classList.remove("left-0");
        overlay.classList.remove("overlay-show")
    })
    overlay.addEventListener("click",() =>
    {
        barsOpen.classList.add("left-0");
        barsOpen.classList.remove("-left-64");
        cartOpen.classList.add("-left-64");
        cartOpen.classList.remove("left-0");
        overlay.classList.remove("overlay-show");
    })
    let loadDiv=document.querySelector('.loader');
    
    
    function loader()
    {
        loadDiv.className='loader hidden';
    }
    window.addEventListener('load',loader());


   ///////////////////////////////////////////////////
   let circle = document.querySelector(".color-option");

   circle.addEventListener("click", (e)=>{
     let target = e.target;
     if(target.classList.contains("circle")){
       circle.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".main-images .active").classList.remove("active");
       document.querySelector(`.main-images .${target.id}`).classList.add("active");
     }
   });
   //////////////////////////////////
   