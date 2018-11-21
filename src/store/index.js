/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: {
      notebooks: [
        {
          name: 'HP Notebook Laptop 15.6 HD Vibrant Display Quad Core AMD E2-7110 APU 1.8GHz 4GB RAM 500GB HDD DVD Windows 10',
          price: 293.78,
          image: 'https://images-na.ssl-images-amazon.com/images/I/51kY4PHneiL._AC_US218_.jpg',
          stars: 3.3,
          totalReviews: 211,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'HP ProBook x360 11.6" G1 EE Notebook, LED HD Touchscreen, Intel Celeron N3350 Dual-Core 1.1GHz, 4GB DDR3, 64GB SSD eMMC, 802.11ac, Bluetooth 4.2, Win10Pro - 64Bit',
          price: 325.00,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41VFvjLBjlL._AC_US218_.jpg',
          stars: 3.8,
          totalReviews: 21,
          details: 'Lorem Ipsum is simply dummy t ext of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'HP Notebook 15.6 Inch Touchscreen Premium Laptop PC (2017 Version), 7th Gen Intel Core i3-7100U 2.4GHz Processor, 8GB DDR4 RAM, 1TB HDD, SuperMulti DVD Burner, Bluetooth, Windows 10',
          price: 464.90,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41wSfyLG7cL._AC_US218_.jpg',
          stars: 3.6,
          totalReviews: 244,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'HP Stream Laptop PC 11-y010nr (Intel Celeron N3060, 4 GB RAM, 32 GB eMMC) with Office 365 Personal for one Year',
          price: 209.00,
          image: 'https://images-na.ssl-images-amazon.com/images/I/51doEdWFgRL._AC_US218_.jpg',
          stars: 3.1,
          totalReviews: 660,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: '2019 Dell Inspiron 3000 Series 15.6 HD Touchscreen Laptop Computer, Intel Core i5-7200U up to 3.1GHz, Wi-Fi, HDMI, Webcam, Bluetooth, USB 3.0, Windows 10, 8GB/16GB/32GB DDR4, Up to 2TB HDD, 1TB SSD',
          price: 479.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/51SkNBq7ReL._AC_US218_.jpg',
          stars: 3,
          totalReviews: 30,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Dell Inspiron 2-in-1 17.3" FHD Touch-Screen 2018 Latest Laptop, Intel i7-8550U Up to 4.0GHz, GeForce MX150, Bluetooth, Wi-Fi, HDMI, Webcam, Windows 10, Gray, Up to 32GB DDR4, 2TB HDD and 1TB SSD',
          price: 899.99,
          image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
          stars: 5,
          totalReviews: 1,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],

      smartphones: [
        {
          name: 'Nokia 2 - Android - 8GB - Single SIM Unlocked Smartphone (AT&T/T-Mobile/MetroPCS/Cricket/H2O) - 5" Screen - Copper - U.S. Warranty',
          price: 84.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41hwhhH2z+L._AC_US218_.jpg',
          stars: 3.2,
          totalReviews: 7,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Nokia 6 - Android 8.0 - 32 GB - 16MP Camera - Dual SIM Unlocked Smartphone (AT&T/T-Mobile/MetroPCS/Cricket/H2O) - 5.5" FHD Screen - Copper - U.S. Warranty',
          price: 929,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41K-GoZDOFL._AC_US218_.jpg',
          stars: 3.7,
          totalReviews: 320,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Huawei Mate SE Factory Unlocked 5.93” - 4GB/64GB Octa-core Processor| 16MP + 2MP Dual Camera| GSM Only |Grey (US Warranty)',
          price: 219.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41U+Fucf26L._AC_US218_.jpg',
          stars: 4.4,
          totalReviews: 1118,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Honor 7X GSM Unlocked Smartphone 5.93” FullView Display, 16MP + 2MP Dual-Lens Camera, Dual SIM, Expandable Storage, Black (US Warranty)',
          price: 199.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41qvmOMMsLL._AC_US218_.jpg',
          stars: 4.2,
          totalReviews: 1116,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Samsung Galaxy J7 Neo (16GB) J701M/DS - 5.5", Android 7.0, Dual SIM Unlocked Smartphone, International Model - Black',
          price: 142.95,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41CJg1jQQpL._AC_US218_.jpg',
          stars: 3.9,
          totalReviews: 223,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          name: 'Xiaomi Mi A2 Lite (64GB, 4GB RAM) 5.84" 18:9 HD Display, Dual Camera, Android One Unlocked Smartphone - International Global LTE Version (Gold)',
          price: 185.00,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41QHr7qP6-L._AC_US218_.jpg',
          stars: 3.9,
          totalReviews: 27,
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
      ],
      cartProducts: [],
      currentProduct: {},
      showModal: false,
      showPopupCart: false,
    },
    getters,
    mutations,
    actions,
  });
}
