import Vue from 'vue';

export function rubles (amount: number) {
  return amount.toLocaleString('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });
}

Vue.filter('rubles', rubles);
