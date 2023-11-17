<template>
  <div class="crypto-tracker">
    <ul class="crypto-list">
      <li v-for="crypto in cryptocurrencies" :key="crypto.id" class="crypto-item">
        
        <div class="crypto-rank">{{ crypto.rank }}</div>
        <div class="crypto-info">
          <img :src="crypto.icon" :alt="crypto.name" class="crypto-icon">
          <div>
            <div class="crypto-name">{{ crypto.name }}</div>
            <div class="crypto-symbol">{{ crypto.symbol }}</div>
          </div>
        </div>
        <div class="crypto-pricing">
          <div class="crypto-price">{{ formatCurrency(crypto.price) }}</div>
          <div class="crypto-supply">{{ formatSupply(crypto.supply) }}</div>
        </div>
        <div class="crypto-favorite">
          <span v-if="crypto.isFavorite" class="icon-star"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cryptocurrencies = ref([]);

const fetchCryptocurrencies = async () => {
  // Placeholder: replace with your API call
  const response = await fetch('https://pro-api.coinmarketcap.com/v1/exchange/listings/latest');
  const data = await response.json();
  cryptocurrencies.value = data;
};

onMounted(() => {
  fetchCryptocurrencies();
});

const formatCurrency = (value) => {
  // Logic to format the price as currency
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

const formatSupply = (value) => {
  // Logic to format the supply
  return new Intl.NumberFormat('en-US').format(value);
};
</script>

<style scoped>
.crypto-tracker {
  background: linear-gradient(180deg, #5e7ec4 0%, #171769 100%);
  padding: 1rem;
  border-radius: 1rem;
  color: white;
}
.crypto-list {
  list-style: none;
  padding: 0;
}
.crypto-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #2c2c2e;
}
.crypto-item:last-child {
  border-bottom: none;
}
.crypto-rank {
  font-size: 1.5rem;
  font-weight: bold;
}
.crypto-info {
  display: flex;
  align-items: center;
}
.crypto-icon {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
.crypto-name {
  font-size: 1.2rem;
}
.crypto-symbol {
  color: #6c6c6e;
}
.crypto-pricing {
  text-align: right;
}
.crypto-price {
  font-size: 1.2rem;
  font-weight: bold;
}
.crypto-supply {
  color: #2d2d58;
}
.icon-star {
  color: #ffac33; /* Change to your desired star color */
  font-size: 1.5rem;
}
</style>
