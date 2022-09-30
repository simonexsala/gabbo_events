<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Eventi</template>
    Autumn Party 1º ottobre alla Rosalpina
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Appuntamenti fissi</template>
    Il mercoledì dei Tre Portoni
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Prevendite</template>
    Acquista l'ingresso per il prossimo evento
  </WelcomeItem>
</template>
