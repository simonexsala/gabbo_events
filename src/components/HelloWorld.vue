<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      I migliori eventi di Trento e dintorni <br />
      <div>
        <a target="_blank" href="https://instagram.com/gabbo_events">Instagram</a>
        <br>
        <a href="tel:348 649 3733">348 649 3733</a>
      </div>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.3rem;
  /*
  font-size: 2.6rem;
  */
  top: -10px;
  margin-top: 1rem;
  font-family: 'Monoton', cursive;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
