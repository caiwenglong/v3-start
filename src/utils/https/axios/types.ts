/*
 * @Author: your name
 * @Date: 2021-12-01 14:46:54
 * @LastEditTime: 2021-12-02 17:08:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \website-display\src\utils\https\axios\types.ts
 */

import { AxiosRequestConfig } from 'axios'
import { AxiosTransform } from './axiosTransform'

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}

export interface RequestOptions {
  // 请求参数拼接到URL
  joinParamsToUrl?: boolean
  // 格式化请求参数时间
  formatDate?: boolean
  // 是否处理请求结果
  isTransFormResponse?: boolean
  // 是否显示提示信息
  isShowMessage?: boolean
  // 是否解析成Json
  isParseToJson?: boolean
  // 是否显示成功信息
  isShowSuccessMessage?: boolean
  // 成功的文本信息
  successMessageText?: string
  // 是否显示错误文本信息
  isShowErrorMessage?: boolean
  // 错误的文本信息
  errorMessageText?: string
  // 是否加入URL
  joinPrefix?: boolean
  // 接口地址，不填则使用默认的apiUrl
  apiUrl?: string
  // 错误信息提示类型：none 或者 modal(弹出框提示)
  errorMessageMode?: 'none' | 'modal'
  // 是否添加时间戳
  joinTime?: boolean
  // 是否返回原生响应头
  isReturnNativeResponse?: boolean
}

export interface Result<T = any> {
  code: string
  type?: 'success' | 'error' | 'warning'
  message: string
  data?: T
}
