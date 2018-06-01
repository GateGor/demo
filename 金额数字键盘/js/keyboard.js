$(function () {
    //数字键盘
    $('#num>li').not('#bord').not('#point').on('touchstart',function () {
        var money = $('#money').html();
        var length = money.length;
        //有小数点
        if (money.indexOf('.') >= 0) {
            var pos = money.indexOf('.');
            //小数点开头
            if (money.indexOf('.') == 0){
                $('#money').prepend('0');
            }
            //限制到分位
            if (length >= parseInt(pos) + 3) {
                return;
            }
        }else{
        //限制少于一万,或者零开头
            if (length >= 5 || (length == 1 && money == 0)) return;
        }
        
        var currNum = $(this).children().html(); 
        $('#money').append(currNum);
        realPay()
    })

    //小数点
    $('#point').on('touchstart',function () {
        var money = $('#money').html();
        var length = money.length;
        if (money.indexOf('.') >= 0){
            return;
        }else{
            $('#money').append('.');
        }
        realPay()
    })

    //删除键
    $('#delete').on('touchstart',function () {
        var money = $('#money').html();
        var length = money.length;
          if(money.length <= 0) return;
        $('#money').html(money.substring(0, money.length - 1));
        realPay()
    })

    //确认支付
    $('#submitBtn').on('touchstart',function () {
        if ($('#real_pay_money').html() > 0){
            alert('支付金额:' + $('#real_pay_money').html())
        }
    })

    //实付金额
    function realPay() {
        var money = $('#money').html();
        if(money == '.'){
            Number($('#real_pay_money').html(0)).toFixed(2);
            return;
        };
        if(money.charAt(money.length-1) == '.'){
            $('#real_pay_money').html(Number(money.substring(0, money.length - 1)).toFixed(2))
            return;
        };
        $('#real_pay_money').html(Number(money).toFixed(2))
        //按钮样式
        $('#real_pay_money').html() > 0 ? $('#submitBtn').css('background-color', '#f48300') : $('#submitBtn').css('background-color', '#bcbcbc');
        console.log('color');
        
    }
})