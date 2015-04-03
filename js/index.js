$(document).ready(function() {
  $('#tictactoe-info, #college-info, #geomancy-info, #ortho-la-info').hide();

  $('#tictactoe').click(function() {
    if ( $("#tictactoe-info").is( ":hidden" ) ) {
      $('#tictactoe-info').slideDown("slow");
      $('#tictactoe').attr('src', 'img/tictactoe.png');
      $('#tictactoe').addClass('project-img-hover');
    } else {
      $('#tictactoe-info').slideUp("slow");
      $('#tictactoe').attr('src', 'img/tictactoeBW.png');
      $('#tictactoe').removeClass('project-img-hover');
    }
  })

  $('#college').click(function() {
    if ( $("#college-info").is( ":hidden" ) ) {
      $('#college-info').slideDown("slow");
      $('#college').attr('src', 'img/college.png');
      $('#college').addClass('project-img-hover');
     } else {
      $('#college-info').slideUp("slow");
      $('#college').attr('src', 'img/collegeBW.png');
      $('#college').removeClass('project-img-hover');
     }
  })

  $('#geomancy').click(function() {
    if ( $("#geomancy-info").is( ":hidden" ) ) {
      $('#geomancy-info').slideDown("slow");
      $('#geomancy').attr('src', 'img/geomancy.png');
      $('#geomancy').addClass('project-img-hover');
     } else {
      $('#geomancy-info').slideUp("slow");
      $('#geomancy').attr('src', 'img/geomancyBW.png');
      $('#geomancy').removeClass('project-img-hover');
     }
  })

  $('#ortho-la').click(function() {
    if ( $("#ortho-la-info").is( ":hidden" ) ) {
      $('#ortho-la-info').slideDown("slow");
      $('#ortho-la').attr('src', 'img/ortho-la.png');
      $('#ortho-la').addClass('project-img-hover');
     } else {
      $('#ortho-la-info').slideUp("slow");
      $('#ortho-la').attr('src', 'img/ortho-laBW.png');
      $('#ortho-la').removeClass('project-img-hover');
     }
  })

  // $('#proj').click(function() {
  //   $('.links').removeClass('active');
  //   $(this).addClass('active');
  // })

  // $('#ab').click(function() {
  //   $('.links').removeClass('active');
  //   $(this).addClass('active');
  // })

  // $('#con').click(function() {
  //   $('.links').removeClass('active');
  //   $(this).addClass('active');
  // })

});