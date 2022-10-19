<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4 flex flex-center">
        <div class="q-pa-md flex flex-center">
          <q-btn @click="reservaDialog=true" label="Crear reserva" no-caps outline color="primary" icon-right="add_circle" />
          <q-date
            @update:model-value="cambio"
            v-model="date"
            :events="events"
            event-color="orange"
          />
        </div>
      </div>
      <div class="col-12 col-md-8">
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
      </div>
    </div>



    <!--    <q-splitter-->
    <!--      v-model="splitterModel"-->
    <!--    >-->
    <!--      <template v-slot:before>-->
<!--      </template>-->
<!--      <template v-slot:after>-->
<!--        -->
<!--      </template>-->
<!--    </q-splitter>-->
    <q-dialog v-model="reservaDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Crear reserva</div>
        </q-card-section>
        <q-card-section>
          <q-form>
            <q-select label="Doctor" v-model="reserva.doctors" dense outlined :options="doctors"/>
            <q-input label="Fecha inicio" v-model="reserva.fechaInicio" dense outlined/>
            <q-input label="Fecha fin" v-model="reserva.fechaFin" dense outlined/>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

import {date} from "quasar";
import moment from "moment";
export default {
  name: 'IndexPage',
  data () {
    return {
      reservaDialog: false,
      reservas:[],
      reserva:{
        fechaInicio: moment().format('YYYY-MM-DD 10:00:00'),
        fechaFin: moment().format('YYYY-MM-DD 10:30:00'),
      },
      splitterModel: 50,
      date:  date.formatDate(new Date(),'YYYY/MM/DD'),
      events: [],
      doctors:[]
    }
  },
  methods: {
    cambio(fecha){
      this.search(fecha)
    },
    search(date){
      this.$q.loading.show()
      this.reservas=[]
      this.$api.get('reserva/'+moment(date,"YYYY/MM/DD").format("YYYY-MM-DD")).then((response) => {
        this.$q.loading.hide()
        this.reservas=response.data
      })
    }
  },
  created() {
    this.$api.get('doctor').then((response) => {
      response.data.forEach((item)=>{
        item.label=item.name
        this.doctors.push(item)
      })

    })

    this.search(this.date)
    this.$api.get('fecha').then((response) => {
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
