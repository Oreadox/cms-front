<template>
  <div>
    <Card dis-hover :bordered=false  :style="{padding: '24px', margin: 'auto auto auto 15vw'}">
      <Button :size="buttonSize" type="primary">写信</Button>
      <Collapse>
        <Panel 收信箱>

        </Panel>
      </Collapse>


    </Card>
  </div>
</template>

<script>
export default {
name: "message"
}
</script>

<style scoped>

</style>