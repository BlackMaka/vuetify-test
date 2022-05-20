<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name : {{ $vuetify.breakpoint.name }}</v-card-title
      >
      <v-container class="grey lighten-3">
        <v-card class="pa-3" :height="height"> 콘텐츠 </v-card>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.mobile :
        {{ $vuetify.breakpoint.mobile }} <br />
        $vuetify.breakpoint.mobileBreakpoint :
        {{ $vuetify.breakpoint.mobileBreakpoint }}</v-card-title
      >
      <v-container class="grey lighten-3">
        <v-dialog
          v-model="dialog"
          width="500"
          :fullscreen="$vuetify.breakpoint.mobile">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-card>
    <v-card>
      <v-card-title> $vuetify.breakpoint.Object </v-card-title>
      <v-container class="grey lighten-3">
        <v-card class="pa-3">
          <div>
            $vuetify.breakpoint.sm :
            {{ $vuetify.breakpoint.sm }}
          </div>
          <div>
            $vuetify.breakpoint.smAndDown (브레이크 포인트가 sm이하일 때 true) :
            {{ $vuetify.breakpoint.smAndDown }}
          </div>
          <div>
            $vuetify.breakpoint.height :
            {{ $vuetify.breakpoint.height }}
          </div>
          <div>
            $vuetify.breakpoint.width :
            {{ $vuetify.breakpoint.width }}
          </div>
          <div>
            $vuetify.breakpoint.thresholds :
            {{ $vuetify.breakpoint.thresholds }}
          </div>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100;
        case 'sm':
          return 300;
        case 'md':
          return 500;
        case 'lg':
          return 700;
        default:
          return 900;
      }
    },
  },
  mounted() {
    console.log(`this.$vuetify`);
    console.log(this.$vuetify);
  },
};
</script>

<style></style>
