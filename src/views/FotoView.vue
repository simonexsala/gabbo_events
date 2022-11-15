<template>
  <div class="foto">
    <div class="evento">
      <h1 align="center">Foto eventi</h1>
      <h2 align="center">
        <a target="_blank" href="https://wetransfer.com/downloads/71a3acd438bd58ce1aab0dca37cac7b920221115101927/134412bf7a0820e0d1698f4487072db820221115101938/99a11c?trk=TRN_TDL_01"><i>{{ $event.title }} &nbsp;</i>
          <svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
          </svg>
        </a>
      </h2>
    </div>
    <a class="imageLink" target="_blank" href="https://wetransfer.com/downloads/71a3acd438bd58ce1aab0dca37cac7b920221115101927/134412bf7a0820e0d1698f4487072db820221115101938/99a11c">
      <img class="image" src="../../public/eventi/foto.jpg" alt="evento">
    </a>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .foto {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .imageLink {
    max-width: 50%;
    height: auto;
    flex-basis: 45%;
    order: 2;
  }

  .image {
    max-width: 100%;
    height: auto;
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

h2 {
  margin-bottom: 1rem;
}
</style>
