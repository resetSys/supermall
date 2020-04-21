import {request} from "./request"

export function getHomeData(){
  return request({
    url:"http://jsonplaceholder.typicode.com/users"
  })
}
//请求货物数据
export function getHomeGoods(){
  return request({
    url:"http://jsonplaceholder.typicode.com/users"
  })
}