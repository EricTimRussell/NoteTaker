import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, onSnapshot } from "firebase/firestore";

export const useStoreNotes = defineStore('storeNotes' , {
  state: () => {
    return {
      notes: [
      
      ]
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(collection(db, "notes"), (querySnapshot) => {
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
    addNote(newNote){
      let currentDate = new Date().getTime()
      let note = {
        id: currentDate,
        title: newNote.value.title,
        content: newNote.value.content
     }
     this.notes.unshift(note)
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