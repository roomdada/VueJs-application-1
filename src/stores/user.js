import { defineStore } from "pinia"

import axios from "axios"
import { useRouter } from "vue-router"

export const useUserStore = defineStore({
  id : 'user',

  state: () => ({
    loggedIn : localStorage.getItem('token') ? true : false,
    user : localStorage.getItem('user') ?? null,
    token: localStorage.getItem('token') ?? false,
    errors: []
  }),

  getters : {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getErrors: (state) => state.errors,

  },

  actions : {
    async register(props){
      this.errors = [];
      await axios.post('/register', props).then((resp) => {
        if(resp.status == 201){
          window.location.href = '/login';
        }
      }).catch((err) => {
        if(err.response.status == 422){
          for(const index in err.response.data.errors){
            this.errors.push(err.response.data.errors[index][0] + '')
          }
          console.log(this.errors)
        }
      })
    },

    async login(props){
      this.errors = [];
      await axios.post('/login', props).then((resp) => {
        if(resp.status == 200){
          this.user = resp.data.user;
          this.token = resp.data.access_token;
          this.loggedIn = true;
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', JSON.stringify(this.token))
          axios.defaults.headers.common['Authorization'] = this.token
          window.location.href = '/';
        }
      }).catch((err) => {
        if(err.response.status == 422){
          for(const index in err.response.data.errors){
            this.errors.push(err.response.data.errors[index][0] + '')
          }
          console.log(this.errors)
        }
      })
    }
  }
})
