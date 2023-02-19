import { ref } from 'vue'
import axios from 'axios'

export default function useCategory() {

  const loading = ref(false)
  const categories = ref({});

  const getCategories = async () => {
    loading.value = true;
    await axios.get('categories').then((resp) => {
      if(resp.status == 200){
        categories.value = resp.data.data
        return categories
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      loading.value = false;
    })
  }



  return { getCategories, categories  }
}
