<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            class="mx-auto"
            width="200"
            :src="require('@/assets/logo.png')"></v-img>
        </router-link>

        <v-card width="460">
          <ValidationObserver>
            <v-card-text class="text-center px-12 py-16">
              <div class="text-h4 font-weight-black mb-10">회원가입</div>
              <v-form>
                <v-text-field
                  label="이메일"
                  clearable
                  prepend-icon="mdi-email"></v-text-field>
                <ValidationProvider v-slot="{ errors }" name="비밀버노">
                  <v-text-field
                    v-model="pass"
                    :error-messages="errors"
                    label="비밀번호"
                    prepend-icon="mdi-lock-outline"></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="비밀번호 확인"
                  :rules="{ confirmed: '비밀버노' }">
                  <v-text-field
                    v-model="passConfirm"
                    :error-messages="errors"
                    label="비밀번호확인"
                    prepend-icon="mdi-lock-outline"></v-text-field>
                </ValidationProvider>

                <v-btn class="success lighten" large block rounded
                  >회원가입</v-btn
                >
              </v-form>
            </v-card-text>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pass: null,
      passConfirm: null,
    };
  },
};
</script>

<style></style>
