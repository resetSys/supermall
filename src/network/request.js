//封装网络请求模块
import axios from "axios"

export function request(config){
  const instence = axios.create({
    // baseURL:"http://192.168.1.204/supermall",
    baseURL:"http://localhost/supermall",
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
  });
  return instence(config);
}