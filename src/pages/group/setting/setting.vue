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
  background: white;
  height: 7.8rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxName {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.contentInfo {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  margin-top: 0.02rem;
}

.contentName {
  width: 7.2rem;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  justify-content: space-between;
}

.nameItem {
  display: flex;
  font-size: 0.13rem;
  font-weight: 500;
  color: #333333;
  flex-direction: column;
}


.description {
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  width: 7.2rem;
  margin-top: 0.4rem;
}

.fileBox {
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  flex: 1;
}

.fileBox img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.1rem;
}

.fileButtonBox {
  height: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  position: relative;
}

.visibiliBox {
  display: flex;
  flex-direction: column;
}

.appleStyle {
  display: flex;
  flex-direction: column;
}

.radioDec {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  margin-left: 0.1rem;
}

.radioSel {
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
}

.radioImg {
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.04rem;
}

.radioBox {
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}

.saveButton {
  margin-top: 1rem;
  width: 1rem;
  height: 0.32rem;
  background: #1776FF;
  border-radius: 0.04rem;
  border: 0.01rem solid #1776FF;
  text-align: center;
  line-height: 0.32rem;
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;
}

.upFileButton {
  width: 1.15rem;
  height: 0.32rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #818181;
  text-align: center;
  line-height: 0.32rem;
  cursor: pointer;
  margin-right: 0.1rem;
}

.fileUpNone {
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
}

.fileTop {
  display: flex;
  align-items: center;
}

.fileName {
  flex: 1;
  height: 0.32rem;
  background: #F8F8F8;
  border-radius: 0.02rem;
  padding: 0 0.1rem;
  line-height: 0.32rem;
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Setting</div>
      <span class="titlePath">Group1 / Project group 001 / Setting</span>
    </div>
    <div class="content">
      <div class="leftBoxName">Naming, visibility</div>
      <div class="contentInfo">Update your group name, description, avatar, and visibility.</div>
      <div class="contentName">
        <div class="nameItem">
          <span>Group name</span>
          <Input placeholder="Production group" style="width:3.2rem;margin-top:0.1rem" :clearable="true" />
        </div>
        <div class="nameItem">
          <span>Group ID</span>
          <Input placeholder="Group ID" style="width:3.2rem;margin-top:0.1rem" :clearable="true" />
        </div>
      </div>
      <div class="description">
        <span>Group description (optional)</span>
        <Input type="textarea" style="width:100%;margin-top:0.1rem" placeholder="Multiline input" />
      </div>
      <div class="description">
        <span>Group avatar</span>
        <div class="fileBox">
          <img :src="imgurl" alt="">
          <div class="fileButtonBox">
            <div class="fileTop">
              <div class="upFileButton" style="margin-top:0">
                <span>Choose picture</span>
                <input type="file" class="fileUpNone" accept="image/*" @change="previewImage($event)">
              </div>
              <div class="fileName">{{ fileName }}</div>
            </div>
            <span>The maximum file size allowed is 200KB.</span>
          </div>
        </div>
      </div>
      <div class="description">
        <span>Visibility level</span>
        <div class="visibiliBox">
          <Radio-group v-model="type">
            <div class="radioBox">
              <Radio label="Private">
                <img src="../../../assets/chain_cloud/group/icon_private@2x.png" alt="" class="radioImg">
                <span class="radioSel">Private</span>
                <span class="radioDec">The group and its projects can only be viewed by mambers.</span>
              </Radio>
            </div>
            <div class="radioBox">
              <Radio label="Public">
                <img src="../../../assets/chain_cloud/group/icon_pubilc@2x.png" alt="" class="radioImg">
                <span class="radioSel">Public</span>
                <span class="radioDec">The group and any pubilc projects can be viewed without any
                  authentication.</span>
              </Radio>
            </div>
          </Radio-group>
        </div>
      </div>
      <div class="saveButton" @click="saveFun">Save change</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "Public",
      fileName: "No file chosen…",
      imgurl:require('../../../assets/chain_cloud/menu/pic_group_avatar@2x.png')
    }
  },
  methods: {
    saveFun() {
      this.$Notice.info({
        title: "暂无上传接口",
        background: true,
        duration: 3
      });
    },
    previewImage(e) {
      var dt = e.target;
      for (var i = 0; i !== dt.files.length; i++) {
        let that = this;//改变this指向
        let files = dt.files[0];//图片文件名
        if (!e || !window.FileReader) return; // 看是否支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 关键一步，在这里转换的
        reader.onloadend = function () {
          that.imgurl = this.result;//赋值
        }
        this.fileName = dt.files[i].name
      }
    },
  },
  created() {
  },
}
</script>
