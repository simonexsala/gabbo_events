<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 1rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
  font-size: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 64px;
  height: 64px;

  color: var(--color-text);
}

h1 {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-heading);
}

h2 {
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 3);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
