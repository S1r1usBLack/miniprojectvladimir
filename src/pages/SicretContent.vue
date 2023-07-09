<template>
<div style="display: flex; flex-direction: column; align-items: center;">
  <h1>Страница с постами</h1>

  <div style="display: flex;">
    <v-card class="pa-4" flat height="200px" width="600px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg" style="margin-right: 10px;">
      <v-toolbar width="550px" dense floating>
        <v-text-field hide-details prepend-icon="mdi-magnify" single-line :model-value="searchQuery" @update:model-value="setSearchQuery"></v-text-field>
      </v-toolbar>
    </v-card>

    <div style="margin-left: 10px; height: 30px;">
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options=sortOptions></my-select>
    </div>
  </div>

  <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading"></post-list>

  <div v-else>
    <div>
      <v-progress-circular :rotate="360" :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</div>
</template>

<script>
import MySelect from "@/components/UI/MySelect";
import CustomLaoding from "@/components/UI/CustomLaoding";
import PostList from "@/components/UI/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import { mapState, mapGetters, mapActions,mapMutations, } from "vuex";
export default {
  components: {
    MyInput,
    MyButton,
    MyDialog,
    PostList,
    CustomLaoding,
    MySelect

  },

  name: "SicretContent.vue",

  methods: {
    ...mapMutations({
      setPage: 'setPage',
      setPosts:'setPosts',
      setSearchQuery:'setSearchQuery',
      setSelectedSort: 'setSelectedSort'
    }),
    ...mapActions({

      fetchPosts: 'fetchPosts'
    }),
    changeOptions(event){
        this.$emit('setSelectedSort', this.$emit('update:modelValue', event.target.value));
    }

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
      isPostsLoading: state => state.isPostsLoading,
      selectedSort: state=>state.selectedSort,
       searchQuery: state=>state.searchQuery,
      sortOptions: state=>state.sortOptions,
      page: state => state.page,
      limit: state => state.limit,
      totalPages: state => state.totalPages,
    }),
    ...mapGetters({
      getPosts:'getPosts',
        sortedPosts:'sortedPosts',
        sortedAndSearchedPosts:'sortedAndSearchedPosts',
    })
  }
}
</script>

<style scoped>
my-select{
}


</style>