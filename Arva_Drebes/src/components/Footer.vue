<script setup>
    import { ref } from "vue";
</script>

<template>
  <footer class="kajene">
    <h3>SOCIAL MEDIA</h3>
    <div class="social-icons">
      <img src="../../public/bildites/Instag_Icon.png" alt="Instagram" />
      <img src="../../public/bildites/TikTok_Icon.png" alt="TikTok" />
      <img src="../../public/bildites/Faceb_Icon.png" alt="Facebook" />
      <img src="../../public/bildites/Youtube_Icon.png" alt="YouTube" />
    </div>
    <p>&copy; 2024 AVDP</p>
  </footer>
</template>

<style scoped>
.kajene {
  background-color: white;
  padding: 20px;
  text-align: center;
  border-top: 2px solid #bdc3c7;
}

.social-icons img {
  width: 40px;
  margin: 0 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}
</style>
