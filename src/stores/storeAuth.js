import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const useStoreAuth = defineStore('storeAuth' , {
  state: () => {
    return {
      // store user email and id when logged in
      user: {}
    }
  },
  actions: {
    init(){
      onAuthStateChanged(auth, (user) => {
        // if user is logged in
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
        } else {
          // if/when user is logged out
         this.user = {}
        }
      })
    },

    loginUser(credentials){
      signInWithEmailAndPassword(auth, credentials.value.email, credentials.value.password)
      .then((userCredential) => {
      const user = userCredential.user
  })
  .catch((error) => {
    console.log('error message', error.message)
  })
    },

    createAccount(credentials){
      createUserWithEmailAndPassword(auth, credentials.value.email, credentials.value.password)
        .then((userCredential) => {
          const user = userCredential.user
      })
    .catch((error) => {
      console.log('error message', error.message)
     })
    },

    logoutUser(){
      signOut(auth).then(() => {
      }).catch((error) => {
        error(error.message)
      })
    }
  },
  getters: {
   
  }
}) 