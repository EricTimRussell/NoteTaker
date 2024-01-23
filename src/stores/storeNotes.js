import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes' , {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          title: "Title 1",
          content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde."
        },
        {
          id: 2,
          title: "Title 2",
          content: "Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde."
        },
        {
          id: 3,
          title: "Title 3",
          content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium."
        },
        {
          id: 4,
          title: "Title 4",
          content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id suscipit voluptate, ut nihil labore facilis vero praesentium repudiandae officia quo, distinctio ducimus! Error fugiat quaerat pariatur, non voluptatibus accusantium unde. this is an even longer note like if i was really writing about something important in a lot of detail and what not."
        }
      ]
    }
  },
  actions: {
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
      this.notes = this.notes.filter(note => {return note.id !== id})
    }
  }
}) 