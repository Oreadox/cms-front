<template>
  <div>
    <div :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
      <Button size="large" type="primary">新邮件</Button>

      <List>
        <ListItem style="font-size: 1.5em; font-weight: bold">收信箱</ListItem>
        <ListItem>
          <Scroll :on-reach-bottom="handleReachEdge">
            <Card dis-hover v-for="(item, index) in list" :key="index" style="width: 70vw; margin: 32px 0">
              Content {{ item }}
            </Card>
          </Scroll>
        </ListItem>
      </List>

      <List>
        <ListItem style="font-size: 1.5em; font-weight: bold">发信箱</ListItem>
        <ListItem>
          <Scroll :on-reach-bottom="handleReachEdge">
            <Card dis-hover v-for="(item, index) in list" :key="index" style="width: 70vw; margin: 32px 0">
              Content {{ item }}
            </Card>
          </Scroll>
        </ListItem>
      </List>

    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      messageNumber: Number(10),
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    handleReachEdge() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var result = true;
          var count = 10;
          if (!result) {
            console.log(result);
            reject = "no result";
            this.$Message.error(reject);
          } else {
            //循环测试使用，等待后端数据
            for (let i = 1; i < count; i++) {
              this.list.push(i);
            }
          }
        }, 2000);
      });
    }
  }
}
</script>

<style scoped>

</style>