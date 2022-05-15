module.exports = {
  extends: [
    "react-app", //  react帮配置好了一些语法，譬如箭头函数
    "airbnb",
    "plugin:prettier/recommended", // prettier配置
  ],
  rules: {
    "react/jsx-filename-extension": "off", // 关闭airbnb对于jsx必须写在jsx文件中的设置
    "react/prop-types": "off", // 关闭airbnb对于必须添加prop-types的校验
    "react/destructuring-assignment": [
      true,
      "always",
      {
        ignoreClassFields: false,
      },
    ],
    "react/jsx-one-expression-per-line": "off", // 关闭要求一个表达式必须换行的要求，和Prettier冲突了
    "react/jsx-wrap-multilines": {
      prop: "ignore", // 关闭要求jsx属性中写jsx必须要加括号，和Prettier冲突了
    },
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline", // 关闭airbnb对函数调用参数，非一行，最后也要加逗号的限制
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off", // 关闭非交互元素加事件必须加 role
    "jsx-a11y/click-events-have-key-events": "off", // 关闭click事件要求有对应键盘事件
    "no-bitwise": "off", // 不让用位操作符，不知道为啥，先关掉
  },
  overrides: [
    {
      files: ["**/Mi/*.js", "**/Mi/*.jsx"],
      rules: {
        "react/prop-types": "error", // Mi 文件夹下的是系统组件，必须写prop-types
      },
    },
  ],
};
