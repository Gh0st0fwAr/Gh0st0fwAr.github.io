
import Vue from 'vue';

const perk = {
   template: "#perk",
   props: ["perkName", "perkPercent"],
   mounted() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
         getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
      const percent = (dashArray/100) * (100 - this.perkPercent);

      circle.style.strokeDashoffset = percent;
   },
}

const perksRow = {
   template: "#perks-row",
   components: { perk },
   props: ["perk"]
}


new Vue({
   el: "#perks-component",
   template: "#perks-list",
   data: () => ({
      perks: []
   }),
   components: { perksRow },

   created() {
      const data = require('../data/perks.json');
      this.perks = data;
   }
   
});