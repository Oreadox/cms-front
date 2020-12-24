<template>
  <div>
    <Card dis-hover :bordered=false>
      <div id="Profile">
        <Content>
          <div>
            <List class="List" style="margin-top: 5%; text-align: center" header="酒店资料" footer="" border>
              <ListItem class="ListItem" v-for="(value, key) in listItem.hotelData" :key="key" :value="value"
                        v-model=hotelData[value]>
                <a @click="gotoChange(value, key)">
                  <div class="set_margin">{{ value }}</div>
                  <div>{{ hotelData[key] }}</div>
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
        v-model="changeInfoModal">
      <ChangeInfo :hotelData="hotelData" ref="changeInfo"
                  @gotoProfile="gotoProfile"></ChangeInfo>
    </Modal>
    <Modal
        footer-hide
        :mask-closable="false"
        v-model="changePasswordModal">
      <ChangePassword :hotelData="hotelData"
                      @gotoProfile="gotoProfile"></ChangePassword>
    </Modal>
  </div>
</template>

<script>
import ChangeInfo from "@/components/hotel/ChangeInfo";
import ChangePassword from "@/components/hotel/ChangePassword";
export default {
  name: "Profile",
  components:{ChangeInfo,ChangePassword},
  data() {
    return {
      hotelData: {
        account: 'xxx',
        password: '●●●●●●●●●●',
        name: 'xxx',
        phone: 'xxx',
        address: 'xxx',
        detail: 'xxx'
      },
      listItem: {
        hotelData: {
          account: '酒店账号',
          password: '密码',
          name: '酒店名',
          phone: '联系电话',
          address: '酒店地址',
          detail: '酒店简介'
        },
      },
      changeInfoModal: false,
      changePasswordModal: false,
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    gotoProfile(child) {
      this.changeInfoModal = child
      this.changePasswordModal = child
    },
    gotoChange(title, type) {
      if (type === 'account') {
        return
      }
      if (type === 'password') {
        this.changePasswordModal = true
      } else {
        this.$refs.changeInfo.setForm(this.hotelData)
        this.changeInfoModal = true
      }
    },
    getProfile() {
      var that = this
      this.$axios(
          {
            method: 'post',
            url: `${this.$baseURI}/api/hotel/profile`,
          }
      ).then(function (response) {
        var respData = response["data"]
        that.hotelData.account = respData['accountId']
        that.hotelData.name = respData['name']
        that.hotelData.phone = respData['telephone']
        that.hotelData.address = respData['address']
        that.hotelData.detail = respData['detail']
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