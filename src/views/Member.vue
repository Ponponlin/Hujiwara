<template>
    <div>
        <button>新增會員</button>
        <input type="text" placeholder="請輸入會員帳號或電話">
    </div>
    <!-- 會員列表 -->
    <div v-for="member in members" :key="member.id">
        <!-- <span>{{ member.name }} - 手機:{{ member.phone }} - VIP:{{ member.vip }}</span> -->
        <tr>
            <td>{{ member.name }}</td>
            <td>{{ member.phone }}</td>
            <td>{{ member.vip }}</td>
            <button>修改</button>
            <button>刪除</button>
        </tr>
    </div>
</template>

<script>

import getPost from '../components/getPost'

export default {
    name: 'Member',
    components: {  },
    data() {
        return {
            members: []
        }
    },
    // setup() {
    //     // const { post, error, load} = getPost()
    //     // load()
    //     // return {post, error}

        
    // },
    mounted() {
        fetch('http://localhost:3000/post')
            .then(res  => res.json())
            .then(data => this.members = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>