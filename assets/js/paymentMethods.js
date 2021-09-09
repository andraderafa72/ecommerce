var openPaymentModalButton = document.querySelector('.open-payment-modal');
var closePaymentModalButton = document.querySelector('.close-payment-modal');
var radioCard = document.querySelector('input#card')
var radioPix= document.querySelector('input#pix')
var radioBoleto = document.querySelector('input#boleto');

var contentCard = document.querySelector('.content-card')
var contentPix = document.querySelector('.content-pix')
var contentBoleto = document.querySelector('.content-boleto')

var paymentModal = document.querySelector('.payment-modal')

radioCard.addEventListener(`click`, e => {
  contentCard.classList.add('visible');
  contentPix.classList.remove('visible');
  contentBoleto.classList.remove('visible');
});
radioPix.addEventListener(`click`, e => {
  contentCard.classList.remove('visible');
  contentPix.classList.add('visible');
  contentBoleto.classList.remove('visible');
});
radioBoleto.addEventListener(`click`, e => {
  contentCard.classList.remove('visible');
  contentPix.classList.remove('visible');
  contentBoleto.classList.add('visible');
});

closePaymentModalButton.addEventListener(`click`, e => {
  paymentModal.classList.remove('visible');
});

openPaymentModalButton.addEventListener(`click`, e => {
  paymentModal.classList.add('visible');
});

