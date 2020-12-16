<template>
  <Card dis-hover :bordered=false :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
    <div id="Profile">
      <Content>
        <div>
          <List class="List" style="margin-top: 5%; text-align: center" header="酒店资料" border>
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
      <Modal
          footer-hide
          :mask-closable="false"
          v-model="modelInfo.changeModal">
        <ChangeInfo :hotelData="hotelData" :modelInfo="modelInfo"
                    @gotoProfile="gotoProfile"></ChangeInfo>
      </Modal>
    </div>
  </Card>
</template>

<script>
import ChangeInfo from "@/components/hotel/ChangeInfo";

export default {
  name: "Profile",
  components: {ChangeInfo},
  data() {
    return {
      hotelData: {
        account:'xxx',
        password:'xxxx',
        name:'xxx',
        celephone:'xxx',
        address:'xxx',
        detail:'xxx'
      },
      listItem: {
        hotelData: {
          account:'酒店账号',
          password:'密码',
          name:'酒店名',
          celephone:'联系电话',
          address:'酒店地址',
          detail:'酒店简介'
        },
      },
      modelInfo: {
        changedTitle: '名字',
        changedType: 'name',
        changeModal: false,
      }
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    gotoProfile(child) {
      this.modelInfo.changeModal = child
    },
    gotoChange(title, type) {
      console.log(`${title} ${type}`)
      if (type === 'account') {
        return
      }
      this.modelInfo.changedTitle = title
      this.modelInfo.changedType = type
      this.modelInfo.changeModal = true
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
        that.hotelData.account=respData['account']
        that.hotelData.password=respData['password']
        that.hotelData.name=respData['name']
        that.hotelData.celephone=respData['celephone']
        that.hotelData.address=respData['address']
        that.hotelData.detail=respData['detail']
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