var images = [
    {
        src : 'bgs/1.svg'
    },
    {
        src : 'bgs/2.svg'
    },
    {
        src : 'bgs/3.svg'
    },
    {
        src : 'bgs/4.svg'
    },
    {
        src : 'bgs/5.svg'
    },
    {
        src : 'bgs/6.svg'
    },
    {
        src : 'bgs/7.svg'
    },
    {
        src : 'bgs/8.svg'
    },
    {
        src : 'bgs/9.svg'
    },
    {
        src : 'bgs/10.svg'
    },
    {
        src : 'bgs/11.svg'
    },
    {
        src : 'bgs/12.svg'
    },
];

function setBackground (images) {
    // generates a random integer between 0 and the length of the supplied array:
    var n = Math.floor(Math.random() * images.length),
        // works out whether to use the 'textContent' or 'innerText' property:
        textProperty = 'textContent' in document ? 'textContent' : 'innerHTML';

    // sets the background-image of the 'body' element:
    //document.getElementById('body').style.backgroundImage = 'url(' + images[n].src + ')';
    document.body.style.backgroundImage = 'url(' + images[n].src + ')';
}

setBackground(images);
