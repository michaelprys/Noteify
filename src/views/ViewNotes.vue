<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            placeholder="Add a new note"
            ref="newNoteRef" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            :disabled="!newNote"
            @click="addNote"
            class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <!--  Adding note component -->
    <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/**
 * imports
 */

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

/**
 * notes
 */

const newNote = ref("");
const newNoteRef = ref();

const notes = ref([
  {
    id: "id1",
    content: " Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "id2",
    content: "This is a shorter note!",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
