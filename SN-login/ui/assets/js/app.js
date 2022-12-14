/* 
*Author: Soon
*Description: SN-Login Loadscreen
*Version: 1.0
*Github: https://github.com/Soonnova
*Discord: https://discord.gg/Z85GmkV8E3
*/

window.addEventListener('DOMContentLoaded', () => {
    console.log(`You are connecting to ${window.nuiHandoverData.serverAddress}`);
    $(".steamid").html(" "+window.nuiHandoverData.name);
});

// UM-General Settings //
if (UMLoadingScreen.AutoSnow) {
    $('#snow').show()
} else {
    $('#snow').hide()
}
  $('#stage').hide()
  var pointer = $('#cursor');
  $(document).on('mousemove', function (event) {
    pointer.css({
      top: event.pageY + 'px',
      left: event.pageX + 'px'
    });
  });
  
$.get(UMLoadingScreen.GithubRawUrl, function (data){$(".updatesinfo p").html(data);})
    $('body').css("background-image", "url(assets/img/bg/"+UMLoadingScreen.BackgroundImage+")");
    $(".background").css('background',UMLoadingScreen.TemplateColorHex);
    $(".logo img").attr("src","assets/img/"+UMLoadingScreen.Logo);
    $("audio").attr("src","assets/audio/"+UMLoadingScreen.Music);
    // UM-Lang Settings //
    $("span.welcometext").html(UMLoadingScreen.Text1);
    $("span.newuptext").html(UMLoadingScreen.Text2);
    $("h2.servernameh2").html(UMLoadingScreen.ServerName);
    $("p.copyright").html(UMLoadingScreen.Text3);

    // UM-Icon Settings //
    var myAudio = document.getElementById("music");    
    myAudio.volume = UMLoadingScreen.MusicVolume;
    var play = false
    var logo = false
    $(".fa-volume-up").click(function(){
        if (play) {
            $("#volumeup i").attr("class","fas fa-volume-mute background");
            myAudio.pause();
            play = false;
        } else {
            $("#volumeup i").attr("class","fas fa-volume-up background");
            myAudio.play();
            play = true;
        }
    });
    $(".fa-gamepad").click(function(){
        $("#stage").toggle("slow");
        if (logo == false) {
            $('.logo').hide();
            logo = true
        } else {
            $('.logo').show();
            logo = false
        }
    });
    $(".fa-snowflake").click(function(){
        $("#snow").toggle();
    });

    function RandomBackground() {
        var images  = UMLoadingScreen.RandomBackgroundImg
        var randomImage  = Math.floor((Math.random() * images.length) );
        $("body").css("background-image", "url('assets/img/bg/" + images[randomImage] + "')");
        }

    if (UMLoadingScreen.RandomBackground) {
    setInterval(RandomBackground, 3 * 1000);
    }
