var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");



var imgs = document.querySelectorAll('.img');
imgs.forEach(i1 => i1.addEventListener('click', event => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
}))

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}