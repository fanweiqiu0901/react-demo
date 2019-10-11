# 初始化一个React项目 #
1. 初始化环境
    ```sh
        yarn init
    ```
1. 安装react 
    ```sh
        yarn add react react-dom
    ```
1. 安装和初始化开发环境
    ```sh
        yarn add @luban/devenv parcel-bundler -D
        yarn dev-setup all
    ```
1. 修改tsconfig.json
    ```json
        {
            "jsx":"preserve",  //将preserve改成 react
        }
    ```
1. 创建入口文件 index.html
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <script lang="javascript">window.lbsvDebug = true</script>

    </head>

    <body>
        <div id="react-demo"></div>
        <script src="src/index.tsx"></script>
    </body>

    </html>
    ```
1. 创建src/index.tsx
    ```typescript
    import React from "react";
    import ReactDom from "react-dom";

    ReactDom.render(<div>react-demo</div>, document.querySelector("#react-demo"));

    ```
1. 修改package.json, 增加两条script
    ```json
    "scripts": {
        "start:web": "yarn parcel index.html",
        "build:web": "yarn parcel build index.html",
    }
    ```
1. 运行
    ```sh
    yarn start:web
    ```
