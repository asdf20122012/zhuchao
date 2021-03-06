/*
 * Cntysoft Cloud Software Team
 * 
 * @author SOFTBOY <cntysoft@163.com>
 * @copyright  Copyright (c) 2010-2011 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license    http://www.cntysoft.com/license/new-bsd     New BSD License
 */
/**
 * 凤凰筑巢核心常量定义类
 */
Ext.define('ZhuChao.Kernel.Const', {
   extend : 'WebOs.Kernel.Const',
   statics: {
      SUPPORTED_MODULES : {
         SITE : 'Site'
      },
      ENV_SITE_SETTING : 'ENV_SITE_SETTING',
      OSS_BACKEND : 1,
      LOCAL_BACKEND : 2
   }
}, function(){
   Ext.apply(ZhuChao,{
      Const : this,
      C : this
   });
});