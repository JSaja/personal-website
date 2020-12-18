// $(function() {
//     $('#flip-card-inner div').css('font-size', '1em');
    
//     while( $('#flip-card-inner div').height() > $('#flip-card-inner').height() ) {
//         $('#flip-card-inner div').css('font-size', (parseInt($('#flip-card-inner div').css('font-size')) - 1) + "px" );
//     }
    
// });


$(function() {
    $('.flip-card-inner').css('font-size', '1em');
    
    while( $('.flip-card-inner').height() > $('.flip-card-inner').height() ) {
        $('.flip-card-inner').css('font-size', (parseInt($('.flip-card-inner').css('font-size')) - 1) + "px" );
    }
    
});