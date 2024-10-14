<template>
  <form class="duper-form" @submit.prevent="submitForm">
    <gng-form-control label="email" v-model="email" icon="ko" placeholder="your email" />
    <gng-form-control label="message" v-model="message" icon="ko" type="textarea" placeholder="your message" />
    <gng-button type="submit" text="submit" />
    <div v-if="responseMessage" class="response-message">{{ responseMessage }}</div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
  data() {
    return {
      email: null,
      message: null,
      responseMessage: null // To store response messages
    }
  },
  methods: {
    submitForm() {
      // Create an object to hold the form data
      const formData = {
        email: this.email,
        message: this.message
      };

      // Send a POST request using Axios to Formspree
      axios.post('https://formspree.io/f/mnnqqdbg', formData, {
        headers: {
          'Accept': 'application/json' // Ensure Formspree accepts the request
        }
      })
      .then(response => {
        // Check response status
        if (response.status === 200) {
          this.responseMessage = 'Message sent successfully!';
          // Optionally reset the form
          this.email = '';
          this.message = '';
        } else {
          this.responseMessage = 'Something went wrong. Please try again.';
        }
      })
      .catch(error => {
        // Handle any errors
        this.responseMessage = 'Error submitting form. Please try again later.';
        console.error('Error submitting form:', error);
      });
    },
  }
}
</script>

<style lang="scss">
.duper-form {
  max-width: 400px;
  margin: 20px auto;
  outline: 1px solid red;
  display: flex;
  gap: 8px;
  flex-direction: column;
  .btn {
    justify-content: center;
  }
}

.response-message {
  margin-top: 10px;
  color: green; // Change this as needed for success messages
}
</style>
