import {Store} from './store';

export const NvidiaES: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.add-to-cart-bloc',
      text: ['Añadir a la cesta', 'COMPRAR YA'],
    },
    outOfStock: {
      container: '.buy',
      text: ['AGOTADO'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.nvidia.com/es-es/geforce/graphics-cards/rtx-2060-super/',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203060%20Ti&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3060ti',
      url:
        'https://www.ldlc.com/es-es/ficha/PB66603060.html',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203070&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3070',
      url:
        'https://www.ldlc.com/es-es/ficha/PB66603070.html',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203080&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3080',
      url:
        'https://www.ldlc.com/es-es/ficha/PB99993080.html',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url:
        'https://www.nvidia.com/es-es/shop/geforce/gpu/?page=1&limit=9&locale=es-es&category=GPU&gpu=RTX%203090&manufacturer=NVIDIA',
    },
    {
      brand: 'nvidia',
      model: 'founders edition',
      series: '3090',
      url:
        'https://www.ldlc.com/es-es/ficha/PB66603090.html',
    },
  ],
  name: 'nvidia-es',
};
