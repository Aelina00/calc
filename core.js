const input1 = $('.number-1');
const input2 = $('.number-2');
const btnPlus = $('.btn__plus'); 
const btnMinus = $('.btn__minus'); 
const btnMulti = $('.btn__multi');
const btnDivi = $('.btn__divi');
const result = $('.result');

btnPlus.on('click', function() {
    let sum = +input1.val() + +input2.val();
    result.text(sum);
    console.log(sum);
});

btnMinus.on('click', function() {
    let minus = +input1.val() - +input2.val();
    result.text(minus);
    console.log(minus);
});

btnMulti.on('click', function() {
    let multi = +input1.val() * +input2.val();
    result.text(multi);
    console.log(multi);
});

btnDivi.on('click', function() {
    let divi = +input1.val() / +input2.val();
    result.text(divi);
    console.log(divi);
});

// $('.btn_acc').on('click', function(){
//     $('.acc_txt').slideToggle(300)
//     $(this).toggleClass('active')
// })