<!--课程管理模块-->
<template>
    <q-page class="flex flex-start _subjecthandler_page">
        <div class="_handler_inner">
            <div class="q-pa-md _handler_info">
                <div class="q-gutter-y-md _handler_title">课程设置</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-label>科目名称</q-item-label>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.subjectName"
                                     type="text"
                                     label="请输入科目名称"
                            ></q-input>
                        </q-item-section>
                    </q-item>

                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-label>科目简介</q-item-label>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-input style="width: 100%;height: 100%;"
                                     filled
                                     v-model="params.subjectName"
                                     type="text"
                                     label="请输入科目名称"
                            ></q-input>
                        </q-item-section>
                    </q-item>

                    <q-item clickable tag="div">
                        <q-item-section avatar style="width: 30%;">
                            <q-item-label>科目单位</q-item-label>
                        </q-item-section>
                        <q-item-section avatar style="width: 70%;height:100%;padding: 0;">
                            <q-select style="height: 100%;width: 100%;" square filled v-model="params.province"
                                      :options="[1,2,3,4,5,6,7,8,9]"
                                      label="单位"/>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="_submit_">
                    <q-btn class="_submit_button" label="科目新增" v-on:click="stepToAdd()"/>
                </div>
            </div>
            <div class="q-pa-md _handler_info" style="margin-top: 20px !important;">
                <div class="q-gutter-y-md _handler_title">当前课程列表</div>
                <div class="q-gutter-y-md _handler_contetnt">
                    <q-markup-table flat separator="none" style="background: #ebebe7;width: 99%;">
                        <thead>
                        <tr>
                            <th class="text-left" v-for="(tt,index) in subjectHeaders">
                                <div>{{tt}}</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in subjectList">
                            <td class="text-left">
                                <div> {{item.no}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.subjectName}}</div>
                            </td>
                            <td class="text-left">
                                <div>{{item.unit}}</div>
                            </td>
                            <!-- <td class="text-left">
                                 <div>{{item.fixedTime}}</div>
                             </td>-->
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
                subjectHeaders: ["No.", "科目名称", "单位", "编辑"],
                subjectList: [
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    },
                    {
                        no: 1,
                        subjectName: "金刚经",
                        fixedTime: "20190608",
                        unit: "卷",
                        edit: "编辑"
                    }
                ],

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

    ._subjecthandler_page {
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

    .q-table {
        width: 98%;
    }


</style>
