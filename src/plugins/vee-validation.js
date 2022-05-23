import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import {
  max,
  required,
  numeric,
  digits,
  confirmed,
} from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: '{_field_}필드는 필수값 입니다.',
});
extend('numeric', {
  ...numeric,
  message: '{_field_}필드는 숫자여야 합니다.',
});
extend('digits', {
  ...digits,
  message: '{_field_}필드는 {length}자리여야 합니다.',
});

//extend('max', max);
extend('max', {
  ...max,
  message: '{_field_}필드는 {length}를 초과할 수 없습니다.',
});
extend('confirmed', {
  ...confirmed,
  message: '비밀번호가 일치하지 않습니다.',
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
