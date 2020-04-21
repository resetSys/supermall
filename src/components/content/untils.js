let timer = null;
export function debounce(fun,delay){
  return function (...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this,args)
      window.console.log("图片加载完毕")
    }, delay);
  }
}
