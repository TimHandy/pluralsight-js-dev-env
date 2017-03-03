import 'whatwg-fetch' // this is a fetch polyfill that makes fetch work on node as well as browser code
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers() {
  return get('users')
}

export function deleteUser(id) {
  return del(`users/${id}`)
}

// you could add support for put, delete, post etc also.

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

// Can't call function 'delete' due to being a reserved word
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  })

  return fetch(request).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  console.log(error)  // eslint-disable-line no-console
}

