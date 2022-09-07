<template>
  <div class="eventi">
    <div class="evento">
      <h2>Rosalpina, 1º ottobre</h2>
      <div class="descrizione">
        <i>Birra illimitata fino a mezzanotte</i>
      </div>
    </div>
    <div class="image">
      <img src="../../public/rosalpina.jpg" alt="Rosalpina">
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .eventi {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
  }

  img {
    max-width: 100%
  }

  .image {
    flex-basis: 45%;
    order: 2;
  }

  .evento {
    flex-direction: column;
    padding-right: 2rem;
  }

  .descrizione {
    color: rgb(250, 179, 135);
    font-size: 1.2rem;
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
