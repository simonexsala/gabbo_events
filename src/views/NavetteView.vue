<template>
  <div class="navette">
    <h1>NAVETTE</h1>
    <div v-for="item in todos" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"; 

try {
  const prenotazioni = await addDoc(collection(db, "navette"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", prenotazioni.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

</script>
