import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, numeric, max_value, max } from 'vee-validate/dist/rules';
import { PhoneNumberUtil } from 'google-libphonenumber'
import ja from 'vee-validate/dist/locale/ja.json';

extend('required', required);
extend('numeric', numeric);
extend('max_value', max_value);
extend('max', max);
extend('phone', {
  message: '電話番号を入力してください',
  validate(value) {
    const util = PhoneNumberUtil.getInstance()
    try {
      const phoneNumber = util.parseAndKeepRawInput(value, 'JP')
      return util.isValidNumber(phoneNumber)
    } catch (err) {
      return false
    }
  }
});
extend('katakana', {
  message: 'カタカナで入力してください',
  validate(value) {
    return /^[ァ-ン]+$/.test(value);
  }
});
extend('zenkaku', {
  message: '全角で入力してください',
  validate(value) {
    return /^[ぁ-んァ-ン一-龥]/.test(value);
  }
})


// メッセージを設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);