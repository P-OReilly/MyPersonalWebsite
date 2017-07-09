/*JavaScript that adds a class to the header element; slightly minimizes the header bar upon 
scrolling down 500pixels. It also makes the background color slightly transparrent */

function init() {
    window.addEventListener('scroll', function () {
        if (pageYOffset > 500) {
            document.getElementById("pagehead").classList.add('minimize');
        } else {
            if (document.getElementById("pagehead").classList.contains('minimize')) {
                document.getElementById("pagehead").classList.remove('minimize');
            }
        }
    });
}

/*JavaScript that adds a class to the header and fullpage elements; offsets them by 170pixels 
to display the offscreen navigation underneath upon clicking the navigation button - Three lines, 
which appear when the screen width is less than 875pixels  */

function onClickHandler(checkbox) {
    if (checkbox.checked) {
        document.getElementById("pagehead").classList.add('nav_open');
        document.getElementById("fullpage").classList.add('nav_open');
    } else {
        if (document.getElementById("pagehead").classList.contains('nav_open')) {
            document.getElementById("pagehead").classList.remove('nav_open');
        }
        if (document.getElementById("fullpage").classList.contains('nav_open')) {
            document.getElementById("fullpage").classList.remove('nav_open');
        }
    }
        
}

window.onload = init();
