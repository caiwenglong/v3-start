<template>
  <div class="unit-btn-cycle">
    <div class="btn-cycle" @click="openModal">
      <n-tooltip trigger="hover">
        <template #trigger>
          <div style="--color: #2196f3">
            <n-icon class="icon-add-sharp">
              <AddSharp />
            </n-icon>
          </div>
        </template>
        <span>添加分类</span>
      </n-tooltip>
    </div>
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
              <n-form-item label="分类名称" path="category.name">
                <n-input v-model:value="formValue.category.name" placeholder="输入分类名称" />
              </n-form-item>
            </n-form>
          </n-grid-item>
        </n-grid>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue"
import { AddSharp } from "@vicons/ionicons5"

const state = reactive({
  inverted: true,
  showModal: false,
})

const rules = {
  category: {
    name: {
      required: true,
      message: "请输入分类名称",
      trigger: "blur",
    },
  },
}

const formValue = reactive({
  category: {
    name: "",
  },
})

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

const addListenerForBtn = () => {
  const btnCycles = document.querySelectorAll(".btn-cycle > div")
  btnCycles.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const size = parseInt(getComputedStyle(btn).width)
      // scaling
      const x = size * 0.3 * 0.7 + 0.7 * e.offsetX
      const y = size * 0.3 * 0.7 + 0.7 * e.offsetY
      btn.style.setProperty("--x", x)
      btn.style.setProperty("--y", y)
      btn.style.setProperty("--size", size)
    })
  })
}

onMounted(() => {
  addListenerForBtn()
})
</script>

<style lang="scss" scoped>
.btn-cycle {
  text-align: right;
  font-size: 12px;
}
.btn-cycle div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  min-width: 5em;
  min-height: 5em;
  transition: 0.5s all ease;
  background: var(--color, #aaa);
  border: 0 solid transparent;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0.5em;
  opacity: 0.7;
  --dx: calc(var(--size) - var(--x));
  --dy: calc(var(--size) - var(--y));
}
.btn-cycle div:hover {
  opacity: 1;
  cursor: pointer;
  border: calc(2px + 0.85vw) solid rgba(255, 255, 255, 0.5);
  transition: 0.5s background-color ease, 0.2s border ease;
  border-radius: calc(var(--x) / var(--size) * 100%) calc(var(--dx) / var(--size) * 100%)
    calc(var(--dx) / var(--size) * 100%) calc(var(--x) / var(--size) * 100%) /
    calc(var(--y) / var(--size) * 100%) calc(var(--y) / var(--size) * 100%)
    calc(var(--dy) / var(--size) * 100%) calc(var(--dy) / var(--size) * 100%);
}
body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:after {
  color: rgba(255, 255, 255, 0);
  font-size: calc(1vw + 1.2em);
  font-weight: 200;
  transition: all 0.2s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, -0.5em, 0);
}
body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:hover:after {
  color: rgba(255, 255, 255, 0.7);
  transform: translate3d(0, 0, 0);
}
.el-icon-right:before {
  content: "";
  font-size: 60px;
  color: #fff;
}
.icon-add-sharp {
  color: $white;
}
</style>
