import { ref } from 'vue'
import axios from 'axios'

export default function useService() {

  const loading = ref(false)
  const services = ref({});

  const getServices = async () => {
    loading.value = true;
    await axios.get('courses').then((resp) => {
      if(resp.status == 200){
        services.value = resp.data.data
        return services
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      loading.value = false;
    })
  }

  return { getServices, services  }
}
