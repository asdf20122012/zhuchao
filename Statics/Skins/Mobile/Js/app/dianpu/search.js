/**
 * Created by Administrator on 2016/3/17.
 */
define(['zepto', 'module/mall_nav', 'app/dianpu/common'], function (){
   $(function (){
      $('.m_search i.icon-sousuo').click(function (){
         var text = $('.m_search input').val();
         if(text.length){
            window.location.href = '/productlist/1.html?keyword=' + text;
         }
      });
   });
});