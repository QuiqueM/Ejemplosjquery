/*$(document).ready(saluda)
function saluda()
{
    alert($('h1').text())
}*/
$(function()
{
    //alert($('h1').text)
    $nuevo = $('<p>parrafo Nuevo</p>')
    $('h2').after($nuevo)
})