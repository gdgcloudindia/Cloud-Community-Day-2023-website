<template>
  <v-app-bar
    app
    fixed
    clipped-left
    class="white"
    flat
  >
    <v-app-bar-nav-icon
      aria-label="Hamburger Btn"
      @click="toggleDrawer"
      class="d-md-none d-lg-none"
    ></v-app-bar-nav-icon>

    <div class="d-flex align-center" style="padding-left: 6px;">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 110%"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/logo.png')"
          transition="scale-transition"
          width="35"
        />
      </router-link>
    </div>
    <v-toolbar-title class="google-font px-0 pr-5" style="width: 250px">
      <router-link
        to="/"
        class="google-font grey--text text--darken-2"
        style="text-decoration: none; font-size: 110%"
        >GDG Cloud India</router-link
      >
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer> -->
    <v-tabs
      color="#4285F4"
      left
      slider-color="#4285F4"
      :hide-slider="getRouteName()"
      class="hidden-sm-and-down google-font"
    >
      <v-tab
        class="google-font"
        aria-label="toolbar links"
        v-for="(link, i) in links.filter((obj) => obj.meta.showToolbar)"
        :key="i"
        :to="link.to"
        @click="onClick($event, link)"
        style="text-transform: capitalize; font-size: 100%"
        >{{ link.text }}</v-tab
      >
    </v-tabs>
    <!-- <PushNotification /> -->
    <!--  -->
    <!-- v-if="!(this.$route.name === 'Registration')"  -->
    <!-- <v-btn style="text-transform: capitalize;border-radius:5px;padding:00% 40px;" dark color="#4285F4" class="ml-4 google-font hidden-md-and-down" to="/registration" depressed
      >Register</v-btn> -->
    <v-btn
      aria-label="Share Button"
      icon
      v-on:click="shareMe"
      class="hidden-sm-and-up"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// import FDK from "@/config/firebase";
import { mapGetters, mapMutations } from "vuex";
// import PushNotification from "./PushNotification";
export default {
  data: () => ({
    timeout: 6000,
    user: {},
    menu: false,
  }),
  components: {
    // PushNotification,
  },
  computed: {
    ...mapGetters(["links"]),
  },
  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    getRouteName() {
      if (
        this.$route.name === "CodeofConducts" ||
        this.$route.name === "ParticipationTerms"
      ) {
        return true;
      } else {
        return false;
      }
    },
    shareMe(e) {
      if (navigator.share) {
        navigator
          .share({
            title: "GDG Cloud Community Days India",
            url: "https://cloudcommunitydays.in",
          })
          .then(() => {
            console.log("Thanks for sharing");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Not supporting in your browser");
      }
    },
  },
};
</script>

<style>
.v-toolbar .v-toolbar__content {
  /* border-bottom: 1px solid #666666; */
  border-bottom: 1px solid rgb(218, 220, 224);
}</style>