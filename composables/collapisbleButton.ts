// collapsibleButton.ts (Composable)

import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface CollapsibleButtonProps {
  isActive: Ref<boolean>;
  handleClick: (event: MouseEvent) => void;
  handleTouchStart: (event: TouchEvent) => void;
  handleTouchEnd: (event: TouchEvent) => void;
  buttonContainer: Ref<HTMLElement | null>;
}

export default function useCollapsibleButton(): CollapsibleButtonProps {
  const isActive = ref(false);
  const buttonContainer = ref<HTMLElement | null>(null);
  let touchStartX = 0;

  const toggleExpand = () => {
    isActive.value = !isActive.value;
  };

  const handleClick = (event: MouseEvent) => {
    if (buttonContainer.value && buttonContainer.value.contains(event.target as Node)) {
      if (!(event.target as HTMLElement).classList.contains('button-image')) {
        toggleExpand();
      }
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;

    if (Math.abs(touchDistance) < 10 && !(event.target as HTMLElement).classList.contains('button-image')) {
      toggleExpand();
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (isActive.value && buttonContainer.value && !buttonContainer.value.contains(event.target as Node)) {
      isActive.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleDocumentClick);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleDocumentClick);
  });

  return {
    isActive,
    handleClick,
    handleTouchStart,
    handleTouchEnd,
    buttonContainer,
  };
}
