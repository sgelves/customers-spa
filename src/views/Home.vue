<template>
  <v-card>
    <v-card-title>
      Cliente
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :items="customers" :headers="headers" :search="search">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.identificador }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.age }}</td>
        <td>{{ props.item.city }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import axios from 'axios'

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
            align: 'center',
            sortable: true,
            value: 'age'
          },
          {
            text: 'Cidade',
            align: 'right',
            sortable: true,
            value: 'city'
          },
        ]
    },
    methods: {
      loadCustomers: async function () {
        var response = await axios.get('http://private-92a969-processoseletivo1.apiary-mock.com/customers')
        var i = 0
        for (var item of response.data) {
          // the library uses the id fields, so we should provide unique ids
          this.customers.push({...item, id:i, identificador: item.id})
          i++
        }
      }
    }
  }
</script>

<style>

/* , (min-device-width: 768px) and (max-device-width: 1024px)  */
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
	
	tr { border: 1px solid #ccc; }
	
	td {
		/* Behave  like a "row" */
		border: none;
		top: 6px;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50% !important; 
    height: 30px !important;
	}
	
	td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
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
}
</style>

