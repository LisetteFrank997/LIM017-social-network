import { addDoc, collection, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
import { db } from './confi.js';

export const SaveDataPost = (post, title) => {
  addDoc(collection(db, 'post'), { post, title });
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
export const onGetPublication = (callback) => onSnapshot(collection(db, 'posts'), callback);

/* export const GetDataPost = async() => {
      const postsCollection = [];
      const querySnapshot = await dataPost();

      querySnapshot.forEach(doc => {
        conteiner+= `<div>
        <p>${doc.data().title}</p>
        <p>${doc.data().post}</p>
        </div>`;
      });
      return conteiner;
    }; */
