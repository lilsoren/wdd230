let imagesToLoad = document.querySelectorAll('img[data-src]');

//perameters being set for the intersctional observer
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
    console.log('just loaded', image.getAttribute('src'));
  };
};

  
if('IntersectionObserver' in window){
  const imgObserver = new IntersectionObserver((items, observer) =>{
    items.forEach((item) => {
      if (item.isIntersecting){
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }

    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
     imgObserver.observe(img);
   });
}

else{
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


