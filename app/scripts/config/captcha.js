'use strict';

angular
  .module('padelApp')
  .config(captcha);

function captcha(vcRecaptchaServiceProvider, APP) {
  vcRecaptchaServiceProvider.setSiteKey(APP.captchaToken);
}
