<template>
    <q-page class="flex flex-start _subject_page" v-cloak>
        <div class="q-pa-md _subject_panels">
            <div class="q-gutter-y-md">
                <q-option-group
                        v-model="panel"
                        inline
                        :options="groupOptions"
                ></q-option-group>
                <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders" style="padding: 0">
                    <q-tab-panel name="filleIn" style="padding: 0">
                        <SubjectFillIn></SubjectFillIn>
                    </q-tab-panel>
                    <q-tab-panel name="fillDetail" style="padding: 0">
                        <SubjectStatics/>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>

        <div class="_subject_inner">

        </div>
    </q-page>
</template>

<script>

    import {_URL} from "../../../api/js/_url";
    import SubjectFillIn from "./SubjectFillIn";
    import SubjectStatics from "./SubjectStatics";

    export default {
        name: 'SubjectPage',
        components: {SubjectFillIn, SubjectStatics},
        data() {
            return {
                groupOptions: [
                    {label: '每日共修填到', value: 'filleIn', id: 1},
                    {label: '共修填到详情', value: 'fillDetail', id: 2},
                ],

                panel: 'filleIn',
            }
        },
        comments: {
            SubjectFillIn,
        },
        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {
            /**
             * @Description: 初始化方法
             * @author: lifei
             * @date: 2020/2/22
             */

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

    ._subject_page {
        width: 100%;
        height: 100%;
        background: #E1E1D5;

        ._subject_panels {
            width: 100%;
            height: 90%;
        }
    }
</style>
