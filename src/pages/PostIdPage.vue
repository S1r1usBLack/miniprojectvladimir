<template>
    <div>
        <h1> Cтраница поста с id={{ $route.params.id }}</h1>
        <comment-list
          :comments="getComments"
          v-if="!isCommentsLoading"
      />
      <div v-else >
<div>
    <v-progress-circular
      :rotate="360"
      :size="70"
      :width="7"
      indeterminate
      color="primary"

    >
    </v-progress-circular>
</div>
 </div>
    </div>
</template>
 <script>
import CustomLaoding from "@/components/UI/CustomLaoding";
import CommentList from "@/components/UI/CommentList.vue";

import { mapState, mapGetters, mapActions,mapMutations, } from "vuex";
export default {
  components: {
   
    CommentList,
    CustomLaoding

  },
  methods: {
    ...mapMutations({
    setcurrentPost:'setcurrentPost',
    setComments:'setComments',
    setCurrentPost:'setCurrentPost'
    }),
    ...mapActions({
      fetchComments: 'fetchComments',
      updateCurrentPost:  'updateCurrentPost'
    }),
  },
  mounted() {
    this.updateCurrentPost( parseInt(this.$route.params.id));
    this.fetchComments();
  },
  computed: {
    ...mapState({
      currentPost:state=> state.currentPost,
      comments: state => state.comments,
      isCommentsLoading: state => state.isCommentsLoading,
    }),
    ...mapGetters({
      getComments:'getComments',
    })
  }
}
</script>
<style scoped>
</style>