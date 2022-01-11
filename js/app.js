$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
function deposit(){
    document.getElementById('withdraw').classList.remove("ui-tabs-active");
    document.getElementById('withdraw').classList.remove("ui-state-active")

    document.getElementById('deposit').classList.add('ui-tabs-active');
    document.getElementById('deposit').classList.add('ui-state-active');
    
    document.getElementById('tabs-1').setAttribute("aria-hidden", "false");
    document.getElementById('tabs-1').style.display = 'block';
    
    document.getElementById('tabs-2').setAttribute("aria-hidden", "true");
    document.getElementById('tabs-2').style.display = 'none';
}
function withdraw(){        
    document.getElementById('withdraw').classList.add("ui-tabs-active");
    document.getElementById('withdraw').classList.add("ui-state-active")

    document.getElementById('deposit').classList.remove('ui-tabs-active');
    document.getElementById('deposit').classList.remove('ui-state-active');

    document.getElementById('tabs-1').setAttribute("aria-hidden", "true");
    document.getElementById('tabs-1').style.display = 'none';

    document.getElementById('tabs-2').setAttribute("aria-hidden", "false");
    document.getElementById('tabs-2').style.display = 'block';
}
$('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    variableWidth: true,
    lazyLoad: 'ondemand'
});
function getAuditReport() {
    const link1 = 'download/Audit_Report_Globalmoney_2021219_Solidified.pdf';
    const link2 = 'download/Audit_Report_Globalmoney_2021228_RD-auditors.pdf';
    window.open(link1, '_blank').focus();
    window.open(link2, '_blank').focus();
}
function slicknavmenu() {
    document.querySelector('.slicknav_btn').classList.remove("slicknav_collapsed");;
    document.querySelector('.slicknav_btn').classList.add("slicknav_open");
    document.querySelector('.slicknav_btn').setAttribute("onclick", "slicknavmenuClose()");

    document.querySelector('.slicknav_nav').setAttribute("aria-hidden", "false");
    document.querySelector('.slicknav_nav').style.display = 'block';

}

function slicknavmenuClose() { 
    document.querySelector('.slicknav_btn').classList.remove("slicknav_open");
    document.querySelector('.slicknav_btn').classList.add("slicknav_collapsed");;
    document.querySelector('.slicknav_btn').setAttribute("onclick", "slicknavmenu()");

    document.querySelector('.slicknav_nav').setAttribute("aria-hidden", "true");
    document.querySelector('.slicknav_nav').style.display = 'none';
}
function changeCoin() {
    var value_select = document.querySelector("select[name=select]").value;
    var data = document.querySelectorAll('.symbol');
    var money = 'USDT';
    switch (value_select) {
        case '2':
            console.log('masuk sini')
            money = 'USDC';
            break;
        case '3':
            money = 'BUSD';
            break;
        default:
        money = 'USDT';
            break;
    }
    data.forEach(e => {
        e.innerHTML  = money;
    });
}
function changeAmount() { 
    var amount = document.querySelector("input[name=amount]").value;

    var interest = parseInt(amount) * 30 / 100;
    document.querySelector('.amount-interest').innerHTML = interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('.amount-interest-mobile').innerHTML = interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('.amount-total').innerHTML = (parseInt(amount) + interest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.querySelector('.amount-total-mobile').innerHTML = (parseInt(amount) + interest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }