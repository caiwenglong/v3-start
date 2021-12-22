<template>
  <n-menu @update:value="handleUpdateValue" :options="menuOptions" :inverted="state.inverted" />
  <n-divider />
  <div class="menu-add">
    <n-button @click="openModal" color="#8a2be2">
      <template #icon>
        <n-icon>
          <AddSharp />
        </n-icon>
      </template>
      添加菜单
    </n-button>
    <n-modal
      v-model:show="state.showModal"
      preset="dialog"
      title="添加菜单"
      positive-text="确认"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
      negative-text="算了"
    >
      <n-card :bordered="false" class="mt-4 proCard">
        <n-grid cols="1" responsive="screen">
          <n-grid-item offset="0">
            <n-form
              inline
              :label-width="80"
              :model="formValue"
              :rules="rules"
              ref="formRef"
              label-placement="left"
            >
              <n-form-item label="姓名" path="user.name">
                <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
              </n-form-item>
            </n-form>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from "naive-ui"
import { reactive } from "vue"
import { AddSharp } from "@vicons/ionicons5"

// const menuStore = useMenuStore()

const message = useMessage()

const rules = {
  user: {
    name: {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
  },
}

const formValue = reactive({
  user: {
    name: "",
    age: "",
  },
  phone: "",
})

// 菜单项
const menuOptions = []

const state = reactive({
  inverted: true,
  showModal: false,
})

const getMenuData = () => {
  /* menuStore.aGetMenuList().then(res => {
    console.log(res)
  }) */
}

getMenuData()

const handleUpdateValue = (key, item) => {
  message.info("[onUpdate:value]: " + JSON.stringify(key))
  message.info("[onUpdate:value]: " + JSON.stringify(item))
}

/**
 * 打开模态框
 */
const openModal = () => {
  state.showModal = true
}

const cancelCallback = () => {
  console.log(1)
}

const submitCallback = () => {
  console.log(1)
}
</script>

<style lang="scss" scoped>
.menu-add {
  .n-button {
    width: 100%;
  }
}
</style>
