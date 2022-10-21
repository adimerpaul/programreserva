<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4 flex flex-center">
        <div class="q-pa-md flex flex-center">
          <div class="row">
            <div class="col-12">
              <q-btn @click="reservaDialog=true" label="Crear reserva" no-caps outline color="primary" icon-right="add_circle" />
            </div>
            <div class="col-12">
              <q-date
                @update:model-value="cambio"
                v-model="date"
                :events="events"
                event-color="orange"
              />
            </div>
          </div>
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
            <div class="text-bold text-grey">lista de citas disponibles ({{reservas.length}})</div>
            <div class="text-h6 text-bold q-mb-md text-blue"> <q-icon name="event" /> {{e}}</div>
            <q-card  >
              <q-card-section>
                <div class="row">
                  <div class="col-1 text-center text-grey">Serial</div>
                  <div class="col-5 text-center text-grey">Doctor</div>
                  <div class="col-3 text-center text-grey">Status</div>
                  <div class="col-3 text-center text-grey">Opciones</div>
                </div>
                <div  v-for="(r,i) in reservas" :key="i" class="row bg-blue-1">
                  <div class="col-1 text-center text-bold">{{i+1}}</div>
                  <div class="col-5 text-left ">
                    <div class="text-bold">{{r.doctor.name}}</div>
                    <div>{{r.fechaInicio.substring(11,16)}} - {{r.fechaFin.substring(11,16)}}</div>
                  </div>
                  <div class="col-3 text-center "> <q-checkbox disable v-model="r.estado" :label="r.estado?'OCUPADO':'LIBRE'"/></div>
                  <div class="col-3 text-center text-grey flex flex-center">
                    <q-btn @click="reservarClick(r)" color="green" icon="event" rounded size="9px" no-caps label="Reservar"/>
                  </div>
                </div>
              </q-card-section>
            </q-card>

<!--            <table style="width: 100%">-->
<!--              <thead>-->
<!--              <tr>-->
<!--                <th>Serial</th>-->
<!--                <th>Especialidad</th>-->
<!--                <th>Estado</th>-->
<!--                <th>Doctor</th>-->
<!--              </tr>-->
<!--              </thead>-->
<!--              <thead>-->
<!--              <tr v-for="(r,i) in reservas" :key="i">-->
<!--                <td>{{r.id}}</td>-->
<!--                <td>{{r.doctor.especialidad}}</td>-->
<!--                <td>{{r.estado}}</td>-->
<!--                <td>{{r.doctor.name}}</td>-->
<!--              </tr>-->
<!--              </thead>-->
<!--            </table>-->
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
        <q-card-section class="q-pb-none">
          <div class="text-h6">Crear reserva</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="reservaCreate">
            <q-select label="Doctor" v-model="reserva.doctors" dense outlined :options="doctors" required/>
            <q-input label="Fecha inicio" v-model="reserva.fechaInicio" type="datetime-local" dense outlined/>
            <q-input label="Fecha fin" v-model="reserva.fechaFin" type="datetime-local" dense outlined/>
            <q-btn :loading="loading" type="submit" class="full-width" color="light-blue-7" icon-right="check" label="Crear reserva" no-caps />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="reservaUpdateDialog">
      <q-card>
        <q-card-section class="q-pb-none">
          <div class="text-h6">Reservar</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="reservaUpdate">
            <q-input disable label="Doctor" v-model="reserva.doctor.name" dense outlined required/>
            <q-input disable label="Especialidad" v-model="reserva.doctor.especialidad" dense outlined required/>
            <q-input disable label="Fecha inicio" v-model="reserva.fechaInicio" type="datetime-local" dense outlined/>
            <q-input disable label="Fecha fin" v-model="reserva.fechaFin" type="datetime-local" dense outlined/>
            <q-input label="Nombre" v-model="reserva.nombre" type="text" dense outlined/>
            <q-input label="Celular" v-model="reserva.celular" type="text" dense outlined/>
            <q-btn :loading="loading" type="submit" class="full-width" color="yellow" icon-right="check" label="Crear reserva" no-caps />
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
      reservaUpdateDialog:false,
      loading:false,
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
    reservaUpdate(){

    },
    reservarClick(r){
      this.reservaUpdateDialog=true;
      this.reserva=r
      console.log(r)
    },
    reservaCreate(){
      if(this.reserva.doctors==undefined){
        this.$q.notify({
          message: 'Debe seleccionar un doctor',
          color: 'negative',
          position: 'top',
          timeout: 2000
        })
        return
      }
      this.loading=true
      this.reserva.doctor_id= this.reserva.doctors.id;
      this.$api.post('reserva/',this.reserva).then(r=>{
        this.reservaDialog = false
        this.fechasAll()
        this.loading=false
        this.re
        this.$q.notify({
          message: 'Reserva creada',
          color: 'positive',
          icon: 'check_circle'
        })
      })
    },
    cambio(fecha){
      this.search(fecha)
    },
    fechasAll(){
      this.$api.get('fecha').then((response) => {
        this.events=[]
        response.data.forEach((item) => {
          let d=item.fecha.replace("-", "/");
          d=d.replace("-", "/");
          this.events.push(d)
        })
      })
    },
    search(date){
      this.$q.loading.show()
      this.reservas=[]
      this.$api.get('reserva/'+moment(date,"YYYY/MM/DD").format("YYYY-MM-DD")).then((response) => {
        this.$q.loading.hide()
        response.data.forEach((item) => {
          item.estado=item.estado==0?false:true
          this.reservas.push(item)
        })
      })
    }
  },
  created() {
    this.$api.get('doctor').then((response) => {
      response.data.forEach((item)=>{
        item.label=item.name+' - '+item.especialidad
        this.doctors.push(item)
      })

    })

    this.search(this.date)
    this.fechasAll()

  }
}
</script>
