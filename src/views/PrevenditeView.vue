<template>
  <div class="prevendite">
    <div v-if="!paidFor">
      <h1 align="center">{{ product.title }}, {{ product.date }}</h1>
      <h2 align="center"><i>€{{ product.price }} con {{ product.description }}</i></h2>
    </div>
    <div v-if="paidFor">
      <h1 align="center">Grazie per aver acquistato!</h1>
      <h2 align="center"><i>Ci vediamo il {{ product.date }}</i></h2>
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
      product: {
        price: 13.50,
        title: "Rosalpina",
        date: "1º Ottobre",
        description: "drink",
      }
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

<style>
@media (min-width: 1024px) {
  .prevendite {
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .paypal {
    min-width: 50vh;
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
