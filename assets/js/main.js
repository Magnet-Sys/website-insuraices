/**
* Template Name: Bootslander
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Whatsapp Chat Widget
   */

  document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.getElementById('contact');
    const chatBoxContainer = document.querySelector('.whatsapp-inline-box');
    const showChatButtonInline = document.getElementById('show-chat-button-inline');
    const whatsappChatWidgetInline = document.getElementById('whatsapp-chat-widget-inline');
    const closeChatButtonInline = whatsappChatWidgetInline.querySelector('.close-chat-button-inline');
    const sendItButtonInline = document.getElementById('send-it-button-inline');
    const chatInputInline = document.getElementById('chat-input-widget-inline');
    const getNumberDivInline = document.getElementById('get-number-widget-inline');

    const isMobileView = () => window.innerWidth < 992; // lg breakpoint

    function initializeChatState() {
        if (!chatBoxContainer) return;

        chatBoxContainer.classList.add('hide-inline'); // Ocultar todo al principio

        if (isMobileView()) {
          // Móvil: widget oculto, botón "Chatea con Nosotros" visible (cuando la sección contact esté visible)
          whatsappChatWidgetInline.classList.add('hide-inline');
          whatsappChatWidgetInline.classList.remove('show-inline');
        } else {
          // Desktop: El chat widget parte abierto, el botón "Chatea con Nosotros" se oculta.
          whatsappChatWidgetInline.classList.remove('hide-inline');
          whatsappChatWidgetInline.classList.add('show-inline');
          showChatButtonInline.classList.add('hide-inline'); // Ocultar botón de abrir chat
          showChatButtonInline.classList.remove('show-inline');
        }
    }

    initializeChatState(); // Establecer estado inicial basado en el tamaño de la pantalla

    function openChatWidgetDesktop() { // Específico para cuando el widget se abre en desktop
        whatsappChatWidgetInline.classList.remove('hide-inline');
        whatsappChatWidgetInline.classList.add('show-inline');
        showChatButtonInline.classList.add('hide-inline');
        showChatButtonInline.classList.remove('show-inline');
    }

    function closeChatWidgetDesktop() { // Específico para cuando el widget se cierra en desktop
        whatsappChatWidgetInline.classList.remove('show-inline');
        whatsappChatWidgetInline.classList.add('hide-inline');
        // Mostrar el botón "Chatea con Nosotros" solo si el chatbox general está visible
        if (chatBoxContainer && chatBoxContainer.classList.contains('show-inline')) {
            showChatButtonInline.classList.remove('hide-inline');
            showChatButtonInline.classList.add('show-inline');
        }
    }

    function redirectToWhatsApp() {
        const fullPhoneNumber = getNumberDivInline.textContent.trim();
        const cleanPhoneNumber = fullPhoneNumber.startsWith('+') ? fullPhoneNumber.substring(1) : fullPhoneNumber;
        const message = "¡Hola Insuraices! 👋 Me gustaría saber más sobre sus productos de enocosmética.";
        let whatsappURLBase = "https://wa.me/"; // Usar wa.me para una mejor experiencia

        const encodedMessage = encodeURIComponent(message);

        const finalURL = `${whatsappURLBase}${cleanPhoneNumber}?text=${encodedMessage}`;
        //const finalURL = `${whatsappURLBase}${cleanPhoneNumber}`;
        window.open(finalURL, "_blank");
    }


    if (showChatButtonInline) {
        showChatButtonInline.addEventListener('click', function (event) {
            event.preventDefault();
            if (isMobileView()) {
                redirectToWhatsApp();
            } else {
                openChatWidgetDesktop(); // En desktop, abre el widget incrustado
            }
        });
    }

    if (closeChatButtonInline && !isMobileView()) { // El botón cerrar solo funciona para el widget en desktop
        closeChatButtonInline.addEventListener('click', function () {
            closeChatWidgetDesktop();
        });
    }

    if (sendItButtonInline && chatInputInline && getNumberDivInline) {
        sendItButtonInline.addEventListener('click', function () {
            if (chatInputInline.value.trim() !== "") {
                const fullPhoneNumber = getNumberDivInline.textContent.trim();
                const cleanPhoneNumber = fullPhoneNumber.startsWith('+') ? fullPhoneNumber.substring(1) : fullPhoneNumber;
                const message = encodeURIComponent(chatInputInline.value.trim());
                let whatsappURLBase = "https://web.whatsapp.com/send"; // Para enviar mensaje desde widget

                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    whatsappURLBase = "whatsapp://send"; // Para enviar mensaje desde widget en móvil (aunque el widget está oculto)
                }
                
                const finalURL = `${whatsappURLBase}?phone=${cleanPhoneNumber}&text=${message}`;
                window.open(finalURL, "_blank");
                chatInputInline.value = "";
            }
        });

        chatInputInline.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendItButtonInline.click();
            }
        });
    }

    // Intersection Observer Logic para el contenedor .whatsapp-inline-box
    if (contactSection && chatBoxContainer) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const intersectionCallback = function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chatBoxContainer.classList.remove('hide-inline');
                    chatBoxContainer.classList.add('show-inline');
               
                    if (isMobileView()) {
                        showChatButtonInline.classList.remove('hide-inline');
                        showChatButtonInline.classList.add('show-inline');
                        whatsappChatWidgetInline.classList.add('hide-inline');
                        whatsappChatWidgetInline.classList.remove('show-inline');
                    } else {
                         showChatButtonInline.classList.add('hide-inline');
                         showChatButtonInline.classList.remove('show-inline');
                         whatsappChatWidgetInline.classList.remove('hide-inline');
                         whatsappChatWidgetInline.classList.add('show-inline');
                    }

                } else {
                    chatBoxContainer.classList.remove('show-inline');
                    chatBoxContainer.classList.add('hide-inline');
                }
            });
        };

        const observer = new IntersectionObserver(intersectionCallback, observerOptions);
        observer.observe(contactSection);
    }
});

})();