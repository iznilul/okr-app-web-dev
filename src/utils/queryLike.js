import store from '@/store'

export function queryLikeUsername(param) {
  return new Promise((resolve, reject) => {
    store
      .dispatch('getLikeUsername', param)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function queryLikeName(param) {
  return new Promise((resolve, reject) => {
    store
      .dispatch('getLikeName', param)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function queryLikeMajor(param) {
  return new Promise((resolve, reject) => {
    store
      .dispatch('getLikeMajor', param)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
