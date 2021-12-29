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
				'엔터프라이즈 데이터 스토리지: 클라우드, NAS 및 플래시 | Dell Technologies Korea'
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
			'1,000만 IOPS, 내장 머신 러닝 기술, 포괄적인 NVMe 솔루션을 특징으로 하는 Dell EMC PowerMax는 업계 최고 성능을 자랑하며 대규모 확장성과 다양한 데이터 서비스를 제공하여 현재와 미래의 미션 크리티컬 애플리케이션을 완벽하게 지원할 수 있는 독보적인 스토리지입니다.'
			);
			$('#desc-column-2').html('Dell EMC PowerStore X는 고성능 NVMe에 최적화된 최신 하드웨어와 MSA (Micro Service Architectre)아키텍처를 기반으로 설계된 제품으로 고성능의 NVMe SSD와 SCM을 탑재하였습니다. 또한, 상시 중복제거 압축을 통해 비용 효율적으로 AFA 전환을 보장하며, 단일 노드에서 Block데이터 서비스와 AppsOn(고객 VM)를 동시에 제공할 뿐만 아니라, 스케일 업 / 아웃 방식의 확장 가능한 완벽한 NVMe All Flash 제품입니다.');
			$('#desc-column-3').html('Dell EMC Unity XT All-Flash 및 Hybrid 스토리지 어레이로 IT 혁신 여정을 간소화해 보십시오. Unity XT는 듀얼 액티브 컨트롤러 아키텍처 및 엔터프라이즈급 데이터 서비스를 제공하며 탁월한 성능과 효율성을 구현하도록 설계 및 최적화되었고 멀티 클라우드 여정을 간소화하도록 제작되었습니다');
		});
	}

	$('#dell-second').on('click', function (event) {
		$('#company-title').html('Dell Technologies');
		$('#company-summarize').html(
			'VxRail 하이퍼 컨버지드 인프라스트럭처 어플라이언스 | Dell Technologies Korea'
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
			'데이터 센터 현대화 추진, 하이브리드 클라우드 구축, 개발자를 위한 Kubernetes 플랫폼 구축 등 VxRail 채택의 목적이 무엇이든, VxRail은 지속적인 혁신을 지원하는 턴키 경험을 제공합니다.');
		$('#desc-column-2').html('PowerFlex는 전체 인프라스트럭처 관리를 간소화하면서 탁월한 유연성과 성능, 선형적 확장성을 제공하는 현대화된 기반으로, 조직은 이 기반을 통해 데이터 센터와 워크로드 인프라스트럭처를 현대화할 수 있습니다.');
		$('#desc-column-3').html('XC 제품군 솔루션은 XC Series 어플라이언스, XC Core 노드, 통합된 Nutanix 소프트웨어 및 인텔 제온 프로세서를 사용하는 Dell EMC PowerEdge 서버로 구성되어 다양한 용도로 활용 가능하며 확장성도 뛰어난 HCI 플랫폼을 제공합니다');
	});

	// IBM
	let _ibm = ['#ibm', '#ibm-first'];
	for (let _ of _ibm) {
		$(_).on('click', function (event) {
			$('#company-title').html('IBM');

			$('#company-summarize').html(
				'플래시 스토리지 및 올플래시 어레이 솔루션 - 대한민국 | IBM'
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

			$('#desc-column-1').html('최신 FlashSystem 제품군의 저렴하고 컴팩트한 솔루션으로 NVMe 엔드-투-엔드 기능과 플래시 성능을 배치합니다.');
			$('#desc-column-2').html('엔터프라이즈 미드레인지 가상 스토리지 요구사항에 맞는 하이엔드 기능을 제공하고, 플래시 스토리지 어레이를 이용한 빠르고 유연한 클라우드 서비스 배치를 실현합니다.');
			$('#desc-column-3').html('Spectrum Virtualize의 엔터프라이즈 기능 및 IBM FlashCore® 기술의 안정성과 플래시 가속화를 통한 최적의 올플래시 및 NVMe 성능을 제공합니다.');
		});
	}

	$('#ibm-second').on('click', function (event) {
		$('#company-title').html('IBM');

		$('#company-summarize').html('하이브리드 플래시 스토리지 솔루션 - 대한민국 | IBM');
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
		
		$('#desc-column-1').html('FlashSystem 5000H는 엔터프라이즈급 기능을 제공하면서도 고성능을 제공하도록 설계된 가성비가 뛰어난 스토리지 솔루션입니다.');
		$('#desc-column-2').html('FlashSystem 5200H는 기업 규모와 무관하게 엔터프라이즈 스토리지 요구사항에 맞게 설계된 적정 가격의 컴팩트 하이브리드 솔루션입니다. 단지 1U로 기능과 성능 개선을 체험할 수 있습니다.');
		$('#desc-column-3').html('FlashSystem 7200H는 중형 워크로드를 위한 선택적 하이브리드 플래시 확장과 플래시 가속을 위한 SCM 지원을 제공하는 비용 최적화된 엔드-투-엔드 NVMe 솔루션입니다.');
	});

	// CISCO
	$('#cisco').on('click', function (event) {
		$('#company-title').html('CISCO');

		$('#company-summarize').html('저장 영역 네트워킹(SAN) 솔루션- 스토리지 네트워킹 - Cisco');
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
			'업계 최고 수준의 포트 집적도를 자랑하는 고성능 스토리지 네트워킹 솔루션입니다. 64G 및 NVMe over Fibre Channel을 지원하며, 대규모 가상화 데이터 센터용 SAN 디렉터도 포함되어 있습니다.<br><br>MDS 9700 Series Multilayer Director <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9700-series-multilayer-directors/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9000 Series Multilayer Switch <a href="https://www.cisco.com/c/ko_kr/products/storage-networking/mds-9000-series-multilayer-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a>');
		$('#desc-column-2').html('소형 패브릭부터 대규모 데이터 센터까지 여러 분야의 스토리지 네트워킹 기능이 통합 제공됩니다.<br><br>MDS 9300 Series Multilayer Fabric Switch <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9300-series-multilayer-fabric-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9200 Series Multiservice Switch <a href="https://www.cisco.com/c/en/us/products/storage-networking/mds-9200-series-multiservice-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a><br>MDS 9100 Series Multilayer Fabric Switch <a href="https://www.cisco.com/c/ko_kr/products/storage-networking/mds-9100-series-multilayer-fabric-switches/index.html" target="_blank"><img src="resource/maximize.png" width="15" /></a>');
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