<template>
  <div class="prevendite">
    <!--
    <h1 align="center">Autumn Party</h1>
    <h2 align="center"><i>Prevendite sold out!</i></h2>
  -->
    <div v-if="!paidFor">
      <h1 class="neonText" align="center">
        {{ product.title }}
      </h1>
      <h2 align="center">
        {{ product.location }}, {{ product.date }}
      </h2>

<!-- Multiple selection:
      <div align="center">
        <button 
          class="button" 
          @click="product.price = 15; product.description = 'drink'; selected = true">
          Drink
        </button>
        <button 
          class="button" 
          @click="product.price = 17; product.description = 'birra illimitata'; selected = true">
          Birra
        </button>
      </div>
      -->

      <h3 v-if="selected" align="center">
        <i>€{{ product.price }}0 con {{ product.description }}</i>
      </h3>
      <h3 v-else align="center"><i>Seleziona il tipo di ingresso</i></h3>
    </div>

    <div align="center">
      <span v-if="!loaded" class="loader"></span>
    </div>

    <div v-if="paidfor">
      <h1 align="center">Grazie per aver acquistato!</h1>
      <h2 align="center"><i>ci vediamo il {{ product.date }}!</i></h2>
    </div>
  <div id="paypal-container" class="paypal" align="center"></div>
</div>
</template>

<script>
export default {
  name: "Prevendite",
  data: function () {
    return {
      loaded: false,
      paidFor: false,
      selected: true,
      product: {
        title: "Neon Party",
        price: 14.7,
        location: "Rosalpina",
        date: "22 Ottobre",
        description: "free drink",
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?currency=EUR&client-id=AYt8UxPRZS1k32KYmPOV142g7_hmJbEFpNmooZ73Ts79E6PWT4dNM94czFJzE-EJWF2iV3Ue1yaIRkKP";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'blue',
          layout: 'vertical',
          label: 'paypal',
        },

        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              description: "Gabbo Events " + this.product.title + " " + this.product.date,
              amount: {
                currency_code: "EUR",
                value: this.product.price
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            const transaction = orderData.purchase_units[0].payments.captures[0];
            this.paidFor = true;
            console.log(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
          });
        }
      }).render('#paypal-container');
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .prevendite {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .paypal {
    width: 100%;
  }
}

h1 {
  margin-top: 1rem;
  color: #FFF;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.button {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  width: 45%;
  box-sizing: border-box;

  background-color: #fff;
  border: none;
  border-radius: 50px;
  color: #1b1b1bde;
  cursor: pointer;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
  line-height: 1;
  padding: 12px;
  text-align: center;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:not(:last-child) {
  margin-right: 12px;
}

.button:hover {
  background-color: #F16466;
  color: #fff;
}

button:focus { 
  background-color: #F16466; 
  color: #fff; 
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
} 

.neonText {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
  font-family: "Vibur", sans-serif;
  font-size: 2.6rem;
  text-shadow: 0 0 3vw #F26366;

  animation: neon 1.5s ease infinite;
  -moz-animation: neon 1.5s ease infinite;
  -webkit-animation: neon 1.5s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #babbf1;
  }
}

</style>
