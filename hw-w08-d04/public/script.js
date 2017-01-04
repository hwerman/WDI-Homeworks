'use strict';

const searchBtn = document.querySelector('#searchButton');
const input = document.querySelector('#input');
const searchForm = document.querySelector('#searchForm');
const body = document.querySelector('body');

function getAllMovies(){
  return fetch('/movies')
  .then(r => r.json())
}

function getOneMovie(movie){
  fetch(`http://www.omdbapi.com/?t=${movie}`)
  .then(r => r.json())
  .then(data => {
    renderResult(data);
  })
}

function postMovieToFavorites(postObj){
  return fetch('/movies', {
    headers: {
      'Content-Type': 'application/JSON'
    },
    method: 'POST',
    body: JSON.stringify(postObj)
  });
}

function deleteMovie(id){
  fetch(`/movies/${id}`, {
  method: 'DELETE',
})
  .then(getAllMovies().then(renderAllMovies))
  .catch(err => console.log(err));
}

function putUpdatesToMovie(entry){
  fetch(`'/movies/edit/{title}`, {
  method: 'PUT',
})
  .then(getAllMovies().then(renderResult))
  .catch(err => console.log(err));
}

function renderResult(entry){
    let body = document.querySelector('body');
    let movieCollection = document.querySelector('#moviesBox');
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');
    let newBullet = document.createElement('li');
    newBullet.setAttribute('class','filmTitle');
    newBullet.innerHTML = ('Title: ' + entry.Title);

    let newBullet1 = document.createElement('img');
    newBullet1.setAttribute('class','filmPoster');
    newBullet1.src = (entry.Poster);

    let newBullet2 = document.createElement('li');
    newBullet2.setAttribute('class','filmRating');
    newBullet2.innerHTML = ('Rating: ' + entry.imdbRating);

    let newBullet3 = document.createElement('li');
    newBullet3.setAttribute('class','filmRuntime');
    newBullet3.innerHTML = ('Runtime: ' + entry.Runtime);

    let newBullet4 = document.createElement('li');
    let addButton = document.createElement('button');
    addButton.setAttribute('class','addBtn');
    addButton.innerHTML = 'Save to Collection';
    addButton.href = (`/movies/`)
    newBullet4.appendChild(addButton);

      addButton.addEventListener('click', (event) => {
        let one = {};
        one.Title = entry.Title;
        one.Poster = entry.Poster;
        one.Rating = entry.imdbRating;
        one.Runtime = entry.Runtime;
        console.log(one);
        postMovieToFavorites(one);
        //sends this data as an object to fetch call for postMovieToFavorites param
      })

    newList.appendChild(newBullet);
    newList.appendChild(newBullet1);
    newList.appendChild(newBullet2);
    newList.appendChild(newBullet3);
    newList.appendChild(newBullet4);
    newDiv.appendChild(newList);
    movieCollection.appendChild(newDiv);
  };
// }

function renderAllMovies(all){
  for(let i=0; i<all.length; i++){
    let body = document.querySelector('body');
    let currentMovies = document.querySelector('#currentMovies');
    let newDiv = document.createElement('div');
    let newList = document.createElement('ul');

      let newBullet = document.createElement('li');
      newBullet.setAttribute('class','filmTitle');
      newBullet.innerHTML = ('Title: ' + all[i].title);

      let newBullet1 = document.createElement('img');
      newBullet1.setAttribute('class','filmPoster');
      newBullet1.src = (all[i].poster);

      let newBullet2 = document.createElement('li');
      newBullet2.setAttribute('class','filmRating');
      newBullet2.innerHTML = ('Rating: ' + all[i].imdbrating);

      let newBullet3 = document.createElement('li');
      newBullet3.setAttribute('class','filmRuntime');
      newBullet3.innerHTML = ('Runtime: ' + all[i].runtime);

      let newBullet4 = document.createElement('li');
      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('class','deleteBtn');
      deleteButton.innerHTML = 'Delete from Collection';
      // deleteButton.href = (`/movies/${all[i].title}`)

        //not working
        deleteButton.addEventListener('click', (event) => {
        //   let gone = {};
        //   gone.Title = all[i].Title;
        //   gone.Poster = all[i].Poster;
        //   gone.Rating = all[i].imdbRating;
        //   gone.Runtime = all[i].Runtime;
        console.log(all[i].id);
        deleteMovie(all[i].id);
        })
        newBullet4.appendChild(deleteButton);

      let newBullet5 = document.createElement('li');
      let showButton = document.createElement('button');
      showButton.setAttribute('class','showBtn');
      showButton.innerHTML = 'Show movie';
      showButton.href = (`/movies/show/${all[i].title}`)
      newBullet5.appendChild(showButton);

    newList.appendChild(newBullet);
    newList.appendChild(newBullet1);
    newList.appendChild(newBullet2);
    newList.appendChild(newBullet3);
    newList.appendChild(newBullet4);
    newList.appendChild(newBullet5);
    newDiv.appendChild(newList);

    currentMovies.appendChild(newDiv);
    // console.log(all[i]);
  };
}

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getOneMovie(input.value);
});

function handler(values){

};

(() => {
  handler();
  // postMovieToFavorites();
  getAllMovies().then(renderAllMovies);
  // deleteMovie();
  // renderResult();
})();
