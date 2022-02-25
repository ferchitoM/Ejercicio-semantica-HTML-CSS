Vue.createApp({
  data() {
    return {
      shop_state: "",
      img_id: 0,
    };
  },
  methods: {
    openShop() {
      if (this.shop_state == "" || this.shop_state == "shop_close")
        this.shop_state = "shop_open";
      else this.shop_state = "shop_close";
      //console.log(this.shop_state);
    },
    showImage(i) {
      i % 4 == 0 ? (this.img_id = 1) : this.img_id++;
      console.log(this.img_id);
      return this.img_id;
    },
  },
}).mount("#app");
