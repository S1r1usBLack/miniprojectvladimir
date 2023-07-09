<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn{
  padding: 10px 15px;
  background: none;
  color:lime;
  border: 1px solid lime;
  border-radius: 7%;
  margin: 20px;
  position: static;

}
</style>