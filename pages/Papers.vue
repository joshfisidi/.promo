<template>
    <transition name="fade-slide">
        
      <div v-if="showModal" class="modal">

        <div class="modal-content bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg">
          <div class="header flex justify-between items-center">
            
            <h2 class="modal-title text-xl font-semibold">{{ title }}</h2>
            <button @click="closeModal" class="close-button text-2xl">&times;</button>
          </div>
          <div class="modal-body text-center">
            <img :src="imageUrl" alt="Modal Image" class="modal-image w-full h-auto mb-4" />
            <p class="modal-text text-lg">{{ modalText }}</p>
          </div>
          <div class="modal-footer mt-4 text-right">
            <button @click="closeModal" class="custom-button primary bg-blue-500 text-white rounded px-4 py-2 mr-2">Close</button>
            <button class="custom-button secondary bg-gray-300 text-gray-700 rounded px-4 py-2">Submit</button>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  
  <script>
export default {
  name: 'MyModal',
  data() {
    return {
      showModal: false,
      title: 'Beautiful Modal',
      imageUrl: "https://gojilzafapjkmacdfisx.supabase.co/storage/v1/object/public/josh.promo/Users/joshjgomes-fisidi.gif",
      modalText: 'This is a fascinating modal!'
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

  
  <style scoped>
  /* Modal styles */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50;
  }
  
  .modal-content {
    background: #fff;
    max-width: 80%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-title {
    font-size: 24px;
    margin: 0;
  }
  
  .close-button {
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .modal-body {
    text-align: center;
  }
  
  .modal-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .modal-text {
    font-size: 18px;
  }
  
  .modal-footer {
    margin-top: 20px;
    text-align: right;
  }
  
  .custom-button {
    padding: 10px 20px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .primary {
    background: #007bff;
    color: #fff;
  }
  
  .secondary {
    background: #ccc;
    color: #333;
  }
  
  /* Animation */
  .fade-slide-enter-active, .fade-slide-leave-active {
    @apply transition-opacity transition-transform duration-500;
  }
  .fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  
  .fade-slide-enter, .fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(20px);
  }

  .open-modal-button {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer;
    margin-top: 1rem;
  }
  </style>
  