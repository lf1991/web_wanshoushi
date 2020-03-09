<!--课程管理模块-->
<template>
    <q-page class="flex flex-start _subjecthandler_page">

    </q-page>
</template>

<script>
    export default {
        name: 'SubjectHandlerPage',
        data() {
            return {}
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
            stepToMoudle() {
                let _this = this;
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
        @include flex(column, flex-start);


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
