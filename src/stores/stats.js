import { defineStore } from 'pinia'
import httpClicent from '@/axios'

export const useStatsStore = defineStore({
  id: 'stats',

  state : () => ({
    stats : {},
    loading : false,
    errors : []
  }),

  getters : {
    getStats: (state) => state.stats,
    getLoading: (state) => state.loading,
    getErrors: (state) => state.errors
  },

  actions : {
    async stats(){
      this.loading = true
       httpClicent.get('/stats').then((resp) => {
        this.stats = resp.data
        console.log(this.getStats)
       }).catch((err) => {
        this.errors = err
        console.log(err)
       }).finally(() => {
        this.loading = false
       })
    },
  }

})
