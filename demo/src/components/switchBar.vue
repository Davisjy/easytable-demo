<template>
  <ul class="switches">
    <li @click="switchItem(index)" class="switch-item" v-for="(item, index) in titles" :key="index" :class="{'active':currentIndex === index}">
      <span class="content">{{item.name}}</span>
      <i v-if="index !== titles.length-1" class="line"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [
          {
            name: "2018"
          },
          {
            name: "2019"
          },
          {
            name: "2020"
          }
        ];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      this.$emit("switch", index);
    }
  }
};
</script>

<style scoped lang="stylus">
.switches
  list-style none
  height 50px
  line-height 50px
  display flex
  align-items center
  width 100%
  .switch-item
    position relative
    flex 1
    text-align center
    font-size 16px
    &.active
      border-bottom 1px solid blue
      color blue
    .line
      position absolute
      right 0
      width 1px
      top 50%
      height 50%
      transform translateY(-50%)
      background gray
</style>
