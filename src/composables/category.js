import { ref } from 'vue'
import httpClicent from '../axios';
export default function useCategory() {

  const loading = ref(false)
  const categories = ref({});
  const error = ref(null);

  const recentCategories = async () => {
    loading.value = true;
    await httpClicent.get('recents/categories').then((resp) => {
      if(resp.status){
        categories.value = resp.data.data
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

  const getCategories = async () => {
    loading.value = true;
    await httpClicent.get('categories').then((resp) => {
      if(resp.status){
        categories.value = resp.data.data
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

  return { getCategories, recentCategories, categories, loading, error }
}
