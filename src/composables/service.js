import { ref } from 'vue'
import httpClicent from '@/axios';
import { RouterLink } from 'vue-router';
export default function useService() {

  const loading = ref(false)
  const services = ref({});
  const errors = ref([]);
  const success = ref(null);

  const getServices = async () => {
    loading.value = true;
    await httpClicent.get('courses').then((resp) => {
      if(resp.status){
        services.value = resp.data.data
        return services
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      loading.value = false;
    })
  }

  const popularServices = async () => {
    loading.value = true;
    await httpClicent.get('popular/courses').then((resp) => {
      if(resp.status){
        services.value = resp.data.data
        return services
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      loading.value = false;
    })
  }

  const store = async (props) => {
    loading.value = true;
    await httpClicent.post('courses', props,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((resp) => {
      if(resp.status){
        services.value = resp.data.data
        success.value = "La prestation a été ajoutée avec succès !"
        window.location.href = '/dashboard'
      }
    }).catch((err) => {
      if(err.response.status === 422){

        for(const index in err.response.data.errors){
          errors.value.push(err.response.data.errors[index][0] + '')
        }
      }

      if(err.response.status === 500){
        console.log(err)
        errors.value.push("Une erreur est survenue")
      }
    }).finally(() => {
      loading.value = false;
    })
  }


  return { getServices, popularServices,  services, store, loading, errors, success  }
}
