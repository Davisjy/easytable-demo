<template>
  <div>
    <span ref="winBar" :style="{ width: 100 * rowData.win / total + '%' }" class="win-bar">
    </span>
    <span class="text">{{ (100 * rowData.win / total).toFixed(1) + '%' }}</span>
  </div>
</template>

<script>
export default {
  name: "bar",
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  computed: {
    total() {
      return this.rowData.win + this.rowData.loss;
    }
  },
  mounted() {
    // console.log(this.rowData);
    // console.log(this.field);
    // console.log(this.index);
    if (this.index === 0) {
      this.$refs.winBar.style.background = "red";
    }
  }
};
</script>

<style scoped>
div {
  /* border: 1px solid #e1e1e1; */
  /* border-radius: 5px; */
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  /* height: 1.6em; */
  height: 100%;
}
.text {
  position: absolute;
  left: 50%;
  font-size: 14px;
  transform: translateX(-50%);
}

.win-bar {
  float: left;
  /* display: inline-block; */
  height: 100%;
  width: 100%;
  background: #69f0ae;
}
</style>
