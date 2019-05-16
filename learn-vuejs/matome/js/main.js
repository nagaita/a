var app = new Vue({
  el: '#app',
  data: {
    message: "Hello World!",
    url: "https://jp.vuejs.org/",
    togglet: true,
    togglef: false,
    languages: ["JavaScript", "Ruby", "Python"]
  },
  methods: {
    doClick: function() {
      this.message = "Clicked!"
    }
  }
});
