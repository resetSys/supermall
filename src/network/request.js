//封装网络请求模块
import axios from "axios"

export function request(config){
  const instence = axios.create({
    baseURL:"",
  });
  return instence(config);
}