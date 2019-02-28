<template>
  <v-card>
    <v-card-title>
        <span class="headline">Editar cliente</span>
    </v-card-title>

    <v-card-text>
        <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs12>
            <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field v-model="editedItem.age" label="Edade" type="number" step="1" @change="validateNumber"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-text-field v-model="editedItem.city" label="Cidade"></v-text-field>
            </v-flex>
        </v-layout>
        </v-container>
    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="cancelar">Cancel</v-btn>
        <v-btn color="blue darken-1" flat v-on:click="editCustomer(editedItem.identificador)">Save</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
import services from '@/services/customers'

export default {
  data: () => ({
    editedItem: { name: '', age: '', city: '' }
  }),
  mounted () {
    this.editedItem = this.$route.params
  },
  methods: {
    async editCustomer (id) {
      var response = await services.modifyCustomer(id, {})
      if (response && response.status === 200 && response.data && response.data.status === 'Updated sucessfully!') {
        this.$emit('show-dialog', { type: 'success', message: `Cliente ${this.editedItem.name} atualizado com sucesso!` })
        this.$router.push({ name: 'home' })
      }
    },
    cancelar () {
      this.$router.push({ name: 'home' })
    },
    validateNumber () {
      console.log(this.editedItem.age )
      this.editedItem.age = Math.round(this.editedItem.age)
      if (this.editedItem.age < 0 || this.editedItem.age > 999) {
        this.$emit('show-dialog', { type: 'warning', message: 'números só podem ser positivos de tres dígitos' })
        this.editedItem.age = 0
      }
    }
  }
}
</script>

<style>

</style>
