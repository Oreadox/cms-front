<template>
  <div>
    <Card dis-hover :bordered=false>
      <div id="Profile">
        <Content>
          <div>
            <List class="List" style="margin-top: 5%; text-align: center" header="司机资料" footer="" border>
              <ListItem class="ListItem" v-for="(value, key) in listItem.driverData" :key="key" :value="value"
                        v-model=driverData[value]>
                <a @click="gotoChange(value, key)">
                  <div class="set_margin">{{ value }}</div>
                  <div>{{ driverData[key] }}</div>
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
      <ChangeInfo ref="checkGender" :driverData="driverData"
                  @gotoProfile="gotoProfile"></ChangeInfo>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="passwordModel.changePasswordModal">
      <ChangePassword :driverData="driverData"
                      @gotoProfile="gotoProfile"></ChangePassword>
    </Modal>
  </div>
</template>

<script>
import ChangeInfo from "@/components/driver/ChangeInfo";
import ChangePassword from "@/components/driver/ChangePassword";


export default {
  name: "Profile",
  components: {ChangeInfo,ChangePassword},
  data() {
    return {
      driverData: {
        account:'xxx',
        password:'xxx',
        name:'xxx',
        gender:'女',
        telephone:'12312312411',
        residentIdNumber:'xxx',
        fleetId:'xxx'
      },
      listItem: {
        driverData: {
          account:'司机账号',
          password:'密码',
          name:'姓名',
          gender:'性别',
          telephone:'联系电话',
          residentIdNumber:'身份证号',
          fleetId:'所属车队'
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
        this.$refs.checkGender.checkGender()
        this.modelInfo.changeModal = true
      }

    },
    getProfile() {
      var that = this
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/driver/profile`,
          }
      ).then(function (response) {
        var respData = response["data"]
        that.driverData.account=respData['account']
        that.driverData.password=respData['password']
        that.driverData.name=respData['name']
        that.driverData.gender=respData['gender']==='MALE'?'男':'女'
        that.driverData.telephone=respData['telephone']
        that.driverData.residentIdNumber=respData['residentIdNumber']
        that.driverData.fleetId=respData['fleetId']
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