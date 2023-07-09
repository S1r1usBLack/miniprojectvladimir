<template><v-container>
    <v-card
          class="mx-auto"
          max-width="100%"
          variant="outlined"
        >
          <v-card-item>
            <div>
                <div class="d-flex align-items-center">
                        <div class="mr-2">
                             <span class="material-icons" style="font-size: 2rem; color: lime;">account_circle</span>
                         </div>
                         <div>
                             <div class="text-overline mt-1" style="color: lime;">{{comment.email}}</div>
                         </div>
                 </div>
                <div class="text-h6 mb-1">Название:</div>
              <div class="text--primary">{{comment.name}}</div>
          <div class="text-h6 mb-1">Описание: </div>
              <div class="text--primary">{{comment.body}}</div>
            </div>
          </v-card-item>
  
        </v-card>
    </v-container>
    </template>
  
    <script>
  
    export default {
      name:'comment-item',
      props: {
        comment: {
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
  
    </style>