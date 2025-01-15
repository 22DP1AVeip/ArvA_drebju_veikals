<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class = "tituls">
        <h1>ArvA</h1>
        <div class = "Homeeeee">
            <a href=""><button>HOME</button></a>
            <a href=""><button>ABOUT</button></a>
            <a href=""><button>CONTACT US</button></a>
        </div>
      </header>
   
    <main>
        <h1>SHOP HERE</h1>
        <img src="../../public/bildites/images.jfif" alt = "sakuma bilde">
        <p>Welcome to my website !</p>
    </main>

    <aside class = "Extraa">
        <h2>Extra information</h2>
        <p>Clothes online shop with original style</p>
    </aside>

    
    <footer class="kajene">
        <h3>SOCIAL MEDIA</h3>
        <p>Instagram</p>
        <p>Youtube</p>
        <p>@2024 AVDP</p>
    </footer>
</template>

<style scoped>
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
} */

body {
    font-family: Arial, sans-serif; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(172, 171, 171);
}


h1, h2, h3 {
    font-family: 'Helvetica', sans-serif; 
    font-weight: bold;
    text-align: center;
}

.tituls {
    background-color: #f0f0f0;
    padding: 50px;
    text-align: center;
}

.Homeeeee {
    font-family: inherit; 
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
}

main {
    text-align: center;
    padding: 20px;
}

.Extraa {
    padding: 12px;
    background-color: #e0e0e0;
    text-align: center;
}

.kajene {
    background-color: #f8f8f8;
    padding: 10px;
    text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
