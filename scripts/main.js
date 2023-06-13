var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tesla.jpeg') {
      myImage.setAttribute ('src','images/tesla2.jpeg');
    } else {
      myImage.setAttribute ('src','images/tesla.jpeg');
    }
}