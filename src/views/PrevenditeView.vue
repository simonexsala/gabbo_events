<template>
  <div class="prevendite">
    <!--
    <h1 align="center">Rosalpina, 22 Ottobre</h1>
    <h2 align="center"><i>Prevendite sold out!</i></h2>
    -->
    <div v-if="!paidFor">
      <h1 class="neonText" align="center">
        {{ product.title }}
      </h1>
      <h2 align="center">
        {{ product.location }}, {{ product.date }}
      </h2>

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

      <h3 v-if="selected" align="center">
        <i>€{{ product.price }} con {{ product.description }}</i>
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
      selected: false,
      product: {
        title: "Neon Party",
        price: 0,
        location: "Rosalpina",
        date: "22 Ottobre",
        description: "",
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
  --neon-text-color: #7287fd;
}

@keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow:
            -0.1rem -0.1rem 0.8rem #fff,
            0.1rem 0.1rem 0.8rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
    }
    20%, 24%, 55% {        
        text-shadow: none;
        box-shadow: none;
    }    
}

</style>
