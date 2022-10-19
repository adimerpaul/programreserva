<template>
<q-page>
  <q-table title="Control doctor" :filter="doctorFilter" :columns="doctorColum" :rows="doctors">
    <template v-slot:top-right>
      <q-btn @click="doctorDialog=true;doctorUpdate=false" color="green" icon="add" />
      <q-input outlined dense v-model="doctorFilter" label="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:body-cell-opcion="props">
      <q-td :props="props">
        <q-btn @click="doctorDelete(props.row)" color="red" icon="delete" />
        <q-btn @click="doctorClick(props.row)" color="yellow" icon="edit" />
      </q-td>
    </template>
  </q-table>
  <q-dialog v-model="doctorDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Agregar doctor</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="doctorCreate">
          <q-input outlined v-model="doctor.name" label="Nombre" />
<!--          <q-input outlined v-model="doctor.especialidad" label="Especialidad" />-->
          <q-select outlined v-model="doctor.especialidad" :options="especialidades" label="Especialidad" />
          <q-input outlined v-model="doctor.descripcion" label="Descripcion" />
          <q-btn :loading="loading" type="submit" class="full-width" color="green" label="Guardar" icon="check" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</q-page>
</template>

<script>
export default {
  name: `Doctor`,
  data(){
    return{
      especialidades: ['Cardiologia','Neurologia','Oftalmologia','Otorrinolaringologia','Pediatría','Psiquiatría','Traumatología'],
      loading:false,
      doctorUpdate:false,
      doctorFilter: '',
      doctorDialog: false,
      doctors:[],
      doctor:{},
      doctorColum:[
        {name:'opcion',label:'Opcion',field:'opcion',sortable:true},
        {name:'id',label:'ID',field:'id',sortable:true},
        {name:'name',label:'name',field:'name',sortable:true},
        {name:'descripcion',label:'descripcion',field:'descripcion',sortable:true},
        {name:'foto',label:'foto',field:'foto',sortable:true},
        {name:'especialidad',label:'especialidad',field:'especialidad',sortable:true},
      ]
    }
  },
  created(){
    this.doctorsAll();
  },
  methods:{
    doctorsAll(){
      this.$q.loading.show()
      this.$api.get('doctor').then((res) => {
        this.doctors=res.data
        this.$q.loading.hide()
      })
    },
    doctorCreate(){
      this.loading=true
      this.$q.loading.show()
      if (this.doctorUpdate){
        this.$api.put('doctor/'+this.doctor.id,this.doctor).then((res) => {
          this.doctorDialog=false;
          this.loading=false;
          this.doctor={}
          this.doctorsAll();
        })
      } else{
        this.$api.post('doctor',this.doctor).then((res) => {
          this.doctorDialog=false;
          this.loading=false;
          this.doctor={}
          this.doctorsAll();
        })
      }

    },
    doctorDelete(row){
      if (confirm('Esta seguro de eliminar el doctor?')) {
        this.$q.loading.show()
        this.$api.delete('doctor/'+row.id).then((res) => {
          this.doctorsAll();
        })
      }
    },
    doctorClick(row){
      this.doctor=row;
      this.doctorUpdate=true;
      this.doctorDialog=true;
    }
  }
}
</script>

<style scoped>

</style>
