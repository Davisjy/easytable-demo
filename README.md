# easytable-demo
对应简书demo
## 前言
>最近需要做一个表格类APP，但是原生貌似实现起来麻烦(哪位iOS大佬如果有好思路不胜感激，我还没有研究，感觉是scrollView嵌套tableView，但总感觉不对，包括合并单元格肯定更麻烦，还是h5吧，原生控件方便又快捷)，开会的时候不知哪位小伙伴冒了一句，h5好做，于是。。。

先看一下效果，暂时是本地mock数据，[GitHub地址](https://github.com/Davisjy/easytable-demo)
![two.gif](https://upload-images.jianshu.io/upload_images/1455284-32969b3cec678e03.gif?imageMogr2/auto-orient/strip)

## 需求整理
> - 1.相邻的相同值的行数据项进行单元格合
>- 2.表格表头固定
>- 3.侧栏可固定
>- 4.单元格内可嵌套自定义组件
---
> 作为vue没学习多久的渣渣来说，其实也是两眼蒙圈，作为资深轮子搬运工，于是开始找轮子，果然找到了国人写的vue table组件，功能非常棒，支持单元格合并、单元格编辑、多表头固定、多列固定、列拖动、排序、自定义列、分页...  [vue-easytable](https://github.com/huangshuwei/vue-easytable) 当然还有其他优秀轮子如[vuetable-2](https://github.com/ratiw/vuetable-2)。

[vue-easytable](https://github.com/huangshuwei/vue-easytable) 就不多说了，GitHub上有api详细说明，本次只说遇到的问题以及解决方法

### 问题一 相邻的相同值的行数据项进行单元格合
> show me code 其实就是遍历所有数据，对比下一条数据是否相同，再累加
```
// 数据整理
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
```
```
// 数据合并方法
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
}
```
### 问题二、问题三
>查看api，只设置一个属性即可解决，在此不做复述，可直接看[demo](https://github.com/Davisjy/easytable-demo)
### 问题四 单元格内可嵌套自定义组件
> 1.首先封装好你需要嵌套的组件并暴露easytable数据传递属性rowData、field、index
2.全局导入刚刚封装好的组件
3.在cellMerge方法中处理
```
cellMerge(rowIndex, rowData, field) {
      if (field === "score") {
        return {
          colSpan: 1,
          rowSpan: 1,
          content: "",
          componentName: "bar"
        };
      }
}
```
---
>以为这样就大功告成了吗，不没有，后来发现文字无法换行居中，GitHub上也很多人提了issue，但就是没有解决，这就很尴尬了，本着社会主义接班人的精神，我看了一下

![界面丑的没有标题.jpeg](https://upload-images.jianshu.io/upload_images/1455284-b25cf2af800d1c65.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
---
#### 我的解决方案
> 1.查看api哪里有暴露，于是看到columnCellClass方法
2.columnCellClass方法返回新样式，覆盖作者样式
```
columnCellClass(rowIndex, columnName, rowData) {
      if (columnName === "name" || columnName === "category") {
        return "mine-custom-cell";
      }
    }
```
```
.mine-custom-cell {
  padding: 0;
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
```
##总结
>作为一个原生iOS开发为何越来越觉得h5好玩了，真的是无言以对了，这以后找工作问:会XX吗，深入过吗？会，没有，只会搬轮子。直接gg，共勉。最后再次附上[GitHub地址](https://github.com/Davisjy/easytable-demo)
