'use strict';

window.onload = () => {

  buildingBtn.addEventListener('click', fetchBuildings);
  apartmentBtn.addEventListener('click', fetchApartments);

  //Dan Pease helped me a ton on the following.
  function fetchBuildings() {
    fetch(`/api/buildings`)
    .then(r => r.json())
    .then(data => renderBuildings(data))
  }

  //from trevor && irwin review
  // //const getData = () => {
  //   fetch(`/api/buildings`)
  //   .then(r => r.json())
  //   .then(data => renderBuildings(data))
  // }

  function renderBuildings(results) {
    for(let i = 0; i < results.length; i++) {
      let body = document.querySelector('body');
      let bDiv = document.querySelector('#theBuildingsDiv');
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class','newDiv');
      newDiv.innerHTML = ('Name: '+ results[i].name);

      let newDiv1 = document.createElement('div');
      newDiv1.setAttribute('class','BUILD1');
      newDiv1.innerHTML = ('Address: '+ results[i].address);

      let newDiv2 = document.createElement('div');
      newDiv2.setAttribute('class','BUILD2');
      newDiv2.innerHTML = ('Number of floors: '+ results[i].num_floors);

      let disButton = document.createElement('button')
      disButton.setAttribute('class','moreBtn');
      disButton.innerHTML = 'See More Here';
      disButton.href = (`/buildings/${i}`)

      bDiv.appendChild(newDiv);
      bDiv.appendChild(newDiv1);
      bDiv.appendChild(newDiv2);
      bDiv.appendChild(disButton);
      body.appendChild(bDiv);
      console.log(results[i]);
    }
  }

  function fetchApartments(){
    fetch(`/api/apartments`)
    .then(r => r.json())
    .then(data => renderApartments(data))
  }

  function renderApartments(results) {
    for (let i = 0; i < results.length; i++) {
      let body = document.querySelector('body');
      let aDiv = document.querySelector('#theApartmentsDiv');
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class','newDiv');
      newDiv.innerHTML = ('Name: '+ results[i].name);

      let newDiv1 = document.createElement('div');
      newDiv1.setAttribute('class','APT1');
      newDiv1.innerHTML = ('Price: $'+ results[i].price);

      let newDiv2 = document.createElement('div');
      newDiv2.setAttribute('class','APT2');
      newDiv2.innerHTML = ('Floor: '+ results[i].floor);

      let newDiv3 = document.createElement('div');
      newDiv3.setAttribute('class','APT3');
      newDiv3.innerHTML = ('Footage: '+ results[i].sqft +' sq. ft.');

      let disButton = document.createElement('button')
      disButton.setAttribute('class','moreBtn');
      disButton.innerHTML = 'See More Here';

      aDiv.appendChild(newDiv);
      aDiv.appendChild(newDiv1);
      aDiv.appendChild(newDiv2);
      aDiv.appendChild(newDiv3);
      aDiv.appendChild(disButton);
      body.appendChild(aDiv);
      console.log(results[i]);
    }
  }

    function deleteEntry(one){
      fetch(`/api/apartments` + name, {method: 'DELETE'})

  //       const deleteData = (id) => {
  //   fetch('/api/nba/' + id, {method: 'DELETE'})

  fetch(url, {
    method:
    headers:
  }
 body: JSON.string
  floor:
  name:
  sqft:
  /

  / }
  }


}
