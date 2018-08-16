<template>
  <div>
    <canvas ref="canvas" width="200" height="200" style="background:#fff;"></canvas>
  </div>
</template>

<script>
export default {
  created() {
    this.datas = {};
    var width = this.width;
    this.datas.width = width;
    this.datas.percent = this.percent;
    console.log(window.innerWidth);
  },
  props: {
    width: {
      type: Number,
      default() {
        return (window.innerWidth / 8) | 0;
      }
    },
    color: {
      type: String,
      default: "red"
    },
    percent: {
      type: Number,
      default: 40
    }
  },
  mounted() {
    let canvas = this.$refs.canvas;
    canvas.style.width = this.datas.width + "px";
    canvas.style.height = this.datas.width + "px";
    this.datas.canvas = canvas; // 获取canvas元素
    this.datas.context = this.datas.canvas.getContext("2d"); // 获取画图环境，指明为2d
    this.datas.centerX = this.datas.canvas.width / 2; // Canvas中心点x轴坐标
    this.datas.centerY = this.datas.canvas.height / 2; // Canvas中心点y轴坐标
    this.datas.rad = Math.PI * 2 / 100; // 将360度分成100份，那么每一份就是rad度
    this.datas.speed = 1; // 加载的快慢就靠它了
    // 动画循环
    var that = this;
    (function drawFrame() {
      window.requestAnimationFrame(drawFrame);
      that.datas.context.clearRect(
        0,
        0,
        that.datas.canvas.style.width,
        that.datas.canvas.style.height
      );
      that.whiteCircle(that.datas.context);
      if (that.datas.percent <= 0) {
        that.text(0, that.datas.context);
        return;
      }
      that.text(that.datas.speed, that.datas.context);
      that.blueCircle(that.datas.speed, that.datas.context);
      // if(speed > 100) speed = 0;
      if (that.datas.speed >= that.datas.percent) return;
      that.datas.speed += 1;
    })();
  },
  methods: {
    // 绘制5像素宽的运动外圈
    blueCircle(n, context) {
      context.save();
      context.strokeStyle = this.color; // 设置描边样式
      context.lineWidth = 10; // 设置线宽
      context.beginPath(); // 路径开始
      context.arc(
        this.datas.centerX,
        this.datas.centerY,
        90,
        -Math.PI / 2,
        -Math.PI / 2 + n * this.datas.rad,
        false
      ); // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
      context.stroke(); // 绘制
      context.closePath(); // 路径结束
      context.restore();
    },
    // 绘制白色外圈
    whiteCircle(context) {
      context.save();
      context.beginPath();
      context.lineWidth = 2; // 设置线宽
      context.strokeStyle = "white";
      context.arc(
        this.datas.centerX,
        this.datas.centerY,
        75,
        0,
        Math.PI * 2,
        false
      );
      context.stroke();
      context.closePath();
      context.fillStyle = this.color;
      context.fill();
      context.restore();
    },
    // 百分比文字绘制
    text(n, context) {
      context.save(); // save和restore可以保证样式属性只运用于该段canvas元素
      context.strokeStyle = "#fff"; // 设置描边样式
      context.font = "bold 50px Arial"; // 设置字体大小和字体

      context.fillStyle = "white";
      // 绘制字体，并且指定位置
      context.fillText(
        n.toFixed(0) + "%",
        this.datas.centerX - 45,
        this.datas.centerY + 10
      );
      context.restore();
    }
  }
};
</script>

<style scoped>
</style>
