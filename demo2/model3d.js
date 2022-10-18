/* global $ */
const furnite = {
    'width': 500,
    'height': 516,
    'depth': 300,
    'boardThickness': 18,
    'regiments': 3,
    'regimentsMarginFront': 20,
    'regimentsPaddingFront': 0,
};
let camera = {};

const gID = (id) => document.getElementById(id);
const gCN = (className) => document.getElementsByClassName(className);
const setObserver = (data, key, id) => {
    const el = gID(id);
    el.value = data[key];
    setInterval(observer, 1000, data, key, el);
};

const observer = (data, key, el) => {
    const val = parseInt(el.value);
    if (data[key] !== val) {
        data[key] = val;
        przeliczModel();
    }
};

function przeliczModel() {
    boki();
    new_element_size($('#mebel, #formatka-plecy, #formatka-front-L, #formatka-front-P'), furnite.width, furnite.height);
//    new_element_size($('#formatka-bok-l,#formatka-bok-p'), furnite.depth, furnite.height);
//    new_element_size($('#formatka-wieniec-dolny,#formatka-wieniec-gorny'), furnite.width, furnite.depth-20);

    polki();
    wieniec();
    mouse();
    door();
}

$(function () {
    camera = {
        'el': $('#view_model'),
        'actiwe': false,

        "modelX": -20,
        "modelY": -20,
        'crx': 0,
        'cry': 0,
        'crz': 0,
        "startX": 0,
        "startY": 0,
        'cz': 0,
        data: function (a, b) {
            console.log('carma: ' + a, b, this[a]);
            if (typeof b !== 'undefined') {
                this[a] = b;
            }
            return this[a];
        }
    };

    $("button,td").click(function (a) {
        camera_(this);
    });

    $("input[type=radio][name=drzwi1]").click(function () {
        return;
        var value = $(this).attr('data');
        console.log(value);
        switch (value) {
            case '0':
                $('.f_front .front').css('display', 'none');
                break;
            case '1':
                $('.f_front .front.one').css({
                    'display': 'block',
                    'width': '800px'
                });
                $('.f_front .front.two').css('display', 'none');
                break;
            case '2':
                $('.f_front .front.one').css({
                    'display': 'block',
                    'width': (furnite.width / 2) + 'px'
                });
                $('.f_front .front.two').css({
                    'display': 'block',
                    'right': '-' + (furnite.width / 2) + 'px'
                });
                break;
        }
    });
    $('.formatka.front').click(function () {
        console.log($(this), $(this).attr('data-open'));

        if ($(this).attr('data-open') === 'true') {
            $(this).attr('data-open', 'false')
        } else {
            $(this).attr('data-open', 'true')
        }
    });
    $('input').bind("click", function (e) {

        switch ($(this).attr('id')) {
            case 'plecy':
                $('#formatka-plecy').toggle();
                break;
            case 'optionPolki':
                $('#optionPolkiSzt').toggle();
                $('#grupa-polka').toggle();
            case 'optionPolkiSzt':
                generatorPolek();
                break;
            case 'optionDrzwi':
                $('#grupa-drzwi').show();
                $('#drzwi_op').toggle();
            //			$('#formatka-front-L').css({'display':'block', 'width': '800px' });
            case 'optionDrzwiOne':
                $('#formatka-front-L, #formatka-front-P').attr('data-open', 'true').hide();
                $('#formatka-front-T').attr('data-open', 'false').show();
                break;
            case 'optionDrzwiTwo':
                $('#formatka-front-L, #formatka-front-P').show();
                $('#formatka-front-T').hide();
                break;
            case undefined:
                alert('undefined');
        }
    });


    przeliczModel();
});

function new_element(el) {
    if ($(el).is(':empty')) {
        var tag = $('<figure class="front"></figure>' +
            '<figure class="back"></figure>' +
            '<figure class="left"></figure>' +
            '<figure class="right"></figure>' +
            '<figure class="bottom"></figure>' +
            '<figure class="top"></figure>'
        );
        $(el).append(tag);
    }
}

function new_element_size(el, x, y, z) {
    if ($(el).is(':empty')) {
        new_element(el);
    }
    $(el).css({
        width: x + 'px',
        height: y + 'px'
    });
}

function new_element_transform(el, x, y, z, inne) {
    var value = 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
    console.log('new_element_transform', value);
    //noinspection JSValidateTypes
    if (!(typeof inne === undefined)) {
        value += inne;
    }
    $(el).css('transform', value);
}

