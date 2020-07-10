import Vue from 'vue';

export function rubles (amount: number, minDecimals?: number, maxDecimals?: number) {
  return amount.toLocaleString('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: minDecimals ?? Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: maxDecimals ?? Number.isInteger(amount) ? 0 : 2,
  });
}

Vue.filter('rubles', rubles);
