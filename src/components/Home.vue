<template>
  <v-card>
    <v-card-title>
      <h2>Clientes</h2>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :items="customers" :headers="headers" :search="search" :rows-per-page-items="[10, 15, { text: 'Todo', value: -1 }]"
      rows-per-page-text="Clientes por página:">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.identificador }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.age }}</td>
        <td>{{ props.item.city }}</td>
        <td>
          <v-icon @click="editCustomer(props.item)">edit</v-icon>
        </td>

      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import services from '@/services/customers'

export default {
  data () {
    return {
      customers: [],
      headers: [],
      search: ''
    }
  },
  mounted () {
    this.loadCustomers()
    this.headers = [
      {
        text: 'Id',
        align: 'left',
        sortable: true,
        value: 'identificador'
      },
      {
        text: 'Nome',
        align: 'left',
        sortable: true,
        value: 'name'
      },
      {
        text: 'Edade',
        align: 'left',
        sortable: true,
        value: 'age'
      },
      {
        text: 'Cidade',
        align: 'left',
        sortable: true,
        value: 'city'
      },
      {
        text: 'Editar',
        align: 'left',
        sortable: false
      }
    ]
  },
  methods: {
    loadCustomers: async function () {
      var data = await services.getCustomers()
      var i = 0
      for (var item of data) {
        // the library needs an unique id to work
        this.customers.push({ ...item, id: i, identificador: item.id })
        i++
      }
    },
    editCustomer: function (customer) {
      delete customer.id
      this.$router.push({ name: 'customer', params: { ...customer, id: customer.identificador } })
    }
  }
}
</script>

<style>
@media
only screen and (max-width: 767px){

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin: 5% 10% 5% 10%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    top: 6px;
    position: relative;
    padding-left: 50% !important;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  /*
  Label the data
  */
  td:nth-of-type(1):before { content: "Id"; }
  td:nth-of-type(2):before { content: "Nome"; }
  td:nth-of-type(3):before { content: "Edade"; }
  td:nth-of-type(4):before { content: "Cidade"; }
  td:nth-of-type(5):before { content: "Editar"; }
}
</style>
