<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of all characters</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/storeNotes";


const storeNotes = useStoreNotes()



</script>

<style scoped></style>
