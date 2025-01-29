<script setup>
    import { ref } from "vue";
</script>

<template>
  <main>
    <section class="categories">
      <div class="category-card men">
        <h2>Men's Clothing</h2>
        <img src="../../public/bildites/mens-fashion.jpg" alt="Men's Clothing" />
        <button>Shop Men</button>
      </div>

      <div class="category-card women">
        <h2>Women's Clothing</h2>
        <img src="../../public/bildites/womens-fashion.jpg" alt="Women's Clothing" />
        <button>Shop Women</button>
      </div>
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

/* Category Cards */
.categories {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
}

.category-card {
  width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.category-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.category-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.category-card button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.category-card button:hover {
  background-color: white;
  color: black;
  outline: 2px solid black;
  transform: scale(1.05);
}

.category-card:hover {
  transform: scale(1.05);
}
</style>
