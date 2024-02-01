import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const useStoreAuth = defineStore('storeAuth' , {
  state: () => {
    return {

    }
  },
  actions: {
    loginUser(credentials){
      console.log('login user', credentials.value)
    },
    createAccount(credentials){
      createUserWithEmailAndPassword(auth, credentials.value.email, credentials.value.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
      })
    .catch((error) => {
      console.log('error message', error.message)
     })
    }
  },
  getters: {
   
  }
}) 