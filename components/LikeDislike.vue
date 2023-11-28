<template>
  <div class="box">
    <div class="rectangle" />
  </div>
  <div class="box2">
    <div class="rectangle" />
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
.box2 {

  position: fixed; 
  top: 50%;        
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 101px;     
  height: 32px;    
  margin-top: 19rem; 

  @media screen and (max-width: 414px) { /* iPhone 15 Pro Max and similar devices */
    width: 100px; /* Increase size for larger screens */
    height: 45px;
    margin-top: 5rem; /* Adjust margin for better positioning */
  }
  .box .rectangle {
    background-color: #0b1e34;
    border-radius: 100px;
    width: 30%;   
    height: 100%;    
    position: absolute;
  }
}
.box {
  position: fixed; 
  top: 50%;        
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 71px;     
  height: 32px;    
  margin-top: 3rem; 

  @media screen and (max-width: 414px) { /* iPhone 15 Pro Max and similar devices */
    width: 100px; /* Increase size for larger screens */
    height: 45px;
    margin-top: 5rem; /* Adjust margin for better positioning */
  }
}

.box .rectangle {
  background-color: #0b1e34;
  border-radius: 100px;
  width: 100%;   
  height: 100%;    
  position: absolute;
}
</style>
