const CounterComponent = {
  template: `
                <div class="counter">
                    <h2>Counter: {{ count }}</h2>
                    <button @click="increment">Increment</button>
                </div>
            `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};

// Create the main Vue app
const app = Vue.createApp({});

// Register the CounterComponent globally
app.component('counter-component', CounterComponent);

// Mount the app to the div with id 'duper'
app.mount('#duper');
