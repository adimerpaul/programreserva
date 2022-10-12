<template>
  <q-page>
    <pre>
      {{reservas}}
    </pre>
  </q-page>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      reservas:[]
    }
  },
  methods: {
  },
  created() {
    this.$api.get('http://localhost:8000/api/reserva').then((response) => {
      this.reservas= response.data
    })
  }
}
</script>
