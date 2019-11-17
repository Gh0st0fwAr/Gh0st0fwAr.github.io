<template lang="pug">
.loginwrapper   
   form().login
      .login-title Авторизация
      .login-row
         .login-subtitle Логин
         input(type="text" v-model="formData.name").login__input.login__input--login
      .login-row
         .login-subtitle Пароль
         input(type="password" v-model="formData.password").login__input.login__input--password
      button(@click.prevent="submitForm").login__button Отправить
</template>

<script>
import $axios from "@/requests";
import $router from "@/router"
export default {
   data() {
      return {
         formData: {
         name: "",
         password: ""
         }
      }
   },
   methods: {
      submitForm() {
         $axios.post('https://webdev-api.loftschool.com/login', this.formData).then(response => {
            if (response.status === 200) {
               alert("Авторизация успешна");
               localStorage.setItem("token", response.data.token);
               this.$router.replace('/');
            }
         }).catch(err => {
            console.log(err.response.status);          
            alert(err.response.data.error);            
         });
      },
   },
}
</script>