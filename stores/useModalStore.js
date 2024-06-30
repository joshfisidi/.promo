import { useState } from '#app'

export const useModalStore = () => {
  const showModal = useState('show-modal', () => false)
  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  return { showModal, toggleModal }
}
