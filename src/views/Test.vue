<template>
  <div class="page-test">

    <section>
      <input type="text" v-model="id">

      <input type="text" v-model="newTitle" placeholder="newTitle">
    </section>
    

    <section>
      <button @click="_fetchPage">fetchPage</button>
      <button @click="_updatePage">updatePage</button>
      <button @click="_fetchPageProperty">fetchPageProperty</button>
      <button @click="_createPage">createPage</button>
    </section>


  </div>
</template>

<script>
import {fetchPage, updatePage, fetchPageProperty, createPage} from '../services/page.js'
export default {
  data() {
    return {
      id: '8a4268397a4545dca8910d682c84715f',
      newTitle: '',
    }
  },
  methods: {
    _fetchPage() {
      console.log('getPage');
      fetchPage(this.id).then(response => {
        console.log(response);
        this.newTitle = response.properties.title.title[0].plain_text;
      })
    },
    _updatePage() {
      console.log('updtPage');
      const payload = {
        title: [
          {
            text: {
              content: this.newTitle,
            }
          }
        ]
      };

      updatePage(this.id, payload).then(response => {
        console.log('response', response);
      });
    },
    _fetchPageProperty() {
      console.log('_fetchPageProperty');
      const payload = 'title'

      fetchPageProperty(this.id, payload).then(response => {
        console.log('response', response);
      });
    },
    _createPage() {
      const payload = {
        "parent": {
          "id": this.id,
        },
        "properties": {

          "Name": {
            "title": [
                {
                    "text": {
                        "content": "Tuscan kale"
                    }
                }
            ]
        }

        }
    
      }

      createPage(payload).then(response => {
        console.log('response', response);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.page-test {
  input {
    @apply border p-2;
  }
  section {
    @apply flex items-center gap-4 flex-wrap p-2 border m-2; 
    button {
      @apply p-1 border;
    }
  }
}
</style>