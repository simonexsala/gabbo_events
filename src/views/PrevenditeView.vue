<template>
  <div class="prevendite">
    <div v-if="!paidFor">
      <h1 align="center">{{ product.title }}, {{ product.date }}</h1>
      <h2 align="center">€{{ product.price }} con {{ product.description }}</h2>
    </div>
    <div v-if="paidFor">
      <h1>Acquistato</h1>
      <img src="https://media.giphy.com/media/rf1wOXqAMKVT22uPNw/giphy.gif">
    </div>
    <div id="paypal-container" class="paypal"></div>
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
        price: 18.00,
        title: "Rosalpina",
        date: "1 Ottobre",
        description: "birra illimitata fino a mezzanotte"
      }
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?currency=EUR&client-id=Ac9oS9mmEEJPL2XIfkDQOKVKHMK7mDPv3Qn7A2JMSJeAbb2gGbS5i4NRprRHXCNjl8v58meYWFAl8v0-";
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
              description: this.product.title,
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
            alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
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
    min-width: 80vh;
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
