$(() => {
    //Get the button
    const mybutton = document.getElementById("scrollBtn");

    const showTopButton = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    document.getElementById("copyright").innerHTML = `Copyright © 2021. All Rights Reserved.`;

    console.log("DO NOT PUT ANY SCRIPTS IN THE CONSOLE UNLESS YOU KNOW WHAT IT DOES, IF SOMEONE TOLD YOU TO DO IT, THERE IS AN 11/10 CHANCE YOU WILL BE HACKED!")
    console.log("Note: If the site looks broken on chrome devtools responsive view, thats either because of some responsive view bug or an animation has played which was meant to play on a pc and not on a mobile. Please refresh your screen or use an actual mobile, thanks! - Rishab Arora.");

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
        showTopButton();

        if (mobileCheck()) {
            $("#componentsofai").hide();
            $("#componentsofaimobile").show();
        } else {
            $("#componentsofai").show();
            $("#componentsofaimobile").hide();
        }

        if (mobileCheck()) {
            $("#statistics").hide();
        } else {
            $("#statistics").show();
        }

        if ((checkVisible(document.getElementById("definition")) && checkVisible(document.getElementById("drone"))) && !mobileCheck()) {
            $("#definition").animate({
                left: "50%",
            }, "slow");

            $("#drone").animate({
                left: "-40%",
            }, "slow");
        }

        if (checkVisible(document.getElementById("aicomponents"))) {
            $("*#aicomponentleft").fadeIn("slow");
            $("*#aicomponentright").fadeIn("slow");
        }

        if (checkVisible(document.getElementById("statistics"))) {
            $("*#aniNum").addClass("ani-num");
        }
    };
});
