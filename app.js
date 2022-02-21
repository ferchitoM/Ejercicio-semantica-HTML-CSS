Vue.createApp({
  data() {
    return {
      shop_state: "",
    };
  },
  methods: {
    openShop() {
      if (this.shop_state == "" || this.shop_state == "shop_close")
        this.shop_state = "shop_open"
      else this.shop_state = "shop_close"
      console.log(this.shop_state);
    },
  },
}).mount("#app");
