
import app from 'firebase/app'
import "firebase/auth"
import 'firebase/firebase-firestore'
const config = {
    apiKey: "AIzaSyCb-XgfzhhEyxmYCQqMD4HXsPLU0kn9dus",
    authDomain: "trello-clone-e0a83.firebaseapp.com",
    databaseURL: "https://trello-clone-e0a83.firebaseio.com",
    projectId: "trello-clone-e0a83",
    storageBucket: "trello-clone-e0a83.appspot.com",
    messagingSenderId: "367746096966",
    appId: "1:367746096966:web:537a08f7f29bf1e1554f47"
  };

 class Firebase{
     constructor(){
         app.initializeApp(config)
         this.auth = app.auth()
         this.db = app.firestore()
     }
     login(email, password){
         return this.auth.signInWithEmailPassword(email,password)

     }

     logout(){
         return this.auth.signOut()
     }

     async register(name, email, password){
         await this.auth.createUserWithEmailAndPassword(email, password)
         return this.auth.currentUser.updateProfile({
             displayName:name
         })
     }
     getCurrentUsername(){
         return this.auth.currentUser && this.auth.currentUser.displayName
     }
     isInitialized(){
         return new Promise(resolve=>{
             this.auth.onAuthStateChanged(resolve)
         })
     }
 }

 export default new Firebase()
