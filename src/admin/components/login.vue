<template lang="pug">
   form(@submit.prevent="submitForm").login
      .login-title
      .login-row
         .login-subtitle Логин
         input(type="text" v-model="formData.name").login__input.login__input--login
      .login-row
         .login-subtitle Пароль
         input(type="password" v-model="formData.password").login__input.login__input--password
      button.login__button Отправить
</template>

<script>
import $axios from "@/requests";
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
            }
         }).catch(err => {
            console.log(err.response.status);          
            alert(err.response.data.error);            
         });
      }
   },
}
</script>