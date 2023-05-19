import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirm from '../components/ModalConfirm.vue'
import { aboutMeTexts } from '../constants/index'

const { popupText } = aboutMeTexts
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
