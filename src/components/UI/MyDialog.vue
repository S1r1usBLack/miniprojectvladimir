<template>
  <transition-group name="dialog">
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog_content">
      <slot/>
    </div>
  </div>
</transition-group>


</template>

<script>
export default {

  name: 'my-dialog',
  props:{
        show:{
            type:Boolean,
            default:false
        },
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false);
          }

    },
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }

  .dialog_content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  .dialog-item {
    display: inline-block;
    margin-right: 10px;
  }
  .dialog-enter-active,
  .dialog-leave-active {
    transition: all 0.4s ease;
  }
  .dialog-enter-from,
  .dialog-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .dialog-list-move {
    transition: transform 0.8s ease;
  }


</style>