

  //Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  let array = {};
 $.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    console.log(response);
    array = response.results;
  }
});


var text = $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    console.log(value);
  })
  .keyup();

function search() {
  var text1 = $( "input" ).val();
  let $list = $('#list');
 for (let i = 0; i < array.length; i++) {
   console.log(array[i], ' ' , text1);
   let name = array[i].name;
   if (name === text1)  {
     alert('Success!');
     $list.append('<li>' + array[i].eventHallName + '</li>');
   }
 }
  
}
document.getElementById("search-button").addEventListener("click", search);





  

  

  
  