function model3d(x, y, inne) {
    var value = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    //console.log(value, $(this));
    $("#model3d").css({
        '-webkit-transform': value,
        '-moz-transform': value,
        '-ms-transform': value,
        '-o-transform': value,
        'transform': value
    });
}

function boki() {
    $('#formatka-bok-l, #formatka-bok-p').each(function (nr) {
        console.log('go', nr, furnite.height, this);
        var x = furnite.boardThickness / 2
        y = furnite.boardThickness / 2,
            z = furnite.depth;
        // przesunięcie
        if (nr !== 0) {
            x += furnite.width + furnite.boardThickness;
        }
        new_element_transform($(this), x, y, z, 'rotateX(0deg) rotateY(90deg)');
        new_element_size($(this), z, furnite.height);

    });
}

function polki() {
    var odstemp = furnite.height / (furnite.regiments + 1);
    $('.polka').each(function (nr) {

        console.log('f-cja polki', nr, this, odstemp);
        var z = odstemp * -(nr + 1);
        new_element_transform($(this), furnite.boardThickness, 0, z, '');
        new_element_size($('.polka'), furnite.width, furnite.depth - furnite.regimentsMarginFront - furnite.regimentsPaddingFront);

    });
}

function wieniec() {
    $('.wieniec').each(function (nr) {
        var y;

        console.log('f-cja wieniec', nr, this);
        if (nr == 0) {
            y = 0
        } else {
            y = furnite.height + furnite.boardThickness;
        }
        new_element_transform($(this), 0, 0, -y, '');
        new_element_size($(this), furnite.width + (furnite.boardThickness * 2), furnite.depth);
    });
}

function door() {
    let el = [...gCN('formatka front')],
        x = furnite.width + (furnite.boardThickness * 2),
        y = furnite.height + furnite.boardThickness;

    new_element_transform(gID('grupa-drzwi'), 0, 0, furnite.depth, '');
    el[1].style.setProperty('--tx', x + 'px');
    new_element_size(el[0], x / 2, y);
    new_element_size(el[1], x / 2, y);
    new_element_size(el[2], x, y);
}

