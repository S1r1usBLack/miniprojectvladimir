<template>
    <div class="comments">
 <v-card
          class="mx-auto"
          max-width="100%"
          variant="outlined"
          >
    <div v-if="comments.length > 0">
     <div class="head_com">
      <h3>Комментaрии <span class="count_com">{{comments.length}}</span></h3>
      </div>
      <transition-group name="comment-list">
        <comment-item
          v-for="comment in comments"
          :comment="comment"
          :key="comment.id"
      />
      </transition-group>
    </div>
    <h2 v-else style="color: red;">
      Комментарий нет
    </h2>
</v-card>
</div>
  </template>

  <script>
  import CommentItem from "@/components/UI/CommentItem.vue";
  export default {
    name:'comment-list',
    components: {CommentItem},
    props: {
      comments: {
        type: Array,
        required: true,
      }
    },

  }
  </script>

  <style scoped>
  .mx-auto {
  
  margin-top: 15px;
  padding: 15px;
  align-items: center;
  box-shadow: grey  2px 3px ;
}
.count_com{
    color:gray;
}
.comments{
    margin-left: auto;
    margin-right: auto;
    display: flex;
  align-items: center
}
.head_com{
    text-align: center;
  margin-bottom: 20px;
}

  </style>