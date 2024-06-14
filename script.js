const searchForm =document.querySelector('form');
const movieContainer =document.querySelector('.movie_container');
const inputBox =document.querySelector('.inputBox');
        // apikey=http://www.omdbapi.com/?i=tt3896198&apikey=4aac7fbf
        

// Fetching movie details 
const getmovieinfo = async (movie) =>
    {
    const myapi='6d4b3add'
    const url =`http://www.omdbapi.com/?apikey=${myapi}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
     showmoviedata(data)
    }

const showmoviedata = (data) =>
    {
        const {Title,imdbRating,Genre,Language,Runtime,Actors,Released}=data; //storing data into an array

        const movieElement = document.createElement('div');
        movieElement.innerHTML=`<h2>${Title}</h2><p>${Language}</p>`;
        const  movieGenreElement= document.createElement('div');
        movieGenreElement.classList.add('movie-genre');
        
        Genre.split(",").forEach(element => {
            const p=document.createElement('p');
            p.innerText=element;
            movieGenreElement.appendChild(movieElement);
            
        });


        movieContainer.innerHTML = ''; // Clear previous movie data
        movieContainer.appendChild(movieElement);
    }



searchForm.addEventListener('submit', (ev) => {
ev.preventDefault()
// console.log(inputBox.value)   
const movieName=inputBox.value.trim();
if (movieName !== " ")
    {
        getmovieinfo(movieName);
    }        
})
console.log("Hello")