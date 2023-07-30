<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      ref="addEditNoteRef"
      placeholder="Edit note"
      label="Edit note">
      <template #buttons>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent">
          Save Note
        </button>
        <button @click="$router.back" class="button is-link is-light ml-4">
          Cancel
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
// imports

import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes";

// router
const route = useRoute();
const router = useRouter();

// store
const storeNotes = useStoreNotes();

// note
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

// save clicked
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
