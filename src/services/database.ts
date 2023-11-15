import firebase from 'firebase/app';
import 'firebase/database';
import { Topic } from '../types/Topic';
import { Video } from '../types/Video';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const db = firebase.database();

export const getTopics = async (): Promise<Topic[]> => {
  const snapshot = await db.ref('/topics').once('value');
  return snapshot.val();
};

export const getVideos = async (topicId: string): Promise<Video[]> => {
  const snapshot = await db.ref(`/videos/${topicId}`).once('value');
  return snapshot.val();
};