
import Vue from "vue";

const thumbs = {
   template: "#myworks-thumbs",
   props: ["works", "currentWork"],
   
};

const btns = {
   template: "#myworks-btns"
};

const display = {
   template: "#myworks-display",
   components: { thumbs, btns },
   props: ["works", "currentWork"]
};

const tags = {
   template: "#myworks-tags",
   props: ["tags"]
};

const info = {
   template: "#myworks-info",
   components: { tags },
   props: ["currentWork"],
   computed: {
      tagsArray() {
         return this.currentWork.skills.split(', ')
      }
   },
};



new Vue({
   el: "#myworks-component",
   template: "#myworks-sliderbox",
   components: { display, info },
   data: () => ({
      works: [],
      currentIndex: 0
   }),
   computed: {
      currentWork() {
         return this.works[this.currentIndex];
      }
   },
   watch: {
      currentIndex(value) {
         const worksAmount = this.works.length - 1;
         if (value < 0) this.currentIndex = worksAmount;
         if (value > this.works.length - 1) this.currentIndex = 0;
      }
   },
   methods: {
      makeArrWithRequiredImages(data) {
         return data.map(item => {
            const requiredPic = require(`../images/content/${item.photo}`);
            item.photo = requiredPic;
            return item
         })
      },
      handleSlide(direction) {
         switch(direction) {
            case 'next':
               this.currentIndex++;
               break;
            case 'prev':
               this.currentIndex--;
               break;
         }
      }
   },
   created() {
      const data = require('../data/works.json');
      this.works = this.makeArrWithRequiredImages(data);

      // this.currentWork = this.works[this.currentIndex];
   },
});

