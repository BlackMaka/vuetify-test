<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-10">회원가입</div>
            <v-text-field
              label="이메일"
              clearable
              prepend-icon="mdi-email"></v-text-field>
            <v-text-field
              label="비밀번호"
              prepend-icon="mdi-lock-outline"></v-text-field>
            <v-text-field
              label="비밀번호확인"
              prepend-icon="mdi-lock-outline"></v-text-field>
            <v-btn class="success lighten" large block rounded>회원가입</v-btn>
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
