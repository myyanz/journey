new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/nna1.jpg",
          img2: "images/nna2.jpg",
          img3: "images/nna3.jpg",
          title: "WITH U",
          isOpen: false,
        },
        {
          img1: "images/nana1.jpg",
          img2: "images/nana2.jpg",
          img3: "images/nana3.jpg",
          title: "PRETTY",
          isOpen: false,
        },
        {
          img1: "images/naw1.jpg",
          img2: "images/naw2.jpg",
          img3: "images/naw3.jpg",
          title: "ANJAIII",
          isOpen: false,
        },
        {
          img1: "images/dek1.jpg",
          img2: "images/dek2.jpg",
          img3: "images/dek3.jpg",
          title: "SCHOOL DEK",
          isOpen: false,
        },
        {
          img1: "images/apa1.jpg",
          img2: "images/apa2.jpg",
          img3: "images/apa3.jpg",
          title: "GATAU JIR",
          isOpen: false,
        },
        {
          img1: "images/asin1.jpg",
          img2: "images/asin2.jpg",
          img3: "images/asin3.jpg",
          title: "ASIN KANGEN",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
