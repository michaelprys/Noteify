<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="i in 3">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eum
          praesentium soluta quo, ratione consequuntur cupiditate odit magnam
          corporis, minus rerum corrupti nulla unde aliquam saepe quidem
          voluptates natus quae!
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
