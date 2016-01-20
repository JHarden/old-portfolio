
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
    && (window.scrollY <=  document.getElementById('about_me').getBoundingClientRect().bottom)
    ){

        document.getElementById('hero_banner').className = "hero inactive";
        document.getElementById('my_work').className = "work inactive";
        document.getElementById('my_photo').className = "grid-25 about-me-img active";
        document.getElementById('my_blurb').className = "about-me-blurb grid-75 active";
        document.getElementById('about_me_title').className = "title-active";

    }else{
        document.getElementById('hero_banner').className = "hero";
        document.getElementById('my_work').className = "work";
        document.getElementById('my_photo').className = "grid-25 about-me-img";
        document.getElementById('my_blurb').className = "about-me-blurb grid-75";
        document.getElementById('about_me_title').className = "title-inactive";
    }
});

window.onload = function(){



}();