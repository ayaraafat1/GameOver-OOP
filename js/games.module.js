import {Details } from "./details.module.js";
import {display } from "./display.module.js";


export class Games{
    constructor(){
        document.querySelectorAll(".menu a").forEach((link)=>{
            link.addEventListener("click",()=>{
                document.querySelector(".menu .active").classList.remove("active")
                link.classList.add('active')
                const category = link.dataset.category;
                this.getGames(category)
            })
        })
        
        this.loader = document.querySelector(".loading");
        this.details = document.getElementById("details");
        this.games = document.getElementById("games");
        this.display = new display();
        this.getGames("mmorpg");
    }

    // function to call API
    async  getGames(category) {
    this.loader.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
        'x-rapidapi-key': '259458d788msh53013369d6c5980p1575b2jsna4694e535fe7',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    let data = await response.json()
    this.loader.classList.add("d-none");
    this.display.displayGames(data);


    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
          this.details.classList.remove("d-none");
          this.games.classList.add("d-none");
          this.detailsSecioin = new Details(card.dataset.id);
        });
      });
    }
}