function mouse() {

//############################### TODO przelicz 360

    camera.el.mousedown(function (e) {
        e.preventDefault();
        camera.startX = camera.startY = 0;
        camera.actiwe = true;
        console.log('click on');

        $(window).mouseup(function (e) {

            camera.startX = e.pageX;
            camera.startY = e.pageY;

            camera.actiwe = false;
            console.log('click off');
            $(window).unbind("mousemove");
            $(window).unbind("mouseout");
        });

        $(window).mousemove(function (e) {
            if (camera.startX == 0)
                camera.startX = (e.pageX);
            if (camera.startY == 0)
                camera.startY = (e.pageY);

            //console.log( camera.actiwe, e.ctrlKey );
            if (!camera.actiwe) {
                return;
            }

            camera.modelY += (camera.startX - e.pageX) / -3.4;
            camera.modelX += (camera.startY - e.pageY) / 4;
            model3d(camera.modelX, camera.modelY);
            camera.startX = (e.pageX);
            camera.startY = (e.pageY);
        });

    });


    camera.el.bind('mousewheel DOMMouseScroll', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0 || event.originalEvent.detail < 120 /*IE9+*/) {
            console.log('scrolling up ! ', e.originalEvent.wheelDelta);
        }
        else {
            console.log('scrolling down !', e.originalEvent.wheelDelta);
        }
    });

    /*
    $('#model3d').mousedown(function () {
        console.log('in');
        //$('.model3d').addClass('select-disabled');
        //$('.model3d').contents().addClass('select-disabled');
        //$('.model3d').children().addClass('select-disabled');
        //$('.model3d').children().contents().addClass('select-disabled');
        $(window).mousemove(function (e) {
            //camera = $('#model').first();
            console.log('test',camera);
            modelX = camera.data('modelX');
            modelY = camera.data('modelY');
            if (modelX == null) {
                modelX = e.pageX;
                modelY = e.pageY;
            }
            if (e.ctrlKey) { // "walking"
                camera.data('cz', camera.data('cz') + (e.pageY - modelY) * 50);
                camera.data('startX', camera.data('startX') + (e.pageX - modelX) * -10);
            } else { // "looking"
                camera.data('cry', camera.data('cry') + (e.pageX - modelX) / -5.0);
                camera.data('crx', camera.data('crx') + (e.pageY - modelY) / 5.0);
            }
            camera.data('modelX', e.pageX);
            camera.data('modelY', e.pageY);

            text = 'rotateY(' + (camera.data('cry')) + 'deg) ' +
                'rotateX(' + (camera.data('crx')) + 'deg) ' +
                'rotateZ(' + (camera.data('crz')) + 'deg) ' +
                'translate3d(' + (-camera.data('startX')) + 'px,' +
                (-camera.data('startY')) + 'px,' +
                (-camera.data('cz')) + 'px)';
            console.log(
                camera.el,
                text
            );
            camera.el.css({
                "transform": text,
                "-ms-transform": text,
                "-webkit-transform": text,
                "transform-style": "preserve-3d",
            });

        });
    });
  /** /  $.fn.cameraMouse = function(useIt) {
        console.log('cameraMouse', useIt, !(camera.actiwe));
        if(useIt) {
            $('body').addClass('select-disabled');
            $('.trid-viewport').addClass('select-disabled');
            $(window).mousedown(function() {
                $('.trid').addClass('select-disabled');
                $('.trid').contents().addClass('select-disabled');
                $('.trid').children().addClass('select-disabled');
                $('.trid').children().contents().addClass('select-disabled');
                $(window).mousemove(function(e) {
                    console.log('test', camera);
                    //camera = $('.trid-camera').first();
                    modelX = camera.data('modelX');
                    modelY = camera.data('modelY');
                    if(modelX == null) {
                        modelX = e.pageX;
                        modelY = e.pageY;
                    }
                    if(e.ctrlKey) { // "walking"
                        camera.data('cz',camera.data('cz')+(e.pageY-modelY)*50);
                        camera.data('startX',camera.data('startX')+(e.pageX-modelX)*-10);
                    } else { // "looking"
                        camera.data('cry',camera.data('cry')+(e.pageX-modelX)/-5.0);
                        camera.data('crx',camera.data('crx')+(e.pageY-modelY)/5.0);
                    }
                    camera.data('modelX',e.pageX);
                    camera.data('modelY',e.pageY);

                    text = 'rotateY('+(camera.data('cry'))+'deg) '+
                        'rotateX('+(camera.data('crx'))+'deg) '+
                        'rotateZ('+(camera.data('crz'))+'deg) '+
                        'translate3d('+(-camera.data('startX'))+'px,'+
                        (-camera.data('startY'))+'px,'+
                        (-camera.data('cz'))+'px)';
                    camera.el.css({
                        "transform": text,
                        "-ms-transform": text,
                        "-webkit-transform": text,
                        "transform-style":"preserve-3d",
                    });

                });
            });
            $(window).mouseup(function() {
                $(window).unbind("mousemove");
                //camera = $('.trid-camera').first();
                camera.data('modelX',null);
                camera.data('modelY',null);
                $('.trid').removeClass('select-disabled');
                $('.trid').contents().removeClass('select-disabled');
                $('.trid').children().removeClass('select-disabled');
                $('.trid').children().contents().removeClass('select-disabled');
            });
        } else {
            $(window).unbind("mousemove");
            $(window).unbind("mousedown");
            $(window).unbind("mouseup");
            //camera = $('.trid-camera').first();
            camera.data('modelX',null);
            camera.data('modelY',null);
            $('.trid').removeClass('select-disabled');
            $('.trid').contents().removeClass('select-disabled');
            $('.trid').children().removeClass('select-disabled');
            $('.trid').children().contents().removeClass('select-disabled');
        }
    }
    camera.el.click(function(){

        $.fn.cameraMouse(camera.actiwe);
        $.fn.cameraMouse(!camera.actiwe);

    })
    /**/
}

function camera_(el) {
    var rotateX = $(el).attr('rotateX'),
        rotateY = $(el).attr('rotateY');

    if (rotateX == 0 && rotateY == 0) {
        camera.modelX = camera.modelY = 0;
    }
    camera.modelX += rotateX * 1;
    camera.modelY += rotateY * 1;
    model3d(camera.modelX, camera.modelY);
}

function generatorPolek() {

    furnite.regiments = parseInt($('#optionPolkiSzt').val()) || 0;

    //if( furnite.regiments === $('#grupa-polka div').length ) TODO dodawanie elementów
    //    return;

    //console.log( $('#grupa-polka div'), $('#grupa-polka div').length );
    $('#grupa-polka div').each(function (nr) {
        if (nr + 1 > furnite.regiments)
            $(this).hide();
        else
            $(this).show();
    });
    polki();
}

document.addEventListener("DOMContentLoaded", function () {
    setObserver(furnite, 'width', 'szerokosc')
    setObserver(furnite, 'height', 'wysokosc');
    setObserver(furnite, 'depth', 'depth');
});