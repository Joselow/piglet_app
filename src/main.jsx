import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp  } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCC3BSChtOBEjEpKUsDjhGYsSClrZcGbMA",
  authDomain: "piglet-app-3908c.firebaseapp.com",
  projectId: "piglet-app-3908c",
  storageBucket: "piglet-app-3908c.appspot.com",
  messagingSenderId: "549505129830",
  appId: "1:549505129830:web:a893c1d60d4174754a3ca7",
  measurementId: "G-H5WGW66MRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);