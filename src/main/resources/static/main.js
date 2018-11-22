// dodany alert przy wyświetlaniu strony
// alert('Show List?')

//z tlumaczenia rozne rzeczy
// var par = jQuery('div');
//
// divs.on('click',function () {
//     console.dir(this)
// })

// console.log(par);

// $('#li-element').text('nowyTekst');

//komunikaty wyskakujące przy włączaniu okna
// $(document).ready(function () {
//     alert('ready')
// });
// $(window).on('load', function () {
//     alert('window loaded')
// });
var choinka = $('#choinka');

for (var i = 0; i < 20; i++) {
    var x = i;
    var text = "*";
    var clas;
    if (i % 2 === 0) {
        clas = 'red';
    } else {
        clas = 'green';
    }
    while (x > 0) {
        text += "***";
        x--;
    }

    choinka.append('<p class="text-center ' + clas + '">' + text + '</p>');

}