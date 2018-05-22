$(function () {
    //数字键盘
    $('#num>li').not('#bord').not('#point').on('tap',function () {
        var length = $('#money')[0].innerHTML.length
        //有小数点
        if ($('#money')[0].innerHTML.indexOf('.') >= 0) {
            var pos = $('#money')[0].innerHTML.indexOf('.');
            //小数点开头
            if ($('#money')[0].innerHTML.indexOf('.') == 0){
                $('#money').prepend('0');
            }
            //限制到分位
            if (length >= parseInt(pos) + 3) {
                return;
            }
        }else{
        //限制少于一万
            if(length >= 5) return;
        }
        
        var currNum = $(this).children().html(); 
        $('#money').append(currNum);
    })

    //小数点
    $('#point').on('tap',function () {
        if ($('#money')[0].innerHTML.indexOf('.') >= 0){
            return;
        }else{
            $('#money').append('.');
        }
    })

})