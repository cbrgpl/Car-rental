let car_details = {
    1: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    2: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    3: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    4: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    5: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    6: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    7: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
    8: {
        'name': 'Volkswagen Polo MT',
        'img1': '1.jpg',
        'img2': '1.jpg',
        'img3': '1.jpg',
        'Коробка передач': 'МКПП',
        'Кондиционер': 'Нет',
        'Стаж водителя': 'мин 3 года',
        'Возраст водителя': 'мин 23 года',
    },
};

$(document).ready(function () {
    $('.features__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 1000,
        adaptiveHeight: true,
        touchMove: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                    prevArrow: false,
                    nextArrow: false,
                    adaptiveHeight: false,
                }

            }
        ]
    });
    $('#tel').mask('+7 (999) 999-99-99', {placeholder: "+7 (___) ___-__-__"});
    $('#application-tel').mask('+7 (999) 999-99-99', {placeholder: "+7 (___) ___-__-__"});
    $('#call-tel').mask('+7 (999) 999-99-99', {placeholder: "+7 (___) ___-__-__"});
});


let CarWindow = document.createElement('div');
CarWindow.className = 'car-detail';
CarWindow.innerHTML = '<div class="car-detail__title">\n' +
    '                        <div class="car-detail__name">Hyundai Solaris MT Promo</div>\n' +
    '                        <div class="car-detail__close animation" onclick="CarDetailClosing()"></div>\n' +
    '                    </div>\n' +
    '                    <div class="car-detail__img">\n' +
    '                        <div class="slider-list">\n' +
    '                            <div class="slide slide-number-1">\n' +
    '                                <img src="" alt="">\n' +
    '                            </div>\n' +
    '                            <div class="slide slide-number-2"><img src="" alt=""></div>\n' +
    '                            <div class="slide slide-number-3"><img src="" alt=""></div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="car-detail__info">\n' +
    '                        <div class="car-detail__info-title">Характеристики</div>\n' +
    '                        <div class="car-detail__gears">\n' +
    '                            <div class="car-detail__gear-item">Коробка передач<strong class="Box">МКПП</strong></div>\n' +
    '                            <div class="car-detail__gear-item">Кондиционер<strong class="Candek">Есть</strong></div>\n' +
    '                            <div class="car-detail__gear-item">Стаж водителя<strong class="Driver-staj">мин 3\n' +
    '                                года</strong>\n' +
    '                            </div>\n' +
    '                            <div class="car-detail__gear-item">Возраст водителя<strong class="Driver-years">мин 23\n' +
    '                                года</strong></div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="bg-blue">\n' +
    '                            <div class="car-detail__prices">\n' +
    '                                <div class="car-detail__price">1-3 дня<strong>1400 руб.</strong></div>\n' +
    '                                <div class="car-detail__price">от 15 дней<strong>1050 руб.</strong></div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div class="btn car-detail__btn" onclick="ApplicationDisplaying(this)">Оставить заявку</div>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>';

// 17px
// Yes, english is my second language. Englishing all words!!!
function CarDetailingFullVersion(btn) {

    if (document.querySelector('.car-detail'))
        $('.slider-list').slick('unslick');


    btn.closest('.cars-line').append(CarWindow);

    let slide1 = document.querySelector('.slide-number-1'),
        slide2 = document.querySelector('.slide-number-2'),
        slide3 = document.querySelector('.slide-number-3'),
        title = document.querySelector('.car-detail__name'),

        box = document.querySelector('.Box'),
        candek = document.querySelector('.Candek'), // Конденционер
        driver_staj = document.querySelector('.Driver-staj'), // Cтаж вождения
        driver_years = document.querySelector('.Driver-years');



    let number = btn.closest('.car-item').id, // Gets the number of car
        data = car_details[number]; // Gets the object with car's data

    slide1.style.backgroundImage = `url(../img/carSlider/${data['img1']})`;
    slide2.style.backgroundImage = `url(../img/carSlider/${data['img2']})`;
    slide3.style.backgroundImage = `url(../img/carSlider/${data['img3']})`;


    $('.slider-list').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1000,
        infinite: true,
    }); 

    // Changes car's info
    title.innerHTML = data['name'];
    box.innerHTML = data['Коробка передач'];
    candek.innerHTML = data['Кондиционер'];
    driver_staj.innerHTML = data['Стаж водителя'];
    driver_years.innerHTML = data['Возраст водителя'];


    document.querySelector('.car-detail').style.display = 'flex';

    setTimeout(function () {
        document.querySelector('.car-detail').classList.remove('car-detail-blur');
    }, 1000);

    setTimeout(function () {
        document.querySelector('.car-detail').classList.remove('car-detail-closing-animation');
    }, 100)


}

function CarDetailingMiniVersion(btn) {
    if (getComputedStyle(btn.closest('.car-item').querySelector('.tarifs__menu')).height == '1px')
        btn.closest('.car-item').querySelector('.tarifs__menu').classList.add('tarifs__menu--active');
    else btn.closest('.car-item').querySelector('.tarifs__menu').classList.remove('tarifs__menu--active');

}


// Function to close car detail
function CarDetailClosing() {
    document.querySelector('.car-detail').style.display = 'none';
}

function close() {
    document.querySelector('.select').style.display = 'none'
}

function OnStart() {
    let items = document.querySelectorAll('.value'),
        carSection = document.querySelector('.select'),
        section = document.querySelector('.request__select-current');

    section.addEventListener('click', () => {
        if (section.innerHTML == 'Выберите автомобиль')
            section.innerHTML = 'Автомобиль';
        carSection.style.display = 'block'
    });


    for (let i = 1; i < items.length; ++i) {
        items[i].addEventListener('click', (e) => {
            e.stopPropagation();
            carSection.style.display = 'none';
            section.classList.add('selected');
            section.innerHTML = items[i].innerHTML;
        })
    }

}

OnStart();

function HeaderPhoneMenu(btn) {
    if (document.querySelector('.header__tel-menu').style.display == 'none') {
        btn.style.background = "#376ab9";
        document.querySelector('.header__tel-menu').style.display = 'flex';
    } else {
        btn.style.background = "#4277ca";
        document.querySelector('.header__tel-menu').style.display = 'none';
    }
}

let header_buttons = document.querySelectorAll('.header__btn');

for (let i = 0; i < 2; ++i) {
    header_buttons[i].addEventListener('click', function (e) {
        document.querySelector('.call-popup').style.display = 'block';
    })
}