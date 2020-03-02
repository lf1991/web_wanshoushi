<!--后台管理模块-->
<template>
    <div class="q-pa-md" style="padding: 0; background:#ebebe7;" v-cloak>
        <div class="q-pa-md" style="font-size: 20px;">每日共修签到</div>
        <div class="q-pa-md" style="max-width: 100%">
            <div class="q-gutter-sm">
                <q-input
                        filled
                        v-model="name"
                        type="text"
                        label="请输入您的姓名"
                        lazy-rules
                        :rules="[ val => val && val.length > 0]"
                ></q-input>
            </div>
            <div class="q-gutter-sm">
                <q-input filled v-model="date" mask="date" :rules="['date']">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="date" @input="() => $refs.qDateProxy.hide()"></q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="q-gutter-sm">
                <q-list>
                    <q-item v-for="(item,index) in subjectList" tag="label" v-ripple>
                        <q-item-section avatar>
                            <q-checkbox v-model="subjecSelects" :val="item.subjectId" color="teal"></q-checkbox>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{item.name}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="q-gutter-sm">
                <q-input
                        filled
                        v-model="name"
                        type="text"
                        label="其他"
                        lazy-rules
                ></q-input>
            </div>

            <div class="q-pa-md flex flex-center">
                <q-btn class="_button" style="width: 90%;font-size: 20px;" color="secondary" label="提交"
                       v-on:click="doSubmit()"></q-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import {_URL} from "../../../api/js/_url";

    export default {
        name: 'SubjectFillIn',
        data() {
            return {
                subjecSelects: [],
                subjectList: [],
                name: null,
                age: null,
                accept: false,
                date: '2020/02/21',
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
</style>
