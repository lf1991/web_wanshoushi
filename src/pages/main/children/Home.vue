<template>
    <q-page class="flex flex-start">
        <div class="_home_page">
            <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    navigation
                    padding
                    arrows
                    height="300px"
                    class="bg-white text-black shadow-1 rounded-borders no-shadow"
            >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg"></q-img>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg"></q-img>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/cat.jpg"></q-img>
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png"></q-img>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/material.png"></q-img>
                        <q-img class="col-6 full-height" src="https://cdn.quasar.dev/img/donuts.png"></q-img>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                slide: 1,
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

    ._home_page {
        width: 100%;
        height: 100%;
    }

</style>
