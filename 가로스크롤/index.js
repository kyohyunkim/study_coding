window.onload = function(){
    window.addEventListener('scroll',function(){
        if(window.scrollY > container.offsetTop){
            var s = skrollr.init();
        }
    })

}