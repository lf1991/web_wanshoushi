<template>
    <q-layout view="hHh Lpr lFf">
        <q-header class="_nav_header">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        @click="isLeftOpen = !isLeftOpen"
                        icon="menu"
                        aria-label="Menu"
                />
                <q-toolbar-title class="_title"> 四众弟子定课共修系统</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer style="width: 100px;"
                  v-model="isLeftOpen"
                  show-if-above
                  bordered
                  content-class="bg-yellow-1"
        >
            <MainList/>
        </q-drawer>
        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>

    import MainList from "../pages/main/MainList";

    export default {
        name: 'MainLayout',
        components: {
            MainList
        },

        data() {
            return {
                isLeftOpen: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    @mixin flex($direction:row, $justify:center, $align:center) {
        display: flex;
        flex-direction: $direction;
        justify-content: $justify;
        align-items: $align;
    }

    ._nav_header {
        background: #532406;
        color: #FFFFFF;
        height: 70px;
        @include flex();
    }
</style>