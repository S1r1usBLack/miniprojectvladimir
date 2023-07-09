<template><v-container>
  <v-card
        class="mx-auto"
        max-width="100%"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">{{post.id}}</div>
              <div class="text-h6 mb-1">Название:</div>
            <div class="text--primary">{{post.title}}</div>
        <div class="text-h6 mb-1">Описание: </div>
            <div class="text--primary">{{post.body}}</div>
          </div>
           <div class="post_btns">
        <v-btn class="post__btns" variant="text"
        @click="$router.push(`/sicretContent/${post.id}`)">
          Комментaрии
        </v-btn>

      </div>
        </v-card-item>

      </v-card>
  </v-container>
  </template>

  <script>

  export default {
    name:'post-item',
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
  </script>

  <style scoped>
  .mx-auto {

    margin-top: 15px;
    padding: 15px;
    align-items: center;
    box-shadow: grey  2px 3px ;
  }
  .post__btns{

    color: lime;
    background: none;
  }

  </style>