<!--课程管理模块-->
<template>
    <q-page class="flex flex-start _returnhandler_page">
        <div class="_handler_inner">
            <div class="q-pa-md _handler_info">
                <div class="q-gutter-y-md _handler_title">回向设置</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-returnName>回向名称</q-item-returnName>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.subjectName"
                                     type="text"
                                     returnName="请输入回向名称"
                            ></q-input>
                        </q-item-section>
                    </q-item>

                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-returnName>回向名称</q-item-returnName>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.subjectName"
                                     type="text"
                                     returnName="请输入回向名称"
                            ></q-input>
                        </q-item-section>
                    </q-item>

                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-returnName>回向名称</q-item-returnName>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.subjectName"
                                     type="text"
                                     returnName="请输入回向名称"
                            ></q-input>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="_submit_">
                    <q-btn class="_submit_button" label="回向新增" v-on:click="stepToAdd()"/>
                </div>
            </div>
            <div class="q-pa-md _handler_info" style="margin-top: 20px !important;">
                <div class="q-gutter-y-md _handler_title">当前回向列表</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-markup-table flat separator="none" style="background: #ebebe7;width: 99%;">
                        <thead>
                        <tr>
                            <th class="text-left" v-for="(tt,index) in returnHeaders">
                                <div>{{tt}}</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in returntList">
                            <td class="text-left">
                                <div> {{item.no}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.returnName}}</div>
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
    </q-page>
</template>

<script>
    export default {
        name: 'SubjectHandlerPage',
        data() {
            return {
                params: {
                    subjectName: "",

                },
                returnHeaders: ["No.", "回向名称", "编辑"],
                returntList: [
                    {
                        "no": 1,
                        "id": 1001,
                        "returnName": "回向法界众生",
                        "edit": "编辑"
                    },
                    {
                        "no": 2,
                        "id": 1002,
                        "returnName": "回向累世父母",
                        "edit": "编辑"
                    },
                    {
                        "no": 3,
                        "id": 1003,
                        "returnName": "回向冤情债主",
                        "edit": "编辑"
                    },
                    {
                        "no": 4,
                        "id": 1004,
                        "returnName": "回向常住三宝",
                        "edit": "编辑"
                    },
                    {
                        "no": 5,
                        "id": 1005,
                        "returnName": "回向诸天护法",
                        "edit": "编辑"
                    },
                    {
                        "no": 6,
                        "id": 1006,
                        "returnName": "回向堕胎婴灵",
                        "edit": "编辑"
                    },
                    {
                        "no": 7,
                        "id": 1007,
                        "returnName": "回向六道众生",
                        "edit": "编辑"
                    },
                    {
                        "no": 8,
                        "id": 1008,
                        "returnName": "回向六亲眷属",
                        "edit": "编辑"
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {

            /**
             * @Description: 初始化
             * @author: lifei
             * @date: 2020/3/8
             */
            init() {
                let _this = this;
                _this.initMoudleList();
            },

            /**
             * @Description: 初始化模块
             * @author: lifei
             * @date: 2020/3/8
             */
            initMoudleList() {
                let _this = this;
            },
            /**
             * @Description: 科目新增
             * @author: lifei
             * @date: 2020/3/8
             */
            stepToAdd() {
                let _this = this;
            },

            /**
             * @Description: 课程编辑
             * @author: lifei
             * @date: 2020/3/9
             */
            stepToEdit() {
                alert("edit");
            },

            stepToDelete() {
                alert("delete");
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

    .q-field__returnName {
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

    .q-table {
        width: 98%;
    }


</style>
