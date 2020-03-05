<template>
  <div class="home container">
    <h1>Expense Tracker</h1>

    <div class="row">
      <div class="col s12" id="total" @click="table = 'total'">
        <h4>Total Balance: {{ totalBalance | currency}}</h4>
      </div>
      <div class="col s6" id="income" @click="table = 'income'">
        <h4>Total Income</h4>
        <h5>{{totalIncome | currency}}</h5>
      </div>
      <div class="col s6" id="expense" @click="table = 'expense'">
        <h4>Total Expense</h4>
        <h5>{{totalExpense | currency}}</h5>
      </div>
    </div>
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
          <div class="col s8 offset-s2" :id="table">
            <table class="centered" v-if="table === 'total'">
              <tr id="table-heading">
                <th>Transacation Name</th>
                <th>Amount</th>
              </tr>

              <tr v-for="i in orderBy(items, 'createdAt', -1)" :key="i.id">
                <td>{{ i.text | capitalize}}</td>
                <td>{{ i.amount | currency }}</td>
              </tr>
            </table>
            <table class="centered" v-if="table === 'income'">
              <tr>
                <th>Transacation Name</th>
                <th>Amount</th>
              </tr>

              <tr v-for="i in orderBy(incomeTransaction, 'createdAt', -1)" :key="i.id">
                <td>{{ i.text | capitalize}}</td>
                <td>{{ i.amount | currency }}</td>
              </tr>
            </table>
            <table class="centered" v-if="table === 'expense'">
              <tr>
                <th>Transacation Name</th>
                <th>Amount</th>
              </tr>

              <tr v-for="i in orderBy(expenseTransaction, 'createdAt', -1)" :key="i.id">
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

const token = {
  headers: {
    'auth-token': `${localStorage.access_token}`
  }
};
export default {
  name: 'Home',
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      items: [],
      item: {
        text: '',
        amount: ''
      },
      balance: 0,
      expense: 0,
      income: 0,
      err: [],
      table: 'total'
    };
  },
  computed: {
    totalBalance() {
      const items = this.items;
      const amounts = items.map(items => items.amount);
      return amounts.reduce((acc, item) => (acc += item), 0);
    },
    totalExpense() {
      const items = this.items;
      const amounts = items.map(items => items.amount);
      const expenses = amounts.filter(function(value) {
        return value < 0;
      });

      return expenses.reduce((acc, item) => (acc += item), 0);
    },
    totalIncome() {
      const items = this.items;
      const amounts = items.map(items => items.amount);
      const incomes = amounts.filter(function(value) {
        return value > 0;
      });

      return incomes.reduce((acc, item) => (acc += item), 0);
    },
    incomeTransaction() {
      const items = this.items;
      var item;
      const incomeTransactions = [];

      for (item in items) {
        if (items[item].amount > 0) {
          incomeTransactions.push(items[item]);
        }
      }
      return incomeTransactions;
    },
    expenseTransaction() {
      const items = this.items;
      var item;
      const expenseTransactions = [];

      for (item in items) {
        if (items[item].amount < 0) {
          expenseTransactions.push(items[item]);
        }
      }
      return expenseTransactions;
    }
  },
  async created() {
    await this.getTransactions();
  },
  async mounted() {},

  methods: {
    async addTransaction() {
      try {
        await axios.post(
          'https://owlf-expense-tracker.herokuapp.com/api/v1/transactions',
          {
            text: this.item.text,
            amount: this.item.amount
          },
          token
        );
        await this.getTransactions();
        this.totalBalance();
        this.item.text = '';
        this.item.amount = '';
      } catch (err) {
        this.error = err;
      }
    },
    async getTransactions() {
      try {
        const res = await axios.get(
          'https://owlf-expense-tracker.herokuapp.com/api/v1/transactions',
          token
        );

        this.items = res.data.data;
      } catch (err) {
        this.error = err;
      }
    },
    async deleteTranasactions() {}
  }
};
</script>

<style lang="css">
.input-field label {
  color: rgb(32, 32, 32);
}

#income {
  background-color: rgb(3, 61, 3);
  color: white;
  cursor: pointer;
}

#expense {
  background-color: rgb(99, 3, 3);
  color: white;
  cursor: pointer;
}

#total {
  background-color: rgb(3, 87, 87);
  color: white;
  cursor: pointer;
}

th {
  text-decoration: underline;
}
</style>