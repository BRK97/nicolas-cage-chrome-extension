let nicolasCageImages = [
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Nicolas_Cage_Deauville_2013.jpg",
    "https://api.time.com/wp-content/uploads/2015/07/nicolas-cage1.jpg",
    "https://i.ebayimg.com/images/g/aiEAAOSw5cJazEDb/s-l300.jpg",
    "https://www.looper.com/img/gallery/the-biggest-nicolas-cage-movies-of-all-time/intro-1614010892.jpg",
    "https://images.mubicdn.net/images/cast_member/3656/cache-1725-1478101707/image-w856.jpg?size=800x",
    "https://thelasttavern.com/wp-content/uploads/2021/12/Nicholas-Cage-730x489.jpeg",
    "https://i.cbc.ca/1.5963873.1616692705!/fileImage/httpImage/image.jpeg_gen/derivatives/original_780/face-off.jpeg",
    "https://bingeddata.s3.amazonaws.com/uploads/2020/12/nicolas-cage.jpg"
];

chrome.storage.sync.get(['displayImages'], function(result) {
  if(result.displayImages){
      const imgs = document.getElementsByTagName("img");
        for(let i = 0; i < imgs.length; i++){
            const rndImg = Math.floor(Math.random() * nicolasCageImages.length);
            imgs[i].src = nicolasCageImages[rndImg];
            imgs[i].style.aspectRatio = "4/4";
        };
  }
})

chrome.storage.sync.get(['displayHeadlines'], function(result) {
    if(result.displayHeadlines){
        const mainTitle = document.getElementsByTagName("h1");
        for(let i = 0; i < mainTitle.length; i++){
            mainTitle[i].innerText = "Nicolas cage <3";
            mainTitle[i].style.color = "Gold";
            mainTitle[i].style.textShadow = "0 0 3px #FF0000, 0 0 5px #0000FF";
        };
    }
})


chrome.storage.sync.get(['displayTitles'], function(result) {
    if(result.displayHeadlines){
        const headers = document.getElementsByTagName("h3");
        for(let i = 0; i < headers.length; i++){
            headers[i].innerText = "Nicolas cage <3";
            headers[i].style.color = "Gold";
            headers[i].style.textShadow = "0 0 3px #FF0000, 0 0 5px #0000FF";
        }
    }
})

