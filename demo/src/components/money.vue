<template>
  <div>
    <v-table :row-height="30" :title-row-height="34" is-horizontal-resize is-vertical-resize style="width:100%" :height="height" :title-rows="titleRows" :columns="columns" :table-data="resultData" :cell-merge="cellMerge">
    </v-table>
  </div>
</template>

<script>
const KEY_NAME = "city";

export default {
  computed: {
    height() {
      return window.innerHeight;
    },
    width() {
      return window.innerWidth;
    }
  },
  mounted() {
    this.formatData();
  },
  data() {
    return {
      resultData: [],
      tableData: [
        {
          city: "什么市",
          country: "什么县",
          estimateMoney: "1000",
          factMoney: "1000",
          inPlaceMoney: "800",
          inPlaceRatio: "59%",
          purchaseMoney: "500",
          purchaseRatio: "40%"
        },
        {
          city: "济南市",
          country: "槐荫区",
          estimateMoney: "1000",
          factMoney: "1000",
          inPlaceMoney: "800",
          inPlaceRatio: "59%",
          purchaseMoney: "500",
          purchaseRatio: "40%"
        },
        {
          city: "济南市",
          country: "济阳县",
          estimateMoney: "1000",
          factMoney: "1000",
          inPlaceMoney: "800",
          inPlaceRatio: "59%",
          purchaseMoney: "500",
          purchaseRatio: "40%"
        }
      ],
      columns: [
        {
          field: "city",
          width: 60,
          columnAlign: "center",
          isFrozen: true
        },
        {
          field: "country",
          width: 60,
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "estimateMoney",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "factMoney",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "inPlaceMoney",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "inPlaceRatio",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "purchaseMoney",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "purchaseRatio",
          width: 60,
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        }
      ],
      titleRows: [
        [
          {
            fields: ["city", "country"],
            title: "行政区",
            titleAlign: "center",
            colspan: 2,
            rowspan: 2
          },
          {
            fields: ["estimateMoney"],
            title: "概算投资",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["factMoney"],
            title: "实际投资",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["inPlaceMoney", "inPlaceRatio"],
            title: "到位资金",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["purchaseMoney", "purchaseRatio"],
            title: "已支付资金",
            titleAlign: "center",
            colspan: 2
          }
        ],
        [
          //   { fields: ["city"], title: "市", titleAlign: "center" },
          //   { fields: ["country"], title: "县", titleAlign: "center" },
          //   {
          //     fields: ["estimateMoney"],
          //     title: "概算投资",
          //     titleAlign: "center"
          //   },
          //   { fields: ["factMoney"], title: "实际投资", titleAlign: "center" },
          { fields: ["inPlaceMoney"], title: "金额", titleAlign: "center" },
          { fields: ["inPlaceRatio"], title: "占比", titleAlign: "center" },
          { fields: ["purchaseMoney"], title: "金额", titleAlign: "center" },
          { fields: ["purchaseRatio"], title: "占比", titleAlign: "center" }
        ]
      ]
    };
  },
  methods: {
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
      if (rowIndex === 0 && field === KEY_NAME) {
        return {
          rowSpan: 1,
          colSpan: 2,
          content: "省本级",
          componentName: ""
        };
      }

      if (field === KEY_NAME && rowData.rowSpan > 0 && rowIndex !== 0) {
        return {
          colSpan: 1,
          rowSpan: rowData.rowSpan,
          content: rowData[field],
          componentName: ""
        };
      }
    }
  }
};
</script>

<style>
.v-table-class {
  font-size: 14px;
}
</style>
