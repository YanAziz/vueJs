// var app = new Vue({
//   el: "#app",
//   data: {
//     maximum: 50,
//     products: null,
//     cart: [],
//   },
//   mounted: function () {
//     fetch("https://hplussport.com/api/products/order/price")
//       .then((response) => response.json())
//       .then((data) => {
//         this.products = data;
//       });
//   },
//   methods: {
//     addItem: function (product) {
//       this.cart.push(product);
//     },
//   },
// });

// var app = new Vue({
//   el: "#app",
//   data: {
//     slugText: "The Quick #(*!&@ Brown 29",
//   },
//   computed: {
//     // now: function () {
//     //     var date = new Date();
//     //     return (
//     //         String(date.getHours()) +
//     //         String(date.getMinutes()) +
//     //         String(date.getSeconds())
//     //     )
//     // },

//     slugetize: function () {
//       return (
//         this.slugText
//           .toLowerCase()
//           .replace(/[^\w ]+/g, "")
//           .replace(/ +/g, "-") +
//         "-" +
//         this.now()
//       );
//     },
//   },

//   methods: {
//     now: function () {
//       var date = new Date();
//       return String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
//     },
//   },
// });

var app = new Vue({
  el: "#app",
  data: {
    style: {
      label: ["font-weight-bold", "mr-2"],
      inputWidth: 60,
      sliderStatus: false,
    },
    maximum: 50,
    products: null,
    cart: [],
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none";
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
    addItem: function (product) {
      this.cart.push(product);
    },
  },
});
