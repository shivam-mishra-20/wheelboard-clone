// This is a utility script to create your first admin user
// Run with: node createAdmin.cjs

const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const readline = require('readline');

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAjcCgHqKlWrSuEYAVkvpB_AJ1C8qMOkR4",
  authDomain: "wheelboard-c1952.firebaseapp.com",
  projectId: "wheelboard-c1952",
  storageBucket: "wheelboard-c1952.firebasestorage.app", 
  messagingSenderId: "1018003092155",
  appId: "1:1018003092155:web:8c8fa5603f222e4d6d6f9e",
  measurementId: "G-R2YV94R8LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter admin email: ', (email) => {
  rl.question('Enter admin password (min 6 characters): ', async (password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Admin user created successfully:', userCredential.user.uid);
    } catch (error) {
      console.error('Error creating admin user:', error.message);
    }
    rl.close();
    process.exit(0);
  });
});
