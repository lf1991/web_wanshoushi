<template>
    <q-page class="_select_page">
        <div class="q-pa-md _select_inner">
            <div class="q-pa-md _select_info">
                <q-item clickable tag="div">
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
                <q-item clickable tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>订课期限</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <q-radio v-model="params.selectType" val="year" label="年"/>
                        <q-radio v-model="params.selectType" val="month" label="月"/>
                        <q-radio v-model="params.selectType" val="week" label="周"/>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目一确定</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled bottom-slots
                                         v-model="params.subject1"
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="text = ''" class="cursor-pointer"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="params.target1"
                                         type="text"
                                         label="目标"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>

                <q-item clickable tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目二确定</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled bottom-slots
                                         v-model="params.subject2"
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="text = ''" class="cursor-pointer"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="params.target2"
                                         type="text"
                                         label="目标"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>

                <q-item clickable tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>科目三确定</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 68%;">
                                <q-input style="width: 100%;height: 100%;" square filled v-model="params.subject3"
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="text = ''"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="params.target3"
                                         type="text"
                                         label="目标"
                                         lazy-rules
                                         :rules="[ val => val && val.length > 0]"
                                ></q-input>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>

                <q-item clickable tag="div">
                    <q-item-section avatar style="width: 35%;">
                        <q-item-label>所在归属地</q-item-label>
                    </q-item-section>
                    <q-item-section avatar style="width: 65%;height:100%;padding: 0;">
                        <div style="width: 100%;height:100%;padding: 0; display: flex;flex-direction: row;justify-content: space-between;">
                            <div style="height:100%;width: 33%;">
                                <q-select style="height: 100%;" square filled v-model="params.province"
                                          :options="provinceOptions"
                                          label="省"/>
                            </div>
                            <div style="height:100%;width: 33%;">
                                <q-select style="height: 100%;" square filled v-model="params.city"
                                          :options="cityOptions"
                                          label="市"/>
                            </div>
                            <div style="height:100%;width: 33%;">
                                <q-select style="height: 100%;" square filled v-model="params.county"
                                          :options="countyOptions"
                                          label="县"/>
                            </div>
                        </div>
                    </q-item-section>
                </q-item>
            </div>

            <div class="q-pa-md _select_tips">
                常修科目选择<span style="font-size: 12px;"> &nbsp; (限制选择三项)</span>
            </div>
            <div class="q-pa-md flex row _select_info">
                <div class="q-gutter-sm" style="width:50%;">
                    <q-list>
                        <q-item v-for="(item,index) in subjectList1" tag="label" v-ripple>
                            <q-item-section avatar>
                                <q-checkbox v-model="subjecSelects" :val="item.subjectId" color="teal"></q-checkbox>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{item.name}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
                <div class="q-gutter-sm" style="width:50%;">
                    <q-list>
                        <q-item v-for="(item,index) in subjectList2" tag="label" v-ripple>
                            <q-item-section avatar>
                                <q-checkbox v-model="subjecSelects" :val="item.subjectId" color="teal"></q-checkbox>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{item.name}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>

            <div class="q-pa-md _select_tips">
                后台留言
            </div>
            <div class="q-pa-md flex row _select_info" style="padding:0;">
                <textarea style="width: 100%;height: 100%;height: 100px;background: #EBECE7;" type="text"
                          v-model="leaveMessage"
                          placeholder="请输入您的留言" maxlength="2000"/>
            </div>
        </div>
    </q-page>
</template>

<script>

    import {_URL} from "../../../api/js/_url";

    export default {
        name: 'SubjectSelect',
        components: {},
        data() {
            return {
                subjecSelects: [],
                subjectList: [],
                subjectList1: [],
                subjectList2: [],
                name: null,
                age: null,
                accept: false,
                date: '2020/02/21',
                shape: "line",
                options: ["f1", "f2", "f3", "f4", "f5", "f6"],
                model: "f2",
                text: "",
                params: {
                    mageName: "",
                    selectType: "",
                    subject1: "",
                    target1: "",
                    subject2: "",
                    target2: "",
                    subject3: "",
                    target3: "",
                    province: "",
                    city: "",
                    county: ""
                },
                provinceOptions: [],
                cityOptions: [],
                countyOptions: [],
                leaveMessage: ""
            }
        },
        watch: {
            subjecSelects: {
                handler: function (newVal, oldVal) {
                    debugger;
                    if (newVal.length == 3) {
                        return;
                    }
                },
                deep: true    //深度监听
            }
        },
        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {
            init() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_SUBJECT_LIST).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errcode != 0 && !dataTT.data) return;
                    _this.subjectList = dataTT.data;
                    _this.initSubjectList();
                }).catch(() => {
                    _this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Loading failed',
                        icon: 'request ${_URL.QUERY_SUBJECT_LIST} is error'
                    })
                })
            },
            /**
             * @Description: 初始化共修功课种类
             * @author: lifei
             * @date: 2020/2/22
             */
            initSubjectList() {
                let _this = this;
                _this.subjectList.map((item, index) => {
                    if (index % 2 == 0) _this.subjectList1.push(item);
                    else _this.subjectList2.push(item);
                })
            },

            /**
             * @Description: 提交
             * @author: lifei
             * @date: 2020/2/23
             */
            doSubmit() {
                alert("ok");
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

    @mixin flex($direction:row, $justify:center, $align:center) {
        display: flex;
        flex-direction: $direction;
        justify-content: $justify;
        align-items: $align;
    }

    ._select_page {
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        color: #451E04;

        ._select_inner {
            width: 100%;
            hieght: 100%;
            background: #E3E0D7;
            padding: 15px 0px 0px 0px;
            @include flex(column);

            ._select_info {
                width: 92%;
                background: #EBECE7;
                border-radius: 5px;
                font-size: 16px;
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
            }

            ._select_tips {
                @include flex(row);
                font-size: 18px;
            }
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

</style>
