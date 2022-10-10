<template>
  <div class="eventi">
    <div class="evento">
      <h1 align="center">Rosalpina, 22 Ottobre</h1>
      <h2 align="center"><i>Via Pianizza 27, Trento</i></h2>
    </div>
    <img class="image" src="../../public/rosalpina.jpg" alt="Rosalpina">
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

@media screen and (max-width: 800px) {
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

h2 {
  margin-bottom: 1rem;
}
</style>
