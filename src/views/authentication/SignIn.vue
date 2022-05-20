<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-10">로그인</div>
            <v-text-field prepend-icon="mdi-email" label="이메일" />
            <v-text-field prepend-icon="mdi-lock-outline" label="비밀번호" />
            <v-btn class="primary text-large" large block rounded>로그인</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
