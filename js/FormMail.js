let car = document.querySelector('.request__select-current'),
    name = document.querySelector('#name'),
    tel = document.querySelector('#tel'),
    request = document.querySelector('.request');

function CheckFields() {

    document.querySelector('.request__select').style.border = 'none';
    name.style.border = 'none';
    tel.style.border = 'none';

    if (car.innerHTML == 'Выберите автомобиль')
        document.querySelector('.request__select').style.border = '2px solid red';


    if (name.value == '')
        name.style.border = '2px solid red';


    if (tel.value.length != 18)
        tel.style.border = '2px solid red';


    if (tel.style.borderColor == 'red' || name.style.borderColor == 'red' ||
        document.querySelector('.request__select').style.borderColor == 'red')
        return false

    return true
}

// function ApplicationFullScreen(btn) {
//
//     ApplicationBtn.removeAttribute("disabled");
//     ApplicationTel.removeAttribute("disabled");
//     ApplicationName.removeAttribute("disabled");
//     ApplicationWindow.querySelector('.success').style.display = 'none';
//
//
//     let currentCar = btn.closest('.car-item');
//     ApplicationModelName.innerHTML = currentCar.querySelector('.car-model').innerHTML;
//     ApplicationWindow.style.display = 'block';
//     setTimeout(function () {
//         ApplicationWindow.querySelector('.application-window').style.transform = 'translate(-50%, -50%) scale(1)';
//     }, 50)
// }

let RequestBtn = document.getElementById('request-btn');
RequestBtn.addEventListener('click', function (e) {
    if (CheckFields()) {
        $.ajax({
            url: '/ajax/mail.php',
            type: 'POST',
            cache: false,
            data: {
                'car': car.innerHTML,
                'name': name.value,
                'tel': tel.value
            },
            dataType: 'html',
            success: function (data) {
                RequestBtn.setAttribute("disabled", "disabled");
                document.getElementById('request-form').querySelector('.success').style.display = 'block';
            }
        });
    }


});

let ApplicationWindow = document.querySelector('.application-popup'),
    ApplicationModelName = document.querySelector('.application__model'),
    ApplicationName = document.getElementById('application-name'),
    ApplicationTel = document.getElementById('application-tel'),
    ApplicationBtn = document.querySelector('.application__btn');

function ApplicationDisplaying(btn) {

    ApplicationBtn.removeAttribute("disabled");
    ApplicationTel.removeAttribute("disabled");
    ApplicationName.removeAttribute("disabled");
    ApplicationWindow.querySelector('.success').style.display = 'none';


    let currentCar = btn.closest('.car-item');

    if (btn.classList.contains('car-detail__btn'))
        ApplicationModelName.innerHTML = document.querySelector('.car-detail__name').innerHTML;
    else
        ApplicationModelName.innerHTML = currentCar.querySelector('.car-model').innerHTML;
    ApplicationWindow.style.display = 'block';
    setTimeout(function () {
        ApplicationWindow.querySelector('.application-window').style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50)
}

function ApplicationFieldsCheck() {
    ApplicationName.style.border = 'none';
    ApplicationTel.style.border = 'none';

    if (ApplicationName.value == '')
        ApplicationName.style.border = '2px solid red';


    if (ApplicationTel.value.length != 18)
        ApplicationTel.style.border = '2px solid red';


    if (ApplicationTel.style.borderColor == 'red' || ApplicationName.style.borderColor == 'red')
        return false

    return true
}

function ApplicationSending(btn) {
    let name = ApplicationName.value,
        tel = ApplicationTel.value,
        car = ApplicationModelName.innerHTML;

    if (ApplicationFieldsCheck())
        $.ajax({
            url: '/ajax/mail.php',
            type: 'POST',
            cache: false,
            data: {
                'car': car,
                'name': name,
                'tel': tel
            },
            dataType: 'html',
            success: function (data) {
                console.log(true);
                ApplicationBtn.setAttribute("disabled", "disabled");
                ApplicationTel.setAttribute("disabled", "disabled");
                ApplicationName.setAttribute("disabled", "disabled");
                ApplicationWindow.querySelector('.success').style.display = 'block';
            }
        });

}

ApplicationWindow.addEventListener('click', function (e) {
    ApplicationWindow.style.display = 'none';
    ApplicationWindow.querySelector('.application-window').style.transform = 'translate(-50%, -50%) scale(0.4)';
}, false);

ApplicationWindow.querySelector('.application-window').addEventListener('click', function (e) {
    e.stopPropagation();
}, false);

let CallWindow = document.querySelector('.call-popup'),
    CallName = document.getElementById('call-name'),
    CallTel = document.getElementById('call-tel'),
    CallBtn = CallWindow.querySelector('.call__btn');

function CallFieldsCheck() {
    CallName.style.border = 'none';
    CallTel.style.border = 'none';

    if (CallName.value == '')
        CallName.style.border = '2px solid red';


    if (CallTel.value.length != 18)
        CallTel.style.border = '2px solid red';


    if (CallTel.style.borderColor == 'red' || CallName.style.borderColor == 'red')
        return false

    return true
}

function CallSending() {
    let name = CallName.value,
        tel = CallTel.value;

    if (CallFieldsCheck())
        $.ajax({
            url: '/ajax/RecallMail.php',
            type: 'POST',
            cache: false,
            data: {
                'name': name,
                'tel': tel
            },
            dataType: 'html',
            success: function (data) {
                CallBtn.setAttribute("disabled", "disabled");
                CallTel.setAttribute("disabled", "disabled");
                CallName.setAttribute("disabled", "disabled");
                CallWindow.querySelector('.success').style.display = 'block';
            }
        });

}

CallWindow.addEventListener('click', function (e) {
    CallWindow.style.display = 'none';
}, false);

CallWindow.querySelector('.call-window').addEventListener('click', function (e) {
    e.stopPropagation();
}, false);

