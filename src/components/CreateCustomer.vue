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
                <v-text-field v-model="editedItem.age" label="Edade"></v-text-field>
                </v-flex>
                <v-flex xs12>
                <v-text-field v-model="editedItem.city" label="Cidade"></v-text-field>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
export default {
  data: () => ({
    editedItem: { name: '', age: '', city: '' }
  })
}
</script>

<style>

</style>
