<template>
  <div class="page-test">

    <h1>Admin page</h1>
    <div>{{ adminId }}</div>

    <br>

    <h3>Pages</h3>
    <section>
      <input type="text" v-model="pageId" placeholder="page id">
      <button :disabled="pageId.length == 0" @click="_fetchPage(pageId)">fetch</button>
    </section>

    <h3>Blocks</h3>
    <section>
      <input type="text" v-model="blockId" placeholder="block id">
      <button :disabled="blockId.length == 0" @click="_fetchBlock(blockId)">fetch</button>
    </section>

    <h3>Databases</h3>
    <section>
      <input type="text" v-model="databaseId" placeholder="database id">
      <button :disabled="databaseId.length == 0" @click="_fetchDatabase(databaseId)">fetch</button>
    </section>

    

    <ul class="results">
      <li v-for="item in adminBlockChildren" :key="item.id">
        <h6>{{ item.type }}</h6>
        <div @click="copyText(item.id)">{{ item.id }}</div>
      </li>
    </ul> 
  
    <!-- <section>
      <input type="text" v-model="id">

      <input type="text" v-model="newTitle" placeholder="newTitle">
    </section>

    <section>
      <input type="text" v-model="databaseId">
      <button @click="querydatabase">querydatabase</button>
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

    <section>
      <button @click="_fetchDatabase">fetchDatabase</button>
      <button @click="_queryDatabase">queryDatabase</button>
    </section>

    <hr>

    -->


  </div>
</template>

<script>
import { fetchPage, updatePage, fetchPageProperty, createPage } from '../services/page.js'
import {fetchBlock, fetchBlockChildren, appendBlock, updateBlock, deleteBlock } from '../services/block.js'
import {fetchDatabase, queryDatabase } from '../services/databases.js'
export default {
  data() {
    return {
      databaseId: '',
      pageId: '',
      blockId: '',

      adminId: '8a4268397a4545dca8910d682c84715f',
      adminBlockChildren: [],
    }
  },
  mounted() {
    fetchBlockChildren(this.adminId).then(response => {
      console.log(response);
      this.adminBlockChildren = response.results;
    });
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text);
    },

    _fetchPage(id) {
      fetchPage(id).then(response => {
        console.log(response);
      })
    },
    _updatePage() {
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
      fetchBlock(id).then(response => {
        console.log(response);
      })
    },
    _fetchBlockChildren(id) {
      fetchBlockChildren(id).then(response => {
        console.log(response);
      })
    },
    _appendBlock() {
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
        console.log(response);
      });
    },
    _updateBlock(id) {
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

      updateBlock(id, blockUpdates)
        .then(response => {
          console.log(response);
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

    _fetchDatabase(id) {
      fetchDatabase(id).then(response => {
        console.log(response);
      });
    },
    _queryDatabase(id) {
      const query = {
        // filter: {
        //   property: 'Status',
        //   select: {
        //     equals: 'Completed'
        //   }
        // },
        // sorts: [
        //   {
        //     property: 'Name',
        //     direction: 'ascending'
        //   }
        // ]
      };

      queryDatabase(id, query)
        .then(response => {
          console.log('Query result:', response.results);
        })
        .catch(error => {
          console.error('Error querying database:', error);
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
  .results {
    outline: 1px solid;;
    li {
      @apply flex items-center text-sm gap-2 mb-2;
    }
  }
}
</style>