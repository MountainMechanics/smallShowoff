window.onscroll = function () {
    activateInViewport();
    scrollFunction();
};

function activateInViewport() {
    let elems = document.getElementsByClassName("slide-in");

    for (let i = 0; i < elems.length; i++) {
        if(elementInViewport(elems[i])){
            elems[i].classList.add("inView");
            console.log(elems[i]+"is in viewport");
        }
    }
}

// check if element would be "visible" for the user
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

//To top btn
function scrollFunction() {
    var scrollDistance = 100;
    if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
        document.getElementById("toTopBtn").style.setProperty("transform","scale(1)");
    } else {
        document.getElementById("toTopBtn").style.removeProperty("transform");
    }
}

function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox ...
}