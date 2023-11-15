```typescript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const authenticateUser = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return { status: 'AUTH_SUCCESS', user: userCredential.user };
  } catch (error) {
    return { status: 'AUTH_FAILURE', error: error.message };
  }
};
```