//Auth
export const signInWithEmailAndPassword = jest.fn(( email , password) => Promise.resolve({}));
export const registerWithEmail = jest.fn();
export class GoogleAuthProvider {}
export const createUserWithEmailAndPassword = ( ) => Promise.resolve({});
export const sendEmailVerification = () => Promise.resolve({});
export const signOut = jest.fn()
export const signInWithPopup = () => Promise.resolve({});
export const getAuth = () => ({});

//Inicializar
export const initializeApp = () => ({});
export const getFirestore = () => ({});
// jest.fn()

export const collection = () => ({});
export const getDocs = (collection) =>({})
export const addDoc = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({}); 


