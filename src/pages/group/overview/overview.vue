<style scoped>
.app {
  width: 100%;
}

.title {
  height: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.titleName {
  font-size: 0.2rem;
  font-weight: 600;
  color: #333333;
}

.titlePath {
  font-size: 12px;
}

.head {
  width: 100%;
  height: 1rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}

.headLeft {
  display: flex;
  align-items: center;
}

.headLeft img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
}

.headLeftInfo {
  height: 0.6rem;
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.headLeftdec {
  font-size: 0.14rem;
}

.headRight {
  height: 0.32rem;
  background: #1776FF;
  border-radius: 0.04rem;
  padding: 0 0.1rem;
  font-size: 0.13rem;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.headRight img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.01rem;
}

.content {
  width: 100%;
  height: 6.63rem;
  padding: 0.2rem;
  border-radius: 0.04rem;
  background: white;
  margin-top: 0.2rem;
}

.action {
  display: flex;
  justify-content: space-between;
}

.actiontab {
  display: flex;
  align-items: center;
}

.actionitem {
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
  height: 0.32rem;
  margin-right: 0.1rem;
  line-height: 0.32rem;
  cursor: pointer;
  border-radius: 0.04rem;
}

.chooseClass {
  background: rgba(23, 118, 255, 0.1);
  color: #1776FF;
}

.actionSearch {
  display: flex;
  align-items: center;
}

.table {
  margin-top: 0.2rem;
  border-radius: 0.04rem;
  padding-bottom: 0.4rem;
  background: white;
  padding-bottom: 0.4rem;
}

.tableHead {
  width: 100%;
  height: 0.44rem;
  border-bottom: 0.01rem solid #E6E6E6;
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  color: #252B3A;
  background: white;
}

.itemCom {
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}

.wordRight {
  justify-content: flex-end;
}

.itemWidth1 {
  width: 12rem;
}

.itemWidth2 {
  width: 2.4rem;
}

.itemWidth3 {
  width: 1.4rem;
}

.tableItem {
  height: 0.8rem;
  display: flex;
  align-items: center;
  background: white;
  font-size: 14px;
  color: #666666;
  border-bottom: 0.01rem solid #EBEBEB;
}

.tableItem:hover {
  background: #FAFAFA;
}

.item1 {
  display: flex;
  align-items: center;
}

.leibie {
  width: 0.36rem;
  height: 0.36rem;
  background: #1776FF;
  border-radius: 0.04rem;
  text-align: center;
  line-height: 00.36rem;
  font-size: 0.2rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-right: 0.1rem;
}

.item1 img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.1rem;
}

.groupName {
  height: 0.36rem;
  font-size: 0.16rem;
  font-weight: 500;
  color: #333333;
}

.groupNameInfo {
  font-size: 0.14rem;
  color: #666666;
}

.item3 {
  height: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-left: 0.01rem solid #E6E6E6;
  align-items: center;
}

.item3 img {
  width: 0.24rem;
  height: 0.24rem;
}

.groupNameTop {
  display: flex;
  align-items: center;
}

.biaozhi {
  height: 0.2rem;
  border-radius: 0.1rem;
  border: 0.01rem solid #CCCCCC;
  padding: 0.01rem;
  font-size: 0.12rem;
  color: #666666;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.1rem;
  padding: 0 0.1rem;
}

.contentBox {
  height: 5.7rem;
  width: 100%;
  background: #FAFAFA;
  border: 0.01rem solid #E6E6E6;
  margin-top: 0.2rem;
}

