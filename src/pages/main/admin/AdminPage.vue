<!--后台管理模块-->
<template>
    <q-page class="flex flex-start _admin_page">
        <div class="_admin_inner">
            <div class="q-pa-md _admin_info">
                <div class="_admin_moudle">
                    <div class="q-gutter-y-md" style="width: 100%;height: 100%;">
                        <q-card style="background:#EBECE7;">
                            <q-tabs
                                    v-model="tabSelected"
                                    dense
                                    class="text-grey"
                                    active-color="primary"
                                    indicator-color="primary"
                                    align="justify"
                                    narrow-indicator
                            >
                                <q-tab name="mails" label="Mails"/>
                                <q-tab name="alarms" label="Alarms"/>
                                <q-tab name="movies" label="Movies"/>
                                <q-tab name="more" label="more"/>
                            </q-tabs>
                            <q-separator/>
                            <q-tab-panels v-model="tabSelected" animated
                                          style="width: 100%;height: 100%;background:#EBECE7;">
                                <q-tab-panel name="mails">
                                    <div class="text-h6">Mails</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>

                                <q-tab-panel name="alarms">
                                    <div class="text-h6">Alarms</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>

                                <q-tab-panel name="movies">
                                    <div class="text-h6">Movies</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>

                                <q-tab-panel name="more">
                                    <div class="text-h6">more</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-card>
                    </div>
                </div>
            </div>

            <div class="q-pa-md _admin_info">
                <div class="_admin_commonly">
                    <div class="_commonly_every" v-for="item in  moudleList">
                        <div class="_every_inner" v-on:click="stepToMoudle(item)">
                            <div class="_icon">
                                <q-icon name="event"/>
                            </div>
                            <div class="_lable">{{item.lable}}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'AdminPage',
        data() {
            return {
                tabSelected: 'mails',
                tabList: [],
                moudleList: [
                    {
                        id: 1,
                        lable: "课程管理",
                        router: "/subjectHandler"
                    },
                    {
                        id: 2,
                        lable: "回向管理",
                        router: "/returnHandler"
                    },
                    {
                        id: 3,
                        lable: "共修统计",
                        router: "/staticsHandler"
                    },

                    {
                        id: 4,
                        lable: "用户管理",
                        router: "/userHandler"
                    },
                    {
                        id: 6,
                        lable: "套餐设置",
                        router: "/packageHandler"
                    },
                    {
                        id: 1,
                        lable: "消息推送",
                        router: "/messageHandler"
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
             * @Description: 模块选择
             * @author: lifei
             * @date: 2020/3/8
             */
            stepToMoudle(item) {
                let _this = this;
                _this.$router.push({path: item.router})
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

    ._admin_page {
        width: 100%;
        height: 100%;
        background: #E3E0D7;
        @include flex(column, flex-start);

        ._admin_inner {
            width: 100%;
            height: 100%;

            ._admin_info {
                width: 100%;
                background: #ebece7;
                font-size: 16px;
            }

            ._admin_moudle {
                width: 100%;
            }

            ._admin_commonly {
                width: 100%;
                margin-top: 10px;
                @include flex(row, flex-start, center, wrap);

                ._commonly_every {
                    width: 33%;
                    height: 120px;
                    @include flex();

                    ._every_inner {
                        min-width: 90%;
                        height: 80%;
                        cursor: pointer;
                        border-radius: 5px;
                        background: #DAD9D5;
                        @include flex(column);

                        &:hover {
                            background: #E3E0D7;;
                        }
                    }
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
</style>
