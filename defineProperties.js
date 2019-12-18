var obj = {
  name: '',
  age: ''
};

//执行监听
var defineFn = function (obj, item, value) {
  Object.defineProperty(obj, item, {
    get: function () {
      return value;
    },
    set: function (newVal) {
      value = newVal;
    }
  });
}

//处理所有的监听
var observe = function (data) {
  Object.keys(data).forEach(function (item) {
    /*
    * data 当前的对象
    * item 当前 key 值
    * data[item] 当前对应 key 的值
    * */
    defineFn(data, item, data[item]);
  })
}

observe(obj);

var defineHtmlFn = function (roots) {
  var root = document.querySelector(roots);
  var nodes = root.children;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.children.length) {
      defineHtmlFn(node);
    }
    //没有子级
    if (node.hasAttribute('v-model')) {
      node.addEventListener('input', (function (e) {
        console.log(e.value);
      }))
    }
  }
}

/*
* 先要搞清楚 defineFn 这个函数「重新设置了对象下的所有的 key 值的属性」，执行监听
* 那传入的三个参数是什么意思？
* obj  这个肯定是个对象，当前的对象
* item  这个就是当前的 key 值
* data[item]  当前对应 key 值的 value
*
* 在执行 defineFn 的时候配合 Object.defineProperty 使用
* 只做了一级的对象循环遍历监听
* 如果要做深度的，可以在 defineFn 里面再添加 observe(obj) 递归来处理更深层的遍历
* observe 里面还要处理 判断一下 obj 是否有值，没有值则 return;
* if( !data || typeof data != 'object' ){
*   return;
* }
*
* */

//在默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。
/*
*
* 其实 get set 做的就是「数据劫持」对数据做处理
*
*
* */
//数据属性的 Writable、Value 和 访问器属性的 Get、Set 不可同时设置。Writable、Value存在的时候，Get、Set不能存在。


// 两个月前就写了一些代码了，一直耽搁了 ...
// 这是 HTTPS 提交的代码

// 这是 SSH 提交的代码
