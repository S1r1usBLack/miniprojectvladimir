<template>

  <v-toolbar
 class="navbar">
     <div class="navbar_btns">
       <v-btn @click="showDialog"  v-if="!isAuth" class="auth btn">Авторизоваться</v-btn>
       <v-btn @click="exitAuth()"  v-if="isAuth" class="btn_ic"><span class="material-icons">
logout
</span></v-btn>
  <v-btn @click="$router.push('/')" class="btn_ic">
     <span class="material-icons" >
          home
     </span>

  </v-btn>
    <v-btn @click="$router.push('/about')" class="btn_ic" >
    <span class="material-icons" >
      info
    </span>
  </v-btn>
       <v-btn @click="$router.push('/sicretContent')"  v-if="isAuth" class="btn">Content</v-btn>
     </div>
  </v-toolbar>

  <my-dialog v-model:show="dialogVisible" >
    <my-login
    @log="userLogin"
    />
  </my-dialog>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyLogin  from "@/components/Form/MyLogin"
import MyDialog from "@/components/UI/MyDialog";

import {mapGetters, mapState} from "vuex";
export default {
  name: "my-navbar",
  components: {
    MyButton,
    MyLogin,
    MyDialog,
  },
  data(){
    return{
      dialogVisible: false,
      isAuth:false,
      bottomNav: 3
    }
  },
  created(){
    const isAuth=localStorage.getItem('isAuth');
    if(isAuth){
      this.isAuth=isAuth;
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  exitAuth(){
      this.isAuth=false;
      localStorage.removeItem('token','admin');
      localStorage.removeItem('isAuth');
      this.$router.push('/');
      
  },
    userLogin(log){
      if(document.querySelector('.missAuth'))
      {
        document.querySelector('.missAuth').remove();
      }
      if(log.login===this.getLogin.login && log.password===this.getLogin.password)
       {
        this.dialogVisible=false;
        localStorage.setItem('token','admin');
       this.isAuth=true;
        localStorage.setItem('isAuth',this.isAuth);
       }
      else
       {
        let findedDialogTeg=document.querySelector('.Success');
        let  notSuccessfullTeg=document.createElement('div');
        notSuccessfullTeg.className='missAuth';
        notSuccessfullTeg.innerText='Не верный логин или пароль';
        notSuccessfullTeg.style.color='red';
        findedDialogTeg.append( notSuccessfullTeg);
       }
    }
  },
  computed:{

    ...mapState({
      autorization: state=>state.autorization,
    }),
    ...mapGetters({
      getLogin:'getLogin',
    }),

  }

}
</script>

<style scoped >
.navbar {
  height: 70px;
  background: #2B2B2B;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar_btns{
  margin-left: auto;
}
.btn_ic{
  color: lime;
}
.btn{
  border:solid 1px lime;
  background: none;
  color:lime;
  margin-right: 20px;
}

</style>