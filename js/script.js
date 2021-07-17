var $o_top = $('.social_head').offset().top;
var $p_top_one = $('.social_head').position().top;
var $offset_page = $('.page').offset().top;


$(window).scroll(function () {
  var $scroll_top = $(this).scrollTop();

  if ($scroll_top > ($o_top - 50)) {
    var $p_top = $('.social_head').position().top;
    var $top = $scroll_top - $offset_page + 50;
    if ($top >= $p_top_one) {
      $('.social_head').css('top', $top);
    }
  } else {
    $('.social_head').css('top', $p_top_one);
  }
});

//scroll
(function ($) {
  $(window).on('load', function () {
    $('.recipes_scrollBar, .carta-recipes_scrollBar, .recept_scrollNew').mCustomScrollbar({
      axis: 'x',
      theme: "dark",
    });
  });
})(jQuery);


//chearh

const chearch_click = document.querySelector('.chearch_click');
const header_chearchInner = document.querySelector('.header_chearch-inner');

chearch_click.addEventListener('click', () => {
  header_chearchInner.classList.add('open');
});



header_chearchInner.addEventListener('click', (event) => {
  if (!event.target.closest('.headerTxt')) {
    header_chearchInner.classList.remove('open');
  }
});


//табы
const tabs_item = document.querySelectorAll('.tabs_item');
const tabs_content = document.querySelector('.tabs_content');
const tabs = document.querySelector('.tabs');
const body = document.querySelector('.body');



for (let i = 0; i < tabs_item.length; i++) {
  tabs_item[i].addEventListener('click', function () {
    tabs.querySelector('.active').classList.remove('active');
    tabs.querySelector('.active1').classList.remove('active1');
    tabs.querySelectorAll('.tabs_item')[i].classList.add('active');
    tabs.querySelectorAll('.tabs_item-border')[i].classList.add('active1');

    if (body.clientWidth <= 588) {
      tabs.querySelector('.active2').classList.remove('active2');
      tabs.querySelectorAll('.tabs_content-item')[i].classList.add('active2');
    } else {
      tabs_content.querySelector('.active').classList.remove('active');
      tabs_content.querySelectorAll('.tabs_content-item')[i].classList.add('active');
    }
  })
}





//табы1
const mouse_tabsItems = document.querySelectorAll('.mouse_tabs-items');
const mouse_tabsContent = document.querySelector('.mouse_tabs-content');
const mouse_tabs = document.querySelector('.mouse_tabs');

for (let i = 0; i < mouse_tabsItems.length; i++) {
  mouse_tabsItems[i].addEventListener('click', function () {
    mouse_tabs.querySelector('.active').classList.remove('active');
    mouse_tabs.querySelectorAll('.mouse_tabs-items')[i].classList.add('active');

    mouse_tabsContent.querySelector('.active').classList.remove('active');
    mouse_tabsContent.querySelectorAll('.mouse_tabs-contentItems')[i].classList.add('active');
  })
}







const carta_redko = document.querySelector('.carta_redko');


if (carta_redko) {
  carta_redko.addEventListener('click', () => {
    carta_redko.classList.toggle('open');
  });
} else {
  console.log('false')
}






const carta_textImages = document.querySelector('.carta_text-images');
const tabs_contentItemJS = document.querySelector('.tabs_content-itemJS');


if (carta_textImages) {
  carta_textImages.addEventListener('click', () => {
    if (body.clientWidth <= 588) {
      tabs.querySelector('.active2').classList.remove('active2');
      tabs.querySelector('.tabs_content-itemJS').classList.add('active2');
    } else {
      tabs_content.querySelector('.active').classList.remove('active');
      tabs_content.querySelector('.tabs_content-itemJS').classList.add('active');
    }

    tabs.querySelector('.active').classList.remove('active');
    tabs.querySelector('.active1').classList.remove('active1');
    tabs.querySelector('.tabs_item-js').classList.add('active');
    tabs.querySelector('.tabs_item-borderJs').classList.add('active1');
  });
} else {
  console.log('false');
}






//Избранное

const carta_boxInnerRedko = document.querySelectorAll('.carta_box-innerRedko');


