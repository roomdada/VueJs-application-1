import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCategoryStore } from "./../composables/category.js";

export const useCategoryStore = defineStore({
  id: 'category',
  state : () => ({
    categories : {},
    loading : false,
    errors : []
  }),

  getters : {
    getCategories: (state) => state.categories,
    getLoading: (state) => state.loading,
    getErrors: (state) => state.errors
  },

  actions : {
    async getCategories(){
      await useCategoryStore.getCategories()
    },
  }

})
