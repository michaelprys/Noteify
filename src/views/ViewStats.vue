<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="statsInputCharacters"
      class="input"
      type="text"
      placeholder="Do you love Noteify?"
      v-autofocus />
  </div>
</template>

<script setup>
//imports
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

// store
const storeNotes = useStoreNotes();

// data

const statsInputCharacters = ref("");

// watch number of characters

useWatchCharacters(statsInputCharacters, 50);
</script>
