<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">NeoProspecta</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-alert :type="type" class="dialogMessage" :value="isDialog" transition="fade">
        {{message}}
      </v-alert>
      <router-view v-on:show-dialog="showDialog"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: '',
      type: 'success',
      isDialog: false
    }
  },
  methods: {
    showDialog (params) {
      if (params && params.message && params.type) {
        this.type = params.type
        this.message = params.message
        this.isDialog = true
        setTimeout(() => {
          this.isDialog = false
          this.message = ''
        }, 4000)
      }
    }
  }
}
</script>

<style>
.dialogMessage {
    position: fixed;;
    bottom: 5%;
    right: 0;
    height: 50px;
    width: 50%;
    min-width: 320px;
    z-index: 1;
}
</style>
