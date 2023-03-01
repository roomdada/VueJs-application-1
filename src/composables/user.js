import { ref } from 'vue'
import httpClicent from '@/axios';
export default function useUser() {

  const loading = ref(false)
  const services = ref({});
  const error = ref(null);

  const userServices = async () => {
    loading.value = true;
    await httpClicent.get('user/courses').then((resp) => {
      if(resp.status){
        services.value = resp.data.data
        return categories
      }
    }).catch((err) => {
      if(! err.status ){
        error.value = "Une erreur est survenue";
      }
    }).finally(() => {
      loading.value = false;
    })
  }

  return { userServices, error, loading, services}
}
