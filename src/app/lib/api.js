import axios from "axios";

 const API_URL = 'https://wpbackendapi.tutorialsbyte.live/wp-json/wp/v2';

 const wp = axios.create({
     baseURL : API_URL,
 })

 export const get_all_post = async () => {
    try {
      const response = await wp.get('/posts/?_embed=wp:term');
  
      if (response.status === 200) {
        // console.log("Success stuff going");
        return response.data;
      }
    } catch (error) {
      console.log("Not fetched");
      console.log(error);
    }
  };

  export const get_single_post = async(slug)=>{
    try {
        const response = await wp.get(`/posts?slug=${slug}&_embed`);
        if(response.status === 200){
            // console.log("fetched Successfully");
            return response.data[0]
        }
    } catch (error) {
        console.log('Not fetched success');
        console.log(error);
    }
  }
  export const get_most_recent_post = async()=>{
    try {
        const response = await wp.get('/posts?per_page=3&_embed=wp:term');
        if(response.status === 200){
            // console.log("fetched Successfully");
            return response.data
        }
    } catch (error) {
        console.log('Not fetched success');
        console.log(error);
    }
    return [];
  }
  export const get_post_category = async()=>{
    try {
        const response = await wp.get('/posts?_embed=wp:term');
        if(response.status === 200){
            // console.log("fetched Successfully");
            return response.data
        }
    } catch (error) {
        console.log('Not fetched success');
        console.log(error);
    }
  }

  export const fetch_top_blog = async()=>{
    try {
      const response = await wp.get('/posts?per_page=3&orderby=date')
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      console.log('Not fetched success');
        console.log(error);
    }
  }

  