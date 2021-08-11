<template>
    <div class="container-fluid p-0">
        <div class="memberTop">
            <button class="btn btn-primary">新增會員</button>
            <input type="text" placeholder="請輸入會員帳號" v-on:change="search(members, searchMember)" v-model="searchMember"/>
        
        </div>
        <!-- 會員列表 -->
        <div class="memberSheet">
            <table class="table  table-hover table-borderless">
                <thead class="bg-">
                    <tr>
                        <td>姓名</td>
                        <td>電話</td>
                        <td>VIP</td>
                        <td align="right"></td>
                    </tr>
                </thead>
                <tbody  v-for="member in filteredList" :key="member.id">
                    <tr>
                        <td>{{ member.name }}</td>
                        <td>{{ member.phone }}</td>
                        <td v-if="member.vip">是</td>
                        <td v-else>否</td>
                    <td align="right">
                        <button class="btn btn-secondary">修改</button>
                        <button class="btn btn-danger ">刪除</button>
                    </td>
                </tr>
                </tbody>                
            </table>
            
        </div>
    </div>
    
</template>

<script>

import getPost from '../components/getPost'

export default {
    name: 'Member',
    components: {  },
    data() {
        return {
            members: [],
            test: "apple",
            searchMember: ''            
        }
    },
    computed: {
        //於會員列表中以name搜尋單一會員
        filteredList() {
            return this.members.filter(searchResult => {
                return searchResult.name.includes(this.searchMember) 
                
            })
            
        }
    },

    mounted() {
        fetch('http://localhost:3000/post')
            .then(res  => res.json())
            .then(data => this.members = data)
            .catch(err => console.log(err.message))
            
    }
}
</script>

<style>
.memberTop {
    width: 100%;
    margin: 10px 0;
    display: flex;
}
.memberTop button {
    justify-content:flex-start;
    margin: 0 15px;
}

tr {
    line-height: 50px;
    min-height: 25px;
    height: 50px;

}
td button {
    margin-right: 20px;
}
thead {
    background-color: gainsboro;    
}
tbody {
    background-color: ghostwhite;
}

</style>