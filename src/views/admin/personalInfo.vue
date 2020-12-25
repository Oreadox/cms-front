<template>
  <div>
    <Card dis-hover :bordered=false>
      <div id="Profile">
        <Content>
          <div>
            <List class="List" style="margin-top: 5%; text-align: center" header="管理员资料" footer="" border>
              <ListItem class="ListItem" v-for="(value, key) in listItem.adminData" :key="key" :value="value"
                        v-model=adminData[value]>
                <a @click="gotoChange(value, key)">
                  <div class="set_margin">{{ value }}</div>
                  <div>{{ adminData[key] }}</div>
                  <!--              <Icon style="float: right" type="ios-arrow-forward"/>-->
                </a>
              </ListItem>
            </List>
          </div>
        </Content>
      </div>
    </Card>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="modelInfo.changeModal">
      <ChangeInfo ref="setDataDefault" :adminData="adminData"
                  @gotoProfile="gotoProfile"></ChangeInfo>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="passwordModel.changePasswordModal">
      <ChangePassword :adminData="adminData"
                      @gotoProfile="gotoProfile"></ChangePassword>
    </Modal>
  </div>
</template>

<script>
import ChangeInfo from "@/components/admin/ChangeInfo";
import ChangePassword from "@/components/admin/ChangePassword";


export default {
  name: "personalInfo",
  components: {ChangeInfo,ChangePassword},
  data() {
    return {
      adminData: {
        account:'',
        password:'●●●●●●●●●●',
        name:'',
        telephone:'',
        email:'',
      },
      listItem: {
        adminData: {
          account:'管理员账号',
          password:'密码',
          name:'姓名',
          telephone:'联系电话',
          email:'电子邮箱'
        },
      },
      modelInfo: {
        changeModal: false,
      },
      passwordModel: {
        changePasswordModal: false,
      }
    }
  },
  created() {
    this.getProfile()
  },

  methods: {
    gotoProfile(child) {
      this.modelInfo.changeModal = child
      this.passwordModel.changePasswordModal = child
    },
    gotoChange(title, type) {
      if (type === 'account') {
        return
      }
      if (type === 'password') {
        this.passwordModel.changePasswordModal = true
      } else {
        this.$refs.setDataDefault.setDataDefault()
        this.modelInfo.changeModal = true
      }

    },
    getProfile() {
      var that = this
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/admin/profile`,
          }
      ).then(function (response) {
        var respData = response["data"]
        that.adminData.account=respData['accountId']
        that.adminData.name=respData['name']
        that.adminData.telephone=respData['telephone']
        that.adminData.email=respData['email']
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