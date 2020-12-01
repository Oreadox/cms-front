<template>
<div>
  <Form style="margin-top: 10%">
    <FormItem :label="changeValue">
      <Input disabled :placeholder=dataToChild.userName></Input>
    </FormItem>
    <FormItem :label=changeValue>
      <Input :type=this.changeType v-model="newUserInfo"  ></Input>
    </FormItem>
    <FormItem>
      <Button style="float: right; margin-left: 16px" type="primary" @click="submitForm()">修改</Button>
      <Button type="text" style="float: right; " @click="cancalButton" >取消</Button>

    </FormItem>
  </Form>
</div>
</template>

<script>
export default {
  name: "ChangeInfo",
  data() {

    //把Profile的页面逻辑修改成动态接受值。
    return {
      changeType: this.dataType,
      changeValue: this.dataTitle,
      oldUserInfo: this.dataToChild.userName,
      newUserInfo: '',

    }
  },
  props:['dataToChild','datatype','dataTitle'],
  methods: {
    cancalButton(){
      this.$emit('gotoProfile', false);
    },
    submitForm() {
      this.$Message.success("修改成功");
      this.$refs['formItem'].validate(() => {

      })
    }
  }
}
</script>

<style scoped>

</style>