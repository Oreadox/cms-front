<template>
  <Card dis-hover :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <div id="Profile">
      <Content>
        <div>
          <List class="List" style="margin-top: 5%; text-align: center" header="个人资料" border>
            <ListItem class="ListItem">
              <a>
                头像
                <!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
              </a>v
            </ListItem>
            <ListItem class="ListItem" v-for="(value, key) in listItem.personalData" :key="key" :value="value"
                      v-model=userData[value]>
              <a @click="gotoChange(value, key)">
                <div class="set_margin">{{ value }}</div>
                <div>{{ userData[key] }}</div>
                <!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
              </a>
            </ListItem>
          </List>
          <br><br>
          <List class="List" style="text-align: center" header="联系信息" border>
            <ListItem class="ListItem" v-for="(value, key) in listItem.contactInformation" :key="key" :value="value">
              <a @click="gotoChange(value, key)">
                <div class="set_margin">{{ value }}</div>
                <div>{{ userData[key] }}</div>
                <!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
              </a>
            </ListItem>
          </List>
        </div>
      </Content>
      <Modal
          footer-hide
          :mask-closable="false"
          v-model="modelInfo.changeModal">
        <ChangeInfo :userData="userData"
                    @gotoProfile="gotoProfile"></ChangeInfo>
      </Modal>
      <Modal
          footer-hide
          :mask-closable="false"
          v-model="passwordModel.changeModal">
        <ChangePassword :userData="userData"
                    @gotoProfile="gotoProfile"></ChangePassword>
      </Modal>
    </div>
  </Card>
</template>

<script>
import ChangeInfo from "@/components/user/ChangeInfo";
import ChangePassword from "@/components/user/ChangePassword";

export default {
  name: "Profile",
  components: {ChangePassword, ChangeInfo},
  data() {
    return {
      userData: {
        name: 'xxx',
        birthday: '2000-01-01',
        gender: 'xxx',
        password: '●●●●●●●●●●●●',
        account: 'xxx',
        email: 'xxx',
        phone: 'xxx',
        idCard: '',
        workUnit: 'xxx',
      },
      listItem: {
        personalData: {
          name: '名称',
          birthday: '生日',
          gender: '性别',
          password: '密码',
          workUnit: '工作单位',
        },
        contactInformation: {
          account: '账号',
          email: '邮箱',
          phone: '电话',
        }
      },
      modelInfo: {
        // changedTitle: '名字',
        // changedType: 'name',
        changeModal: false,
      },
      passwordModel: {
        changeModal: false,
      }

    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    gotoProfile(child) {
      this.modelInfo.changeModal = child;
      this.passwordModel.changeModal = child
    },
    gotoChange(title, type) {
      if (type === 'account') {
        return
      }
      console.log(type!=="password")
      if(type!=="password"){
        this.modelInfo.changeModal = true
      }else {
        this.passwordModel.changeModal = true
      }

    },
    getProfile() {
      var that = this
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/user/profile`,
          }
      ).then(function (response) {
        var respData = response["data"]
        that.userData.name = respData['name']
        that.userData.birthday = new Date(respData['birthday'])
        that.userData.gender = respData['gender']
        that.userData.account = respData['accountId']
        that.userData.email = respData['email']
        that.userData.phone = respData['telephone']
        that.userData.idCard = respData['residentIdNumber']
        that.userData.workUnit = respData['workplace']
      })
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

.set_margin {
  float: left;
  width: 8em;
}

.ListItem:hover {
  background-color: #F6F6F6
}

.List {
  width: 700px;
}

@media screen and (max-width: 960px) {
  .List {
    width: 90%;
  }
}
</style>