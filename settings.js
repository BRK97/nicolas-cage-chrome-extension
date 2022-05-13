document.getElementById("myButton").addEventListener("click", setSettings);
const img = document.getElementById("imgSettings");
const headlines = document.getElementById("headlinesSettings");
const titles = document.getElementById("titlesSettings");

window.onload = () => {
    chrome.storage.sync.get(['displayImages','displayHeadlines','displayTitles'], function(result){
        console.log(result);
        result.displayImages? img.checked = true : img.checked = false;
        result.displayHeadlines? headlines.checked = true : headlines.checked = false;
        result.displayTitles? titles.checked = true : titles.checked = false;
    })
}

function setChromeStorage(obj){
    chrome.storage.sync.set(obj);
}

function setSettings(){
  img.checked? setChromeStorage({displayImages: true}) : setChromeStorage({displayImages: false});
  headlines.checked? setChromeStorage({displayHeadlines: true}) : setChromeStorage({displayHeadlines: false});
  titles.checked? setChromeStorage({displayTitles: true}) : setChromeStorage({displayTitles: false});

  chrome.storage.sync.get(['displayImages','displayHeadlines','displayTitles'], function(result){
      console.log("images are set to "+result.displayImages+"\n"+
                  "headlines are set to "+result.displayHeadlines+"\n"+
                  "titles are set to "+result.displayTitles);
  })
}
