const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: [],
      editPrice: undefined,
      editId: {},
    };
  },
  methods: {
    async getData() {
      const { data } = await axios.get('/immos');
      this.immos = data;
      console.log(this.immos);
    },
    async deleteOne(obj) {
      await axios.delete(`/immos/${obj.id}`);
      this.getData();
    },
    editOne(obj) {
      this.editPrice = obj.price;
      this.editId = obj.id;
    },
    async patchPrice() {
      await axios.patch(`/immos/${this.editId}`, {
        price: Number(this.editPrice),
      });
      this.getData();
      this.editPrice = undefined
    },
  },
};

createApp(myApp).mount('#app');
