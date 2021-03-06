function getOffSet() {
	var _offset = 450;
	var windowHeight = window.innerHeight;

	if (windowHeight > 500) {
		_offset = 400;
	}
	if (windowHeight > 680) {
		_offset = 300;
	}
	if (windowHeight > 830) {
		_offset = 210;
	}

	return _offset;
}

function setParallaxPosition($doc, multiplier, $object) {
	var offset = getOffSet();
	var from_top = $doc.scrollTop(),
		bg_css = 'center ' + (multiplier * from_top - offset) + 'px';
	$object.css({ 'background-position': bg_css });
}

// Parallax function
// Adapted based on https://codepen.io/roborich/pen/wpAsm
var background_image_parallax = function ($object, multiplier, forceSet) {
	multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
	var $doc = $(document);
	// $object.css({"background-attatchment" : "fixed"});

	if (forceSet) {
		setParallaxPosition($doc, multiplier, $object);
	} else {
		$(window).scroll(function () {
			setParallaxPosition($doc, multiplier, $object);
		});
	}
};

var background_image_parallax_2 = function ($object, multiplier) {
	multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
	multiplier = 1 - multiplier;
	var $doc = $(document);
	$object.css({ 'background-attachment': 'fixed' });

	$(window).scroll(function () {
		if ($(window).width() > 768) {
			var firstTop = $object.offset().top,
				pos = $(window).scrollTop(),
				yPos = Math.round(multiplier * (firstTop - pos) - 186);

			var bg_css = 'center ' + yPos + 'px';

			$object.css({ 'background-position': bg_css });
		} else {
			$object.css({ 'background-position': 'center' });
		}
	});
};

