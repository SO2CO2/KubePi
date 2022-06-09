import {get, post, put} from "@/plugins/request"

const baseUrl = "/api/v1/ldap"

export function getLdap () {
  return get(`${baseUrl}`)
}

export function createLdap (data) {
  return post(`${baseUrl}`, data)
}

export function updateLdap(data){
  return put(`${baseUrl}`, data)
}

export function syncLdap(id,data) {
  return post(`${baseUrl}/sync/${id}`, data)
}

export function testConnect(data) {
  return post(`${baseUrl}/test/connect`, data)
}

export function testLogin(data){
  return post(`${baseUrl}/test/login`, data)
}


export function importUser(data){
  return post(`${baseUrl}/import`, data)
}
