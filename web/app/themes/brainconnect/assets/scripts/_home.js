window.BC = window.BC || {};

window.BC.home = function($) {
    var init = function() {
        initCountdown();
        setInfoboxHeight();
        iframeWidth();
    };


    var initCountdown = function() {
        var counter = new Counter('21 Sep 2015 00:00');
        counter.countdown();
    };

    function Counter(date) {
        this.targetDate = new Date(date).getTime();
    }

    function addZero(digit) {
        if(digit > 9) {
            return digit;
        } else {
            return '0' + digit;
        }
    }

    Counter.prototype.countdown = function() {
        var time = {};
        var targetDate = this.targetDate;

        var interval = setInterval(function() {
            var currentDate = new Date().getTime();
            var remainingTime = (targetDate - currentDate) / 1000;
            $('.js-counter').css('visibility', 'visible');

            time.days = parseInt(remainingTime / 86400);
            remainingTime = remainingTime % 86400;

            time.hours = parseInt(remainingTime / 3600);
            remainingTime = remainingTime % 3600;

            time.minutes = parseInt(remainingTime / 60);
            time.seconds = parseInt(remainingTime % 60);

            if (time.days + time.hours + time.minutes + time.seconds <= 0) {
                clearInterval(interval);
                $('.js-counter').hide();
            } else {
                ['days', 'hours', 'minutes', 'seconds'].map(function(entry) {
                    $('#'+entry).html(addZero(time[entry]));
                });
            }
        }, 1000);
    };

    var setInfoboxHeight = function() {
        var $infobox = $('.js-infobox');
        var $coverbox = $('.js-coverbox');

        if (window.innerWidth > 768) {
            $infobox.height($coverbox.height());
        }
    };

    var iframeWidth = function() {
        var $iframe = $('.js-coverbox iframe');
        if (window.innerWidth <= 560) {
            $iframe.addClass('iframe--full');
        } else {
            $iframe.removeClass('iframe--full');
        }
    }


    $(document).ready(function() {
        init();
    });

    $(window).resize(function() {
        setInfoboxHeight();
        iframeWidth();
    });
};
