// site header profile link
const elJsSiteHeaderModal = document.querySelector('.site-header__profile-link');
const elSiteHeaderProfileModal = document.querySelector('.site-header__profil-modal');
const elModalBlockItemLink = document.querySelector('.modal-block__item-link');


if (elJsSiteHeaderModal) {
  elJsSiteHeaderModal.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderProfileModal.classList.toggle('js-site-header-modal');
  });

  elModalBlockItemLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    elSiteHeaderProfileModal.classList.add('empty-block-none');
  });
};


// hero content empty
const elHeroBtnMinus = document.querySelector('.hero__btn-minus');
const elHeroContentEmpty = document.querySelector('.hero__content-empty');
const elHeroBtnPlass = document.querySelector('.hero__btn-plass');
const elProfileLinkNumber = document.querySelector('.profile-link__nomber');

elHeroBtnMinus.addEventListener('click', function () {
  if (elHeroContentEmpty.innerText > 0) {
    elHeroContentEmpty.innerText = Number(elHeroContentEmpty.innerText) -1;
  elProfileLinkNumber.textContent = Number(elHeroContentEmpty.textContent);
  };
});

elHeroBtnPlass.addEventListener('click', function () {
  elHeroContentEmpty.innerText = Number(elHeroContentEmpty.innerText) +1;
  elProfileLinkNumber.textContent = Number(elHeroContentEmpty.textContent);
});


// js hero item button
const elsHeroImg = document.querySelectorAll('.hero__img--active');
const elsJsHeroImgButton = document.querySelectorAll('.js-hero-item-button');
const elHeroItem = document.querySelectorAll('.hero__item');

elsJsHeroImgButton.forEach(function (elbutton) {
  elbutton.addEventListener('click', function () {

    elsJsHeroImgButton.forEach(function (elbutton) {
      elbutton.parentElement.classList.remove('hero__item--active');
    });

    elbutton.parentElement.classList.add('hero__item--active');

    elsHeroImg.forEach(function (elHeroImg) {
      elHeroImg.src = elbutton.dataset.shoesBig;
      elHeroImg.srcset = elbutton.dataset.shoesRetina;
    });

  });
});

// hero modal block
const elHeroImgButton = document.querySelector('.js-hero__img--button');
const elHeroModalBlock = document.querySelector('.hero__modal-block');
const elJsCombinedButton = document.querySelector('.js-modal-combined-button');

if (elHeroImgButton) {
  elHeroImgButton.addEventListener('click', function () {
    elHeroModalBlock.classList.remove('hero__modal-none');
  });
};

if (elJsCombinedButton) {
  elJsCombinedButton.addEventListener('click', function () {
    elHeroModalBlock.classList.add('hero__modal-none');
  })
}