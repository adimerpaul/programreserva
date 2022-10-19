<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Mi pagina de reserva
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <q-item clickable to="/doctor" exact>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Doctor</q-item-label>
            <q-item-label capttionion>Controlar doctor</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reserva</q-item-label>
            <q-item-label capttionion>Controlar reserva</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/reserva" exact>
          <q-item-section avatar>
            <q-icon name="local_printshop" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reporte</q-item-label>
            <q-item-label capttionion>Controlar reporte</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
