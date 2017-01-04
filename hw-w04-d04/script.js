$(function(){

console.log('Script.js linked!');

$.ajax({
  url: 'http://itunes.apple.com/search?term=ke$ha&entity=album',
  type: 'GET',
  dataType: 'JSONP',
  success: (data) => {
  // let $keshaArray = keshaData.results;
  let $albumList = $('<ul>');
  for (let i=0; i<data.results.length; i++){
    let oneAlbum = $('<li>');
    let albumName = data.results[i].collectionName;
    oneAlbum.text(`${albumName}`);
    $albumList.append(oneAlbum);
  }
    $('body').append($albumList);
    ($albumList).css('background-color', 'aqua');

  let $albumImagesList = $('<ul>');
  let albumImgHeader = $('<h1>');
  albumImgHeader.text('Ke$ha\'s Kid Friendly Jams');
  $albumImagesList.append(albumImgHeader);

  for (let i=0; i<data.results.length; i++){
    let albumCover = $('<img>');
    let friendlyAlbum = data.results[i].collectionExplicitness;
    if (friendlyAlbum === 'notExplicit'){
      albumCover.attr('src', data.results[i].artworkUrl60);
      albumCover.css({
        'height': '200px',
        'width': '200px',
        'display': 'inline-block'
      })
    } else {
      console.log('explicit');
    }
    $albumImagesList.append(albumCover);
  }

  $('body').append($albumImagesList);
  ($albumImagesList).css('background-color', 'rebeccapurple');

}
})

$.ajax({
  url: 'http://itunes.apple.com/search?term=ke$ha&entity=song&limit=5&sort=recent',
  type: 'GET',
  dataType: 'JSONP',
  success: (data) => {
  let $trackList = $('<ul>');
  let trackListHeader = $('<h1>');
  trackListHeader.text('Ke$ha\'s Latest Hits');
  $trackList.append(trackListHeader);

  for (let i=0; i<data.results.length; i++){
    let oneTrack = $('<li>');
    let trackName = data.results[i].trackName;
    oneTrack.text(`${trackName}`);
    $trackList.append(oneTrack);
  }
    $('body').append($trackList);
  }
})
})
