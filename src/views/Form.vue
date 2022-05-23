<template>
  <!-- <v-container fluid> </v-container> -->
  <v-container>
    <v-card>
      <v-card-title>vee validate</v-card-title>
      <v-card-text>
        <ValidationObserver ref="observer">
          <v-form @submit.prevent="submit">
            <ValidationProvider
              rules="max:10,a,b,c"
              v-slot="{ errors }"
              name="eName">
              {{ errors }}
              <v-text-field
                label="name"
                v-model="name"
                :counter="10"
                :error-messages="errors">
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider
              name="phoneNumber"
              :rules="{
                required: true,
                numeric: true,
                digits: 11,
              }"
              v-slot="{ errors }">
              <v-text-field
                v-model="phoneNumber"
                :error-messages="errors"
                :counter="11"
                label="phoneNumber">
              </v-text-field>
            </ValidationProvider>

            <ValidationProvider>
              <v-text-field label="email"> </v-text-field>
            </ValidationProvider>
            <ValidationProvider>
              <v-select label="select" :items="items"> </v-select
            ></ValidationProvider>
            <ValidationProvider>
              <v-checkbox label="체크1" value="1"> </v-checkbox>
            </ValidationProvider>
            <v-btn class="mr-4 primary" type="submit">submit</v-btn>
            <v-btn>clear</v-btn>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max, required, numeric, digits } from 'vee-validate/dist/rules';
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

// extend('max', (value, params) => {
//   const limit = params[0];
//   console.log(params);
//   if (value && value.length > limit) {
//     return `해당필드는 ${limit}자를 초과할 수 없습니다.`;
//   } else {
//     return true;
//   }
// });
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      name: null,
      phoneNumber: null,
      items: [
        { text: '수박', value: '1' },
        { text: '참외', value: '2' },
        { text: '키위', value: '3' },
      ],
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then((result) => {
        console.log(result);
        if (result) {
          alert('양식 제출');
        }
      });
    },
  },
};
</script>

<style></style>
