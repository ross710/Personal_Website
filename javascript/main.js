/*
$( '.page_container' ).each(function ( i, box ) {

    var width = $( box ).width(),
        html = '<span style="white-space:nowrap"></span>',
        line = $( box ).wrapInner( html ).children()[ 0 ],
        n = 100;

    $( box ).css( 'font-size', n );

    while ( $( line ).width() > width ) {
        $( box ).css( 'font-size', --n );
    }

    $( box ).text( $( line ).text() );

});
*/

$(document).ready(function() {
	$('#nav').localScroll({duration:800});
});
$('.page').height($(document).height());
