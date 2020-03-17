<!--后台管理模块-->
<template>
    <q-page class="flex flex-start _fill_page" v-cloak>
        <div class="q-pa-md _fill_inner">
            <div class="q-pa-md _fill_tips">每日共修签到</div>
            <div class="q-pa-md _fill_info">
                <q-item tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>法名(网名)</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <q-input style="width: 100%;height: 100%;"
                                 filled
                                 v-model="params.mageName"
                                 type="text"
                                 label="请输入您的姓名"
                                 lazy-rules
                                 :rules="[ val => val && val.length > 0]"
                        ></q-input>
                    </q-item-section>
                </q-item>

                <q-item tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>签到日期</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <q-input filled style="width: 100%;height:100%;" v-model="params.fillDate" mask="date"
                                 :rules="['date']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date v-model="params.fillDate"
                                                @input="() => $refs.qDateProxy.hide()"></q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </q-item-section>
                </q-item>
                <q-item tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目一数量</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled
                                         v-model="selectSubject[0].subjectName"
                                         readonly
                                >
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[0].signAmount"
                                         type="text"
                                         label="次数"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                <q-item tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目二数量</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled
                                         v-model="selectSubject[1].subjectName"
                                         readonly>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[1].signAmount"
                                         type="text"
                                         label="次数"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
                <q-item tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目三数量</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled
                                         v-model="selectSubject[2].subjectName"
                                         readonly
                                >
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[2].signAmount"
                                         type="text"
                                         label="次数"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>

                <div class="_submit_">
                    <q-btn class="_submit_button" label="功德回向" v-on:click="stepToSubmit()"/>
                </div>
            </div>
            <div class="q-pa-md _fill_tips">共修排行榜</div>
            <div class="q-pa-md _fill_detail">
                <div>共2333人</div>
                <div class="_detail" v-on:click="stepToTotal()">综合详情</div>
            </div>
            <div class="q-pa-md _fill_info" style="padding: 0px !important;">
                <q-markup-table flat separator="none" style="background: #ebebe7">
                    <thead>
                    <tr>
                        <th class="text-left" v-for="(tt,index) in fillHeaders">
                            <div>{{tt}}</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in fillDetails">
                        <td class="text-left">
                            <div> {{item.no}}</div>
                        </td>
                        <td class="text-left">
                            <div>{{item.userName}}</div>
                        </td>
                        <td class="text-left">
                            <div>{{item.subjects1}}</div>
                        </td>
                        <td class="text-left">
                            <div>{{item.subjects2}}</div>
                        </td>
                        <td class="text-left">
                            <div>{{item.subjects3}}</div>
                        </td>
                        <td class="text-left" style="color:#532406;">
                            <div style="cursor: pointer;" v-on:click="stepToDetail(item)">{{item.detail}}</div>
                        </td>
                    </tr>
                    </tbody>
                </q-markup-table>
            </div>
        </div>
        <MeritReturn v-show="isShowReturn" :isShow="isShowReturn" @showReturn="showReturn"/>
    </q-page>
</template>

<script>
    import {_URL} from "../../../api/js/_url";
    import MeritReturn from "./MeritReturn";
    import echarts from "echarts"

    export default {
        name: 'DayFill',
        data() {
            return {
                date: "2019/06/07",
                fillHeaders: ["No.", "法名/网名", "共修科目1", "共修科目2", "共修科目3", "详情"],
                fillDetails: [],
                isShowReturn: false,
                selectSubject: [],
                params: {
                    mageName: "",
                    subject1: "",
                    subject2: "",
                    subject3: "",
                    times1: "",
                    times2: "",
                    times3: "",
                    fillDate: "",
                }
            }
        },
        components: {MeritReturn},
        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {
            init() {
                this.initSelectSubject()
            },

            /**
             * @Description: 初始化共修课目
             * @author: lifei
             * @date: 2020/2/22
             */
            initSelectSubject() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_SUBJECT_SELECT + "/" + 1).then(res => {
                    if (!res || !res["data"] || res["data"].errcode != 0) return;
                    _this.selectSubject = res["data"]["data"];
                    _this.selectSubject.sort(function (a, b) {
                        return a.subjectSort - b.subjectSort;
                    });

                    debugger;
                }).catch(err => {
                    //do nothong
                });
            },
            /**
             * @Description: 初始化共修排名榜 共修详情
             * @author: lifei
             * @date: 2020/2/22
             */
            initTotalUserStudy() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_FILL_DETAILS).then(res => {
                    if (res.errcode != 0 && !res.data) return;
                    _this.fillDetails = res.data["data"];
                }).catch(err => {
                    //do nothong
                });
            },
            /**
             * @Description: 功德回向控制
             * @author: lifei
             * @date: 2020/3/7
             */
            showReturn(payload) {
                let _this = this;
                _this.isShowReturn = payload;
            },

            /**
             * @Description: 综合详情信息
             * @author: lifei
             * @date: 2020/2/23
             */
            stepToTotal(item) {
                this.$router.push({
                    path: "/Total", query: {detail: item}
                });
            },
            /**
             * @Description: 详情信息
             * @author: lifei
             * @date: 2020/2/23
             */
            stepToDetail(item) {
                let _this = this;
                _this.$router.push({
                    path: "/Person", query: {detail: item}
                });
            },
            /**
             * @Description: 提交
             * @author: lifei
             * @date: 2020/2/23
             */
            stepToSubmit() {
                let _this = this;
                _this.isShowReturn = true;
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

    ._fill_page {
        width: 100%;
        height: 100%;
        color: #451E04;
        background: #ebebe7;


        ._fill_inner {
            width: 100%;
            height: 100%;
            padding: 20px 0px;

            @include flex(column, flex-start);

            ._fill_tips {
                width: 100%;
                font-size: 20px;
                @include flex();

            }

            ._fill_detail {
                width: 95%;
                font-size: 14px;
                height: 30px;
                @include flex(row, space-between);

                ._detail {
                    color: red;
                    cursor: pointer;
                }
            }

            ._fill_info {
                width: 92%;
                background: #EBECE7;
                border-radius: 5px;
                font-size: 16px;
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

            }
        }
    }

    ._submit_ {
        width: 100%;
        height: auto;
        @include flex();

        ._submit_button {
            height: 70%;
            background: #A14407;
            min-width: 40%;
            color: #fff;
            font-size: 18px;
        }
    }


    .q-pa-md {
        padding: 10px 10px;
    }


    .q-item {
        padding: 0;
        margin: 10px 0px;
        width: 100%;
        height: 40px;
        min-height: 40px;
    }

    .q-field__inner {
        height: 100% !important;
    }


    .q-item__section {
        align-items: flex-start;
    }

    .q-field--with-bottom {
        padding-bottom: 0px;
    }

    .q-field__label {
        top: 12px;
    }

    tr {

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
