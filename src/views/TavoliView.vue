<template>
  <div class="prevendite">
    <h1 class="eventText">
      {{ product.title }}
    </h1>
    <h2 align="center">
      {{ product.location }}, {{ product.date }}
    </h2>

    <div class="container">
      <h1 class="offerta">Promozione speciale</h1>
      <h3 align="center" style="color: #fff">
        <i>€{{ product.price }} a testa, ingresso compreso</i>
      </h3>
      <div style="font-size: 1.1rem; color:#fff">
        Tutto il budget spendibile in alcol
      </div>
      <label >
        <span>
          Partecipanti
        </span>
        <select class="select" v-model="selected" @change="changeNumber($event)">
          <option :selected="true">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </label>
      <h3>
        Totale provvisorio <i>€{{ product.finalAmount }}0</i>
      </h3>
      <div style="font-size: 0.9rem;">
        <i>(Commissione del 2% inclusa)</i>
      </div>
    </div>
    <div align="center">
      <span v-if="!loaded" class="loader"></span>
    </div>
    <div id="paypal-container" class="paypal" align="center"></div>
  </div>
</template>

<script>
export default {
  name: "Prevendite",
  data: function () {
    return {
      active: true,
      soldOut: false,

      optionSelected: false,
      options: true,
      paidFor: false,

      loaded: false,
      selected: 6,
      quantity: 6,
      product: {
        title: "Anniversary Party",
        price: 25,
        location: "Rosalpina",
        date: "27 Dicembre",
        description: "",
        finalAmount: 153.5,
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
    changeNumber (event) {
      this.product.finalAmount = (event.target.value * this.product.price);
      this.product.finalAmount += (this.product.finalAmount / 100) * 2;
      this.product.finalAmount = this.product.finalAmount.toFixed(1);
      this.quantity = event.target.value;
    },

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
              description: "Gabbo Events Tavolo per " + this.quantity + " " + this.product.title + " " + this.product.date,
              amount: {
                currency_code: "EUR",
                value: this.product.finalAmount
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

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h1 {
  margin-top: 1rem;
  color: #FFF;
  text-align: center;
}

h2 {
  text-align: center;
}

h3 {
  font-size: 1.3rem;
  text-align: center;
}

.container {
  text-align: center;
  overflow: hidden;
  background-color: #cba6f722;
  border-radius: 30px;
  padding: 10px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.select {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.3rem;

  background-color: #fff;
  border: none;
  border-radius: 50px;
  color: #1b1b1bde;
  cursor: pointer;
  font-family: "Fira Sans", sans-serif;
  line-height: 1;
  padding-top: 5px;
  padding-bottom: 3px;
  padding-left: 5px;
  transition: all .05s cubic-bezier(.4, 0, .2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
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

button:active { 
  background-color: #F16466; 
  color: #fff; 
}

.wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.wrapper .option {
  background: #fff;
  color: #000;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  border-radius: 50px;
  padding: 0 25px;
  transition: all 0.5s ease;
  margin: 0 10px;
}
input[type="radio"] {
  display: none;
}
input#one:checked ~ .option-1,
input#two:checked ~ .option-2 {
  background: #F16466;
  border-radius: 50px;
}
input#one:checked ~ .option-1 span,
input#two:checked ~ .option-2 span {
  color: #fff;
}
.wrapper .option span {
  font-size: 1.5rem;
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

.offerta {
	font-family: 'Bungee Shade', cursive;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	text-align: center;
	font-weight: normal;
	width: 100%;
	text-align: center;
  margin-top: 0;
	
	background: linear-gradient(
		-45deg, 
		#fff 25%, 
		#f16466 25%, 
		#f16466 50%, 
		#fff 50%, 
		#fff 75%, 
		#f16466 75%, 
		#f16466
		);

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 20px 20px;
	background-position: 0 0;
	animation: stripes 1s linear infinite;
}	

@keyframes stripes {
	100% { 
		background-position: 20px 0, 20px 0, 20px 0;
	}
}
</style>
