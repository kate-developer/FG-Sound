let photos = [
  'img/cats/1.jpg',
  'img/cats/2.jpg',
  'img/cats/3.jpg',
  'img/cats/4.jpg',
  'img/cats/5.jpg',
  'img/cats/5.jpg'
];


let thumbnails = document.querySelectorAll('.gallery__photo-preview');
let fullPhoto = document.querySelector('.full-photo');

let addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;

  });
};

for (let i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}



