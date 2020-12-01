<template>
  <div id="Profile">
    <Content :style="{padding: '24px', margin: 'auto auto auto 25vw'}">
      <div >
        <List  class="List" style="margin-top: 5%; text-align: center" header="个人资料" border>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              头像
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
          <ListItem class="ListItem" v-model="userData.userName">
            <a @click="gotoChange">
              <div class="set_margin">名称 </div>
              <div >{{ userData.userName }}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">生日</div>
                <div>{{userData.userBirthday}}</div>
<!--                <Icon style="float: right" type="ios-arrow-forward"/>-->


            </a>
          </ListItem>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">性别 </div>
              <div>{{userData.userSex}}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">密码 </div>
              <div>{{userData.userPassword}}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
        </List>
        <br><br>
        <List class="List" style="text-align: center" header="联系信息" border >
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">账号 </div>
              <div>{{userData.userAccount}}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">邮箱 </div>
              <div>{{userData.userEmail}}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
          <ListItem class="ListItem">
            <a @click="gotoChange">
              <div class="set_margin">电话 </div>
              <div>{{userData.userPhone}}</div>
<!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
            </a>
          </ListItem>
        </List>
      </div>
    </Content>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="changeProfile">
      <ChangeInfo  :dataToChild="userData" :dataType="changeType" :dataTitle="changeTitle"  @gotoProfile="gotoProfile"></ChangeInfo>
    </Modal>
  </div>
</template>

<script>
import ChangeInfo from "@/components/user/ChangeInfo";
export default {
  name: "Profile",
  components:{ChangeInfo},
  data() {
    return {
      userData: {
        userName: 'xxx',
        userBirthday: 'xxx',
        userSex: 'xxx',
        userPassword: '●●●●●●●●●●●●',
        userAccount: 'xxx',
        userEmail:'xxx',
        userPhone: 'xxx',
      },
      changeTitle:'名字',
      changeType : 'text',
      changeProfile : false,
    }
  },
  methods: {
    gotoProfile(child){
      this.changeProfile=child
    },
    gotoChange(){
      this.changeProfile = true
    }
  },

}

</script>

<style scoped>
.card {
  color: #4d5669;
  font: 20px bold;
  height: 20vh;
}

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

a {
  width: 100%;
  color: #515a6e;
  text-align: left;
}
.set_margin{
  float:left;
  width: 8em;
}
.ListItem:hover {
  background-color: #F6F6F6
}
.List{
  width: 800px;
}
@media screen and (max-width: 960px) {
  .List{
    width: 90%;
  }
}
</style>