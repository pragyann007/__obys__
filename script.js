const animate_loader_function = ()=>{
    const tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    opacity:0,
    duration:0.6,
    delay:0.5
})
tl.from('.line1_part1,.line h2',{
    opacity:0,
    onStart:function(){
        const h5 = document.querySelector('.line1_part1 h5');
var grow = 0 ;
   setInterval(() => {
    if (grow<100){
        h5.innerHTML = grow++
    }
    else{
       grow = 100;
       h5.innerHTML = grow
  }
     }, 20);


    }
})

tl.to(".loader",{
    opacity:0,
    duration:0.2,
    delay:2
})
tl.from(".page1",{
    y:1600,
    duration:0.5,
    opacity:0,
    delay:0.2,
    ease:Power4

})
tl.to(".loader",{
    display:"none"
})
tl.from('.nav',{
    opacity:0
})
tl.from('#hero1 h1,#hero2 h1,#hero3 h2  ,#hero4 h1',{
    y:120,
    opacity:0,
    stagger:0.2,
})


}
animate_loader_function()

const body = document.querySelector('body')

const animate_cursor_function = ()=>{
    body.addEventListener('mousemove',(e)=>{
        gsap.to(".cursor",{
            x:e.x,
            y:e.y
        })
        
    })
    Shery.makeMagnet(".nav_part_2 h4"  /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    

}
animate_cursor_function()

