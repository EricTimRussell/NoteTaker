import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, onSnapshot, setDoc, addDoc } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes")

export const useStoreNotes = defineStore('storeNotes' , {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content
          }
          notes.push(note)
        })
        this.notes = notes
      })
    },
    async addNote(newNote){
      const docRef = await addDoc(notesCollectionRef, {
        title: newNote.value.title,
        content: newNote.value.content
      })
    },
    removeNote(id){
      this.notes = this.notes.filter(note =>  note.id !== id)
    },
    updateNote(id, content){
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index] = content
    }
  },
  getters: {
    getNoteContentById: (state) => {
        return (id) => state.notes.find((note) => note.id === id)
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
}) 