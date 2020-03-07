<!--个人日历模块-->
<template>
  <div class="canlendarPanel">
    <div class="canlendar-header">
      <p class="pre">
        <span @click="changeDate('preYear')">
          <icon class="icon" name="preYear" />
        </span>
        <span @click="changeDate('preMonth')">
          <icon class="icon" name="preMonth" />
        </span>
      </p>
      <p class="currenDate">{{ `${year}年${month}月` }}</p>
      <p class="next">
        <span @click="changeDate('nextMonth')">
          <icon class="icon" name="nextMonth" />
        </span>
        <span @click="changeDate('nextYear')">
          <icon class="icon" name="nextYear" />
        </span>
      </p>
    </div>
    <div class="canlendar-main">
      <ul class="main-header">
        <li v-for="(item, index) in weekList" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul class="main">
        <li v-for="inx in weekDay" class="disabled" :key="inx">
          {{ preMonthSize - weekDay + inx }}
        </li>
        <li v-for="index in monthList[month - 1]" :key="index">
          <span :class="{ currentDay: index === day }">
            {{ index }}</span>
        </li>
        <li v-for="index in lastWeekDay" class="disabled" :key="index">{{ index }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "PersonCalendar",
  data() {
    return {
      year:0,
      month:0,
      day:0,
      weekList: ["日", "一", "二", "三", "四", "五", "六"],
      monthList: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      week:0,
      weekDay:0,
      lastWeekDay:0,
    };
  },
  created(){

  },
  mounted() {},
  methods: {
      //获取上一个月有多少天
      getPreMonthSize(){
          let _this=this;
          return _this.month-1===0 ? 31:_this.monthList[_this.month-2];
      },
      //获取今天日期
      getCurrentDate(){
         const date=new Date();
         this.year=date.getFullYear();
         this.monthList=date.getMonth()+1;
         this.day=date.getDate();
      },
      //根据年月日获取星期几
      getWeekDay(year, month, day){
        return new Date(`${year}/${month}/${day}`)
      },
      //初始化日期
      initDate(){
         let _this=this;
         if((_this.year % 4 === 0 && _this.year % 100 !== 0) || _this.year % 400 === 0){
              _this.monthList[1] = 29;
         }else{
              _this.monthList[1] = 28
         }
         // 获得指定年月的1号是星期几
         const firstDay = _this.getWeekDay(_this.year, _this.month, 1);
         // 在1号前面填充多少个上个月的日期
         this.weekDay = firstDay === 7 ? 0 : firstDay;
         const remineDay = this.getWeekDay(
                            this.year,
                            this.month,
                            this.monthList[this.month - 1]
                            );
        this.lastWeekDay = remineDay === 7 ? 6 : 6 - remineDay;
      },

  },
  destroyed() {}
};
</script>
<style scoped lang="scss">
.canlendarPanel {
  height: 260px;
  border-bottom: 3px solid var(--background);
  display: flex;
  flex-direction: column;
  .canlendar-header {
    line-height: 30px;
    background: var(--special-bg);
    display: flex;
    flex-direction: row;
    justify-content: center;
    .currenDate {
      margin: 0 20px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .icon {
      width: 12px;
      height: 12px;
    }
  }
  .canlendar-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    .main-header {
      display: flex;
      line-height: 30px;
      color: var(--text-color);
      li {
        flex: 1;
      }
    }
    ul.main {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 10px;
      font-size: 14px;
      li {
        position: relative;
        width: 42px;
        line-height: 25px;
        cursor: pointer;
      }
      .disabled {
        color: var(--text-color);
        cursor: default;
      }
      .currentDay:before {
        content: '';
        position: absolute;
        display: inline-block;
        left: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #FFE100;
      }
    }
  }
}
</style>