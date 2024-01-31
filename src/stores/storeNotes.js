import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, onSnapshot, setDoc, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes")
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"))
export const useStoreNotes = defineStore('storeNotes' , {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
    async addNote(newNote, date){
      const docRef = await addDoc(notesCollectionRef, {
        title: newNote.value.title,
        content: newNote.value.content,
        date: date
      })
    },
    async removeNote(id){
      // console.log(id)
      await deleteDoc(doc(notesCollectionRef, id))
    },
    async updateNote(id, content){
      await updateDoc(doc(notesCollectionRef, id), {
        title: content.title,
        content: content.content
      });
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