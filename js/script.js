$(document).ready(function() {

var x = document.getElementsByClassName('btn');
var i ;
    console.log(x);
for(i = 0; i< x.length; i++) {
    x[i].onclick = function () {
        if ( $(this).prev().css('max-height') == '95px'){
            $(this).prev().css({"max-height":"100%"})
            $(this).text('Read Less')
        }else {
            $(this).prev().css({"max-height":"95px"})
            $(this).text('Read More')
        }}
        // this.style.width = '100%'  js запись
    }}
);
//===============================с вызовом функции из HTML========== onclick="showText(this)=============
// function showText(el) {
//     if (el.previousElementSibling.clientHeight === 95) {
//         el.previousElementSibling.style.height = "100%";
//         el.innerHTML = 'Show less...'
//     }else{
//         el.previousElementSibling.style.height = "95px";
//         el.innerHTML = 'read More'  ;
//     }
// }