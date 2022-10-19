<template>
  <q-page>
    <q-splitter
      v-model="splitterModel"
    >
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
            @update:model-value="cambio"
            v-model="date"
            :events="events"
            event-color="orange"
          />
        </div>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel v-for="(e,i) in events" :name="e" :key="i">
            <div class="text-h4 q-mb-md">{{e}}</div>

            <table style="width: 100%">
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Especialidad</th>
                  <th>Estado</th>
                  <th>Doctor</th>
                </tr>
              </thead>
              <thead>
                <tr v-for="(r,i) in reservas" :key="i">
                  <td>{{r.id}}</td>
                  <td>{{r.doctor.especialidad}}</td>
                  <td>{{r.estado}}</td>
                  <td>{{r.doctor.name}}</td>
                </tr>
              </thead>
            </table>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>

import {date} from "quasar";
import moment from "moment";
export default {
  name: 'IndexPage',
  data () {
    return {
      reservas:[],
      splitterModel: 50,
      date:  date.formatDate(new Date(),'YYYY/MM/DD'),
      events: []
    }
  },
  methods: {
    cambio(fecha){
      this.search(fecha)
    },
    search(date){
      this.$q.loading.show()
      this.reservas=[]
      this.$api.get('http://localhost:8000/api/reserva/'+moment(date,"YYYY/MM/DD").format("YYYY-MM-DD")).then((response) => {
        this.$q.loading.hide()
        this.reservas=response.data
      })
    }
  },
  created() {
    this.search(this.date)
    this.$api.get('http://localhost:8000/api/fecha').then((response) => {
      this.events=[]
      response.data.forEach((item) => {
        let d=item.fecha.replace("-", "/");
        d=d.replace("-", "/");
        this.events.push(d)
      })
    })

  }
}
</script>
