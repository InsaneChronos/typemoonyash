function moremenu() {

	document.getElementById("sidenav-more-menu").style.left = "0px";
	document.getElementById("sidenav-menu").style.background = "url(https://insanechronos.github.io/typemoonyash/assets/common/sidenav-close.svg) center no-repeat";
	document.getElementById("sidenav-menu").style.backgroundSize = "cover";
	document.getElementById("sidenav").style.boxShadow = "none";

	if (getComputedStyle(document.getElementById("sidenav-more-menu")).left == "0px") {
		document.getElementById("sidenav-more-menu").style.left = "-100%";
		document.getElementById("sidenav-menu").style.background = "url(https://insanechronos.github.io/typemoonyash/assets/common/sidenav-menu.svg) center no-repeat";
		document.getElementById("sidenav-menu").style.backgroundSize = "cover";
		document.getElementById("sidenav").style.boxShadow = "0px 0px 15px #CCCCCC";
		}

	};
