import { db } from './Config.js'
import { ref } from 'vue'


const getposts = () => {

  const posts = ref([]);
  const load = async () => {
    try {
      const res = await db.collection('threads').get()
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      console.log(err.message);
    }
  }
  return {load, posts}
}

export default getposts;