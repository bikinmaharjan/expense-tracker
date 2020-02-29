<template>
  <div class="home container">
    <h1>Expense Tracker</h1>

    <h3>Total Balance: {{ balance | currency}}</h3>
    <div class="main">
      <form>
        <div class="row">
          <div class="input-field col s6">
            <input type="text" id="name" v-model="item.text" class="validate" />
            <label for="name">Expense Name</label>
          </div>
          <div class="input-field col s6">
            <input type="text" id="amount" v-model="item.amount" class="validate" />
            <label for="amount">Amount</label>
          </div>
        </div>
        <button @click.prevent="addTransaction()" class="waves-effect waves-light btn">Add</button>
      </form>
      <div class="list">
        <h3>History</h3>
        <div class="row">
          <div class="col s8 offset-s2">
            <table class="centered">
              <tr>
                <th>Transacation Name</th>
                <th>Amount</th>
              </tr>

              <tr v-for="i in orderBy(items, 'createdAt', -1)" :key="i.id">
                <td>{{ i.text | capitalize}}</td>
                <td>{{ i.amount | currency }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import axios from 'axios';
import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

export default {
  name: 'Home',
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      items: {
        text: '',
        amount: ''
      },
      item: {
        text: '',
        amount: ''
      },
      balance: 0,
      expense: 0,
      income: 0
    };
  },
  async mounted() {
    await this.getTransactions();
    this.totalBalance();
    console.log(this.balance);
  },

  methods: {
    async addTransaction() {
      try {
        await axios.post('http://localhost:5555/api/v1/transactions', {
          text: this.item.text,
          amount: this.item.amount
        });
        await this.getTransactions();
        this.totalBalance();
        this.item.text = '';
        this.item.amount = '';
      } catch (err) {
        console.log(err);
      }
    },
    async getTransactions() {
      try {
        const res = await axios.get(
          'http://localhost:5555/api/v1/transactions'
        );

        this.items = res.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    totalBalance() {
      const items = this.items;
      const amounts = items.map(items => items.amount);
      this.balance = amounts.reduce((acc, item) => (acc += item), 0);
    }
  }
};
</script>

<style lang="css">
.input-field label {
  color: rgb(32, 32, 32);
}
</style>