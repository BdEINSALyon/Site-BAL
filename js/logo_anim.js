var container = document.getElementById('logo-bal-container');

container.addEventListener('mouseover', changeDefOver);

function changeDefOver(e) {
    var el1 = document.getElementById('logo-bal-background1');
    var el2 = document.getElementById('logo-bal-background2');

    el1.style.animationFillMode = "forwards"
    el2.style.animationFillMode = "forwards"

    if (el1.style.scale != 1)
        return;

    el1.style.animation = 'none';
    el1.offsetHeight; /* trigger reflow */
    el1.style.animation = null;

    el2.style.animation = 'none';
    el2.offsetHeight; /* trigger reflow */
    el2.style.animation = null;
}

function onLogoClick() {
    var el = document.getElementById('logo-bal-foreground');

    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;

    el.style.animation = 'logoClickAnimation .5s ease'
}