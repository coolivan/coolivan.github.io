# coolivan.github.io

coolivan‘s blog

本项目为纯原生js，采取了数据驱动的方式，没有使用任何框架。

## 扁平化数据结构：

js/data.js

```js
[
    {
        id: 1,
        pid: 0,
        title: ""
    }
 ]
```



## 业务逻辑：

js/script.js

```js
// 根据id找到自己
function getSelf(id){
  return data.filter(v=&gt;v.id === id)[0]
}
// 根据id找到所有子级
function getChild(pid) {
  return data.filter(v =&gt; v.pid == pid)
}
//根据id找到父级
function getParent(id) {
  let pid = getSelf(id).pid;
  return data.filter(v =&gt; v.id == pid)[0]
}
```



## hash路由：

```js
window.onhashchange = function(){...};
```

