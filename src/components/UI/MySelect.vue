<template>
  <div class="select">
     <div class="select-arrow-3"></div>
    <div class="select-arrow-3"></div>
<select @change="changeOption">
      <option selected disabled value="">Выберите из списка</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{option.name}}
      </option>
</select>
  </div>
</template>

<script>
export default {
  name: "my-select",
   props : {
      options: {
        type: Array,
        default: () => []
      }
  },
  methods: {
      changeOption(event){
        this.$emit('update:modelValue', event.target.value)
      }
    }

}
</script>

<style scoped>
.select{
position: relative;
  width: 300px;
  margin: 20px 0;
  border: 1px solid #6C7231;
  border-radius: 3px;
  background-color: #E8E8E8;

}
.select:hover{
    box-shadow: 0 0 3px gray;
}
.select select {
  width: 300px;
  height: 28px;
  padding: 0 20px 0 7px;
  background: transparent;
  border: 0;
  appearance: none;            /* remove arrow        */
  -webkit-appearance: none;    /* remove arrow Chrome */
  -moz-appearance: none;       /* remove arrow FF     */
}
.select select::-ms-expand{
    display: none;             /* remove arrow IE     */
}
.select-arrow-3 {
  position: absolute;
  z-index: -9999;
  border: 8px solid transparent;
  border-bottom: 0;
  right: 6px;
}
.select-arrow-3:nth-child(1) {
  top: 11px;
  border-top-color: #6C7231;
}
.select-arrow-3:nth-child(2) {
  top: 8px;
  border-top-color: #FFF;
}
</style>