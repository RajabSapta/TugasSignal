import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCaep2sObNB_opTL_A4oIJzzVvMR9F79vo",
  authDomain: "rajab-sh.firebaseapp.com",
  projectId: "rajab-sh",
  storageBucket: "rajab-sh.appspot.com",
  messagingSenderId: "177895857575",
  appId: "1:177895857575:web:e5ad61c96531328a122a82"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}
