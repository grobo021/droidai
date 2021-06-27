$(() => {
    const checkVisible = (elm) => {
        // get information about element size and postition relative to viewport
        const rect = elm.getBoundingClientRect();

        // set view height to root node client hieght or window height depending on whats greater
        const viewHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
        );

        // returns true if neither bottom position of element is less than 0
        // nor the element top - view height is >= 0
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    };

    const mobileCheck = function () {
        return (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) ? true : false;
    };

    window.onscroll = () => {
        if ((checkVisible(document.getElementById("definition")) && checkVisible(document.getElementById("drone"))) && !mobileCheck()) {
            $("#definition").animate({
                left: "50%",
            }, "slow");

            $("#drone").animate({
                left: "-50%",
            }, "slow");
        }
    };
});
