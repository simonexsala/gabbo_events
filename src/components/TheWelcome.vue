<script setup>
import WelcomeItem from './WelcomeItem.vue'
import EventIcon from './icons/IconEvent.vue'
import HeartIcon from './icons/IconHeart.vue'
import PartyIcon from './icons/IconParty.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EventIcon />
    </template>
    <template #heading>Eventi</template>
    {{ $event.title }}, {{ $event.date }} {{ $event.venue }}{{ $event.location }} 
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <HeartIcon />
    </template>
    <template #heading>Prevendite</template>
    Acquista il biglietto d'ingresso per il prossimo evento
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <PartyIcon />
    </template>
    <template #heading>Tavoli</template>
    Acquista un tavolo in un formato speciale per divertirti ancora di più
  </WelcomeItem>
</template>
