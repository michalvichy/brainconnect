window.BC = window.BC || {};

window.BC.home = function($) {
    var owlInit = function() {
        console.log('czesc');
        var oo = $('#owl-carousel');
        console.log(oo);
        $("#owl-example").owlCarousel({

            // Most important owl features
            items : 1,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,

            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,

            //Autoplay
            autoPlay : true,
            stopOnHover : false,

            // Navigation
            navigation : false,
            navigationText : ["prev","next"],
            rewindNav : true,
            scrollPerPage : false,

            //Pagination
            pagination : true,
            paginationNumbers: false,

            // Responsive
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,

            // CSS Styles
            baseClass : "owl-carousel",
            theme : "owl-theme",

            //Lazy load
            lazyLoad : false,
            lazyFollow : true,
            lazyEffect : "fade",

            //Auto height
            autoHeight : false,

            //JSON
            jsonPath : false,
            jsonSuccess : false,

            //Mouse Events
            dragBeforeAnimFinish : true,
            mouseDrag : true,
            touchDrag : true,

            //Transitions
            transitionStyle : false,

            // Other
            addClassActive : false,

            //Callbacks
            beforeUpdate : false,
            afterUpdate : false,
            beforeInit: false,
            afterInit: false,
            beforeMove: false,
            afterMove: false,
            afterAction: false,
            startDragging : false,
            afterLazyLoad : false

        });
    };

    $(document).ready(function() {
        owlInit();
    });
};
