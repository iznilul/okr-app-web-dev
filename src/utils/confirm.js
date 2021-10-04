import { Modal } from 'view-design'

export function handleConfirm(callback, param) {
  return Modal.confirm({
    title: '操作确认',
    content: '确定执行此操作吗',
    onOk: () => {
      callback(param)
    },
    onCancel: () => {},
    type: 'warning',
  })
}
