import { createStore } from 'vuex'
import axios from "axios";

export default  createStore({
  state:()=> ({
   autorization:{
      login:'Admin',
      password:'admin'

    },
      posts: [],
      isPostsLoading: false,
      isCommentsLoading:false,
      selectedSort: '',
      sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ],
      page: 1,
      limit: 100,
      totalPages: 0,
      comments:[],
      currentPost:null,
      searchQuery: '',
  }),
  getters: {
    getLogin(state)
    {
      return state.autorization;
    },
    getPosts(state)
    {
        return state.posts;
    },
      getToken(state){
        return state.token;
     },
     getComments(state){
      return state.comments;
     },
     getCurrentPost(state){
      return state.currentPost;
     },
      sortedPosts(state){
            return [...state.posts].sort((post1, post2) => {
              return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
            })
          },
      sortedAndSearchedPosts(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
          },
  },
  mutations: {
    setAutorization(state,autorization){
      state.autorization=autorization;
    },
      setPosts(state,posts){
            state.posts=posts;
        },
      setLoading(state, bool){
            state.isPostsLoading=bool
        },
      setPage(state,page){
            state.page=page
        },
      setSelectedSort(state, selectedSort){
            state.selectedSort=selectedSort
        },
      setSearchQuery(state,searchQuery){
            state.searchQuery=searchQuery
        },
      setTotalPages(state,totalPages){
            state.totalPages=totalPages
        },
      setToken(state,token){
        state.token=token;
      },
      setCommentsLoading(state, isCommentsLoading){
        state.isCommentsLoading=isCommentsLoading;
      },
      setComments(state,comments){
          state.comments=comments;
      },
      setCurrentPost(state,currentPost){
        state.currentPost=currentPost;
      },

  },
  actions: {
  async fetchPosts({state,commit}){
            try {
            commit('setLoading',true);
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params: {
                  _page: state.page,
                  _limit: state.limit
                }
              });
              commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
              commit('setPosts',  response.data);
            }
            catch (err){
             console.log(err);
            }
            finally {
                commit('setLoading',false);
            }
          },
          async fetchComments({state,commit}){
            try{
              commit('setCommentsLoading',true);
              const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${state.currentPost}/comments`,{
                params: {
                  _page: state.page,
                  _limit: state.limit
                }
              });
              commit('setComments',response.data);
            }
            catch(err){
              alert(err);
            }
            finally{
              commit('setCommentsLoading',false);
            }
        
          },
          updateCurrentPost({commit},value){
            commit('setCurrentPost',value);
          }
  },

  
  modules: {
  },
  namespaced:true

})
