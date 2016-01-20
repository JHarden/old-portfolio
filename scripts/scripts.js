
;(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle ("scroll", "optimizedScroll");
})();

// handle event
window.addEventListener("optimizedScroll", function() {

    if(window.scrollY >= document.getElementById('hero_banner').getBoundingClientRect().height
        - document.getElementById('hero_banner').getBoundingClientRect().height/2
    && (window.scrollY <= document.getElementById('hero_banner').getBoundingClientRect().height + document.getElementById('about_me').getBoundingClientRect().height/2)
    ){

        document.getElementById('hero_banner').className = "hero inactive";
        document.getElementById('my_work').className = "work inactive";

    }else{
        document.getElementById('hero_banner').className = "hero";
        document.getElementById('my_work').className = "work";
    }
});

window.onload = function(){



}();