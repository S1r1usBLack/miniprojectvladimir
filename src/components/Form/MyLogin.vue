<template>

   <v-form class="Success"
    ref="form"
    v-model="valid"
    lazy-validation
  >
     <h4 style="align-self: center">Авторизация</h4>
    <v-text-field
      v-model="autorization.login"
      :counter="30"
      :rules="nameRules"
      label="Login"
      required

    ></v-text-field>

    <v-text-field
      v-model="autorization.password"
      :rules="passwordRules"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-btn style="align-self: flex-end; margin-top: 15px"
      :disabled="!valid"
      color="success"
      @click="userLogin"
    >
      Авторизоваться
    </v-btn>

  </v-form>
</template>

<script>
import myButton from "@/components/UI/MyButton";
import myInput from "@/components/UI/MyInput";
export default {
  name: "my-login",
  components:{
    myButton,myInput,

  },
  data(){
    return{
      autorization: {
        login: '',
        password: '',
      },
       valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters'
      ],
      email: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],

      }
  },
  methods:{
    userLogin(){
        this.$emit('log',this.autorization)
       this.snackbar = true;
    },

  },


}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>