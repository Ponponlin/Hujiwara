import { ref } from 'vue'

const getPost = () => {
    const post = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch('http://localhost:3000/post')
            if(!data.ok){
                throw Error('no data available')
            }
            post.value = await data.json()
            console.log(post.value)
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }

        return { post, error, load}
    }
}

export default getPost