
import Vue from "vue";

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const opinionsItem = {
   template: "#opinions-item",
   props: ["item"],
   components: {
     swiperSlide
   }
}

new Vue({
   el: "#opinions-component",
   template: "#opinions-list",
   components: {
      opinionsItem,
      swiper,
   },
   data: {
      comments: [],
      swiperOption: {
         slidesPerView: 2,
         spaceBetween: 50,
         navigation: {
            nextEl: '.nextbtn--opinions',
            prevEl: '.prevbtn--opinions',
            disabledClass: 'btn--opinions--disabled',
         },
         breakpoints: {
            480: {
               slidesPerView: 1,
            },
         }
      }
   },
   methods: {
      addImagePaths(comments) {
         return comments.map(el => {
            let photo = require(`../images/content/${el.photo}`);
            el.photo = photo
            return el
         })
      }
   },
   created() {
      const data = require("../data/comments.json");
      this.comments = this.addImagePaths(data);
   }
})