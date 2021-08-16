<template>
    <form name="memberForm" v-on:submit.prevent="submit">
        <div class="form-row">
            <div class="form-group col-md-4">            
                <label class="col-form-label col-sm-2">姓名</label>
                <input type="text" class="form-control" v-model="member.name" id="" placeholder="請輸入姓名.." required>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group col-md-4">            
                <label class="col-form-label col-sm-2">手機</label>
                <input type="text" class="form-control" v-model="member.phone" id="" placeholder="請輸入電話.." required>
            </div>
        </div>           

        <div class="form-group">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" v-model="member.vip">
                <label class="form-check-label">是否為VIP</label>                                                
            </div>
        </div>
        
    </form>
    <div class="actionAria">
        <button class="btn btn-primary" @click="submit">新增</button>
        <router-link to='/member'>
            <button class="btn btn-danger" @click="cancel">取消</button>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name: 'memberAdd',
    data(){ 
        return {
            member: { name: '', phone: '', vip:false}
        }
    },
    methods: {
        submit() { 
            console.log(this.member)
        },
        cancel() {
            //reset表單
            Object.assign(this.$data, this.$options.data())
            console.log(this.member)
        }
    },

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