<template>
  <div>
    <Form :label-width="50">
      <FormItem label="账号" style="position: absolute; top: 20px">
        <Input clearable v-model="form.username" class="input" type="text" @keyup.enter.native="search"></Input>
      </FormItem>
      <FormItem label="姓名" style="position: absolute; top: 20px; left: 150px">
        <Input clearable v-model="form.name" class="input" type="text" @keyup.enter.native="search"></Input>
      </FormItem>
      <FormItem label="身份" style="position: absolute; top: 20px; left: 300px">
        <Input clearable v-model="form.role" class="input" type="text" @keyup.enter.native="search"></Input>
      </FormItem>
      <FormItem label="专业班级" style="position: absolute; top: 20px; left: 450px" :label-width="80">
        <Input
          clearable
          v-model="form.major"
          class="input"
          type="text"
          style="width: 150px"
          @keyup.enter.native="search"
        ></Input>
      </FormItem>
      <Button @click="search" type="primary" style="position: absolute; left: 700px">查询</Button>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'Query',
  props: ['value'],
  data() {
    return {
      form: {
        role: '',
        username: '',
        name: '',
        major: '',
      },
    }
  },
  methods: {
    search() {
      this.$store
        .dispatch('userInfoByCond', this.form)
        .then((res) => {
          console.log(res)
          // console.log(this.dataCount)
          this.$emit('setMember', res)
          this.$Notice.info({
            desc: '查询成功',
          })
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: '获取成员列表失败咯',
          })
        })
    },
  },
}
</script>

<style scoped>
.input {
  width: 100px;
  height: 100px;
}
</style>
