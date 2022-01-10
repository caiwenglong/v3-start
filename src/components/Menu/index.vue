<template>
  <n-menu
    @update:value="handleUpdateValue"
    key-field="id"
    label-field="name"
    :options="menuOptions"
    :inverted="state.inverted"
  />
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
import { reactive } from "vue"
import { useMessage } from "naive-ui"
import { AddSharp } from "@vicons/ionicons5"
import { useMenuStore } from "@/store/modules/menu"
import { IMenu } from "./interface"
import { renderIcon } from "@/utils"

const menuStore = useMenuStore()

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
let menuOptions: IMenu[] = reactive([])

const state = reactive({
  inverted: true,
  showModal: false,
})

const getMenuData = () => {
  menuStore.aGetMenuList().then((res) => {
    if (res && res.result && res.result.length) {
      res.result.forEach((item) => {
        const { icon } = item
        item.icon = renderIcon(icon)
        menuOptions.push(item)
      })
    }
  })
}

getMenuData()

const handleUpdateValue = (key, item) => {
  console.log(key)
  console.log(item)
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
