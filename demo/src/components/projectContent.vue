<template>
  <div>
    <switch-bar @switch="switchItem" :switches="switches" :currentIndex="currentIndex"></switch-bar>

    <div class="table-wrapper" v-show="hasData">
      <v-table is-horizontal-resize is-vertical-resize style="width:100%" :height="height" :column-cell-class-name="columnCellClass" :columns="columns" :table-data="resultData" :cell-merge="cellMerge">
      </v-table>
    </div>
  </div>
</template>

<script>
import SwitchBar from "components/switchBar";
const KEY_NAME = "name";
export default {
  data() {
    return {
      currentIndex: 0,
      hasData: true,
      rowHeight: 20,
      switches: [
        {
          name: "2018"
        },
        {
          name: "2019"
        },
        {
          name: "2020"
        }
      ],
      columns: [
        {
          field: "name",
          title: "项目名称",
          width: 70,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "category",
          title: "项目分类",
          width: 80,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "unit",
          title: "单位",
          width: 40,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "num",
          title: "数量",
          width: 40,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "remark",
          title: "备注",
          width: 160,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        }
      ],
      resultData: [],
      tableData: [
        {
          name: "调查评价",
          category: "调查评价工作底图",
          unit: "项",
          num: "1",
          remark: "备注点东西"
        },
        {
          name: "调查评价",
          category: "洪涝灾害调查",
          unit: "项",
          num: "1",
          remark: "备注点东西"
        },
        {
          name: "自动检测系统",
          category: "自动雨量站",
          unit: "个",
          num: "1",
          remark: "备注点东西"
        },
        {
          name: "自动检测系统",
          category: "自动水位站",
          unit: "个",
          num: "1",
          remark: "备注点东西"
        },
        {
          name: "自动检测系统",
          category: "图像监测站点",
          unit: "个",
          num: "1",
          remark: "备注点东西"
        }
      ]
    };
  },
  computed: {
    height() {
      return window.innerHeight;
    }
  },
  mounted() {
    this.formatData();
    // setTimeout(() => {
    //   // this.resultData.splice(0, 1);
    //   this.hasData = false;
    // }, 2000);
    // setTimeout(() => {
    //   // this.resultData.splice(0, 1);
    //   this.hasData = true;
    // }, 4000);
  },
  methods: {
    switchItem(index) {
      this.currentIndex = index;
    },
    columnCellClass(rowIndex, columnName, rowData) {
      if (columnName === "name" || columnName === "category") {
        return "mine-custom-cell";
      }
    },
    formatData() {
      const KEY_ROWSPAN = "rowSpan";
      var k = 0;
      while (k < this.tableData.length) {
        this.tableData[k][KEY_ROWSPAN] = 1;
        for (var i = k + 1; i <= this.tableData.length - 1; i++) {
          if (
            this.tableData[k][KEY_NAME] === this.tableData[i][KEY_NAME] &&
            this.tableData[k][KEY_NAME] !== ""
          ) {
            this.tableData[k][KEY_ROWSPAN]++;
          } else {
            break;
          }
        }
        k = i;
      }
      this.resultData = this.tableData;
    },
    cellMerge(rowIndex, rowData, field) {
      if (field === KEY_NAME && rowData.rowSpan > 0) {
        return {
          colSpan: 1,
          rowSpan: rowData.rowSpan,
          content: rowData[field],
          componentName: ""
        };
      }
    }
  },
  components: {
    SwitchBar
  }
};
</script>

<style>
.v-table-class {
  font-size: 12px;
}
/* .v-table-body-class {
  font-size: 32px;
}
.v-table-title-class {
  font-size: 30px;
} */
.table-wrapper {
  margin-top: 20px;
}
.mine-custom-cell {
  padding: 0;
  /* display: table; */
}
.mine-custom-cell .v-table-body-cell {
  padding: 0;
  white-space: normal;
  line-height: normal !important;
  /* display: table-cell; */
  /* vertical-align: middle; */
  position: relative;
}
.mine-custom-cell .v-table-body-cell span {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
</style>
