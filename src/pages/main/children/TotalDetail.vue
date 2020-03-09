<!--后台管理模块-->
<template>
    <q-page class="flex flex-start _total_page" v-cloak>
        <div class="_total_inner">
            <div class="q-pa-md _total_title">国内统一情况共修一览</div>
            <div class="q-pa-md _total_info">
                <div class="_total_country" id="TotalContry"></div>
            </div>
            <div class="q-pa-md _total_title">大众完成总数</div>
            <div class="q-pa-md _total_info">
                <div class="_total_statics">
                    <q-markup-table flat separator="none" style="background: #ebebe7">
                        <thead>
                        <tr>
                            <th class="text-left" v-for="(tt,index) in totalHeaders">
                                <div>{{tt}}</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in totalDetails">
                            <td class="text-left">
                                <div> {{item.no}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.subjects}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.totalTimes}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.unit}}</div>
                            </td>
                        </tr>
                        </tbody>
                    </q-markup-table>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    import {_URL} from "../../../api/js/_url";

    import echarts from "echarts"

    require('echarts/map/js/china');
    export default {
        name: "TotalPage",
        data() {
            return {
                echartsinstance: null,
                totalHeaders: ["No.", "科目名称", "总体完成数量", "单位"],
                totalDetails: [],

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
                this.$nextTick(() => {
                    _this.initCountryMap();
                    _this.initTotalList();
                });
            },

            initCountryMap() {
                let _this = this;
                let optionMap = _this.initMapOptions();
                //初始化echarts实例
                _this.echartsinstance = echarts.init(document.getElementById('TotalContry'));
                _this.echartsinstance.clear();
                //使用制定的配置项和数据显示图表
                _this.echartsinstance.setOption(optionMap);
                window.onresize = _this.echartsinstance.resize;
            },

            /**
             * @Description: 渲染整体列表
             * @author: lifei
             * @date: 2020/3/8
             */
            initTotalList() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_TOTAL_DETAILS).then(res => {
                    if (res.errcode != 0 && !res.data) return;
                    _this.totalDetails = res.data["data"];
                }).catch(err => {
                    //do nothong
                });
            },

            /**
             * @Description: 初始化Map数据
             * @author: lifei
             * @date: 2020/3/7
             */
            initMapOptions(options) {
                let _this = this;
                return {
                    tooltip: {
                        trigger: 'item'
                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 2500,
                        calculable: false
                    },
                    series: [
                        {
                            name: '共修人数：',
                            type: 'map',
                            mapType: 'china',
                            roam: true,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {name: '北京', value: Math.round(Math.random() * 1000)},
                                {name: '天津', value: Math.round(Math.random() * 1000)},
                                {name: '上海', value: Math.round(Math.random() * 1000)},
                                {name: '重庆', value: Math.round(Math.random() * 1000)},
                                {name: '河北', value: Math.round(Math.random() * 1000)},
                                {name: '河南', value: Math.round(Math.random() * 1000)},
                                {name: '云南', value: Math.round(Math.random() * 1000)},
                                {name: '辽宁', value: Math.round(Math.random() * 1000)},
                                {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                                {name: '湖南', value: Math.round(Math.random() * 1000)},
                                {name: '安徽', value: Math.round(Math.random() * 1000)},
                                {name: '山东', value: Math.round(Math.random() * 1000)},
                                {name: '新疆', value: Math.round(Math.random() * 1000)},
                                {name: '江苏', value: Math.round(Math.random() * 1000)},
                                {name: '浙江', value: Math.round(Math.random() * 1000)},
                                {name: '江西', value: Math.round(Math.random() * 1000)},
                                {name: '湖北', value: Math.round(Math.random() * 1000)},
                                {name: '广西', value: Math.round(Math.random() * 1000)},
                                {name: '甘肃', value: Math.round(Math.random() * 1000)},
                                {name: '山西', value: Math.round(Math.random() * 1000)},
                                {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                                {name: '陕西', value: Math.round(Math.random() * 1000)},
                                {name: '吉林', value: Math.round(Math.random() * 1000)},
                                {name: '福建', value: Math.round(Math.random() * 1000)},
                                {name: '贵州', value: Math.round(Math.random() * 1000)},
                                {name: '广东', value: Math.round(Math.random() * 1000)},
                                {name: '青海', value: Math.round(Math.random() * 1000)},
                                {name: '西藏', value: Math.round(Math.random() * 1000)},
                                {name: '四川', value: Math.round(Math.random() * 1000)},
                                {name: '宁夏', value: Math.round(Math.random() * 1000)},
                                {name: '海南', value: Math.round(Math.random() * 1000)},
                                {name: '台湾', value: Math.round(Math.random() * 1000)},
                                {name: '香港', value: Math.round(Math.random() * 1000)},
                                {name: '澳门', value: Math.round(Math.random() * 1000)}
                            ]
                        }
                    ]
                }
            },
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

    ._total_page {
        width: 100%;
        height: 100%;
        color: #fff;
        background: #e3e0d7;
        padding-bottom: 20px;
        @include flex(column, flex-start);

        ._total_inner {
            width: 100%;
            height: 100%;
            padding: 0;
            @include flex(column, flex-start);

            ._total_title {
                width: 100%;
                font-size: 20px;
                color: #522E19;
                @include flex();
            }

            ._total_info {
                width: 92%;
                background: #ebece7;
                border-radius: 5px;
                font-size: 16px;
                margin-top: 10px;
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
                0 3px 1px -2px rgba(0, 0, 0, 0.12);
            }

            ._total_country {
                width: 100%;
                min-height: 200px;
                max-height: 500px;
            }

            ._total_statics {
                width: 100%;
                height: 300px;
                overflow-y: auto;
            }
        }
    }

    .q-pa-md {
        padding: 0;
    }

    td {
        height: 45px !important;
        padding: 2px 2px;
        font-size: 14px !important;

        div {
            width: 100%;
            height: 100%;
            background: #DFE0DB;
            @include flex();
        }
    }

    th {
        font-size: 14px !important;

        div {
            width: 100%;
            height: 100%;
            @include flex();
        }
    }

</style>
