<script setup>
    import { ref } from "vue";
</script>

<template>
  <main>
    <section class="welcome">
      <h1>SHOP HERE</h1>
      <img src="../../public/bildites/tshirt.jfif" alt="sakuma bilde" />
    </section>
  </main>
</template>

<style scoped>
main {
  margin-top: 120px; 
  text-align: center;
  padding: 40px 20px;
  background-color: white;
}


.welcome {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.welcome img {
  max-width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.welcome img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}
</style>
