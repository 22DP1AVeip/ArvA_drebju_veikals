<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="tituls">
    <h1>ArvA</h1>
    <nav class="navigation">
      <a href="#"><h3>HOME</h3></a>
      <a href="#about"><h3>ABOUT</h3></a>
      <a href="#contact"><h3>CONTACT US</h3></a>
    </nav>
  </header>

  <main>
    <section class="welcome">
      <h1>SHOP HERE</h1>
      <img src="../../public/bildites/tshirt.jfif" alt="sakuma bilde">
      <p>Welcome to my website!</p>
    </section>
  </main>

  <footer class="kajene">
    <h3>SOCIAL MEDIA</h3>
    <div class="social-icons">
      <img src="../../public/bildites/Instag_Icon.png" alt="Instagram">
      <img src="../../public/bildites/TikTok_Icon.png" alt="TikTok">
      <img src="../../public/bildites/Faceb_Icon.png" alt="Facebook">
      <img src="../../public/bildites/Youtube_Icon.png" alt="YouTube">
    </div>
    <p>&copy; 2024 AVDP</p>
  </footer>
</template>

<style scoped>
body {
  font-family: 'Helvetica', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: white; 
  animation: fadeIn 2s ease-in-out;
}

h1, h2, h3 {
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  text-align: center;
}

.tituls {
  background-color: white; 
  color: #2c3e50;
  padding: 40px 60px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideDown 1s ease-in-out;
}

.tituls h1 {
  font-size: 4rem; 
  font-family: 'Arial', sans-serif;
  letter-spacing: 4px;
}

.navigation a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: 0px; 
  position: relative;
  font-size: 14px; 
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  transition: color 0.3s ease;
  margin-right: 20px; 
}

.navigation a:last-child {
  margin-right: 0; 
}

.navigation a:hover {
  color: #000000; 
}

.navigation a::after {
  content: '';
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #000000; 
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.navigation a:hover::after {
  transform: scaleX(1); 
  transform-origin: bottom left; 
}

main {
  text-align: center;
  padding: 40px 20px;
  background-color: white; 
}

.welcome {
  background-color: #ffffff; 
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
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

.welcome h1 {
  font-size: 2.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.welcome h1:hover {
  color: #3498db;
}

.kajene {
  background-color: white; /* Set footer background color to white */
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

@media (min-width: 1024px) {
  .tituls {
    padding: 60px;
  }

  .kajene {
    padding: 30px;
  }

  .welcome {
    padding: 50px;
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
