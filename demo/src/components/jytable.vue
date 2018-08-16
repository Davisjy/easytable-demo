<template>
  <div>
    <v-table is-horizontal-resize is-vertical-resize style="width:100%" :height="height" :column-cell-class-name="columnCellClass" :title-rows="titleRows" :columns="columns" :table-data="resultData" :cell-merge="cellMerge">
    </v-table>
  </div>
</template>

<script>
import bar from "components/bar";
const KEY_NAME = "name";

export default {
  computed: {
    height() {
      // console.log(window.innerHeight);
      return window.innerHeight;
    },
    width() {
      // console.log(window.innerWidth);
      return window.innerWidth;
    }
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  mounted() {
    this.formatData();
  },
  data() {
    return {
      isLoading: true,
      loadingText: "测试",
      resultData: [],
      tableData: [
        {
          name: "赵伟",
          gender: "男",
          birthday: "1963-7-9",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          score: "上海市黄浦区金陵东路569号17楼",
          win: 100,
          loss: 20
        },
        {
          name: "赵伟",
          gender: "男",
          birthday: "1963-7-9",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          score: "上海市黄浦区金陵东路569号17楼",
          win: 100,
          loss: 30
        },
        {
          name: "赵伟",
          gender: "男",
          birthday: "1963-7-9",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          score: "上海市黄浦区金陵东路569号17楼",
          win: 100,
          loss: 40
        },
        {
          name: "李伟",
          gender: "男",
          birthday: "2003-12-7",
          height: "166",
          email: "li@gmail.com",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          score: "上海市奉贤区南桥镇立新路12号2楼",
          win: 100,
          loss: 10
        },
        {
          name: "孙伟",
          gender: "女",
          birthday: "1993-12-7",
          height: "186",
          email: "sun@gmail.com",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          score: "上海市崇明县城桥镇八一路739号",
          win: 100,
          loss: 0
        },
        {
          name: "周伟",
          gender: "女",
          birthday: "1993-12-7",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          score: "上海市青浦区青浦镇章浜路24号",
          win: 100,
          loss: 20
        },
        {
          name: "周伟",
          gender: "女",
          birthday: "1993-12-7",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          score: "上海市青浦区青浦镇章浜路24号",
          win: 100,
          loss: 30
        },
        {
          name: "周伟",
          gender: "女",
          birthday: "1993-12-7",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          score: "上海市青浦区青浦镇章浜路24号",
          win: 100,
          loss: 20
        },
        {
          name: "吴伟",
          gender: "男",
          birthday: "1993-12-7",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          score: "上海市松江区乐都西路867-871号",
          win: 100,
          loss: 40
        },
        {
          name: "冯伟",
          gender: "女",
          birthday: "1993-12-7",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          hobby: "钢琴、书法、唱歌",
          score: "上海市金山区龙胜路143号一层",
          win: 100,
          loss: 50
        },
        {
          name: "褚伟",
          gender: "男",
          birthday: "1993-12-7",
          height: "170",
          email: "zhu@gmail.com",
          tel: "189*****2345",
          hobby: "钢琴、书法、唱歌",
          score: "上海市闵行区都市路2988号2楼",
          win: 100,
          loss: 20
        },
        {
          name: "吴伟",
          gender: "男",
          birthday: "1993-12-7",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          score: "上海市松江区乐都西路867-871号",
          win: 100,
          loss: 80
        },
        {
          name: "小黑",
          gender: "女",
          birthday: "1993-12-7",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          hobby: "钢琴、书法、唱歌",
          score: "上海市金山区龙胜路143号一层",
          win: 100,
          loss: 70
        },
        {
          name: "小紫",
          gender: "男",
          birthday: "1993-12-7",
          height: "170",
          email: "zhu@gmail.com",
          tel: "189*****2345",
          hobby: "钢琴、书法、唱歌",
          score: "上海市闵行区都市路2988号2楼",
          win: 100,
          loss: 50
        },
        {
          name: "小蓝",
          gender: "女",
          birthday: "1993-12-7",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          score: "上海市青浦区青浦镇章浜路24号",
          win: 100,
          loss: 20
        },
        {
          name: "小蓝",
          gender: "男",
          birthday: "1993-12-7",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          score: "上海市松江区乐都西路867-871号",
          win: 100,
          loss: 10
        },
        {
          name: "小红",
          gender: "女",
          birthday: "1993-12-7",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          hobby: "钢琴、书法、唱歌",
          score: "上海市金山区龙胜路143号一层",
          win: 100,
          loss: 20
        },
        {
          name: "小明",
          gender: "男",
          birthday: "1993-12-7",
          height: "170",
          email: "zhu@gmail.com",
          tel: "189*****2345",
          hobby: "钢琴、书法、唱歌",
          score: "上海市闵行区都市路2988号2楼",
          win: 100,
          loss: 2
        }
      ],
      columns: [
        // {
        //   field: "id",
        //   // title: "排序",
        //   width: 40,
        //   // titleAlign: "center",
        //   columnAlign: "center",
        //   formatter: function(rowData, index) {
        //     return index < 3
        //       ? "<span style='color:red;font-weight: bold;'>" +
        //           (index + 1) +
        //           "</span>"
        //       : index + 1;
        //   },
        //   isFrozen: true
        // },
        {
          field: "name",
          // title: "姓名",
          width: 60,
          // titleAlign: "center",
          columnAlign: "center",
          isFrozen: true
        },
        {
          field: "gender",
          // title: "性别",
          width: 50,
          // titleAlign: "center",
          columnAlign: "center",
          isFrozen: true,
          isResize: true
        },
        {
          field: "tel",
          // title: "手机号码",
          width: 100,
          // titleAlign: "center",
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "birthday",
          // title: "出生日期",
          width: 120,
          // titleAlign: "left",
          columnAlign: "left",
          isFrozen: false,
          isResize: true
        },
        {
          field: "hobby",
          // title: "爱好",
          width: 180,
          // titleAlign: "center",
          columnAlign: "center",
          isFrozen: false,
          isResize: true
        },
        {
          field: "score",
          // title: "地址",
          width: 230,
          // titleAlign: "center",
          columnAlign: "left",
          isFrozen: false,
          isResize: true
        }
      ],
      titleRows: [
        [
          // { fields: ["id"], title: "排序", titleAlign: "center", rowspan: 2 },
          {
            fields: ["name", "gender"],
            title: "用户信息",
            titleAlign: "center",
            colspan: 2
          },
          {
            fields: ["tel", "birthday", "hobby", "score"],
            title: "其他信息",
            titleAlign: "center",
            colspan: 4
          }
        ],
        [
          { fields: ["name"], title: "姓名", titleAlign: "center" },
          { fields: ["gender"], title: "性别", titleAlign: "center" },
          { fields: ["tel"], title: "手机号", titleAlign: "center" },
          { fields: ["birthday"], title: "生日", titleAlign: "center" },
          { fields: ["hobby"], title: "爱好", titleAlign: "center" },
          { fields: ["score"], title: "成绩", titleAlign: "center" }
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
      // console.log(this.resultData);
    },
    cellMerge(rowIndex, rowData, field) {
      if (field === KEY_NAME && rowData.rowSpan > 0) {
        // console.log(rowData.rowSpan);
        return {
          colSpan: 1,
          rowSpan: rowData.rowSpan,
          content: rowData[field],
          componentName: ""
        };
      }

      // if (rowIndex === 0 && field === "tel") {
      //   return {
      //     colSpan: 3,
      //     rowSpan: 1,
      //     content: rowData[field],
      //     componentName: ""
      //   };
      // }

      if (field === "score") {
        return {
          colSpan: 1,
          rowSpan: 1,
          content: "",
          componentName: "bar"
        };
      }
    },
    columnCellClass(rowIndex, columnName, rowData) {
      // console.log(columnName);
      if (columnName === "score") {
        console.log("-------");
        return "custom1-cell";
      }
    }
  },
  components: {
    bar
  }
};
</script>

<style>
.custom1-cell {
  padding: 0;
}
.custom1-cell .v-table-body-cell {
  padding: 0;
}
</style>
