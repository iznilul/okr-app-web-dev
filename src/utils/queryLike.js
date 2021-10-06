import store from '../store'

export function queryLike(pattern, param) {
  return new Promise((resolve, reject) => {
    store
      .dispatch('getLike' + pattern, param)
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
