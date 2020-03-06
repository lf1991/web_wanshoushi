<!--后台管理模块-->
<template>
    <q-page class="flex flex-start _person_page" v-cloak>
        <div class="q-pa-md _person_inner">
            <div id="echarts"></div>
        </div>
    </q-page>
</template>

<script>
    import {_URL} from "../../../api/js/_url";
    import echarts from "echarts"

    export default {
        name: 'DayFill',
        data() {
            return {}
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
                _this.initEPersoncharts();


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
             * @Description: 初始化个人日历
             * @author: lifei
             * @date: 2020/3/7
             */
            initEPersoncharts() {
                let _this = this, option = {
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
                };
                let chart = echarts.init(document.getElementById("echarts"));
                chart.clear();
                chart.setOption(option);
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
        color: #451E04;
        background: #ebebe7;
        padding-bottom: 20px;

        ._person_inner {
            width: 100%;
            height: 100%;
            padding: 0;
            @include flex(column, flex-start);

            #echarts {
                width: 200px;
                height: 300px;
            }
        }
    }
</style>
