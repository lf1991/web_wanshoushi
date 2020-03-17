<!--课程管理模块-->
<template>
    <q-page class="flex flex-start _returnhandler_page">
        <div class="_handler_inner">
            <div class="q-pa-md _handler_info">
                <div class="q-gutter-y-md _handler_title">回向设置</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-label>新增回向</q-item-label>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.name"
                                     type="text"
                            ></q-input>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="_submit_">
                    <q-btn class="_submit_button" label="新增回向" v-on:click="stepToAddMetrit()"/>
                </div>
            </div>
            <div class="q-pa-md _handler_info" style="margin-top: 20px !important;">
                <div class="q-gutter-y-md _handler_title">回向管理</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-markup-table flat separator="none" style="background: #ebebe7;width: 99%;">
                        <thead>
                        <tr>
                            <th class="text-left" v-for="(tt,index) in meritsHeaders">
                                <div>{{tt}}</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in meritsList">
                            <td class="text-left">
                                <div> {{item.no}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.name}}</div>
                            </td>
                            <td class="text-left" style="color:#532406;">
                                <div>
                                    <div style="cursor: pointer;" v-on:click="stepToEdit(item)">编辑</div>
                                    <div style="cursor: pointer;" v-on:click="stepToDelete(item)">删除</div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </q-markup-table>
                </div>
            </div>
        </div>

        <q-dialog v-model="isShowEdit" persistent transition-show="rotate" transition-hide="rotate">
            <q-card style="min-width: 350px;">
                <q-card-section>
                    <div class="text-h5">"{{currentItem.name}}" 修改为:</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-input dense v-model="fixedName" autofocus @keyup.enter="prompt = false"/>
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="取消" class="bg-white text-dark" @click="stepToCancle()"/>
                    <q-btn flat label="修改" class="bg-white text-cyan" @click="stepToFixMerit()"/>
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="isShowDelete" persistent>
            <q-card style="min-width: 350px">
                <q-card-section>
                    <div class="text-h6">确认删除该条回向数据:</div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h5" style="padding-left: 50px;">{{currentItem.name}}</div>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="取消" class="bg-white text-dark" @click="stepToCancle()"/>
                    <q-btn flat label="删除" class="bg-white text-cyan" @click="stepToDeleteMerit()"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>

    import {_URL} from "../../../../api/js/_url";

    export default {
        name: 'SubjectHandlerPage',
        data() {
            return {
                isShowEdit: false,
                isShowDelete: false,
                currentItem: {},
                params: {
                    name: "",
                },
                fixedName: "",
                meritsHeaders: ["No.", "回向名称", "编辑"],
                meritsList: [],
                subjects: [
                    {subjectId: "", subjectName: "", targetAmount: "", subjectSort: "1", subjectPeriod: "1"},
                    {subjectId: "", subjectName: "", targetAmount: "", subjectSort: "2", subjectPeriod: "1"},
                    {subjectId: "", subjectName: "", targetAmount: "", subjectSort: "3", subjectPeriod: "1"}
                ],
            }
        },
        mounted() {
            this.init();
        },
        methods: {

            /**
             * @Description: 初始化
             * @author: lifei
             * @date: 2020/3/8
             */
            init() {
                let _this = this;
                _this.initMeritsList();
            },

            /**
             * @Description: 初始功德回向数据
             * @author: lifei
             * @date: 2020/3/8
             */
            initMeritsList() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_MERIT_RETURN).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errode != 0 && !dataTT.data) return;
                    debugger;
                    //_this.meritsList = dataTT.data["meritReturn"];
                    _this.meritsList = dataTT.data;
                    _this.meritsList.map((item, index) => {
                        item["no"] = index + 1;
                        item["edit"] = "编辑";
                    });
                }).catch(() => {

                })
            },
            /**
             * @Description: 科目新增
             * @author: lifei
             * @date: 2020/3/8
             */
            stepToAddMetrit() {
                let _this = this;
                if (!_this.params["name"]) {
                    _this.notify({
                        message: "请输入正确的回向名称",
                        type: "info",
                        color: "deep-orange-10"
                    });
                    return;
                }
                _this.$axios.post(_URL.INSERT_MERIT_RETURN, _this.params).then((res) => {
                    if (res.data["data"] == 1) {
                        if (res.data["errcode"] == 0) {
                            _this.notify({
                                message: "新增成功",
                                type: "info",
                                color: "teal-5"
                            });
                            _this.initMeritsList();
                        } else {
                            _this.notify({
                                message: "新增失败",
                                type: "info",
                                color: "deep-orange-10"
                            });
                        }
                    }
                }).catch(() => {
                    _this.notify({
                        message: "修改失败",
                        type: "info",
                        color: "deep-orange-10"
                    });
                })
            },

            /**
             * @Description: 课程编辑
             * @author: lifei
             * @date: 2020/3/9
             */
            stepToEdit(item) {
                let _this = this;
                _this.isShowEdit = true;
                _this.currentItem = item;
            },

            stepToDelete(item) {
                let _this = this;
                _this.isShowDelete = true;
                _this.currentItem = item;
            },

            stepToFixMerit() {
                let _this = this;
                if (!_this.fixedName) {
                    _this.notify({
                        message: "请输入正确的回向名称",
                        type: "info",
                        color: "deep-orange-10"
                    });
                    return;
                }
                _this.$axios.post(_URL.UPDATE_MERIT_RETURN, {
                    id: _this.currentItem["id"],
                    name: _this.fixedName
                }).then((res) => {
                    if (res.data["data"] == 1) {
                        _this.notify({
                            message: "修改成功",
                            type: "info",
                            color: "teal-5"
                        });
                        _this.initMeritsList();
                        _this.isShowEdit = false;
                    } else {
                        _this.notify({
                            message: "修改失败",
                            type: "info",
                            color: "deep-orange-10"
                        });
                    }
                }).catch(() => {
                    _this.notify({
                        message: "修改失败",
                        type: "info",
                        color: "deep-orange-10"
                    });
                })
            },

            stepToDeleteMerit() {
                let _this = this;
                _this.$axios.post(_URL.DELETE_MERIT_RETURN, _this.currentItem).then((res) => {
                    if (res.data["data"] == 1) {
                        _this.notify({
                            message: "删除成功",
                            type: "info",
                            color: "teal-5"
                        });
                        _this.isShowDelete = false;
                        _this.initMeritsList();
                    } else {
                        _this.notify({
                            message: "删除失败",
                            type: "info",
                            color: "deep-orange-10"
                        });
                    }
                }).catch(() => {
                    _this.notify({
                        message: "删除失败",
                        type: "info",
                        color: "deep-orange-10"
                    });
                })
            },
            /**
             * @Description: 弹框取消
             * @author: lifei
             * @date: 2020/3/12
             */
            stepToCancle() {
                let _this = this;
                _this.isShowEdit = false;
                _this.isShowDelete = false;
            },

            notify(options) {
                let _this = this;
                _this.$q.notify({
                    message: options["message"], //`请输入正确的回向名称`,
                    timeout: 4000, // 以毫秒为单位; 0意味着没有超时
                    type: options["type"], //'info',
                    color: options["color"],//'deep-orange-10',
                    textColor: '#A14407', // 如果默认的“white”不适合
                    position: 'top', // 'top', 'left', 'bottom-left'等
                });
            }
        }
    }
