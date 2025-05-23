/**
 * Template Name: DevFolio - v4.6.0
 * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
	"use strict";

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
			if (all) {
				selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
				selectEl.addEventListener(type, listener)
			}
		}
	}

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}

	/**
	 * Navbar links active state on scroll
	 */
	let navbarlinks = select('#navbar .scrollto', true)
	const navbarlinksActive = () => {
		let position = window.scrollY + 200
		navbarlinks.forEach(navbarlink => {
			if (!navbarlink.hash) return
			let section = select(navbarlink.hash)
			if (!section) return
			if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
				navbarlink.classList.add('active')
			} else {
				navbarlink.classList.remove('active')
			}
		})
	}
	window.addEventListener('load', navbarlinksActive)
	onscroll(document, navbarlinksActive)

	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
		let header = select('#header')
		let offset = header.offsetHeight

		if (!header.classList.contains('header-scrolled')) {
			offset -= 16
		}

		let elementPos = select(el).offsetTop
		window.scrollTo({
			top: elementPos - offset,
			behavior: 'smooth'
		})
	}

	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */
	let selectHeader = select('#header')
	if (selectHeader) {
		const headerScrolled = () => {
			if (window.scrollY > 100) {
				selectHeader.classList.add('header-scrolled')
			} else {
				selectHeader.classList.remove('header-scrolled')
			}
		}
		window.addEventListener('load', headerScrolled)
		onscroll(document, headerScrolled)
	}

	/**
	 * Back to top button
	 */
	let backtotop = select('.back-to-top')
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add('active')
			} else {
				backtotop.classList.remove('active')
			}
		}
		window.addEventListener('load', toggleBacktotop)
		onscroll(document, toggleBacktotop)
	}

	/**
	 * Mobile nav toggle
	 */
	on('click', '.mobile-nav-toggle', function () {
		select('#navbar').classList.toggle('navbar-mobile')
		this.classList.toggle('bi-list')
		this.classList.toggle('bi-x')
	})

	/**
	 * Mobile nav dropdowns activate
	 */
	on('click', '.navbar .dropdown > a', function (e) {
		if (select('#navbar').classList.contains('navbar-mobile')) {
			e.preventDefault()
			this.nextElementSibling.classList.toggle('dropdown-active')
		}
	}, true)

	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	on('click', '.scrollto', function (e) {
		if (select(this.hash)) {
			e.preventDefault()

			let navbar = select('#navbar')
			if (navbar.classList.contains('navbar-mobile')) {
				navbar.classList.remove('navbar-mobile')
				let navbarToggle = select('.mobile-nav-toggle')
				navbarToggle.classList.toggle('bi-list')
				navbarToggle.classList.toggle('bi-x')
			}
			scrollto(this.hash)
		}
	}, true)

	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener('load', () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash)
			}
		}
	});

	/**
	 * Intro type effect
	 */
	const typed = select('.typed')
	if (typed) {
		let typed_strings = typed.getAttribute('data-typed-items')
		typed_strings = typed_strings.split(',')
		new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	}

	/**
	 * Initiate portfolio lightbox
	 */
	const portfolioLightbox = GLightbox({
		selector: '.portfolio-lightbox'
	});

	/**
	 * Testimonials slider
	 */
	new Swiper('.testimonials-slider', {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	/**
	 * Portfolio details slider
	 */
	new Swiper('.portfolio-details-slider', {
		speed: 400,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	});

	/**
	 * Preloader
	 */
	let preloader = select('#preloader');
	if (preloader) {debugger
		window.addEventListener('load', () => {
			preloader.remove()
		});
	}

	let forms = document.querySelectorAll('.php-email-form');

	forms.forEach(function (e) {
		e.addEventListener('submit', function (event) {
			event.preventDefault();

			let thisForm = this;

			let action = thisForm.getAttribute('action');
			let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

			if (!action) {
				displayError(thisForm, 'The form action property is not set!')
				return;
			}
			thisForm.querySelector('.loading').classList.add('d-block');
			thisForm.querySelector('.error-message').classList.remove('d-block');
			thisForm.querySelector('.sent-message').classList.remove('d-block');

			let formData = new FormData(thisForm);

			if (recaptcha) {
				if (typeof grecaptcha !== "undefined") {
					grecaptcha.ready(function () {
						try {
							grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
								.then(token => {
									formData.set('recaptcha-response', token);
									php_email_form_submit(thisForm, action);
								})
						} catch (error) {
							displayError(thisForm, error)
						}
					});
				} else {
					displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
				}
			} else {
				php_email_form_submit(thisForm, action);
			}
		});
	});

	function php_email_form_submit(thisForm, action) {
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const subject = document.getElementById("subject").value;
		const message = document.getElementById("message").value;
		fetch(action, {
			method: 'POST',
			body: JSON.stringify({
				name, email, subject, message
			}),
			headers: {'X-Requested-With': 'XMLHttpRequest'}
		})
			.then(response => {
				if (response.ok) {
					return response.text()
				} else {
					throw new Error(`${response.status} ${response.statusText} ${response.url}`);
				}
			})
			.then(data => {
				thisForm.querySelector('.loading').classList.remove('d-block');
				if (data.trim() === "{\"response\":\"Message created\"}") {
					thisForm.querySelector('.sent-message').classList.add('d-block');
					thisForm.reset();
				} else {
					throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
				}
			})
			.catch((error) => {
				displayError(thisForm, error);
			});
	}

	function displayError(thisForm, error) {
		thisForm.querySelector('.loading').classList.remove('d-block');
		thisForm.querySelector('.error-message').innerHTML = error;
		thisForm.querySelector('.error-message').classList.add('d-block');
	}

	function sendInfo() {
		const info = {
			timeOpened: new Date(),
			timezone: (new Date()).getTimezoneOffset() / 60,
			pageon: window.location.pathname,
			referrer: document.referrer,
			previousSites: history.length,
			browserName: navigator.appName,
			browserEngine: navigator.product,
			browserVersion1a: navigator.appVersion,
			browserVersion1b: navigator.userAgent,
			browserLanguage: navigator.language,
			browserOnline: navigator.onLine,
			browserPlatform: navigator.platform,
			javaEnabled: navigator.javaEnabled(),
			dataCookiesEnabled: navigator.cookieEnabled,
			dataCookies1: document.cookie,
			dataCookies2: decodeURIComponent(document.cookie.split(";")),
			dataStorage: localStorage,
			sizeScreenW: screen.width,
			sizeScreenH: screen.height,
			sizeDocW: document.width,
			sizeDocH: document.height,
			sizeInW: innerWidth,
			sizeInH: innerHeight,
			sizeAvailW: screen.availWidth,
			sizeAvailH: screen.availHeight,
			scrColorDepth: screen.colorDepth,
			scrPixelDepth: screen.pixelDepth,
		};
		fetch('be/controllers/client.php', {
			method: 'POST',
			body: JSON.stringify({
				details: JSON.stringify(info).toString(),
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}).then(function (response) {
			if (response.ok) {
				return response.json();
			}
			return Promise.reject(response);
		}).then(function (data) {
			// console.log(data);
		}).catch(function (error) {
			// console.warn('Something went wrong.', error);
		});
	}

	sendInfo();

})()

async function pvip() {
	try {
		const response = await fetch('https://www.simonecelia.it/ipapi/be/ip/read.php');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const ip = await response.text();
		console.log(ip);
	} catch (error) {
		console.error('Errore durante la richiesta:', error);
	}
}