$(function () {
	// Hero Section - Background Parallax
	background_image_parallax($('.tm-parallax'), 0.3, false);
	background_image_parallax_2($('#contact'), 0.8);
	background_image_parallax_2($('#products'), 0.8);

	// Handle window resize
	window.addEventListener(
		'resize',
		function () {
			background_image_parallax($('.tm-parallax'), 0.3, true);
		},
		true
	);

	// Detect window scroll and update navbar
	$(window).scroll(function (e) {
		if ($(document).scrollTop() > 120) {
			$('.tm-navbar').addClass('scroll');
		} else {
			$('.tm-navbar').removeClass('scroll');
		}
	});

	// Close mobile menu after click
	$('#tmNav a').on('click', function () {
		$('.navbar-collapse').removeClass('show');
	});

	// Scroll to corresponding section with animation
	$('#tmNav').singlePageNav({
		easing: 'easeInOutExpo',
		speed: 600,
	});

	// Add smooth scrolling to all links
	// https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
	$('a').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				600,
				'easeInOutExpo',
				function () {
					window.location.hash = hash;
				}
			);
		} // End if
	});

	// Product & Solution function
	$(document).ready(function () {
		let pages = ['#dell-first', '#dell-second', '#ibm-first', '#ibm-second'];

		for (let page of pages) {
			$(page).hover(
				function () {
					$(this).css('color', 'red');
				},
				function () {
					$(this).css('color', '#3085a3');
				}
			);
		}
	});

	// Dell Technologies

	let _dell = ['#dell', '#dell-first'];

	for (let _ of _dell) {
		$(_).on('click', function (event) {
			$('#company-title').html('Dell Technologies');

			$('#company-summarize').html(
				'?????????????????? ????????? ????????????: ????????????, NAS ??? ????????? | Dell Technologies Korea'
			);
			$('#product-link').prop(
				'href',
				'https://www.delltechnologies.com/ko-kr/storage/data-storage.htm'
			);
			
			$('#image-column-1').attr("src", "img/products/powermax.png");
			$('#image-column-2').attr("src", "img/products/powerstore.jpg");
			$('#image-column-3').show();
			$('#image-column-3').attr("src", "img/products/unity-xt.jpg");
			
			
			
			$('#product-column-1').html('DellEMC PowerMax');
			$('#product-column-2').html('DellEMC PowerStore');
			$('#product-column-3').html('DellEMC Unity XT');
			
			
			$('#desc-column-1').html(
			'1,000??? IOPS, ?????? ?????? ?????? ??????, ???????????? NVMe ???????????? ???????????? ?????? Dell EMC PowerMax??? ?????? ?????? ????????? ???????????? ????????? ???????????? ????????? ????????? ???????????? ???????????? ????????? ????????? ?????? ???????????? ????????????????????? ???????????? ????????? ??? ?????? ???????????? ?????????????????????.'
			);
			$('#desc-column-2').html('Dell EMC PowerStore X??? ????????? NVMe??? ???????????? ?????? ??????????????? MSA (Micro Service Architectre)??????????????? ???????????? ????????? ???????????? ???????????? NVMe SSD??? SCM??? ?????????????????????. ??????, ?????? ???????????? ????????? ?????? ?????? ??????????????? AFA ????????? ????????????, ?????? ???????????? Block????????? ???????????? AppsOn(?????? VM)??? ????????? ????????? ?????? ?????????, ????????? ??? / ?????? ????????? ?????? ????????? ????????? NVMe All Flash ???????????????.');
			$('#desc-column-3').html('Dell EMC Unity XT All-Flash ??? Hybrid ???????????? ???????????? IT ?????? ????????? ???????????? ????????????. Unity XT??? ?????? ????????? ???????????? ???????????? ??? ????????????????????? ????????? ???????????? ???????????? ????????? ????????? ???????????? ??????????????? ?????? ??? ?????????????????? ?????? ???????????? ????????? ?????????????????? ?????????????????????');
		});
	}

	$('#dell-second').on('click', function (event) {
		$('#company-title').html('Dell Technologies');
		$('#company-summarize').html(
			'VxRail ????????? ???????????? ????????????????????? ?????????????????? | Dell Technologies Korea'
		);
		$('#product-link').prop(
			'href',
			'https://www.delltechnologies.com/ko-kr/converged-infrastructure/vxrail/index.htm'
		);
		
		
		$('#image-column-1').attr("src", "img/products/vxrail.jpg");
		$('#image-column-2').attr("src", "img/products/powerflex.jpg");
		$('#image-column-3').show();
		$('#image-column-3').attr("src", "img/products/xcseries.jpg");
		
		$('#product-column-1').html('DellEMC VxRail');
		$('#product-column-2').html('DellEMC PowerFlex');
		$('#product-column-3').html('DellEMC XC Series');
		
		$('#desc-column-1').html(
			'????????? ?????? ????????? ??????, ??????????????? ???????????? ??????, ???????????? ?????? Kubernetes ????????? ?????? ??? VxRail ????????? ????????? ????????????, VxRail??? ???????????? ????????? ???????????? ?????? ??????????????????????????.');
		$('#desc-column-2').html('PowerFlex??? ?????? ????????????????????? ????????? ?????????????????? ????????? ???????????? ??????, ????????? ???????????? ???????????? ???????????? ????????????, ????????? ??? ????????? ?????? ????????? ????????? ???????????? ???????????????????????? ???????????? ??? ????????????.');
		$('#desc-column-3').html('XC ????????? ???????????? XC Series ??????????????????, XC Core ??????, ????????? Nutanix ??????????????? ??? ?????? ?????? ??????????????? ???????????? Dell EMC PowerEdge ????????? ???????????? ????????? ????????? ?????? ???????????? ???????????? ????????? HCI ???????????? ???????????????');
	});

	// IBM
	let _ibm = ['#ibm', '#ibm-first'];
	for (let _ of _ibm) {
		$(_).on('click', function (event) {
			$('#company-title').html('IBM');

			$('#company-summarize').html(
				'????????? ???????????? ??? ???????????? ????????? ????????? - ???????????? | IBM'
			);
			$('#product-link').prop(
				'href',
				'https://www.ibm.com/kr-ko/it-infrastructure/storage/flash'
			);
			
			
			$('#image-column-1').attr("src", "img/products/ibm-5200.jpeg");
			$('#image-column-2').attr("src", "img/products/ibm-7200.jpg");
			$('#image-column-3').show();
			$('#image-column-3').attr("src", "img/products/ibm-9200.jpg");

			$('#product-column-1').html('IBM FlashSystem 5200');
			$('#product-column-2').html('IBM FlashSystem 7200');
			$('#product-column-3').html('IBM FlashSystem 9200');

			$('#desc-column-1').html('?????? FlashSystem ???????????? ???????????? ???????????? ??????????????? NVMe ??????-???-?????? ????????? ????????? ????????? ???????????????.');
			$('#desc-column-2').html('?????????????????? ??????????????? ?????? ???????????? ??????????????? ?????? ???????????? ????????? ????????????, ????????? ???????????? ???????????? ????????? ????????? ????????? ???????????? ????????? ????????? ???????????????.');
			$('#desc-column-3').html('Spectrum Virtualize??? ?????????????????? ?????? ??? IBM FlashCore?? ????????? ???????????? ????????? ???????????? ?????? ????????? ???????????? ??? NVMe ????????? ???????????????.');
		});
	}

	$('#ibm-second').on('click', function (event) {
		$('#company-title').html('IBM');

		$('#company-summarize').html('??????????????? ????????? ???????????? ????????? - ???????????? | IBM');
		$('#product-link').prop(
			'href',
			'https://www.ibm.com/kr-ko/it-infrastructure/storage/hybrid-storage'
		);
		
		$('#image-column-1').attr("src", "img/products/ibm-5000h.jpg");
		$('#image-column-2').attr("src", "img/products/ibm-5200h.jpeg");
		$('#image-column-3').show();
		$('#image-column-3').attr("src", "img/products/ibm-7200h.jpg");
		
		$('#product-column-1').html('IBM FlashSystem 5000H');
		$('#product-column-2').html('IBM FlashSystem 5200H');
		$('#product-column-3').html('IBM FlashSystem 7200H');
		
		$('#desc-column-1').html('FlashSystem 5000H??? ????????????????????? ????????? ?????????????????? ???????????? ??????????????? ????????? ???????????? ????????? ???????????? ??????????????????.');
		$('#desc-column-2').html('FlashSystem 5200H??? ?????? ????????? ???????????? ?????????????????? ???????????? ??????????????? ?????? ????????? ?????? ????????? ????????? ??????????????? ??????????????????. ?????? 1U??? ????????? ?????? ????????? ????????? ??? ????????????.');
		$('#desc-column-3').html('FlashSystem 7200H??? ?????? ??????????????? ?????? ????????? ??????????????? ????????? ????????? ????????? ????????? ?????? SCM ????????? ???????????? ?????? ???????????? ??????-???-?????? NVMe ??????????????????.');
	});

	// CISCO
	$('#cisco').on('click', function (event) {
		$('#company-title').html('CISCO');

		$('#company-summarize').html('?????? ?????? ????????????(SAN) ?????????- ???????????? ???????????? - Cisco');
		$('#product-link').prop(
			'href',
			'https://www.cisco.com/c/ko_kr/products/storage-networking/index.html'
		);
		
		$('#image-column-1').attr("src", "img/products/cisco-multilayer.jpg");
		$('#image-column-2').attr("src", "img/products/cisco-fabric.jpg");
		$('#image-column-3').hide();
		
		$('#product-column-1').html('MDS Multilayer Director');
		$('#product-column-2').html('MDS Fabric Switch');
		$('#product-column-3').html('');
		
		$('#desc-column-1').html(
			'?????? ?????? ????????? ?????? ???????????? ???????????? ????????? ???????????? ???????????? ??????????????????. 64G ??? NVMe over Fibre Channel??? ????????????, ????????? ????????? ????????? ????????? SAN ???????????? ???????????? ????????????.<br><br>MDS 9700 Series Multilayer Director <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9700-series-multilayer-directors/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9000 Series Multilayer Switch <a href="https://www.cisco.com/c/ko_kr/products/storage-networking/mds-9000-series-multilayer-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a>');
		$('#desc-column-2').html('?????? ??????????????? ????????? ????????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ?????? ???????????????.<br><br>MDS 9300 Series Multilayer Fabric Switch <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9300-series-multilayer-fabric-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9200 Series Multiservice Switch <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9200-series-multiservice-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9100 Series Multilayer Fabric Switch <a href="https://www.cisco.com/c/ko_kr/products/storage-networking/mds-9100-series-multilayer-fabric-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a>');
		$('#desc-column-3').html('');
	});
	
	

	// Pop up
	$('.tm-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: { enabled: true },
	});

	$('.tm-products-carousel').slick({
		dots: true,
		prevArrow: false,
		nextArrow: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	// Gallery
	$('.tm-gallery').slick({
		dots: true,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});