for (let i = 0; i < carta_boxInnerRedko.length; i++) {
  carta_boxInnerRedko[i].addEventListener('click', () => {
    carta_boxInnerRedko[i].classList.toggle('open');
  })
}


//Купить

const carta_boxInnerBtn = document.querySelectorAll('.carta_box-innerBtn');
const price1 = document.querySelectorAll('.price1');
const carta_boxInnerImg = document.querySelectorAll('.carta_box-innerImg');
const tovar__notice = document.querySelectorAll('.tovar__notice');




const carta_btn = document.querySelector('.carta_btn');
const price = document.querySelector('.price');
const Brazzers_imgWrapper = document.querySelectorAll('.Brazzers_img-wrapper');
const carta_blockImagesNew = document.querySelector('.carta_block-imagesNew');
const tovar__notice1 = document.querySelector('.tovar__notice1');
const carta_skidka = document.querySelector('.carta_skidka');



if (carta_btn) {
  carta_btn.addEventListener('click', (event) => {
    event.preventDefault(carta_btn);
    carta_btn.style.display = 'none';
    price.classList.add('open');
    carta_blockImagesNew.classList.add('open');

    Brazzers_imgWrapper[0].classList.add('open');
    Brazzers_imgWrapper[1].classList.add('open');
    Brazzers_imgWrapper[2].classList.add('open');

    tovar__notice1.classList.add('open');
  });
} else {
  console.log('false');
}





for (let i = 0; i < carta_boxInnerBtn.length; i++) {
  carta_boxInnerBtn[i].addEventListener('click', (event) => {
    event.preventDefault(carta_boxInnerBtn);
    carta_boxInnerBtn[i].style.display = 'none';
    price1[i].classList.toggle('open');

    carta_boxInnerImg[i].classList.add('open');

    tovar__notice[i].classList.add('open');
    carta_skidka.style.display = 'none';
  })
}


//Увелечение значения1
const price__plus1 = document.querySelectorAll('.price__plus1');
const price__amount1 = document.querySelectorAll('.price__amount1');
const price__minus1 = document.querySelectorAll('.price__minus1');



const price__plus = document.querySelector('.price__plus');
const price__amount = document.querySelector('.price__amount');
const price__minus = document.querySelector('.price__minus');


for (let i = 0; i < price__plus1.length; i++) {
  price__plus1[i].addEventListener('click', () => {
    price__amount1[i].innerHTML++;
  });
}

if (price__plus) {
  price__plus.addEventListener('click', () => {
    price__amount.innerHTML++;
  });
}



for (let i = 0; i < price__minus1.length; i++) {
  price__minus1[i].addEventListener('click', () => {
    if (price__amount1[i].innerHTML > 1) {
      price__amount1[i].innerHTML--;
    } else {
      carta_boxInnerBtn[i].style.display = 'flex';
      price1[i].classList.remove('open');
      carta_boxInnerImg[i].classList.remove('open');
      tovar__notice[i].classList.remove('open');
      carta_skidka.style.display = 'block';
    }
  });

}

if (price__minus) {
  price__minus.addEventListener('click', () => {
    if (price__amount.innerHTML > 1) {
      price__amount.innerHTML--;
    } else {
      carta_btn.style.display = 'flex';
      price.classList.remove('open');
      carta_blockImagesNew.classList.remove('open');

      Brazzers_imgWrapper[0].classList.remove('open');
      Brazzers_imgWrapper[1].classList.remove('open');
      Brazzers_imgWrapper[2].classList.remove('open');

      tovar__notice1.classList.remove('open');
    }
  });
}






//Оставить отзыв 

const tabs_contentBtn = document.querySelectorAll('.tabs_content-btn');
const tabs_contentReviews = document.querySelectorAll('.tabs_content-Reviews');



for (let i = 0; i < tabs_contentBtn.length; i++) {
  tabs_contentBtn[i].addEventListener('click', (event) => {
    event.preventDefault(tabs_contentBtn[i]);
    tabs_contentReviews[i].classList.toggle('open');
  });
}



//поменять фон при клике у кнопок

const mouse_btn = document.querySelectorAll('.mouse_btn');


for (let i = 0; i < mouse_btn.length; i++) {
  mouse_btn[i].addEventListener('click', (event) => {
    
    mouse_btn[i].classList.toggle('open');
  });
}
