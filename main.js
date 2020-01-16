// var hamburgerIcon = $('i.fa-bars'); // Recupero l'icona "hamburger"
// var hamburgerIconClose = $('i.fa-times'); // Recupero l'icona "close"
//
// // Cliccando sull'icona "hamburger":
// hamburgerIcon.click (
//   function () { // Genero la funzione che:
//     $('.hamburger-menu').show(); // Mostra il menu responsive
//   }
// );
//
// // Cliccando sull'icona "close":
// hamburgerIconClose.click (
//   function () { // Genero la funzione che:
//     $('.hamburger-menu').hide(); // Nasconde il menu responsive
//   }
// );

// Soluzione 2 con selettori diversi

var hamburgerIcon = $('.header-right a'); // Recupero l'icona "hamburger"
var hamburgerIconClose = $('.close'); // Recupero l'icona "close"

// Cliccando sull'icona "hamburger":
hamburgerIcon.click (
  function () { // Genero la funzione che:
    $('.hamburger-menu').show(); // Mostra il menu responsive
  }
);

// Cliccando sull'icona "close":
hamburgerIconClose.click (
  function () { // Genero la funzione che:
    $('.hamburger-menu').hide(); // Nasconde il menu responsive
  }
);
