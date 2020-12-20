<template>
  <div>
    <Card class="card_size" dis-hover title="客户信息">
      <Form :label-width="120">
        <FormItem label="姓名">
          <Input type="text" style="width: 100px"></Input>
          <Button style="margin-left: 5%" type="primary"><Icon type="ios-mail" size=24 /></Button>
        </FormItem>
        <FormItem label="联系方式">
          <Input type="text" class="input_size"></Input>
        </FormItem>
        <FormItem label="身份证号">
          <Input type="text" class="input_size"></Input>
        </FormItem>
        <FormItem label="住宿时间">
          <DatePicker type="date"></DatePicker>
          -
          <DatePicker type="date"></DatePicker>
        </FormItem>
        <FormItem label="住宿要求">
          <Input type="textarea" class="input_size"></Input>
        </FormItem>
      </Form>
    </Card>
    <Card class="card_size" dis-hover title="订单信息">
      <Form :label-width="120">
        <FormItem label="预约时间">
          <DatePicker type="date" ></DatePicker>
        </FormItem>
        <FormItem label="入住时间">
          <DatePicker type="date" ></DatePicker>
        </FormItem>
        <FormItem label="房间号">
          <Input type="text" style="width: 100px"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" style="margin-right: 10%">确认订单</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: "detail"
}
</script>

<style scoped>
.input_size {
  width: 440px;
}

@media screen and (max-width: 800px) {
  .input_size {
    width: 90%;
  }
}
.card_size {
  width: 650px;
}

@media screen and (max-width: 800px) {
  .card_size {
    width: 100%;
  }
}
</style>