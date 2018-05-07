// var progressDesign = document.getElementById("progressDesign"),
//     progressWeb = document.getElementById("progressWeb"),
//     progressMarketing = document.getElementById("progressMarketing");
//
//     setTimeout(
//       function(){
//         progressDesign.style.width = "75%";
//         progressDesign.style.backgroundColor = "#10c9c3";
//         progressWeb.style.width = "90%";
//         progressWeb.style.backgroundColor = "#10c9c3";
//         progressMarketing.style.width = "65%";
//         progressMarketing.style.backgroundColor = "#10c9c3";
//       }
//     ,10);
//
//




$(window).scroll(function(){
  const $skillSection = $('.skills');
  const $skillOffset = $skillSection.offset().top;

  if($(this).scrollTop()>=$skillOffset){
    $(function(){
      var progressDesign = document.getElementById("progressDesign"),
          progressWeb = document.getElementById("progressWeb"),
          progressMarketing = document.getElementById("progressMarketing");

          progressDesign.style.width = "75%";
          progressDesign.style.backgroundColor = "#10c9c3";
          progressWeb.style.width = "90%";
          progressWeb.style.backgroundColor = "#10c9c3";
          progressMarketing.style.width = "65%";
          progressMarketing.style.backgroundColor = "#10c9c3";
    });
    }
});
