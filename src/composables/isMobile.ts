import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

export function useIsMobile() {
  const { width } = useWindowSize()
  const mobileDevice = ref(true)
  const desktopDevice = ref(false)

  if (width.value >= 768) {
    mobileDevice.value = false
    desktopDevice.value = true
  }
  return { mobileDevice, desktopDevice }
}
