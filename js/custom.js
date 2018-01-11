

/* header */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}





$(function() {
    $('.project-overlay.one').on('click', function() {
        $('.enlargeImageModalSource1').attr('src', $(this).attr('src'));
        $('#enlargeImageModal1').modal('show');
    });
});

$(function() {
    $('.project-overlay.two').on('click', function() {
        $('.enlargeImageModalSource2').attr('src', $(this).attr('src'));
        $('#enlargeImageModal2').modal('show');
    });
});

$(function() {
    $('.project-overlay.three').on('click', function() {
        $('.enlargeImageModalSource3').attr('src', $(this).attr('src'));
        $('#enlargeImageModal3').modal('show');
    });
});

$(function() {
    $('.project-overlay.four').on('click', function() {
        $('.enlargeImageModalSource4').attr('src', $(this).attr('src'));
        $('#enlargeImageModal4').modal('show');
    });
});

$(function() {
    $('.project-overlay.five').on('click', function() {
        $('.enlargeImageModalSource5').attr('src', $(this).attr('src'));
        $('#enlargeImageModal5').modal('show');
    });
});

$(function() {
    $('.project-overlay.six').on('click', function() {
        $('.enlargeImageModalSource6').attr('src', $(this).attr('src'));
        $('#enlargeImageModal6').modal('show');
    });
});

$(function() {
    $('.project-overlay.seven').on('click', function() {
        $('.enlargeImageModalSource7').attr('src', $(this).attr('src'));
        $('#enlargeImageModal7').modal('show');
    });
});

$(function() {
    $('.project-overlay.eight').on('click', function() {
        $('.enlargeImageModalSource8').attr('src', $(this).attr('src'));
        $('#enlargeImageModal8').modal('show');
    });
});
