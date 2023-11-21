<template>
    <div 
      class="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50"
      v-if="isModalOpen"
    >
      <div 
        class="modal-container"
        @click.self="closeModal"
      >
        <div class="modal-flipper">
          <div class="modal-front">
            <slot name="front"></slot>
          </div>
          <div class="modal-back">
            <slot name="back"></slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFlipped: false,
        isModalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      toggleFlip() {
        this.isFlipped = !this.isFlipped;
      }
    }
  };
  </script>
  
  <style lang="scss">
  .modal-container {
    perspective: 1000px;
    .modal-flipper {
      width: 300px;
      height: 200px;
      transform-style: preserve-3d;
      transition: 0.6s;
      &:hover {
        transform: rotateY(180deg);
      }
      .modal-front, .modal-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        background-color: white;
      }
      .modal-back {
        transform: rotateY(180deg);
      }
    }
  }
  </style>
  