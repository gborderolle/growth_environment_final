/**
 * Created by Gborde on 01-Mar-15.
 */


var defaultText = 'Texto por defecto';
var arrayDefaultTexts = ["Pitch de la Startups... ¿Qué le dirías a Bill Gates si te lo encontraras en un \nasensor? \nSólo tienes 30 segundos. Es re común encontrarme a Bill en el asensor del departamento, acabo de \nsubir con él."];


function endEdit(e) {
    var input = $(e.target),
        label = input && input.prev();

    var name = parseInt(label.name);
    label.text(input.val() === '' ? arrayDefaultTexts[name] : input.val());
    input.hide();
    label.show();
}

$('.clickedit').hide()
    .focusout(endEdit)
    .keyup(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            endEdit(e);
            return false;
        } else {
            return true;
        }
    })
    .prev().click(function () {
        $(this).hide();
        $(this).next().show().focus();
    });

