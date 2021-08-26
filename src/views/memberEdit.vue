<template>
    <form name="memberForm" v-on:submit.prevent="submit">
        <div class="form-row">
            <div class="form-group col-md-4">            
                <label class="col-form-label col-sm-2">姓名</label>                
                <input type="text" class="form-control" placeholder="請輸入姓名.." required>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group col-md-4">            
                <label class="col-form-label col-sm-2">手機</label>
                <input type="text" class="form-control"   placeholder="請輸入電話.." required>
            </div>
        </div>           

        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" >
                <label class="form-check-label">是否為VIP</label>                                                
            </div>
        </div>
        
    </form>
    <div class="actionAria">
        <button class="btn btn-primary" @click="submit">儲存</button>
        <router-link to='/member'>
            <button class="btn btn-danger" @click="cancel">取消</button>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name: 'memberEdit',
    props: [],
    data(){ 
        return {
            memberId: this.$route.params.id,
            members: {},
        }
    },
    methods: {
        submit() { 
            console.log(this.members[0])
        },
        cancel() {
            //reset表單
            Object.assign(this.$data, this.$options.data())
            console.log(this.members)
        }
    },
    mounted() {
        fetch('http://localhost:3000/post?id=' + this.memberId)
            .then(res  => res.json())
            .then(data => this.members = data)            
            .catch(err => console.log(err.message))                    
    }
    

}
</script>

<style>
form {
    text-align: left;
    margin: 10px;
    
}
.actionAria {
    text-align: left;
}
.actionAria button {
    margin: auto 10px;
}
</style>