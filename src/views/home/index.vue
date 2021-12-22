<template>
  <div class="page-main">
    <n-space vertical :size="spaceSize">
      <div class="page-main-section">
        <n-h2 prefix="bar" align-text>
          <n-input
            ref="inputSectionTitle"
            v-if="isEditTitle"
            v-model:value="sectionTitleValue"
            placeholder="请输入标题, 按回车键进行确认"
            clearable
            autosize
            class="section-title-input"
            passively-activated
            @blur="changeSectionTitle"
            @keyup="changeSectionTitle"
          />
          <n-gradient-text v-else type="info">
            <span class="section-title">{{ sectionTitleValue }}</span>
            <n-icon class="section-title-icon" @click="editSectionTitle">
              <CreateOutline />
            </n-icon>
          </n-gradient-text>
        </n-h2>
        <n-grid :x-gap="12" :y-gap="8" :cols="4">
          <template v-for="i in 8">
            <n-grid-item v-for="w in websiteList">
              <a class="website-item green" :src="w.url">
                <div class="item-logo">
                  <span :style="{ backgroundColor: randomHex() }">我</span>
                </div>
                <div class="item-desc">
                  <div class="item-title">{{ w.name }}</div>
                  <div class="item-introduction">
                    <n-ellipsis class="ellipsis" :line-clamp="2">
                      住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
                    </n-ellipsis>
                  </div>
                </div>
              </a>
            </n-grid-item>
          </template>
        </n-grid>
      </div>
      <div class="page-main-section">
        <n-h2 prefix="bar" align-text>
          <n-gradient-text type="info">
            <span class="section-title">不常用</span>
            <n-icon class="section-title-icon">
              <CreateOutline />
            </n-icon>
          </n-gradient-text>
        </n-h2>
        <n-grid :x-gap="12" :y-gap="8" :cols="4">
          <template v-for="i in 8">
            <n-grid-item v-for="w in websiteList">
              <a class="website-item green" :src="w.url">
                <div class="item-logo">
                  <span :style="{ backgroundColor: randomHex() }">我</span>
                </div>
                <div class="item-desc">
                  <div class="item-title">{{ w.name }}</div>
                  <div class="item-introduction">
                    <n-ellipsis class="ellipsis" :line-clamp="2">
                      住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
                    </n-ellipsis>
                  </div>
                </div>
              </a>
            </n-grid-item>
          </template>
        </n-grid>
      </div>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useWebsiteStore } from "@/store/modules/website"
import { randomHex } from "@/utils"
import { CreateOutline } from "@vicons/ionicons5"
import { useMessage, useDialog } from "naive-ui"

interface IWebsite {
  id: "1"
  name: "2"
  logo: "3"
  url: "4"
}

const message = useMessage()
const dialog = useDialog()
const websiteStore = useWebsiteStore()

const spaceSize = ref(32)

const isEditTitle = ref(false)

let sectionTitleValue = ref(null)
let sectionTitleValueOld = sectionTitleValue.value

let websiteList: IWebsite[] = reactive([])

function getPageData() {
  websiteStore.aGetWebsiteList().then((res) => {
    var resWebsiteList = res.websiteArrayList
    if (resWebsiteList && resWebsiteList.length) {
      resWebsiteList.forEach((website) => {
        websiteList.push(website)
      })
    }
  })
}

const editSectionTitle = () => {
  isEditTitle.value = true
}

const changeSectionTitle = (e) => {
  const isEnter = e.keyCode == 13
  const isBlur = e.type == "blur"
  if (isEnter) {
    dialog.warning({
      title: "修改标题",
      content: `确定将标题改为${sectionTitleValue.value}`,
      positiveText: "确定",
      negativeText: "不确定",
      maskClosable: false,
      onPositiveClick: () => {
        message.success("已经修改好了")
      },
      onNegativeClick: () => {
        message.error("不确定")
      },
    })
  }
  if (isBlur) {
    isEditTitle.value = false
  }
}

onMounted(() => {
  getPageData()
})
</script>

<style lang="scss" scoped>
.page-main {
  padding-left: 32px;
}

.page-main-section {
  .section-title-input {
    min-width: 30%;
    vertical-align: middle;
  }
  .section-title,
  .section-title-icon {
    @include vertical_middle;
  }
  .section-title-icon {
    margin-left: 12px;
    cursor: pointer;
    &:hover {
      color: $primaryColor;
    }
  }
}

.vue-grid-item {
  background-color: skyblue;
}
.website-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: $white;
  border-radius: 18px;
  width: 240px;
  height: 120px;
  white-space: normal;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  padding: 20px;
  box-sizing: border-box;
  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d($scaleMultiple, $scaleMultiple, $scaleMultiple);
    cursor: pointer;
  }
  .item-logo {
    flex-basis: 64px;
    display: inline-block;
    vertical-align: middle;
    color: $white;
    span {
      @include vartical_center();
      display: block;
      height: 100%;
      width: 100%;
      border-radius: 12px;
      width: 64px;
      height: 64px;
    }
  }
  .item-title {
    font-size: 16px;
  }
  .item-desc {
    @include vertical_middle;
    color: $primaryColor;
    text-align: center;
    font-size: 12px;
    margin-left: 20px;
  }
  .ellipsis {
    width: 100px;
  }
}
.text {
  width: 300px;
  height: 100px;
  display: block;
  background-color: blueviolet;
}
</style>
