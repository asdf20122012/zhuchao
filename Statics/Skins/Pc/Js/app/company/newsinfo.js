/*
 * Cntysoft Cloud Software Team
 * 
 * @author wql <wql1211608804@163.com>
 * @copyright  Copyright (c) 2010-2011 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license   Expression $license is undefined on line 6, column 17 in Templates/ClientSide/javascript.js.
 */
define(['jquery', 'app/company/common','layer','layer.ext'], function (){
   $(function (){
      if($('.l_main').attr('newsid')){
         Cntysoft.Front.callApi('Utils', 'addArticleHits',
         {
            id : $('.l_main').attr('newsid')
         }, function (response){
         }
         , this);
      }
       //文章图片预览
        initContentPhotos('.news_detail');

        function initContentPhotos(select){

            var imgs = $(select).find('img');
            var ret = {
                title : '图片预览',
                data : []
            }
            $.each(imgs, function (index, item){
                var info = {pid : index};
                if($(item).attr('data-original')){
                    info.src = $(item).attr('data-original');
                } else{
                    info.src = $(item).attr('src');
                }
                ret.data.push(info);
            });
            $.each(imgs, function (index, item){
                ret.start = index;
                $(item).click(function (){
                    layer.photos({
                        photos : {
                            title : '图片预览',
                            data : [],
                            start:index,
                            data:ret.data
                        },
                        shift : 0
                    });
                });
            });
            return ret;
        }
   });
});


