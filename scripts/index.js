$(() => {
	const checkVisible = (elm) => {
		const rect = elm.getBoundingClientRect();
		const viewHeight = Math.max(
			document.documentElement.clientHeight,
			window.innerHeight
		);
		return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
	}

	window.onscroll = () => {
        if (checkVisible(document.getElementById("definition"))) {
            $("#definition").animate({
                left: "700px",
            }, "slow");
        }
    };
});
