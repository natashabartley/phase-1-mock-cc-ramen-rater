console.log("Mock Code Challenge!: Code is Running");

let body = document.querySelector("body");
const ramenDetail = document.querySelector('#ramen-detail');
const ratingDisplay = document.querySelector('#rating-display');
const commentDisplay = document.querySelector('#comment-display');
const newRamenForm = document.querySelector('#new-ramen');


fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    const ramenMenu = document.querySelector('#ramen-menu');
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      ramenMenu.appendChild(img);
    });

  ramenMenu.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        const ramen =ramens.find(ramen => image === event.target.src);
        ramenDetail.querySelector('.detail-image').src = ramen.image;
        ramenDetail.querySelector('.name').textContent = ramen.name;
        ramenDetail.querySelector('.restaruant').textConent = ramen.resturant;
        ratingDisplay.textConent = ramen.rating;
        commentDisplay.textConent = ramen.comment;
    }
  })

  newRamenForm.addEventListener('submit', event => {
    event.preventDefault();
    const newRamen = {
        name: document.querySelector('#new-name').value, 
        resturant: document.quereySelector('#new-resturant').value,
        image: document.querySelctor('#new-image').value,
        rating: document.querySelector('#new-rating').value,
        comment: document.querySelector('#new-comment').value,
    };

    ramens.push(newRamen);
        const img = document.createElement('img');
        img.src = newRamen.image;
        ramenMenu.appendChild(img);
        newRamenForm.requestFullscreen();
  });

    body.append(img);

});
