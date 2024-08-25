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

    <section>
      <button @click="_fetchBlock">fetchBlock</button>
      <button @click="_fetchBlockChildren">fetchBlockChildren</button>
      <button @click="_appendBlock">appendBlock</button>
      <button @click="_updateBlock">updateBlock</button>
      <button @click="_deleteBlock">deleteBlock</button>
    </section>


  </div>
</template>

<script>
import { fetchPage, updatePage, fetchPageProperty, createPage } from '../services/page.js'
import {fetchBlock, fetchBlockChildren, appendBlock, updateBlock, deleteBlock } from '../services/block.js'
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
        properties: {
          title: [
            {
              text: {
                content: this.newTitle,
              }
            }
          ]
        }
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
        parent: {
          page_id: this.id,
        },
        properties: {
          title: [
            {
              text: {
                content: this.newTitle,
              }
            }
          ]
        }
      }

      createPage(payload).then(response => {
        console.log('response', response);
      });
    },
    _fetchBlock() {
      console.log('_fetchBlock');
      fetchBlock(this.id).then(response => {
        console.log('fetchBlock',response);
        // this.newTitle = response.properties.title.title[0].plain_text;
      })
    },
    _fetchBlockChildren() {
      fetchBlockChildren(this.id).then(response => {
        console.log('fetchBlockChildren',response);
        // this.newTitle = response.properties.title.title[0].plain_text;
      })
    },
    _appendBlock() {
      console.log('_appendBlock');
      const payload = {
        children: [
          {
            paragraph: {
              text: [
                {
                  text: {
                    content: 'yo',
                  },
                },
              ],
            },
          },
        ]
      };

      appendBlock(this.id, payload).then(response => {
        console.log('response', response);
      });
    },
    _updateBlock() {
      const blockId = '6316fc55-48e7-480f-8bce-644d3e91e13a'; // Replace with the actual block ID you want to update
      const blockUpdates = {
        paragraph: {
          text: [
            {
              type: 'text',
              text: {
                content: 'pipi',
              },
            },
          ],
        },
      };

      updateBlock(blockId, blockUpdates)
        .then(response => {
          console.log('Block updated:', response);
        })
        .catch(error => {
          console.error('Error updating block:', error);
        });
    },
    _deleteBlock() {
      const blockId = '6316fc55-48e7-480f-8bce-644d3e91e13a'; // Replace with the actual block ID you want to delete

      deleteBlock(blockId)
        .then(response => {
          console.log('Block deleted:', response);
        })
        .catch(error => {
          console.error('Error deleting block:', error);
        });
    },
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