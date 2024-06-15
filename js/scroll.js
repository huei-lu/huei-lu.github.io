$(function () {
    $(window).scroll(function () {
        var B = $(window).scrollTop();

        if (B > 70) {
            // $('.small').css({ 'maxHeight': 100 });
            $('.logo').animate({ 'width': 40 }, 500);
        } else {
            // $('.small').stop(true, false);
            $('.logo').removeAttr('style');
            // $('.logo').animate({ 'width': 60 }, 500);
        }

        // 捲軸滑到dropdown後和topbar融為一體
        if (B > 620) {
            $('#topbar1').hide();
            $('#topbar2').animate({ 'top': 0, 'opacity': 1 }, 500)
        } else {
            $('#topbar1').show();
            $('#topbar2').removeAttr('style');
        }
    })
})