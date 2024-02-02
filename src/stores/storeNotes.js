import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, onSnapshot, setDoc, addDoc, deleteDoc, doc, updateDoc, query, orderBy, where } from "firebase/firestore"

const notesCollectionRef = collection(db, "notes")
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"))

export const useStoreNotes = defineStore('storeNotes' , {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotesByCreatorId(creatorId) {
      onSnapshot(notesCollectionQuery, where("creatorId", "==", creatorId), (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            date: doc.data().date,
            creatorId: doc.data().creatorId
          }
          notes.push(note)
        })
          this.notes = notes
      })
    },
    async addNote(newNote, date, userId){
      const docRef = await addDoc(notesCollectionRef, {
        title: newNote.value.title,
        content: newNote.value.content,
        date: date,
        creatorId: userId
      })
    },
    async removeNote(id){
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