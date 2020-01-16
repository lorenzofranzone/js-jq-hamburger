// Creare un bottone che on hover aggiunga una classe che cambia il colore del testo e la toglie quando il mouse esce dal bottone.
// Con il doppio click cambio il testo in “cliccato”.
// Con un click solo non fa niente
// console.log(document.getElementById('button'));
//Si può iniziare a variabilizzare
var bottone = $('button');
console.log(bottone.text());
// console.log(bottone);
bottone.mouseenter(
  function() {
    $('button').addClass('new-color');
  }
);
bottone.mouseleave(
  function() {
    $('button').removeClass('new-color');
  }
);
bottone.dblclick(
  function() {
    $('button').text('<p>Testo 2</p>');
  }
);
bottone.click(
  function() {
    $('button').text('Click singolo');
  }
);

function pippo2() {
  console.log('ciao2');
}
function pippo(){
  console.log('ciao');
  console.log('ciao');
  console.log('ciao');
  console.log('ciao');
  pippo2();
}
