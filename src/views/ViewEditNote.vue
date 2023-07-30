<template>
  <div class="edit-note">
    <AddEditNote ref="addEditNoteRef">
      <template #buttons
        ><button class="button is-link has-background-success">
          Add New Note
        </button></template
      >
    </AddEditNote>
  </div>
</template>

<script setup>
// imports

import AddEditNote from "@/components/Notes/AddEditNote.vue";
</script>
