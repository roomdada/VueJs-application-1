import { defineStore } from "pinia"
import { useRouter } from "vue-router"

import httpClicent from "./../axios";
export const useUserStore = defineStore({
  id : 'user',

  state: () => ({
    loggedIn : localStorage.getItem('token') ? true : false,
    user : JSON.parse(localStorage.getItem('user')) ?? null,
    token: localStorage.getItem('token') ?? false,
    errors: []
  }),

  getters : {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getErrors: (state) => state.errors,
    getLoggedIn: (state) => state.loggedIn

  },

  actions : {
    async register(props){
      this.errors = [];
      await httpClicent.post('/register', props).then((resp) => {
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
      await httpClicent.post('/login', props).then((resp) => {
        if(resp.data.status){
          this.user = resp.data.user;
          this.token = resp.data.access_token;
          this.loggedIn = true;
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token',this.token)
          window.location.href = '/';
        }
      }).catch((err) => {
        if(err.response.status == 404){
          this.errors.push('E-mail ou mot de passe incorrect')
        }
      })
    },

    async logout(){
      this.errors = [];
      await httpClicent.post('/logout').then((resp) => {
        if(resp.status){
          this.user = null;
          this.token = null;
          this.loggedIn = false;
          delete httpClicent.defaults.headers.common['Authorization']
          localStorage.removeItem('user')
          localStorage.removeItem('token')
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
    }
  }
})
