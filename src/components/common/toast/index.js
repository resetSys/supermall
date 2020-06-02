import Toast from "./Toast"

const obj = {}
//在main.js中调用默认会将vue传进来
obj.install = function(Vue){
  // window.console.log(Vue)
  // 1、创建组件构造器
  let toastConstuctor = Vue.extend(Toast);
  //2、new的方式 根据组件构造器 创建组件对象
  let toast = new toastConstuctor()
  //3、将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  //4、toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj