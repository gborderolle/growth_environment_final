$(function () {
    $('div.conversion_goal').bind('click', function (e) {
        if (e.button == 0) {
            $(this).parent().parent().attr("target", "_blank");
            $(this).parent().parent().submit();
        }
    });
});