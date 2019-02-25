let display = 0;

var albumArr = ['img/billie.jpg', 'img/bts.png', 'img/spooky.jpg', 'img/spooky2.jpg', 'img/spooky3.jpg', 'img/travis.jpg']

// display first photo from array
// create event listener for next button
// on click will have fucntion to display next img in array
// enable button to nav through Array
// create event for prev button and repeat steps for first button in reverse

$('#next').on('click', function(){
  display++;
  $('img').attr('src', albumArr[display]);
  if(display === albumArr.length){
    display = 0;
    $('img').attr('src', albumArr[display]);
  }
})
$('#prev').on('click', function(){
  display--;
  $('img').attr('src', albumArr[display]);
  if(display === -1){
    display = albumArr.length -1;
    $('img').attr('src', albumArr[display]);
  }
})
