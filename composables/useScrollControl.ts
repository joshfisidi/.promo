import { ref } from "vue";

export function useScrollControl() {
  const showElement = ref(true);
  let lastScrollPosition = 0;

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition + 5) { // Scrolling down
      showElement.value = true;
    } else if (currentScrollPosition < lastScrollPosition - 5) { // Scrolling up
      showElement.value = false;
    }

    lastScrollPosition = currentScrollPosition;
  };

  return { showElement, handleScroll };
}
