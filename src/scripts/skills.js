
import Vue from 'vue';

const perk = {
   template: "#perk",
   props: ["perkName", "perkPercent"]
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
      const data = require('../data//perks.json');
      this.perks = data;
   }
   
});