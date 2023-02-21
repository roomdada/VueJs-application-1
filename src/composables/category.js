import { ref } from 'vue'
import axios from 'axios'

export default function useCategory() {

  const loading = ref(false)
  const categories = ref({});
  const error = ref(null);

  const getCategories = async () => {
    loading.value = true;
    await axios.get('categories').then((resp) => {
      if(resp.status == 200){
        categories.value = resp.data.data
        return categories
      }
    }).catch((err) => {
      if(err.response.status == 404){
        error.value = "Une erreur est survenue";
      }
    }).finally(() => {
      loading.value = false;
    })
  }



  return { getCategories, categories, loading, error }
}
