import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotesViewVue from "@/views/NotesView.vue"
import EditNoteView from "@/views/EditNoteView.vue"
import CreateAccountView from "@/views/CreateAccountView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesViewVue
    },
    {
      path: '/editNote/:id',
      name: 'editNote',
      component: EditNoteView
    },
    {
      path: '/createAccount',
      name: 'createAccount',
      component: CreateAccountView
    }
  ]
})

export default router
