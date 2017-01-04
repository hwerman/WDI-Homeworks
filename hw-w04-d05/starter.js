'use strict';

$(function() {
  console.log('js is linked');

  const $body = $('body');
  const $main = $('#flexContainer');
  const $inputField = $('input');
  const $submitBtn = $('button');

  //get ajax data and save value in a variable
  const getData = function(){
    let movieTitle = $inputField.val();
    $.ajax({
      url: 'http://www.omdbapi.com/',
      method: 'GET',
      dataType: 'json',
      data: {
        t: movieTitle
      }
    })
    .done (data => { //you are making data a variable here
      console.log(data);
      const $theData = data;
      handleResponse($theData)
    })
  }

  //when you click the submit button, you invokve the getData function
  const addAJAXFunction = function(){
    $submitBtn.click(getData)
  }
  addAJAXFunction();

  //when you click enter, you invoke getData
  const addAJAXFunctionEnter = function(event){
    if (event.which === 13){
      event.preventDefault();
      getData()
    }
  }
  $body.keypress(addAJAXFunctionEnter);

//get the search field to clear
 const resetInput = function(){
    // console.log('works');
    $('#form1')[0].reset()
  }

  //if the response is false meaning the movie is not found, then throw an alert and don't move to appendMovie
  //else set the title and poster to variables that will be used as the parameters for appendMovie function
  const handleResponse = function(movieObject){
    const $nada = movieObject.Response;
    if ($nada === 'False'){
      const $theTitle = null;
      const $thePoster = null;
      alert('MOVIE NOT FOUND. TRY AGAIN.')
    } else {
      const $theTitle = movieObject.Title;
      const $thePoster = movieObject.Poster;
      appendMovie($theTitle, $thePoster)
    }
    resetInput()
  }

//create divs for movie list, movie title, movie poster
//poster - if the Poster is N/A, put the default image in the div
//poster - if the Poster url exists, put it in the div
//append movie title and movie poster to movie list
//append movie list to body
const appendMovie = function(name,imagePath){
  const $movieList = $('<div>');
  const $movieName = $('<div class=\'resultName\'>');
  const $movieImg = $('<img class=\'resultImg\'>');
  $movieName.text(name);
  if (name.length>14){
    $movieName.css({
    'font-size': '22px',
    'word-wrap': 'break-word',
    'width': '200px'
    // 'display': 'table-cell',
    // 'vertical-align': 'bottom',
    })
  }
  if (imagePath === 'N/A'){
    $movieImg.attr('src', './noimage.jpg')
  } else {
    $movieImg.attr('src', imagePath)
  }
  $movieImg.css({
    'height': '200px',
    'width': '140px',
    'display': 'inline-block'
  })
  $movieList.css({
    'border': 'solid 3px #ffffff',
    'background': '#a62436',
    'padding': '20px'
  })
  $movieList.append($movieName);
  $movieList.append($movieImg);
  $main.append($movieList);
  findURL()
  };

  //no spaces - the opposite
  const findURL = function(){
    console.log(
    $inputField.val().split(' ').join('+')
    )
  }

})
