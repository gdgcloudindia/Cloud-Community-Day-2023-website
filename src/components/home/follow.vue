<template>
  <v-container fluid class="">
    <v-row justify="center" align="center">
      <v-col>
        <p
          class="google-font"
          style="font-size: 3.5vh;line-height: 1.22;font-weight:500; color: #4285F4;"
        >
          Keep in touch with GDG Cloud India for the latest announcements
        </p>
        <p class="google-font mb-2" style="font-size: 2.0vh;">
          
          <br />Stake out
          <a
            href="https://twitter.com/GDGIndia"
            rel="noreferrer"
            target="_blank"
            style="color:#4285F4;text-decoration:none"
          >#GoogleCloudCommunityDay</a>
          for the latest updates and news.
        </p>
        <v-tooltip bottom >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              icon
              style="background:#4285F4"
              class="mx-2"
              v-on="on"
              color="white"
              rel="noreferrer"
              href="https://twitter.com/GDGIndia"
              target="_blank"
              slot="activator"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </template>
          <span>Twitter</span>
        </v-tooltip>

         <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                style="background:#ff0000"
                class="mx-2"
                color="white"
                v-on="on"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCJsZoFDt7rfxPBI1esak8JQ/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </template>
            <span>YouTube</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#cd486b"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.instagram.com/gdg.india/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </template>
            <span>Instagram</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#0e76a8"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.linkedin.com/showcase/gccdi/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </template>
            <span>Linkedin</span>
          </v-tooltip>

          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#4285F4"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://www.facebook.com/events/705286906861605/"
                target="_blank"
                slot="activator"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </template>
            <span>Facebook</span>
          </v-tooltip> -->

          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                text
                icon
                v-on="on"
                style="background:#4285F4"
                class="mx-2"
                color="white"
                rel="noreferrer"
                href="https://github.com/DevFest-India"
                target="_blank"
                slot="activator"
              > 
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip> -->
      </v-col>
    </v-row>
  </v-container>
</template>
