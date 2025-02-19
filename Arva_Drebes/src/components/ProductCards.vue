<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Jeans',
    price: 39.99,
    image: '../../public/images/jeans.jpg',
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 19.99,
    image: '../../public/images/t-shirt.jpg',
  },
  {
    id: 3,
    name: 'Jacket',
    price: 79.99,
    image: '../../public/images/jacket.jpg',
  },
  {
    id: 4,
    name: 'Shoes',
    price: 59.99,
    image: '../../public/images/shoes.jpg',
  },
  {
    id: 5,
    name: 'Hat',
    price: 15.99,
    image: '../../public/images/hat.jpg',
  },
  {
    id: 6,
    name: 'Jeans 2',
    price: 39.99,
    image: '../../public/images/jeans.jpg',
  },
  {
    id: 7,
    name: 'T-Shirt 2',
    price: 19.99,
    image: '../../public/images/t-shirt.jpg',
  },
  {
    id: 8,
    name: 'Jacket 2',
    price: 79.99,
    image: '../../public/images/jacket.jpg',
  },
  {
    id: 9,
    name: 'Shoes 2',
    price: 59.99,
    image: '../../public/images/shoes.jpg',
  },
  {
    id: 10,
    name: 'Hat 2',
    price: 15.99,
    image: '../../public/images/hat.jpg',
  },
]);

const placeholderImage = '../../public/images/placeholder.jpg';
</script>

<template>
  <div class="product-container">
    <div class="product-card" v-for="product in products" :key="product.id">
      <img :src="product.image || placeholderImage" :alt="product.name" class="product-img" />
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container holding the product cards */
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Increased gap for better spacing */
  justify-content: space-between;
  padding: 50px 20px 20px 20px; /* Added padding-top to push content below the navbar */
  margin-top: 80px; /* Added margin-top to ensure the first row starts below the nav bar */
}

/* Style for each individual product card */
.product-card {
  display: flex;
  flex-direction: column;
  width: 19%; /* Adjusted width for larger cards (5 products per row) */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Style for product images */
.product-img {
  width: 100%;
  height: 250px; /* Increased height for larger images */
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

/* Product information section */
.product-info {
  padding: 15px;
  text-align: center;
}

.product-name {
  font-size: 20px; /* Increased font size for name */
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px; /* Increased font size for price */
  color: #e74c3c;
  font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .product-card {
    width: 22%; /* Adjust the width slightly for smaller screens */
  }
}

@media (max-width: 992px) {
  .product-container {
    justify-content: space-between;
  }
  .product-card {
    width: 30%; /* 3 products per row on medium screens */
  }
}

@media (max-width: 768px) {
  .product-card {
    width: 45%; /* 2 products per row on smaller screens */
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 90%; /* 1 product per row on very small screens */
  }
}
</style>
