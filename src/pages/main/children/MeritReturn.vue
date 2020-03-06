<!--功德回向模块-->
<template>
    <div class="q-pa-md _return_page">
        <div class="_return_inner">
            <div class="_inner_content" v-if="isShowReturn">
                <div class="_title">功德回向</div>
                <div class="_item">
                    <div class="_item_part">
                        <q-list>
                            <q-item v-for="(item,index) in returnList1" tag="label" v-ripple>
                                <q-item-section avatar>
                                    <q-checkbox v-model="returnSelects" :val="item.id" color="teal"></q-checkbox>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{item.label}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                    <div class="_item_part">
                        <q-list>
                            <q-item v-for="(item,index) in returnList2" tag="label" v-ripple>
                                <q-item-section avatar>
                                    <q-checkbox v-model="returnSelects" :val="item.id" color="teal"></q-checkbox>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{item.label}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                </div>
                <div class="_desc">
                    <pre>{{meritDesc}}</pre>
                </div>
                <div class="_submit">
                    <q-btn class="_button _submit_button" label="提交" v-on:click="stepToSubmit()"/>
                    <q-btn class="_button _cancle_button" label="取消" v-on:click="stepToReturn()"/>
                </div>
            </div>
            <div class="_inner_tips" v-if="isShowCancle">
                <div class="_title">温馨提示</div>
                <div class="_content">
                    {{meritTips}}
                </div>
                <div class="_cancle">
                    <q-btn class="_button" label="返回" v-on:click="stepToCancle()"/>
                </div>
            </div>
        </div>

        <div class="_mask"></div>
    </div>
</template>

<script>
    import {_URL} from "../../../api/js/_url";

    export default {
        name: 'ReturnPage',
        data() {
            return {
                meritDesc: "",
                meritTips: "",
                returnList: [],
                returnList1: [],
                returnList2: [],
                returnSelects: [],
                isShowCancle: true,
                isShowReturn: false,
            }
        },
        mounted() {
            let _this = this;
            _this.init();
            _this.initMeritDesc();
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isShow: {
                handler(newVal, oldVal) {
                    let _this = this;
                    _this.isShowCancle = false;
                    _this.isShowReturn = true;
                },
                deep: true
            }
        },
        methods: {
            init() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_MERIT_RETURN).then(res => {
                    if (!res || !res.data || res.data["errcode"] != 0 || !res.data["data"]) return;
                    let resTT = res.data["data"];
                    _this.returnList = resTT["meritReturn"];
                    _this.returnList.map((item, index) => {
                        if (index % 2 != 0) _this.returnList1.push(item);
                        else _this.returnList2.push(item);
                    });
                    _this.meritDesc = resTT["meritDesc"].replace(new RegExp(",", "g"), "  ");
                }).catch(err => {
                    //do nothong
                });
            },

            /**
             * @Description: 设置提示信息
             * @author: lifei
             * @date: 2020/3/7
             */
            initMeritDesc() {
                let _this = this;
                _this.meritTips = "随喜您今日共修圆满，您还未为自己回向功德，点击返回按钮回向功德！"
            },
            /**
             * @Description: 提交
             * @author: lifei
             * @date: 2020/2/23
             */
            stepToSubmit() {
                let _this = this;
                if (_this.returnSelects.length == 0) {
                    _this.isShowReturn = false;
                    _this.isShowCancle = true;
                    return;
                }
            },
            /**
             * @Description: 返回
             * @author: lifei
             * @date: 2020/2/23
             */
            stepToReturn() {
                let _this = this;
                _this.isShowCancle = false;
                _this.isShowReturn = true;
                _this.$emit("showReturn", false);
            },
            stepToCancle() {
                let _this = this;
                _this.isShowCancle = false;
                _this.isShowReturn = true;
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

    ._return_page {
        width: 100%;
        height: 100%;
        color: #EBECE7;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        color: #451E04;

        ._return_inner {
            width: 100%;
            height: 100%;
            position: relative;
            @include flex();

            ._inner_content {
                width: 100%;
                height: 400px;
                position: absolute;
                left: 0;
                top: 70px;
                border-radius: 5px;
                z-index: 3;
                background: #EBECE7;

                ._title {
                    width: 100%;
                    height: 15%;
                    background: #A14407;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    font-size: 22px;
                    color: #fff;
                    font-weight: bold;
                    @include flex();
                }

                ._item {
                    width: 100%;
                    height: 35%;
                    color: #7D6252;
                    @include flex();

                    ._item_part {
                        min-width: 30%;
                        height: 100%;
                        @include flex();
                    }
                }

                ._desc {
                    width: 100%;
                    height: 35%;
                    font-size: 16px;
                    color: #7D6252;
                    @include flex();
                }

                ._submit {
                    width: 100%;
                    height: 15%;
                    @include flex();

                    ._button {
                        height: 70%;
                        min-width: 35%;
                        color: #fff;
                        font-size: 18px;
                        margin-left: 20px;
                    }

                    ._submit_button {
                        background: #A14407;
                    }

                    ._cancle_button {
                        background: #a16c0c;
                    }
                }
            }

            ._inner_tips {
                width: 100%;
                height: 230px;
                position: absolute;
                left: 0;
                top: 130px;
                border-radius: 5px;
                z-index: 3;
                background: #EBECE7;

                ._title {
                    width: 100%;
                    height: 20%;
                    background: #A14407;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    color: #fff;
                    font-size: 22px;
                    @include flex();
                }

                ._content {
                    width: 100%;
                    height: 50%;
                    font-size: 20px;
                    word-wrap: break-word;
                    padding: 15px 0 0 15px;
                    text-indent: 2em;
                    color: #92806A;
                    @include flex(row, flex-start, flex-start);
                }

                ._cancle {
                    width: 100%;
                    height: 30%;
                    @include flex();

                    ._button {
                        height: 70%;
                        background: #A14407;
                        min-width: 40%;
                        color: #fff;
                        font-size: 18px;
                    }
                }
            }
        }

        ._mask {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: .6;
            background: #977C67;
            z-index: 2;
        }
    }

    .q-pa-md {
        padding: 10px 10px;
    }

    .q-item {
        padding: 0;
        margin: 0;
        height: 35px;
        min-height: 30px !important;
        font-size: 18px;

    }

    .q-item__section--side {
        padding-right: 0;
    }

    .q-item__section--avatar {
        min-width: unset;
    }


</style>
