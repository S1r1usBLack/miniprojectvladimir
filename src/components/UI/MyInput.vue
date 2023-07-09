<template>
  <input :value="modelValue" @input="updateInput" type="text" class="myinput">
</template>

<script>
export default {
  name: "my-input",
  props:{
    modelValue:[String,Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.myinput{
  width:100%;
  border: 1px solid lime;
  padding:10px 15px;
  margin-top:15px;
}
</style>