<template>
  <div class="eventi">
    <div class="evento">
      <h1 class="eventText" align="center">{{ $event.title }}</h1>
      <h2 align="center">{{ $event.location }}, {{ $event.date }}</h2>
      <h3 align="center"><i>{{ $event.address }}</i></h3>
    </div>
    <img class="image" src="../../public/evento.jpeg" alt="Rosalpina">
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .eventi {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .image {
    max-width: 50%;
    height: auto;
    flex-basis: 45%;
    order: 2;
  }

  .evento {
    flex-direction: column;
    padding-right: 2rem;
  }
}

@media screen and (max-width: 1024px) {
  .image {
    max-width: 100%;
    height: auto;
    flex-basis: 45%;
    order: 2;
  }
}

h1 {
  margin-top: 1rem;
  color: #FFF;
}

h3 {
  margin-bottom: 1rem;
}
</style>
