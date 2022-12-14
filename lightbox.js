let containerBox = document.getElementById('container');
let popUp = document.getElementById('popup');
let images = document.querySelectorAll('.Art');
//gets our container, popup and all our images to do something with them

let popUpImg = document.getElementById('imgBx');
//gets the invisible image box inside the popup
for (let i = 0; i < images.length; i++) {
    //loops through and gets all images to use
    images[i].onclick = function(){
        //adds a click listener to each image
        popUp.style.display = 'block';
        popUpImg.src = this.src;
        containerBox.style.display = 'none';
        document.body.style.backgroundColor = 'black';
    }

};

let closer = document.getElementById('close');
closer.onclick = function(){
    popUp.style.display = 'none';
    containerBox.style.display = 'flex';
    document.body.style.backgroundColor = '#ffebcd';
};