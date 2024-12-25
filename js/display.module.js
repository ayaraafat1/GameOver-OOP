
export class display {
     
   constructor(){}

    // function to display Games
    displayGames(data) {
        let cartona ="";
        for (const game of data) {
            let videPath = game.thumbnail.replace("thumbnail.jpg","videoplayback.webm") ;
            cartona +=`
            <div class="col">
              <div  class="card h-100 bg-transparent" role="button" data-id="${game.id}">
                 <div class="card-body">
                    <figure class="position-relative">
                       <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" alt="${game.title}"/>
                     <video muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
                      <source src="${videPath}">
                      </video>
                    </figure>
        
                    <figcaption>
        
                       <div class="hstack justify-content-between">
                          <h3 class="h6 small">${game.title}</h3>
                          <span class="badge text-bg-primary p-2">Free</span>
                       </div>
        
                       <p class="card-text small text-center opacity-50">
                          ${game.short_description.split(" ", 8)}
                       </p>
        
                    </figcaption>
                 </div>
        
                 <footer class="card-footer small hstack justify-content-between">
        
                    <span class="badge badge-color">${game.genre}</span>
                    <span class="badge badge-color">${game.platform}</span>
        
                 </footer>
              </div>
           </div>
            `
        }
        document.getElementById("gameData").innerHTML =cartona;
        const cards = document.getElementById("gameData").querySelectorAll(".card");
        cards.forEach((card) => {
          card.addEventListener("mouseenter", this.startVideo);
          card.addEventListener("mouseleave", this.stopVideo);
        });
        }


          // function to start Video
    startVideo(event) {
      const card = event.currentTarget;
    const videoElement = card.querySelector("video");
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().then(() => {
        videoElement.classList.remove("d-none");
      });
    }
    }

   // function to stop Video
    stopVideo(event) {
      const card = event.currentTarget;
      const videoElement = card.querySelector("video");
      if (videoElement) {
        videoElement.pause();
        videoElement.classList.add("d-none");
      }
    }

    // function to Display Details
    displayData(data){
    let cartona = `
   
   <div class="col-md-4">
   <figure>
      <img src="${data.thumbnail}" class="w-100" alt="${data.title}" />
   </figure>
</div>
<div class="col-md-8">
   <div>
      <h1>${data.title}</h1>
      <p>Category: <span class="badge text-bg-info py-1">${data.genre}</span></p>
      <p>Platform: <span class="badge text-bg-info py-1">${data.platform}</span></p>
      <p>Status: <span class="badge text-bg-info py-1">${data.status}</span></p>
      <p>${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">
          Show Game
      </a>
   </div>
</div>

   `;

   document.getElementById("detailsData").innerHTML = cartona;
      }
}