import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPGT-rUfbUXgTeVOtygoxq8JzwCkFJRd0",
  authDomain: "cloud-community-day-2022.firebaseapp.com",
  projectId: "cloud-community-day-2022",
  storageBucket: "cloud-community-day-2022.appspot.com",
  messagingSenderId: "818025936365",
  appId: "1:818025936365:web:ea3e6c4af6743767e9a3e4",
  measurementId: "G-WRE9YMYZKJ"
};

const app = firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });

// const analytics = getAnalytics(app);

export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  // analytics: analytics
};
