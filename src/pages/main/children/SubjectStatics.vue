<!--后台管理模块-->
<template>
    <div class="q-pa-md" style="padding: 0; background:rgb(235, 235, 231);">
        <div class="q-pa-md" style="font-size: 20px;">每日共修查询</div>
        <div class="q-pa-md" style="width: 100%;">
            <div class="q-gutter-sm">
                <q-input
                        filled
                        v-model="userName"
                        type="text"
                        label="输入姓名查询"
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
            <div class="q-pa-md flex flex-center" style="padding: 0;">
                <q-btn class="_button" style="width: 100%;font-size: 20px;" color="secondary" label="查询"
                       v-on:click="doSearch()"></q-btn>
            </div>
        </div>
        <q-markup-table :separator="separator" flat bordered style="background:rgb(235, 235, 231);">
            <thead>
            <tr>
                <th class="text-left" v-for="(tt,index) in fillHeaders">
                    {{tt}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in fillDetails">
                <td class="text-left">{{item.no}}</td>
                <td class="text-left">{{item.userName}}</td>
                <td class="text-left">
                    <div v-on:click="fuck(item)">{{item.subjects}}OK</div>
                </td>
                <td class="text-left">{{item.date}}</td>
                <!--  <td class="text-left">{{item.detail}}</td>-->
            </tr>
            </tbody>
        </q-markup-table>
    </div>
</template>

<script>

    import {_URL} from "../../../api/js/_url";

    export default {
        name: 'SubjectStatics',
        data() {
            return {
                userName: "",
                date: "2019/12/12",
                fillHeaders: ["No.", "姓名/法名", "共修科目", "日期"],
                fillDetails: [],
                separator: 'cell'
            }
        },

        mounted() {
            let _this = this;
            _this.init();
        },
        methods: {

            /**
             * @Description: 数据初始化
             * @author: lifei
             * @date: 2020/2/23
             */
            init() {
                let _this = this;
                _this.$axios.get(_URL.QUERY_FILL_DETAILS).then(res => {
                    if (res.errcode != 0 && !res.data) return;
                    _this.fillDetails = res.data["data"];
                }).catch(err => {
                    //do nothong
                });
            },


            fuck(item) {
                alert("OK")
            },

            /**
             * @Description: 查询按钮
             * @author: lifei
             * @date: 2020/2/23
             */
            doSearch() {
                alert("search")
            }
        },
        destroyed() {
        }
    }
</script>
