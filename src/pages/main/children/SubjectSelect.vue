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
                                         v-model="selectSubject[0].name "
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="selectSubject[0].name = ''"
                                                class="cursor-pointer"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[0].target "
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
                                         v-model="selectSubject[1].name"
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="selectSubject[1].name = ''"
                                                class="cursor-pointer"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[1].target"
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
                                <q-input style="width: 100%;height: 100%;" square filled v-model="selectSubject[2].name"
                                         label="名称">
                                    <template v-slot:append>
                                        <q-icon name="close" @click="selectSubject[2].name = ''"/>
                                    </template>
                                </q-input>
                            </div>
                            <div style="height:100%;width: 30%;">
                                <q-input style="width: 100%;height: 100%;"
                                         square filled
                                         v-model="selectSubject[2].target"
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
                                <q-select style="height: 100%;" square filled v-model="selectedPId"
                                          :options="provinceOptions"
                                          option-value="pId"
                                          option-label="provinceName"
                                          option-disable="inactive"
                                          emit-value
                                          map-options
                                          label="省"/>
                            </div>
                            <div style="height:100%;width: 33%;">
                                <q-select style="height: 100%;" square filled v-model="selectedCityId"
                                          :options="cityOptions"
                                          option-value="cityId"
                                          option-label="cityName"
                                          option-disable="inactive"
                                          emit-value
                                          map-options
                                          label="市"/>
                            </div>
                            <div style="height:100%;width: 33%;">
                                <q-select style="height: 100%;" square filled v-model="selectedCountyId"
                                          :options="countyOptions"
                                          option-value="countryId"
                                          option-label="countryName"
                                          option-disable="inactive"
                                          emit-value
                                          map-options
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
                    <q-option-group
                            :options="subjectList1"
                            type="checkbox"
                            v-model="subjecSelects"
                    />
                </div>
                <div class="q-gutter-sm" style="width:50%;">
                    <q-option-group
                            :options="subjectList2"
                            type="checkbox"
                            label="Notifications"
                            v-model="subjecSelects"
                    />
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

                },
                selectSubject: [
                    {id: "", name: "", target: 0},
                    {id: "", name: "", target: 0},
                    {id: "", name: "", target: 0}
                ],


                selectedPId: "",
                selectedCityId: "",
                selectedCountyId: "",
                provinceOptions: [],
                cityOptions: [],
                countyOptions: [],
                leaveMessage: "",
            }
        },
        watch: {
            subjecSelects: {
                handler: function (newVal, oldVal) {
                    let _this = this;
                    if (newVal.length > 3) {
                        _this.subjecSelects = _this.subjecSelects.splice(0, 3);
                    }
                    _this.initSubjectName();
                },
                deep: true    //深度监听
            },
            selectSubject: {
                handler: function (newVal, oldVal) {
                    let _this = this;
                    for (let key in _this.subjecSelects) {
                        let existId = _this.subjecSelects[key];
                        newVal.map(item => {
                            let currentName = item["name"];
                            let currentId = item["id"];
                            if (currentName == "" && currentId === existId) {//不存在了
                                _this.subjecSelects.splice(key, 1);
                            }
                        })
                    }
                },
                deep: true    //深度监听
            },
            selectedPId: {
                handler: function (newVal, oldVal) {
                    if (!newVal) return;
                    this.initCityByPid(newVal);
                },
                deep: true    //深度监听
            },
            selectedCityId: {
                handler: function (newVal, oldVal) {
                    if (!newVal) return;
                    this.initCountryByCityId(newVal);
                },
                deep: true    //深度监听
            },
        },
        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {
            init() {
                let _this = this;
                _this.initSubjects();
                _this.initGeographicInfo();
            },

            /**
             * @Description: 初始化课目列表
             * @author: lifei
             * @date: 2020/3/16
             */
            initSubjects() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_SUBJECT_LIST).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errode != 0 && !dataTT.data) return;
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
             * @Description: 初始化地理信息
             * @author: lifei
             * @date: 2020/3/16
             */
            initGeographicInfo() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_ALL_PROVINCE).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errode != 0 && !dataTT.data) return;
                    _this.provinceOptions = dataTT.data;
                }).catch(() => {
                    _this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Loading failed',
                        icon: 'request ${_URL.QUERY_ALL_PROVINCE} is error'
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
                    let itemTT = {
                        label: item["name"],
                        value: item["id"],
                    };
                    if (index % 2 == 0) _this.subjectList1.push(itemTT);
                    else _this.subjectList2.push(itemTT);
                })
            },

            /**
             * @Description: 查找城市根据省份
             * @author: lifei
             * @date: 2020/2/22
             */
            initCityByPid(pId) {
                let _this = this;
                _this.selectedCityId = "";
                this.$axios.get(_URL.QUERY_CITY_BY_PID + "/" + pId).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errode != 0 && !dataTT.data) return;
                    _this.cityOptions = dataTT.data;
                }).catch(() => {
                    _this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Loading failed',
                        icon: 'request ${_URL.QUERY_CITY_BY_PID} is error'
                    })
                });
            },

            /**
             * @Description: 查找县区根据城市
             * @author: lifei
             * @date: 2020/2/22
             */
            initCountryByCityId(cityId) {
                let _this = this;
                _this.selectedCountyId = "";
                _this.$axios.get(_URL.QUERY_COUNTRY_BY_CITYID + "/" + cityId).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errode != 0 && !dataTT.data) return;
                    _this.countyOptions = dataTT.data;
                }).catch(() => {
                    _this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Loading failed',
                        icon: 'request ${_URL.QUERY_COUNTRY_BY_CITYID} is error'
                    })
                })
            },

            /**
             * @Description: 初始化所选课目
             * @author: lifei
             * @date: 2020/2/23
             */
            initSubjectName() {
                let _this = this, noExistId = -1;
                if (!_this.subjecSelects.length) {
                    _this.selectSubject.map((itemMM, postion) => {
                        itemMM["name"] = "";
                        itemMM["id"] = "";
                        itemMM["target"] = "";
                    });
                    return;
                }

                //判断是否存在
                _this.subjecSelects.map((id, index) => {
                    let idIndex = index + 1;
                    _this.selectSubject.map((itemMM, postion) => {
                        let selectId = itemMM["id"];
                        if (_this.subjecSelects.indexOf(selectId) == -1) {//不存在
                            itemMM["name"] = "";
                            itemMM["id"] = "";
                            itemMM["target"] = "";
                        }
                    });
                });

                let id0 = _this.selectSubject[0].id, id1 = _this.selectSubject[1].id, id2 = _this.selectSubject[2].id;
                //数据填充
                _this.subjectList.map(subject => {
                    let subjectId = subject.id;
                    for (let index in _this.subjecSelects) {
                        let id = _this.subjecSelects[index];

                        if (id === subjectId) {

                            if (id0 == id) {
                                continue;
                            }
                            if (id1 == id) {
                                continue;
                            }
                            if (id2 == id) {
                                continue;
                            }
                            if (id0 == "") {
                                _this.selectSubject[0].id = subject["id"];
                                _this.selectSubject[0].name = subject["name"];
                            } else if (id1 == "") {
                                _this.selectSubject[1].id = subject["id"];
                                _this.selectSubject[1].name = subject["name"];
                            } else if (id2 == "") {
                                _this.selectSubject[2].id = subject["id"];
                                _this.selectSubject[2].name = subject["name"];
                            }
                        }
                    }
                });

            },
            /**
             * @Description: 提交
             * @author: lifei
             * @date: 2020/2/23
             */
            doSubmit() {
                alert("ok");
            }
        }
        ,
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
        color: #451E04;
        background: #E3E0D7;

        ._select_inner {
            width: 100%;
            hieght: 90%;
            background: #E3E0D7;
            padding: 15px 0px 50px 0px;
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
