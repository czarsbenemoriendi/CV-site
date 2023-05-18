import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirm from '../components/ModalConfirm.vue'
import { popupText } from '../constants/index'

export function useShowModal() {
  const { open, close } = useModal({
    component: ModalConfirm,
    attrs: {
      title: 'Hello!',
      onConfirm() {
        close()
      },
    },
    slots: {
      default: popupText,
    },
  })
  return { open, close, ModalsContainer }
}
