;(function () {

/*
	//영상 조작
	var video = document.getElementById('video');

	video.addEventListener('ended', function(){
		video.parentNode.removeChild(video);
		run3d();
	});

*/	
	//function run3d () {
		//3D 공간
		//console.log("running");

		const world = document.querySelector(".world");
		const stage = document.querySelector(".stage");
		const house = document.querySelector(".house");
		const container = document.querySelector(".container");
		const mPos = { x: 0, T: 0};
		let maxScroll;

		const info = document.querySelector(".info");


		world.style.display = "block";
		document.body.color = "black";

		function resizeHandler () {
			maxScroll = document.body.offsetHeight = window.innerHeight

			//console.log("resize run")

		};

		document.addEventListener('scroll', function() {
	        var currentScrollValue = document.documentElement.scrollTop;
	        //console.log('currentScrollValue is ' + currentScrollValue);

			const scrollPer = pageYOffset / maxScroll
			const zScroll = scrollPer * 980 - 490 //css house X
			house.style.transform = "translateZ(" + zScroll + "vw)"

			console.log("zScroll is" + zScroll + "");

			const floor1 = document.querySelector(".floor_1");
			const floor2 = document.querySelector(".floor_2");
			const floor3 = document.querySelector(".floor_3");
			const floor4 = document.querySelector(".floor_4");
			const floor5 = document.querySelector(".floor_5");
			const floorEnd = document.querySelector(".floor_end");
			const background = document.querySelector(".background");

			

				if (zScroll >= -490 && zScroll <= -400) {

					//영상 - zero, f1 back, f2 backback, etc opa0
					floor1.classList.add("filter_back");

					//floor2
					floor2.classList.add("filter_backback");
					floor2.classList.remove("filter_back");
					floor2.classList.add("opa0");
					floor2.classList.remove("opa100");	

					//floor3
					//floor3.classList.add("filter_backback");
					floor3.classList.add("opa0");
					floor3.classList.remove("opa100");					

					//floor4
					floor4.classList.add("filter_backback");
					floor4.classList.remove("filter_back");

				};

				if (zScroll > -400 && zScroll <= -350) {
					floor1.classList.add("filter_zero");
					floor1.classList.remove("filter_back");
				}

				if (zScroll > -350 && zScroll <= -250) {

					//f1 zero, f2 back, f3 backback, etc opa0

					floor2.classList.add("filter_back");
					floor2.classList.remove("filter_zero");
					floor2.classList.remove("filter_backback");
					floor2.classList.add("opa100");
					floor2.classList.remove("opa0");	


					floor3.classList.add("filter_backback");
					floor3.classList.add("opa0");
					floor3.classList.remove("filter_back");
					floor3.classList.remove("opa100");	

					floor4.classList.add("filter_backback");


				};

				if (zScroll > -250 && zScroll <= -150) {

					//f2 zero, f3 back, f4 backback, etc opa0
					floor2.classList.add("filter_zero");
					floor2.classList.remove("filter_back");

					floor3.classList.add("filter_back");
					floor3.classList.add("opa100");
					floor3.classList.remove("filter_backback");
					floor3.classList.remove("filter_zero");
					floor3.classList.remove("opa0");

					floor4.classList.add("filter_backback");
					floor4.classList.add("opa0");
					floor4.classList.remove("filter_back");
					floor4.classList.remove("opa100");

					floor5.classList.add("opa0");
					floor5.classList.remove("opa100");

				};

				if (zScroll > -150 && zScroll <= 50) {

					//f3 zero, f4 back, f5 backback, etc opa0

					floor3.classList.add("filter_zero");
					floor3.classList.remove("filter_back");

					floor4.classList.add("filter_back");
					floor4.classList.add("opa100");
					floor4.classList.remove("filter_backback");
					floor4.classList.remove("filter_zero");
					floor4.classList.remove("opa0");

					floor5.classList.add("opa0");
					floor5.classList.remove("opa100");

					floorEnd.classList.add("opa0");
					floorEnd.classList.remove("opa100");

				};

				if (zScroll > 50 && zScroll <= 450) {

					//f4 zero, f5 back, fEnd backback

					floor3.classList.add("filter_zero");
					floor3.classList.remove("filter_back");

					floor4.classList.add("filter_zero");
					floor4.classList.add("opa100");
					floor4.classList.remove("filter_back");
					floor4.classList.remove("filter_backback");
					floor4.classList.remove("opa0");

					floor5.classList.add("opa100");
					floor5.classList.remove("opa0");

				};

				if (zScroll >= 430) {
					background.style.display = "none";
					floorEnd.classList.add("opa100");
					floorEnd.classList.remove("opa0");
				} else {
					background.style.display = "block";
					floorEnd.classList.add("opa0");
					floorEnd.classList.remove("opa100");
				}
				
	 	})


		document.addEventListener("resize", resizeHandler);
		resizeHandler();


		

	//}

}) ()



