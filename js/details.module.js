import { display } from "./display.module.js";

export class Details{
    constructor(id){
        document.querySelector(".close").addEventListener("click",function(){
            document.getElementById("details").classList.add("d-none");
            document.getElementById("games").classList.remove("d-none");
        })

        this.loader = document.querySelector(".loading");
        this.getDetails(id);
    }

    // function to get game details from API
    async  getDetails(id) {
        this.loader.classList.remove("d-none");
    const options = {
       method: "GET",
       headers: {
        'x-rapidapi-key': '259458d788msh53013369d6c5980p1575b2jsna4694e535fe7',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
       },
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    const response = await api.json();
    this.loader.classList.add("d-none");
    new display().displayData(response);

    }

}