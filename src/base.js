import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBLznxAZvBCecLQFY9HFzy9smkyYEwXHmY',
  authDomain: 'seafood-market-ulf.firebaseapp.com',
  databaseURL: 'https://seafood-market-ulf.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp };

export default base;