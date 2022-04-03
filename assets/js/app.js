(function () {
  //lightbox options
  lightbox.option({
    fadeDuration: 200,
    resizeDuration: 200,
    imageFadeDuration: 200,
  });

  const responsiveMenu = document.querySelector('[data-menu-responsive]');
  const modalMenu = document.querySelector('[data-modal]');
  const closeModalMenu = document.querySelector('[data-close-modal]');
  const links = modalMenu.querySelectorAll('a');
  const aboutUs = document.querySelector('[data-about-us]');
  const services = document.querySelector('[data-services]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const gallery = document.querySelector('[data-gallery-set]');
  const year = document.querySelector('[data-full-year]');
  const contactInfo = document.querySelector('[data-contact-info]');
  const contactImage = document.querySelector('[data-contact-image]');

  // hide elements

  aboutUs.classList.add('hide');
  services.classList.add('hide');
  gallery.classList.add('hide');
  contactInfo.classList.add('hide');
  contactImage.classList.add('hide');

  // Functions

  const getYear = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    year.innerText = fullYear;
  };

  const showElemets = () => {
    aboutUs.classList.remove('hide');
    services.classList.remove('hide');
    gallery.classList.remove('hide');
    contactInfo.classList.remove('hide');
    contactImage.classList.remove('hide');
  };

  const scrollApear = () => {
    const aboutUsPosition = aboutUs.getBoundingClientRect().top;
    const servicesPosition = services.getBoundingClientRect().top;
    const galleryPosition = gallery.getBoundingClientRect().top;
    const contactInfoPosition = contactInfo.getBoundingClientRect().top;
    const contactImagePosition = contactImage.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 2;

    if (screen.width > 500) {
      if (aboutUsPosition < screenPosition) {
        aboutUs.classList.remove('hide');
        aboutUs.classList.add('animate__fadeInDown');
      }

      if (servicesPosition < screenPosition) {
        services.classList.remove('hide');
        services.classList.add('animate__zoomInLeft');
      }

      if (galleryPosition < screenPosition) {
        gallery.classList.remove('hide');
        gallery.classList.add('animate__zoomInUp');
      }

      if (contactInfoPosition < screenPosition) {
        contactInfo.classList.remove('hide');
        contactInfo.classList.add('animate__fadeInLeft');
      }

      if (contactImagePosition < screenPosition) {
        contactImage.classList.remove('hide');
        contactImage.classList.add('animate__fadeInRight');
      }
    } else {
      showElemets();
    }
  };

  const smoothScrollBackTop = () => {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 300;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, distance * (progress / duration) + startPosition);
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const showHideBackToTop = () => {
    if (window.pageYOffset > 600) {
      // show backToTop
      if (!backToTop.classList.contains('animate__slideInRight')) {
        backToTop.classList.remove('animate__slideOutRight');
        backToTop.classList.add('animate__slideInRight');
        backToTop.style.display = 'flex'; // show
      }
    } else {
      // hide backToTop
      if (backToTop.classList.contains('animate__slideInRight')) {
        backToTop.classList.remove('animate__slideInRight');
        backToTop.classList.add('animate__slideOutRight');
        setTimeout(() => {
          backToTop.style.display = 'none'; // hide
        }, 350);
      }
    }
  };

  // Listeners

  links.forEach((link) => {
    link.addEventListener('click', () => {
      modalMenu.classList.remove('open');
    });
  });

  responsiveMenu.addEventListener('click', () => {
    modalMenu.classList.add('open');
  });

  closeModalMenu.addEventListener('click', () => {
    modalMenu.classList.remove('open');
  });

  window.addEventListener('scroll', scrollApear);
  window.addEventListener('scroll', showHideBackToTop);
  backToTop.addEventListener('click', smoothScrollBackTop);
  window.addEventListener('DOMContentLoaded', getYear);
})();
