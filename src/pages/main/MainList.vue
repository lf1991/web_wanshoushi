<template>
    <q-list>
        <q-item-label header class="text-grey-10">兰州万寿寺</q-item-label>
        <div v-for="(item,index) in mainList">
            <q-item clickable tag="div" v-ripple :active="item.active" active-class="bg-teal-1 text-grey-8"
                    class="shadow-2" v-on:click="stepToWork(item)">
                <q-item-section v-if="item.icon" avatar>
                    <q-icon :name="item.icon"/>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ item.title }}</q-item-label>
                    <q-item-label caption>{{ item.caption }}</q-item-label>
                </q-item-section>
            </q-item>
        </div>
    </q-list>
</template>

<script>

    import {_URL} from "../../api/js/_url.js";

    export default {
        name: 'MainList',
        data() {
            return {
                mainList: []
            }
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
            init() {
                let _this = this;
                _this.$axios.get(_URL.QUREY_MAIN_LIST).then((res) => {
                    let dataTT = res.data;
                    if (dataTT.errcode != 0 && !dataTT.data) return;
                    _this.mainList = dataTT.data;
                    _this.initMainList();
                }).catch(() => {
                    _this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Loading failed',
                        icon: 'request ${_URL.QUREY_MAIN_LIST} is error'
                    })
                })
            },

            /**
             * @Description: 初始化权限列表
             * @author: lifei
             * @date: 2020/2/22
             */
            initMainList() {
                let _this = this;
            },
            /**
             * @Description: 页面跳转
             * @author: lifei
             * @date: 2020/2/22
             */
            stepToWork(item) {
                let _this = this;
                _this.mainList.map(tt => {
                    tt.active = item.id == tt.id ? true : false;
                });
                this.$router.push({path: item.router});
            }
        }
    }
</script>
