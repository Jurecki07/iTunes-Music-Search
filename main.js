/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let searchInput = document.querySelector("#searchInput");
let iTunesdisplay = document.querySelector(".music");
let playAudio = document.querySelector("#audioPlayer")
// let audioSource = document.querySelector("audio.src")
// playAudio.load
// playAudio.play

  iTunesdisplay.addEventListener("click",function(e){
let audioPlay = e.target.getAttribute("value")
playAudio.setAttribute("src",audioPlay);
playAudio.load ()
playAudio.play ()



  })

function searchMusic() {
  event.preventDefault();
  iTunesdisplay.innerHTML = "";
  let searchValue = searchInput.value;

  fetch("https://itunes.apple.com/search?term=" + searchValue)
    .then(

    function (response) {
      return response.json()
        .then(function (data) {
          let results = data.results;
          for ( let i =0; i < results.length; i++){
            let divOne = document.createElement("div");
            divOne.classList.add("artistBox");


            let getImg = document.createElement("img")
          
            getImg.src = results[i].artworkUrl100;
            let atT = document.createAttribute("value");
            atT.value = `${results[i].previewUrl}`;
            getImg.setAttributeNode(atT);        
            divOne.appendChild(getImg);



            let hFour = document.createElement("h4");
            hFour.textContent = results[i].trackName
            divOne.appendChild(hFour);

             let hFive = document.createElement("h5");
            hFive.textContent = results[i].artistName
            divOne.appendChild(hFive);



            iTunesdisplay.appendChild(divOne);




          }

        })
    })
}