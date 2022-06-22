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



const elHeroBtnMinus = document.querySelector('.hero__btn-minus');
const elHeroContentEmpty = document.querySelector('.hero__content-empty');
const elHeroBtnPlass = document.querySelector('.hero__btn-plass');

elHeroBtnMinus.addEventListener('click', function () {
  if (elHeroContentEmpty.innerText > 0) {
    elHeroContentEmpty.innerText = Number(elHeroContentEmpty.innerText) -1;
  }
});

elHeroBtnPlass.addEventListener('click', function () {
  elHeroContentEmpty.innerText = Number(elHeroContentEmpty.innerText) +1;
});
