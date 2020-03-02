<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="_login_page">
        <div class="q-pa-md">
          <div class="column" style="height:350px">
            <div class="col-4 _welcome">欢迎使用</div>
            <div class="col-2 _subtitle">四众弟子定课共修系统</div>
            <div class="col-6 _sub_image">
              <img src="../assets/images/logo.png" />
            </div>
          </div>

          <div class="column" style="height:250px">
            <div class="col-3 _sign_up">
              <div class="_up_inner">
                <img src="../assets/images/logo.png" />
                <div>登录</div>
              </div>
            </div>
            <div class="col-3 _sign_in">
              <div class="_in_inner">
                <img src="../assets/images/logo.png" />
                <div>注册</div>
              </div>
            </div>
            <div class="col-6 _sign_tip">但念无常 慎勿放逸</div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LoginLayout",
  components: {},

  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@mixin flex($direction: row, $justify: center, $align: center) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}
._login_page {
  color: #fff;
  background: rgb(194, 64, 12);
}
._welcome {
  font-size: 40px;

  @include flex(row, center, flex-end);
}
._subtitle {
  font-size: 23px;
  @include flex();
}
._sub_image {
  @include flex();

  img {
    width: 120px;
    height: 120px;
  }
}

._sign_up {
  @include flex();

  ._up_inner {
    @include flex();
    font-size: 18px;
    border: 1px solid #fff;
    padding: 2px 40px 2px 8px;
    border-radius: 5px;
    img {
      width: 30px;
      height: 30px;
    }

    div {
      @include flex();
      margin-left: 20px;
    }
  }
}
._sign_in {
  @include flex();

  ._in_inner {
    @include flex();
    font-size: 18px;
    border: 1px solid #fff;
    padding: 2px 40px 2px 8px;
    border-radius: 5px;
    img {
      width: 30px;
      height: 30px;
    }

    div {
      @include flex();
      margin-left: 20px;
    }
  }
}
._sign_tip {
  font-size: 18px;
  @include flex();
}
</style>