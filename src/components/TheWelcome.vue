<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import IconCommunity from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Eventi</template>
    Prossimo evento alla Villa dei negri.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Appuntamenti fissi</template>
    Tre portoni.
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Prevendite</template>
    Acquista l'ingresso per il prossimo evento.
  </WelcomeItem>
</template>
