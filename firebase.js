import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const app = initializeApp({
  apiKey: "AIzaSyB0NK-H_SM1kta7xC4Xu7HKAuUHvPq-b_8",
  authDomain: "my-que-523a1.firebaseapp.com",
  projectId: "my-que-523a1",
  storageBucket: "my-que-523a1.firebasestorage.app",
  messagingSenderId: "120143580911",
  appId: "1:120143580911:web:d4f14ca8c54d95aee3551a",
  measurementId: "G-FQMTJSYJT8"
});

export const db = getFirestore(app);
