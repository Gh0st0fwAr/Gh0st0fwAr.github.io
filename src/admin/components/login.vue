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
      .exitbtn X
</template>

<script>
import axios from "axios"
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
      async submitForm() {
         const { data: { token } } = await axios.post('https://webdev-api.loftschool.com/login', this.formData);
         localStorage.setItem("token", token);
      }
   },
}
</script>