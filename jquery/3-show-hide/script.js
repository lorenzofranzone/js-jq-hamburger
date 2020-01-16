// Mostra al click sul bottone
var bottone = $('#bottone');

// bottone.click(
//   function () {
//     $('p').fadeIn(2000);
//   }
// );
//
// $('p').dblclick(
//   function () {
//     $('p').hide();
//   }
// );
// Mostra e nascondi testo al click sul bottone
/* Versione Plus */

bottone.click(
  function () {
    var visible = $('p').hasClass('none');
    console.log(visible);
    if(visible){
      $('p').removeClass('none');
    } else {
      $('p').addClass('none');
    }
  }
);


var visible = false;
bottone.click(
  function () {
    if(visible == false) {
      $('p').fadeIn();
      visible = true;
      console.log($('p').fadeIn());
    } else {
      $('p').fadeOut();
      visible = false;
      console.log($('p'));
    }
  }
);
