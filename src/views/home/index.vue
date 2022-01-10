<template>
  <div class="page-main">
    <n-spin size="large" :show="showSpin">
      <template #description>加载数据中...</template>
      <div class="page-main container" ref="pageMainContainer">
        <n-space vertical :size="spaceSize">
          <div v-for="sectionItem in sectionList" class="page-main-section">
            <n-h2 prefix="bar" align-text>
              <n-input
                ref="inputSectionTitle"
                v-if="sectionItem.isEditTitle"
                v-model:value="sectionItem.name"
                placeholder="请输入标题, 按回车键进行确认"
                clearable
                autosize
                class="section-title-input"
                passively-activated
                @blur="changeSectionTitle(sectionItem, $event)"
                @keyup="changeSectionTitle(sectionItem, $event)"
              />
              <n-gradient-text v-else type="info">
                <span :id="sectionItem.id" class="section-title">{{ sectionItem.name }}</span>
                <n-icon class="section-title-icon" @click="editSectionTitle(sectionItem)">
                  <CreateOutline />
                </n-icon>
              </n-gradient-text>
            </n-h2>
            <n-grid :x-gap="12" :y-gap="8" :cols="4">
              <template v-for="w in websiteList">
                <template v-if="w.idCategory == sectionItem.id">
                  <n-grid-item>
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
              </template>
            </n-grid>
          </div>
        </n-space>
      </div>
    </n-spin>
    <div style="width: 160px; float: right">
      <n-anchor affix show-rail="false" :trigger-top="24" :top="88" style="z-index: 1" ignore-gap>
        <template v-for="sectionItem in sectionList">
          <n-anchor-link :title="sectionItem.name" @click="fnScrollTo(sectionItem.id)" />
        </template>
      </n-anchor>
    </div>
    <div>
      <n-affix
        class="add-menu"
        position="absolute"
        :bottom="40"
        :trigger-bottom="60"
        :listen-to="() => $refs.pageMainContainer"
      >
        <BtnCycle></BtnCycle>
      </n-affix>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useWebsiteStore } from "@/store/modules/website"
import { randomHex } from "@/utils"
import { CreateOutline } from "@vicons/ionicons5"
import { useMessage, useDialog } from "naive-ui"
import { useMenuStore } from "@/store/modules/menu"
import { IWebsite } from "./interface"
import BtnCycle from "@/components/cell/btn-cycle.vue"

const menuStore = useMenuStore()
const message = useMessage()
const dialog = useDialog()
const websiteStore = useWebsiteStore()

const spaceSize = ref(32)

let showSpin = ref(false)

let websiteList: IWebsite[] = reactive([])
let sectionList: any[] = reactive([])

/**
 * 获取网站列表
 */
function getWebsiteList() {
  websiteStore.aGetWebsiteList().then((res) => {
    var resWebsiteList = res.websiteList
    if (resWebsiteList && resWebsiteList.length) {
      resWebsiteList.forEach((website) => {
        websiteList.push(website)
      })
    }
    showSpin.value = false
  })
}

/**
 * 获取菜单
 */
const getMenuData = () => {
  menuStore.aGetMenuList().then((res) => {
    if (res && res.result && res.result.length) {
      res.result.forEach((item) => {
        item.isEditTitle = false
        sectionList.push(item)
      })
    }
  })
}

/**
 * 是否是编辑状态
 */
const editSectionTitle = (sectionItem) => {
  sectionItem.isEditTitle = true
}

/**
 *  修改标题头
 */
const changeSectionTitle = (sectionItem, e) => {
  const isEnter = e.keyCode == 13
  const isBlur = e.type == "blur"
  if (isEnter) {
    dialog.warning({
      title: "修改标题",
      content: `确定将标题改为${sectionItem.name}`,
      positiveText: "确定",
      negativeText: "不确定",
      maskClosable: false,
      onPositiveClick: () => {
        // message.success("已经修改好了")
        menuStore.aUpdateTbMenu(sectionItem.id, sectionItem.name).then((res) => {
          if (res.result === 1) {
            message.success("标题修改成功")
          }
        })
      },
      onNegativeClick: () => {
        message.warning("取消修改标题！")
      },
    })
  }
  if (!isEnter && isBlur) {
    sectionItem.isEditTitle = false
  }
}

/**
 * 瞄点滚动
 */
const fnScrollTo = (target) => {
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
  })
}

onMounted(() => {
  getMenuData()
  getWebsiteList()
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

.n-spin-container {
  width: 86%;
}

.add-menu {
  font-size: 42px;
  right: 40px;
}
</style>
