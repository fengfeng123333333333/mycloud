<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabList: [
        {
          name: "IDE",
          href: "",
        },
        {
          name: "TEAM",
          href: "",
        },
        {
          name: "DAPP - SCAN",
          href: "",
        },
        {
          name: "ABOUT US",
          href: "",
        },
      ],
    }
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "index"
      })
    },
    toUserFun() {
      this.$router.push({
        name: "user_index"
      })
    },
  },
  mounted(){
        console.log("ddd",this.$route.path)
    
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-size: 0.16rem;
}

.ivu-page-item {
  border: 0.01rem solid #E6E6E6 !important;
}

</style>
