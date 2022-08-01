import $ from 'jquery';

const for_Hv = document.querySelectorAll('#for-Hv');
const side_1 = document.getElementById('left-side');
const side_2 = document.getElementById('right-side');
var nom = 0;
const g_nums_l = {
  a_nom: 0,
  b_nom: 0,
};
function get_pos(num_1, num_2) {
  let a_width = parseFloat(num_1);
  $.extend(g_nums_l, {
    a_nom: 100 - (num_2 - window.innerWidth / 10) / (a_width / 100),
    b_num: (g_nums_l.a_nom * 2 - 50) * 3,
  });
}

function link_focus(num) {
  if (num > 200) {
    $('#right-side a').css('color', '#fff');
  } else if (num < 70) {
    $('#left-side a').css('color', '#fff');
  } else {
    $('.side a').css('color', 'var(--background)');
  }
}
function link_click(num) {
  if (num > 200) {
    document.querySelector('#solar-link-container a').click();
  } else if (num < 70) {
    document.querySelector('#galactic-link-container a').click();
  } else {
    alert('a little bit to the right');
  }
}
function from_st() {
  $('.side-container').css('background-position', 'center -200%');
  var timerOut = setTimeout(function () {
    $('.side_container').css('background', 'unset');
    $('.side_container').css('background-size', 'cover');
    $('.side_container a').css('color', 'var(--main-color)');
    window.clearTimeout(timerOut);
  }, 500);
}
function to_st(con) {
  if (!con) {
    from_st();
    nom = 0;
  } else {
    if (!nom == 0) {
      console.log('another time!. ');
    } else {
      $('.side_container').css(
        'background',
        'linear-gradient(0deg,transparent,var(--main-color),transparent)'
      );
      $('.side_container').css('background-size', '100% 60%');
      $('.side_container').css('background-repeat', 'no-repeat');
      nom++;
    }
  }
}

for_Hv.forEach((h1s) => {
  h1s.addEventListener('mousemove', function (e) {
    console.log('hoverred');
    get_pos(getComputedStyle(this.parentNode).width, e.pageX);
    link_focus(g_nums_l.b_nom);
    $(this).css('background-position', `${g_nums_l.a_nom}% center`);
    $(side_1).css('background-position', `center ${g_nums_l.b_nom}%`);
    $(side_2).css('background-position', `center ${300 - g_nums_l.b_nom}%`);
    to_st(true);
    console.log(g_nums_l);
  });
  h1s.addEventListener('mouseout', () => {
    to_st(false);
  });
  h1s.addEventListener('click', () => {
    link_click(g_nums_l.b_nom);
  });
});
