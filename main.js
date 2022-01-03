/* eslint-disable */
function initSlickNav() {
    //menu
    $(".header .nav").slicknav({
        label: "",
        prependTo: ".header .container",
        closeOnClick: "true",
    });
    //some js

    //wrap mobile menu
    $(".slicknav_nav").wrapInner('<ul class="m"></ul>');
}

function initPage() {
    // fixed header
    $(window).scroll(function () {
        var h = $(document).height() - $(window).height();
        if ($(document).scrollTop() > 88 && h > 100) {
            $(".header").addClass("small");
            $(".header-empty").addClass("small");
        } else {
            $(".header").removeClass("small");
            $(".header-empty").removeClass("small");
        }
    });

    // slider
    $("#slider-range-max").slider({
        range: "max",
        min: 1,
        max: 6,
        value: 1,
        slide(event, ui) {
            $("#years").val(ui.value);
            if (ui.value == 1) {
                $("#years").parent().find("label").text("Year");
            } else {
                $("#years").parent().find("label").text("Years");
            }
            formCounter();
        },
    });

    $("#years").val($("#slider-range-max").slider("value"));
    // $("#term").text($("#slider-range-max").slider("value"));

    // accrodion
    $(".acc-block").accordion({
        header: ".title",
        collapsible: true,
        //active: $("#acc-block div[active=true]").index(),
        heightStyle: "content",
    });

    const select = $(".drop");
    function initSelect2(data) {
        select
            .select2({
                data,
                templateResult(data) {
                    return $(
                        "<span>" +
                            data.desc +
                            "</span><span>" +
                            data.text +
                            "<span>"
                    );
                },
            })
            .change(function () {
                formCounter();
            });
    }

    $(".summ")
        .on("change", function () {
            formCounter();
        })
        .on("input", function (e) {
            formCounter();
        });

    const c_base_rate = 0.2;
    // Assuming interest is compounded once per year
    const c_compounds_per_year = 1;

    function formCounter() {
        const currency = select.select2("data")[0];

        const deposit_amount = parseInt($("#summ").val());
        const deposit_years = parseInt($("#years").val());

        let deposit_interest =
            deposit_amount *
            Math.pow(
                1 + c_base_rate / c_compounds_per_year,
                c_compounds_per_year * deposit_years
            ).toFixed(4);

        deposit_interest = parseInt(deposit_interest, 10);
        deposit_interest = deposit_interest - deposit_amount;

        $("#interest_crypto .symbol").text(currency.text);
        $("#interest_crypto .amount").text(
            Number(deposit_interest).toLocaleString()
        );

        // As this is a static html/js assuming that crypto/fiat exchange rate is always 1/1
        // This will be updated as soon as beta web-app is launched
        const fiat_interest = deposit_interest * 1;

        $("#total .symbol").text(currency.text);
        $("#total .amount").text(
            Number(deposit_amount + deposit_interest).toLocaleString()
        );
    }

    function fillSelect2() {
        const select = $(".drop");
        if (select.data("loaded")) {
            return;
        }
        // data for select options
        // value param is used in formCounter function
        const data = [];
        data.push({ id: 1, value: 1, text: "USDT", desc: "Tether" });
        data.push({ id: 2, value: 1, text: "USDC", desc: "USD Coin" });
        data.push({ id: 2, value: 1, text: "BUSD", desc: "Binance USD" });
        data.push({ id: 3, value: 1, text: "DAI", desc: "DAI" });
        data.push({ id: 4, value: 1, text: "UST", desc: "UST" });

        initSelect2(data);
    }

    fillSelect2();
    formCounter();

    if ($(window).width() > 900) {
        // full page
        $("#fullpage").fullpage({
            css3: true,
            scrollingSpeed: 1000,
            offsetSections: true,
            anchors: ["anchor1", "anchor2", "anchor3"],
            responsiveWidth: 811,
            menu: "#menu",
            autoScrolling: false,
            fitToSection: false,
        });
    }

    //tooltip
    $(".info").tooltip({
        position: {
            my: "left-8 top+15",
            at: "left bottom",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            },
        },
    });

    //tabs
    $("#tabs").tabs();
    initSlickNav();

    //clone
    var $button = $(".form-block dl dd").clone();
    $(".form-holder").html($button);

    //scrollTo
    $(document).on(
        "click",
        '.nav a[href^="#"], a.scroll[href^="#"]',
        function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $($.attr(this, "href")).offset().top - 60 + "px",
                },
                500
            );
        }
    );
}