.pageStyle {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Overview</div>
      <span class="titlePath">Group1 / Project group 001 / Overview</span>
    </div>
    <div class="head">
      <div class="headLeft">
        <img src="../../../assets/chain_cloud/menu/pic_group_avatar@2x.png" alt="">
        <div class="headLeftInfo">
          <span>Project Group 1</span>
          <div class="headLeftdec">
            <span>group</span>
            <span style="margin-left:0.05rem;margin-right:0.05rem">|</span>
            <span style="color: #1776FF;cursor: pointer;" @click="togroupIndexFun">leave group</span>
          </div>
        </div>
      </div>
      <div class="headRight">
        <img src="../../../assets/chain_cloud/group/icon_add_white@2x.png" alt="">
        <span>New Project</span>
      </div>
    </div>
    <div class="content">
      <div class="action">
        <div class="actiontab">
          <div class="actionitem" v-for="(item, index) in tabList" :key="index" :class="{ chooseClass: item.select }"
            @click="chooseFun(item, index)">{{ item.name }}</div>
        </div>
        <div class="actionSearch">
          <Input placeholder="search" suffix="ios-search" style="width:2rem;margin-right:0.2rem" :clearable="true"
            @keyup.enter.native="searchFun($event)" @on-clear="searchFun" />
          <Select v-model="groupValue" style="width:2rem">
            <Option v-for="(item, index) in groupList" :value="item.value" :key="index">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="contentBox">
        <div class="table">
          <div class="tableHead">
            <div class="itemWidth1 itemCom">Projects</div>
            <div class="itemWidth2 itemCom wordRight">Time</div>
            <div class="itemWidth3 itemCom wordRight">action</div>
          </div>
          <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index">
            <div class="itemWidth1 itemCom">
              <div class="item1">
                <img src="../../../assets/chain_cloud/group/icon_shuqian@2x.png" alt="">
                <div class="leibie">{{ item.group }}</div>
                <div class="groupName">
                  <div class="groupNameTop">
                    <span>{{ item.name }}</span>
                    <div class="biaozhi" v-if="item.isBizoZhi">{{ item.biaozhi }}</div>
                  </div>
                  <div class="groupNameInfo">{{ item.groupInfo }}</div>
                </div>
              </div>
            </div>
            <div class="itemWidth2 itemCom wordRight">{{ item.time }}</div>
            <div class="itemWidth3 itemCom wordRight">
              <div class="item3">
                <img src="../../../assets/chain_cloud/group/icon_xing_sel@2x.png" alt="" style="margin-right:0.2rem"
                  v-if="item.isXing">
                <img src="../../../assets/chain_cloud/group/icon_xing_nor@2x.png" alt="" style="margin-right:0.2rem"
                  v-else>
                <img src="../../../assets/chain_cloud/group/icon_lock_sel@2x.png" alt="" v-if="item.isLock">
                <img src="../../../assets/chain_cloud/group/icon_lock_nor@2x.png" alt="" v-else>
              </div>
            </div>
          </div>
        </div>
        <div class="pageStyle">
          <Page v-if="tableData.total > 0" :total="tableData.total" :current="tableData.page" show-total
            :page-size="tableData.pageSize" size="small" @on-change="headPageFun" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        {
          name: "All public projects",
          select: true
        },
        {
          name: "My projects",
          select: false
        }
      ],
      groupValue: '1',
      groupList: [
        {
          value: '1',
          label: 'Default'
        },
        {
          value: '2',
          label: 'Create time'
        }
      ],
      tableData: {
        tableList: [
          {
            name: "go-statemachine",
            group: "G",
            groupInfo: "go-statemachine",
            time: "18 days ago",
            isLock: true,
            isXing: true,
            isBizoZhi: true,
            biaozhi: "Maintainer"
          },
          {
            name: "Zap",
            group: "Z",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            isLock: true,
            isXing: false,
            isBizoZhi: true,
            biaozhi: "Owner"
          },
          {
            name: "go-statemachine",
            group: "Z",
            groupInfo: "go-statemachine",
            time: "16days ago",
            isLock: false,
            isXing: false,
            isBizoZhi: false,
          },
          {
            name: "go-statemachine",
            group: "G",
            groupInfo: "go-statemachine",
            time: "15 days ago",
            isLock: false,
            isXing: false,
            isBizoZhi: false,
          },
          {
            name: "go-statemachine",
            group: "G",
            groupInfo: "go-statemachine",
            time: "14 days ago",
            isLock: false,
            isXing: false,
            isBizoZhi: false,
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3
      }
    }
  },
  methods: {
    chooseFun(item, index) {
      this.tabList.forEach(element => {
        element.select = false
      })
      item.select = true;
    },
    searchFun() {
      this.$Notice.info({
        title: "暂无搜索",
        background: true,
        duration: 3
      });
    },
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3
      });
    },
    togroupIndexFun(){
      this.$router.push({
        name:"group_index"
      })
    }
  },
  created() {
    let url = window.location.href
    console.log(url)
  },
}
</script>
