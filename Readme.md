<!--
 * @Author: Ming
 * @Date: 2022-05-19 10:37:07
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 10:47:06
 * @Description: 请填写简介
-->
# 本项目指引

## git提交规范
* git add .
* git commit -m "本人名字 + 更改内容"
* git push origin master

## 项目配置
* 本项目使用@作为src目录的绝对路径
* 推荐使用本项目配置的prettier，editorconfig进行代码编写

## 项目引用库简述
* CSS：tailwind
* 语言：TypeScript
* 框架：React
* UI框架：AcroDesign
* 状态库：MobX
* 前端路由：React-Router-Dom
  前端路由配置文件在@/router/index.ts
* 网络请求：axios,网络请求的方法已经被封装好了，放在service的ubdex.ts里的类

## 项目怎么run
看script
一般单纯打代码npm start就行