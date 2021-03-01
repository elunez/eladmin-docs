import Vue from 'vue'

Vue.use(require('vue-script2'))

export default ({router}) => {
  /**
   * 路由切换事件处理
   * 路由切换
   */
  router.beforeEach((to, from, next) => {
    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
      if (to.path !== from.path && to.path !== '/' && from.name !== null) {
        let paras = document.getElementById('el-adsense-content');
        if (paras){
          paras.innerHTML = '';
          paras.innerHTML = '<ins class="adsbygoogle"\n' +
              '         style="display:inline-block;width:256px;height:100px"\n' +
              '         data-ad-client="ca-pub-3964897280370772"\n' +
              '         data-ad-slot="6487877338" />';
          (window.adsbygoogle || []).push({});
        }
      }
    }
    next();
  });
}