</script>

<style scoped lang="scss">

    [v-cloak] {
        display: none;
    }

    @mixin flex($direction: row, $justify: center, $align: center, $warp: nowrap) {
        display: flex;
        flex-direction: $direction;
        justify-content: $justify;
        align-items: $align;
        flex-wrap: $warp;
    }

    ._returnhandler_page {
        width: 100%;
        height: 100%;
        background: #E3E0D7;

        ._handler_inner {
            width: 100%;
            height: 100%;
            @include flex(column, flex-start);

            ._handler_info {
                width: 100%;
                background: #ebece7;
                font-size: 16px;
                padding: 5px;
                @include flex(column, center);
            }

            ._handler_title {
                width: 100%;
                height: 40px;
                @include flex(row, flex-start);
                border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            }

            ._handler_contetnt {
                width: 100%;
                padding: 2px;
                @include flex(column, center);

                ._contetnt_item {

                }
            }

            ._submit_ {
                width: 100%;
                height: 40px;
                @include flex();

                ._submit_button {
                    height: 100%;
                    background: #A14407;
                    min-width: 50%;
                    color: #fff;
                    font-size: 18px;
                }
            }
        }

        ._edit_merit {
            background: red;
        }
    }


    .q-pa-md {
        margin: 0 !important;
        padding: 0;
    }

    .q-gutter-y-md {
        margin: 0 !important;
    }

    .q-gutter-y-md > *, .q-gutter-md > * {
        margin-top: 5px !important;
    }

    .q-card {
        box-shadow: unset;
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
        align-items: center;
    }

    .q-field--with-bottom {
        padding-bottom: 0px;
    }

    .q-field__label {
        top: 12px;
    }

    .q-field--filled .q-field__control {
        height: 100%;
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

    .q-table {
        width: 98%;
    }

    .q-card {
        background: #8a3114;
        color: #fff;
    }


</style>
