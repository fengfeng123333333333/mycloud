<style scoped>
.app {
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
}

.comItem {
  width: 100%;
}

.comItemTitle {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.table {
  width: 100%;
  height: 800px;
  margin-top: 20px;
  border: 1px solid #E6E6E6;
  overflow: hidden;
  overflow-y: auto;
}

.tableItem {
  width: 100%;
  height: 80px;
  padding: 20px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
  align-items: flex-start;
  position: relative;
}

.connect {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.tableContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tableContentTop {
  font-size: 12px;
  color: #666666;
  display: flex;
  align-items: center;
}

.toname {
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
}

.tableContentInfo {
  width: 500px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mergestyle {
  font-size: 12px;
  color: #1776FF;
  margin: 0 10px;
}

.tableContentBottom {
  font-size: 12px;
  color: #333333;
}

.tableItemTime {
  font-size: 12px;
  color: #666666;
  position: absolute;
  top: 20px;
  right: 20px;
}

.grouptype {
  width: 36px;
  height: 36px;
  background: #1776FF;
  border-radius: 4px;
  text-align: center;
  line-height: 36px;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
  margin-right: 10px;
}

.groupContent {
  height: 36px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #666666;
}

.groupContentTop {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.typeImg {
  width: 16px;
  height: 16px;
  margin-left: 5px;
  margin-right: 10px;
}

.type {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #CCCCCC;
  font-size: 12px;
  color: #666666;
}

.tableItemgroupTime {
  position: absolute;
  right: 20px;
  top: 0;
  height: 100%;
  font-size: 12px;
  color: #666666;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.tableItemgroupTimeTop {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;

}

.tableItemgroupTimeTop img {
  width: 16px;
  height: 16px;
}
.tableItemgroupTimeItem{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="comItem">
        <div class="table">
          <div class="tableItem" v-for="(item, index) in projectList" :key="index">
            <div class="grouptype">{{ item.groupType }}</div>
            <div class="groupContent">
              <div class="groupContentTop">
                <span class="groupName">{{ item.name }}</span>
                <img src="../../assets/chain_cloud/teamscan/icon_private@2x.png" alt="" v-if="item.id === 1"
                  class="typeImg">
                <img src="../../assets/chain_cloud/teamscan/icon_internal@2x.png" alt="" v-else-if="item.id === 2"
                  class="typeImg">
                <img src="../../assets/chain_cloud/teamscan/icon_pubilc@2x.png" alt="" v-else class="typeImg">
                <div class="type">{{ item.type }}</div>
              </div>
              <span>{{ item.info }}</span>
            </div>
            <div class="tableItemgroupTime">
              <div class="tableItemgroupTimeTop">
                <div class="tableItemgroupTimeItem">
                  <img src="../../assets/chain_cloud/teamscan/icon_xing_s@2x.png" alt="">
                  <span>{{ item.xingNum }}</span>
                </div>
                 <div class="tableItemgroupTimeItem">
                  <img src="../../assets/chain_cloud/teamscan/icon_branch@2x.png" alt="">
                  <span>{{ item.branchNum }}</span>
                </div>
                 <div class="tableItemgroupTimeItem" v-if="item.isdelet">
                  <img src="../../assets/chain_cloud/teamscan/icon_delete@2x.png" alt="">
                </div>
              </div>
              <span>{{ item.time }}</span>
            </div>
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

      projectList: [
        {
          groupType: "G",
          name: "XXXXX",
          id: 1,
          type: "Maintainer",
          info: "filecoin mining pool rust-fil-sector-builder",
          xingNum: 0,
          time: "Updata 8 days ago",
          branchNum:0,
          isdelet:false
        },
        {
          groupType: "F",
          name: "XXXXX",
          id: 2,
          type: "Maintainer",
          info: "filecoin mining pool rust-fil-sector-builder",
          xingNum: 1,
          time: "Updata 8 days ago",
           branchNum:1,
          isdelet:true
        },
        {
          groupType: "Z",
          name: "XXXXX",
          id: 3,
          type: "Maintainer",
          info: "filecoin mining pool rust-fil-sector-builder",
          xingNum: 2,
          time: "Updata 8 days ago",
           branchNum:2,
          isdelet:false
        },
      ]
    }
  },
  methods: {
  },
  created() {
  },
}
</script>
