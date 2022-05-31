import { addDoc, collection, getDocs, onSnapshot, deleteDoc, doc } from './Firebase.js';
import { db } from './confi.js';

export const saveDataPost = (post) => {
  addDoc(collection(db, 'post'), { post });
};

export const dataPost = () => getDocs(collection(db, 'post'));

export const GetDataPost = async () => {
  const postsCollection = [];
  const querySnapshot = await dataPost();
  querySnapshot.forEach((doc) => {
    postsCollection.push(doc);
  });
  return postsCollection;
};
export const onGetPublication = (callback) => onSnapshot(collection(db, 'post'), callback);
export const deletePublication = (id) => deleteDoc(doc(db, 'post', id));

