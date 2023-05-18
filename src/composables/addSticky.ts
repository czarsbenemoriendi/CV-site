import { onMounted, ref } from 'vue'

export function useAddSticky() {
  const scrollPosition = ref(0)
  const sticky = ref(null)

  function updateScroll() {
    scrollPosition.value = window.scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', updateScroll)
    window.onscroll = function () {
      stickyAdd()
    }

    const navbar = document.querySelector('.desktop-menu') as HTMLDivElement
    const sticky = navbar.offsetTop
    function stickyAdd() {
      if (window.scrollY >= sticky)
        navbar.classList.add('sticky')
      else navbar.classList.remove('sticky')
    }
  })
  return { sticky }
}
