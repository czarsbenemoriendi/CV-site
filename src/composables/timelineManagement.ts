import { computed, ref } from 'vue'

// import type { TimelineType } from '../types/index'
interface TimelineType {
  [index: number]: any
}

export function useTimelineManagement() {
  const picked = ref(false)
  const text = ref('')

  function setIndex(index: number, timeline: TimelineType) {
    const selectedText = computed (() => {
      return timeline[index]
    })
    text.value = selectedText.value
  }
  return { text, picked, setIndex }
}
