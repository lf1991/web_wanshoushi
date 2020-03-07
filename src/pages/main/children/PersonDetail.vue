<!--后台管理模块-->
<template>
    <q-page class="flex flex-start _person_page" v-cloak>
        <div class="_person_inner">
            <!--<div class="q-pa-md _person_title">个人详情</div>-->
            <div class="q-pa-md _person_info">
                <div id="PersonCalendar">ok</div>
            </div>

            <div class="q-pa-md _person_info">
                <div class="_person_subject">
                    <div class="_title">
                        <div class="_name">楞严咒</div>
                        <div>月功课曲线图</div>
                    </div>
                    <div id="PersonSubject1" class="_person_echarts"></div>
                </div>
            </div>
            <div class="q-pa-md _person_info">
                <div class="_person_subject">
                    <div class="_title">
                        <div class="_name">楞严咒</div>
                        <div>月功课曲线图</div>
                    </div>
                    <div id="PersonSubject2" class="_person_echarts"></div>
                </div>
            </div>
            <div class="q-pa-md _person_info">
                <div class="_person_subject">
                    <div class="_title">
                        <div class="_name">楞严咒</div>
                        <div>月功课曲线图</div>
                    </div>
                    <div id="PersonSubject3" class="_person_echarts"></div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    import {_URL} from "../../../api/js/_url";
    import echarts from "echarts"

    export default {
        name: 'DayFill',
        data() {
            return {
                echartsInstance: {}
            }
        },
        components: {},
        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {
            init() {
                let _this = this;
                _this.initPersonCalendar();
                _this.initEPersoncharts("PersonSubject3");
                _this.initEPersoncharts("PersonSubject2");
                _this.initEPersoncharts("PersonSubject1");


                /*_this.$axios.get(_URL.QUERY_FILL_DETAILS).then(res => {
                    if (res.errcode != 0 && !res.data) return;

                }).catch(err => {
                    //do nothong
                });*/
            },

            /**
             * @Description: 初始化个人日历
             * @author: lifei
             * @date: 2020/3/7
             */
            initPersonCalendar() {
                let _this = this;
            },


            /**
             * @Description: 初始化echarts options
             * @author: lifei
             * @date: 2020/3/7
             */
            initOptions() {
                return {
                    grid: {
                        left: "2%",
                        right: "4%",
                        bottom: "4%",
                        top: "10%",
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                }
            },
            /**
             * @Description: 初始化个人日历
             * @author: lifei
             * @date: 2020/3/7
             */
            initEPersoncharts(elementId) {
                let _this = this, option = _this.initOptions();
                let chart = echarts.init(document.getElementById(elementId));
                chart.clear();
                chart.setOption(option);
                _this.echartsInstance[elementId] = chart;
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    [v-cloak] {
        display: none;
    }

    @mixin flex($direction: row, $justify: center, $align: center) {
        display: flex;
        flex-direction: $direction;
        justify-content: $justify;
        align-items: $align;
    }

    ._person_page {
        width: 100%;
        height: 100%;
        color: #FFF;
        background: #E3E0D7;
        padding-bottom: 20px;
        @include flex(column, flex-start);

        ._person_inner {
            width: 100%;
            height: 100%;
            padding: 0;
            @include flex(column, flex-start);

            ._person_title {
                width: 100%;
                font-size: 20px;
                color: #1D1D1D;
            }


            ._person_info {
                width: 92%;
                background: #EBECE7;
                border-radius: 5px;
                font-size: 16px;
                margin-top: 10px;
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
            }

            #PersonCalendar {
                width: 100%;
                height: 150px;
            }


            ._person_subject {
                width: 100%;
                height: 125px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;

                ._title {
                    width: 100%;
                    height: 20%;
                    font-size: 13px;
                    background: #A14407;
                    color: #fff;
                    padding-left: 10px;
                    padding-right: 20px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    position: relative;
                    @include flex();

                    ._name {
                        width: auto;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding-left: 10px;
                        @include flex();
                    }
                }

                ._person_echarts {
                    width: 100%;
                    height: 80%;
                }

            }

        }
    }

    .q-pa-md {
        padding: 0;

    }
</style>
