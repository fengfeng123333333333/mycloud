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

.content {
  display: flex;
  justify-content: space-between;
}

.leftBox {
  width: 8rem;
  margin-right: 0.2rem;
}

.rightBox {
  flex: 1;
  background: white;
  height: 7.8rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  padding: 0.2rem;
}
.rightBoxContent{
  height: 6.95rem;
  width: 100%;
  background: #FAFAFA;
  border: 0.01rem solid #E6E6E6;
}
.leftBoxtop {
  width: 100%;
  height: 4.23rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxName {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.leftBoxInfo {
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
  display: flex;
  align-items: center;
}

.leftBoxInfo img {
  width: 0.44rem;
  height: 0.44rem;
  margin-right: 0.1rem;
}

.leftBoxLine {
  margin-top: 0.2rem;
  width: 100%;
  height: 0.01rem;
  background: #EBEBEB;
}

.leftContent {
  margin-top: 0.2rem;
}

.leftContentItem {
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.1rem;
}

.leftContentItemDec {
  margin-top: 0.02rem;
  font-weight: 400;
}

.leftBoxBottom {
  margin-top: 0.2rem;
  height: 2.68rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxBottomContent {
  margin-top: 0.2rem;
}

.leftBoxBottomItem {
  height: 0.44rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  color: #333333;
  justify-content: space-between;
}

.leftBoxBottomItemName {
  font-weight: 600;
}

.leftBoxBottomItem:hover {
  background: #FAFAFA;
}

.table {
  width: 100%;
  height: 620px;
  border-radius: 4px;
  background: white;
}

.tableItem {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.01rem solid #EBEBEB;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}
.tableItem:hover {
  background: #FAFAFA;
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

.tableItem img {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.2rem;
}

.member {
  border: 1px solid #1776FF;
  color: #1776FF;
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

.groupNameTop {
  display: flex;
  align-items: center;
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
      <div class="titleName">Detail</div>
      <span class="titlePath">Group1 / Project group 001 / Detail</span>
    </div>
    <div class="content">
      <div class="leftBox">
        <div class="leftBoxtop">
          <div class="leftBoxName">Group info</div>
          <div class="leftBoxInfo">
            <img src="../../../assets/chain_cloud/menu/pic_group_avatar@2x.png" alt="">
            <span>Production Group</span>
          </div>
          <div class="leftBoxLine"></div>
          <div class="leftContent">
            <div class="leftContentItem">
              <span>Path</span>
              <span class="leftContentItemDec">production</span>
            </div>
            <div class="leftContentItem">
              <span>Description</span>
              <span class="leftContentItemDec">This is a wonderful and beautiful team.</span>
            </div>
            <div class="leftContentItem">
              <span>Visibility level</span>
              <span class="leftContentItemDec">Private</span>
            </div>
            <div class="leftContentItem">
              <span>Created on</span>
              <span class="leftContentItemDec">Apr 16,2019 7:54am</span>
            </div>
            <div class="leftContentItem" style="margin-bottom: 0;">
              <span>Storage</span>
              <span class="leftContentItemDec">115.6 MB (115.6 MB repositories, 0 Bytes build artifacts, 0 Bytes
                LFS)</span>
            </div>
          </div>
        </div>
        <div class="leftBoxBottom">
          <div class="leftBoxName">Project info</div>
          <div class="leftBoxBottomContent">
            <div class="leftBoxBottomItem">
              <span class="leftBoxBottomItemName">Production group/project one</span>
              <span>860 KB</span>
            </div>
            <div class="leftBoxBottomItem">
              <span class="leftBoxBottomItemName">Production group/project two</span>
              <span>860 KB</span>
            </div>
            <div class="leftBoxBottomItem">
              <span class="leftBoxBottomItemName">Production group/project three</span>
              <span>860 KB</span>
            </div>
            <div class="leftBoxBottomItem">
              <span class="leftBoxBottomItemName">Production group/project four</span>
              <span>860 KB</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div class="leftBoxName" style="margin-bottom:0.2rem">Group members</div>
        <div class="rightBoxContent">
          <div class="table">
            <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index">
              <img src="../../../assets/chain_cloud/group/pic_avatar01@2x.png" alt="">
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.name }}</span>
                  <div class="biaozhi" v-if="item.isBizoZhi" :class="{ member: item.biaozhi === 'Member' }">{{
                      item.biaozhi
                  }}
                  </div>
                </div>
                <div class="groupNameInfo">{{ item.groupInfo }}</div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: {
        tableList: [
          {
            name: "XXXXXX",
            groupInfo: "Given access 3 years ago",
            isBizoZhi: true,
            biaozhi: "Member"
          },
          {
            name: "XXXXXX",
            groupInfo: "Given access 3 years ago",
            isBizoZhi: true,
            biaozhi: "Owner"
          },
          {
            name: "XXXXXX",
            groupInfo: "Given access 3 years ago",
            isBizoZhi: true,
            biaozhi: "Member"
          },
          {
            name: "XXXXXX",
            groupInfo: "Given access 3 years ago",
            isBizoZhi: true,
            biaozhi: "Member"
          },
          {
            name: "XXXXXX",
            groupInfo: "Given access 3 years ago",
            isBizoZhi: true,
            biaozhi: "Member"
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3
      }
    }
  },
  methods: {
     headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3
      });
    }
  },
  created() {
  },
}
</script>
