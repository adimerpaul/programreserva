<template>
<q-page>
  <q-table title="Reservsar realizadas" :rows="reservas">
    <template v-slot:top-right>
      <q-btn @click="descargar" icon="description" label="Descargar Excel" color="green"></q-btn>
    </template>
  </q-table>
<!--  <pre>{{reservas}}</pre>-->
</q-page>
</template>

<script>
import xlsx from "json-as-xlsx"
export default {
  name: `Reserva`,
  data() {
    return {
      reservas:[]
    }
  },
  created() {
    this.getReservas()
  },
  methods: {
    descargar() {
      let data = [
        {
          sheet: "reserva",
          columns: [
            { label: "id", value: "id" },
            { label: "fechaInicio", value: "fechaInicio" },
            { label: "fechaFin", value: "fechaFin" },
            { label: "cliente", value: "cliente" },
            { label: "celular", value: "celular" },
            { label: "doctor", value: (row)=> (row.doctor ? row.doctor.name || "" : "")},// Top level data
            // { label: "Age", value: (row) => row.age + " years" }, // Custom format
            // { label: "Phone", value: (row) => (row.more ? row.more.phone || "" : "") }, // Run functions
          ],
          content: this.reservas,
        },
      ]

      let settings = {
        fileName: "reservar", // Name of the resulting spreadsheet
        // extraLength: 3, // A bigger number means that columns will be wider
        writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
        // RTL: true, // Display the columns from right-to-left (the default value is false)
      }

      xlsx(data, settings) // Will download the excel file
    },
    getReservas() {
      this.reservas=[]
      this.$api.get('reserva').then(res => {
        res.data.forEach(reserva => {
          if (reserva.estado=="1") {
            this.reservas.push(reserva)
          }
        })
      })
    }
  },
}
</script>

<style scoped>

</style>
