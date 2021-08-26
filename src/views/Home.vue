<template>
  <div class="home">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col">
          <div class="index-content d-flex align-items-center homeLable">
            <label class="">本週新增會員：</label>
            <span class="">{{ newMember }}</span>
          </div>
        </div>
        <div class="col">
          <div class="index-content d-flex align-items-center homeLable">
            <label class="">本月業績：</label>
            <span class="">{{ performance }}</span>
          </div>
        </div>
        <div class="col">
          <div class="index-content d-flex align-items-center homeLable">
            <label>本月交易筆數：</label>
            <span class="">{{ dealCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      newMember: '14',
      performance: '1500',
      dealCount: '50'
    }
  }
}
</script>

<style>
.homeLable {
  background: lightskyblue;
  border-radius: 8px;
  color: white;
  height: 70px;
  font-size: 26px;
  margin: 10px 5px;
  padding: 10px;
}
.row {
  padding: 0px 10px;
}

</style>
