/*
function tongji(){
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {$('head').append("<script src='https://zz.bdstatic.com/linksubmit/push.js'></script>");}
    else {$('head').append("<script src='http://push.zhanzhang.baidu.com/push.js'></script>");}
}
function youce(){$('.top-rank.book-item').mouseover(function(){$('.top-rank.book-item').removeClass('open');$(this).addClass('open');});}
function mobilemenu(){
    $('.menu').click(function(){
        if($(this).attr('isopen')=='0') {
            $('.nav').addClass('open');
            $(this).attr('isopen','1');
        }
        else{
            $('.nav').removeClass('open');
            $(this).attr('isopen','0');
        }
    });
        $('.nav')[0].onclick =function(){
            if(event.path[0].className=='nav open'){
            $('.nav').removeClass('open');
            $('.menu').attr('isopen','0');
        }};
}

*/


function switshow(num){
    len=$('.luobo li').length;
    num=num%len;
    $('.luobo .active').removeClass('active');
    $('.luobo li:eq('+num+')').addClass('active');
    $('.lbxu span:eq('+num+')').addClass('active');
    if(num==len)num=0;
}


function lunbo(num){if($('.luobo li').length<1)return;tnum=num;setInterval('switshow(tnum);tnum++;if(tnum==3)num=0;',3000);}


function top1(){
    document.body.onmousewheel = function(event) {
        event = event || window.event;
        if(scrollY==0)
            $('#menu-box').removeClass('shadow');
        else
            $('#menu-box').addClass('shadow');
    };
}

/*
function pmmove(num){$('.paomadengson')[0].style.transform='translateX(-'+num+'px)';}
function paomadeng(){
    pmdlen=0;
    $('.paomadengson span').each(function(){pmdlen+=$(this).width();});
    if(pmdlen<100)return;
    pmdnum=0;
    setInterval('pmmove(pmdnum);pmdnum+=1;if(pmdnum>pmdlen)pmdnum=0;',100);
}
function tabinit(){
    $('.tabnameli:eq(0)').addClass('active');
    $('.tabnameli').click(function(){
    $(this).siblings().removeClass('active'); 
    $(this).addClass('active');
    var width=$(this).parent().parent().width();
    var itemsbg=$(this).parent().parent().nextAll('.tabitems').find('.tabitemsbg');
    itemsbg[0].style.margin='0 0 0 '+(-width*$(this).index())+'px';});}
function oneshow(){
    $('.oneshow').each(function(){
        $(this).children().first().addClass('active');
    });
    $('.oneshowitem').hover(function(){$(this).siblings().removeClass('active');$(this).addClass('active');})
}

*/