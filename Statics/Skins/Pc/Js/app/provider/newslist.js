define(['app/common', 'validate', 'webuploader', 'Core', 'Front'], function (common){
    $(function (){
        common.createPage(getPageUrl);

        function getPageUrl(page){
            var baseUrl = '/site/news/1.html';
            return baseUrl.replace('1', page);
        }
    });
});