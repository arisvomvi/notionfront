<template>
  <div class="yp p-4">

    <!-- <gng-form-element label="text" v-model="text" placeholder="text placeholder" /> -->
    {{ text }}
    <gng-form-element class="koko" type="password" label="text" v-model="text" placeholder="text placeholder" state="info" />
    <!-- <gng-form-element type="text" label="text" v-model="text" icon-right="pppo" /> -->

    {{ checkbox }}
    <!-- <gng-form-element type="checkbox" state="info" label="checkbox" v-model="checkbox" value="koko" /> -->

    <gng-form-control class="koko" type="text" state="warning" label="text" v-model="text" placeholder="text placeholder" message="text message" />
    <gng-form-control type="password" state="error" label="text" v-model="text" placeholder="text placeholder" message="text message" disabled />

    <gng-form-control type="checkbox" label="fsd"  v-model="checkbox" value="chdeckbox" message="text message" state="error" />

    {{ email }}
    <gng-form-control type="email" label="email" v-model="email" placeholder="email placeholder" message="email message" />

    {{ number }}
    <gng-form-control type="number" label="number" v-model="number" placeholder="number placeholder" message="number message" />

    {{ password }}
    <gng-form-control type="password" label="password" v-model="password" placeholder="password placeholder" message="password message" />

    {{ tel }}
    <gng-form-control type="tel" label="tel" v-model="tel" placeholder="tel placeholder" message="tel message" />

    {{ url }}
    <gng-form-control type="url" label="url" v-model="url" placeholder="url placeholder" message="url message" />
    
    {{ checkbox }}
    <gng-form-control type="checkbox" label="checkbox" v-model="checkbox" value="checkbox value" message="checkbox message" />

    {{ radio }}
    <gng-form-control type="radio" label="radio" v-model="radio" value="radio value" message="radio message" />

    {{ textarea }}
    <gng-form-control type="textarea" label="textarea" v-model="textarea" placeholder="textarea placeholder" message="textarea message" />



    {{ month }}
    <gng-form-control type="month" label="month" v-model="month" message="month message" />

    {{ week }}
    <gng-form-control type="week" label="week" v-model="week" message="week message" />

    {{ time }}
    <gng-form-control type="time" label="time" v-model="time" message="time message" />

    {{ date }}
    <gng-form-control type="date" label="date" v-model="date" message="date message" />

    {{ datetime }}
    <gng-form-control type="datetime-local" label="datetime-local" v-model="datetime" placeholder="datetime placeholder" message="datetime message" />



    {{ color }}
    <gng-form-control type="color" label="color" v-model="color" message="color message" />


    {{ range }}
    <gng-form-control type="range" label="range" v-model="range" placeholder="range placeholder" message="range message" />

    {{ button }}
    <gng-form-control type="button" label="button" v-model="button" message="button message" />

    {{ file }}
    <gng-form-control type="file" label="file" v-model="file" placeholder="file placeholder" message="file message" />

    {{ hidden }}
    <gng-form-control type="hidden" label="hidden" v-model="hidden" placeholder="hidden placeholder" message="hidden message" />

    {{ image }}
    <gng-form-control type="image" label="image" v-model="image" placeholder="image placeholder" message="image message" />

    {{ reset }}
    <gng-form-control type="reset" label="reset" v-model="reset" placeholder="reset placeholder" message="reset message" />

    {{ search }}
    <gng-form-control type="search" label="search" v-model="search" placeholder="search placeholder" message="search message" />

    {{ submit }}
    <gng-form-control type="submit" label="submit" v-model="submit" placeholder="submit placeholder" message="submit message" />  


  </div>
</template>

<script>
import { ref } from 'vue';
import { inject } from 'vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
  },
  setup() {
    const pages = inject('pages', []);
    return {
      pages
    };
  },
  data() {
    return {
      text: null,
      textarea: null,
      checkbox: [],
      radio: null,
      color: null,
      date: null,
      datetime: null,
      email: null,
      month: null,
      number: null,
      password: null,
      range: null,
      tel: null,
      time: null,
      week: null,
      url: null,
      button: null,
      file: null,
      hidden: null,
      image: null,
      reset: null,
      search: null,
      submit: null
    };
  }

};
</script>

<style lang="scss">

 .yp > * {
  margin-bottom: 20px;
 }
</style>
