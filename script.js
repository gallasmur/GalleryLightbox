$('li').hover(function () {
    $(this).addClass('selected2');
}, function () {
    $(this).removeClass('selected2');
});

$('li').on('click', function () {
    //Get id of element clicked
    var id = $(this).attr('id');

    if (id === 'id_mountain') {
        $('.mountain').css('display', 'grid');
        $('.aguilas').css('display', 'none');
        $('.city').css('display', 'none');
        $('.cat').css('display', 'none');
        $('.about').css('display', 'none');

    } else if (id === 'id_aguilas') {
        $('.mountain').css('display', 'none');
        $('.aguilas').css('display', 'grid');
        $('.city').css('display', 'none');
        $('.cat').css('display', 'none');
        $('.about').css('display', 'none');

    } else if (id === 'id_city') {
        $('.mountain').css('display', 'none');
        $('.aguilas').css('display', 'none');
        $('.city').css('display', 'grid');
        $('.cat').css('display', 'none');
        $('.about').css('display', 'none');

    } else if (id === 'id_cat') {
        $('.mountain').css('display', 'none');
        $('.aguilas').css('display', 'none');
        $('.city').css('display', 'none');
        $('.cat').css('display', 'grid');
        $('.about').css('display', 'none');

    } else {
        $('.mountain').css('display', 'none');
        $('.aguilas').css('display', 'none');
        $('.city').css('display', 'none');
        $('.cat').css('display', 'none');
        $('.about').css('display', 'block');
    }
    //Toggle focus style
    $('li').removeClass('selected');
    $(this).addClass('selected');
});