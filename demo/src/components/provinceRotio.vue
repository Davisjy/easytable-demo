<template>
  <div>
    <div class="pie-wrapper">
      <ul class="list-view" ref="listView">
        <li v-for="(item, index) in pieData" :key="index">
          <p>{{item.title}}</p>
          <pie :percent="item.percent" :color="item.bgColor"></pie>
        </li>
      </ul>
    </div>
    <div class="table-wrapper">
      <div class="evalu-wrapper">
        <p class="title">调查评价</p>
        <v-table :row-height="30" :title-row-height="34" is-horizontal-resize is-vertical-resize style="width:100%" :height="100" :title-rows="evaluTitleRows" :columns="evaluColumns" :table-data="evaluData">
        </v-table>
      </div>
      <div class="evalu-wrapper">
        <p class="title">监测系统</p>
        <v-table v-if="sysTitleRows.length === 3" :error-content-height="0" :row-height="30" :title-row-height="30" is-horizontal-resize is-vertical-resize style="width:100%" :height="100" :title-rows="sysTitleRows" :columns="sysColumns">
        </v-table>
      </div>
    </div>
  </div>
</template>

<script>
import pie from "components/pie";
export default {
  mounted() {
    var titles = [
      { fields: ["create"], title: "1", titleAlign: "center" },
      {
        fields: ["modify"],
        title: "2",
        titleAlign: "center"
      },
      {
        fields: ["radar"],
        title: "3",
        titleAlign: "center"
      },
      {
        fields: ["floatType"],
        title: "4",
        titleAlign: "center"
      },
      { fields: ["wired"], title: "5", titleAlign: "center" },
      { fields: ["wireless"], title: "6", titleAlign: "center" }
    ];
    setTimeout(() => {
      this.sysTitleRows.push(titles);
    }, 20);
  },
  data() {
    return {
      pieData: [
        {
          percent: 30,
          title: "调查评价",
          bgColor: "blue"
        },
        {
          percent: 40,
          title: "监测系统",
          bgColor: "orange"
        },
        {
          percent: 40,
          title: "监测预警平台",
          bgColor: "green"
        },
        {
          percent: 60,
          title: "预警系统",
          bgColor: "blue"
        },
        {
          percent: 40,
          title: "群策群防",
          bgColor: "orange"
        },
        {
          percent: 70,
          title: "应急救援保障",
          bgColor: "green"
        }
      ],
      evaluData: [
        {
          workBack: 3,
          auditSoft: 8,
          disasterSurvey: 7,
          disasterEvalute: 5,
          resolve: 6
        }
      ],
      evaluColumns: [
        {
          field: "workBack",
          width: 50,
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "auditSoft",
          width: 60,
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "disasterSurvey",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "disasterEvalute",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "resolve",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: false
        }
      ],
      evaluTitleRows: [
        [
          {
            fields: ["workBack", "auditSoft"],
            title: "工作底图和软件",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["disasterSurvey", "disasterEvalute", "resolve"],
            title: "低洼易涝区、外洪威胁区、洪涝灾害调查评价",
            titleAlign: "center",
            colspan: 3
          }
        ],
        [
          { fields: ["workBack"], title: "工作底图", titleAlign: "center" },
          {
            fields: ["auditSoft"],
            title: "审核汇集软件",
            titleAlign: "center"
          },
          {
            fields: ["disasterSurvey"],
            title: "洪涝灾害调查",
            titleAlign: "center"
          },
          {
            fields: ["disasterEvalute"],
            title: "灾害分析评价",
            titleAlign: "center"
          },
          { fields: ["resolve"], title: "审核汇集", titleAlign: "center" }
        ]
      ],
      // 监测系统数据源
      sysColumns: [
        {
          field: "create",
          width: 50,
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "modify",
          width: 50,
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "radar",
          width: 50,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "floatType",
          width: 50,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "wired",
          width: 40,
          columnAlign: "center",
          isFrozen: false,
          isResize: false
        },
        {
          field: "wireless",
          width: 40,
          columnAlign: "center",
          isFrozen: false,
          isResize: false
        },
        {
          field: "resolve",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: false
        }
      ],
      sysTitleRows: [
        [
          {
            fields: ["create", "modify"],
            title: "自动雨量站",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["radar", "floatType"],
            title: "雨量水位一体站",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["wired", "wireless"],
            title: "视频监测站",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["resolve"],
            title: "综合监测站",
            titleAlign: "center",
            rowspan: 3
          }
        ],
        [
          { fields: ["create"], title: "新建", titleAlign: "center" },
          {
            fields: ["modify"],
            title: "改造",
            titleAlign: "center"
          },
          {
            fields: ["radar"],
            title: "雷达式",
            titleAlign: "center"
          },
          {
            fields: ["floatType"],
            title: "浮子式",
            titleAlign: "center"
          },
          { fields: ["wired"], title: "有线", titleAlign: "center" },
          { fields: ["wireless"], title: "无线", titleAlign: "center" }
        ]
      ]
      // sysData: [
      //   {
      //     create: "1",
      //     modify: "2",
      //     radar: "3",
      //     floatType: "4",
      //     wired: "4",
      //     wireless: "1"
      //   }
      // ]
    };
  },

  components: {
    pie
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.v-table-class
  font-size 13px
.pie-wrapper
  ul
    display flex
    margin 10px
    flex-wrap wrap
    li
      display flex
      justify-content center
      flex-direction column
      width 33.333%
      list-style none
      align-items center
      p
        font-size 12px
        text-align center
        padding-bottom 10px
.table-wrapper
  .evalu-wrapper
    margin-top 10px
    padding 0 10px
    .title
      font-size 14px
      // margin 0 10px
      padding-bottom 5px
      padding-left 3px
      border-bottom 1px solid #ccc
      margin-bottom 10px
</style>
