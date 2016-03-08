/*
 * Cntysoft Cloud Software Team
 *
 * @author SOFTBOY <cntysoft@163.com>
 * @copyright  Copyright (c) 2010-2011 Cntysoft Technologies China Inc. <http://www.cntysoft.com>
 * @license    http://www.cntysoft.com/license/new-bsd     New BSD License
 */
/**
 * WEBOS桌面系统菜单处理函数
 */
Ext.define('ZhuChao.Os.SysMenuHandler',{
    mixins : {
        langTextProvider : 'Cntysoft.Mixin.LangTextProvider'
    },
    requires : [
      'ZhuChao.Os.Widget.UserInfo',
      'ZhuChao.Os.Widget.ModifyPwd'
    ],
    statics : {
        AM : {
            ACCOUNT : 1,
            MODIFY_PWD : 2,
            SETTING : 3,
            ABOUT_KELE_SHOP : 4,
            HELP_CENTER : 5,
            LOGOUT : 6
        }
    },
    LANG_NAMESPACE : 'ZhuChao.Lang',
    //private
    wrapper : null,
    constructor : function(wrapper)
    {
        this.LANG_TEXT = this.GET_LANG_TEXT('MENU.SYS_MENU');
        this.wrapper = wrapper;
        wrapper.height = 200;
        wrapper.addListener({
            click : this.menuItemClickHandler,
            scope : this
        });
    },
    /**
     * 获取菜单对象
     *
     * @return {Array}
     */
    getMenuItems : function()
    {
        var M = this.self.AM;
        return   [{
            text : this.LANG_TEXT.ACCOUNT,
            iconCls : 'webos-start-btn-account-icon',
            code : M.ACCOUNT
        },{
            text : this.LANG_TEXT.MODIFY_PWD,
            iconCls : 'webos-start-btn-modify-pwd-icon',
            code : M.MODIFY_PWD
        //},{
        //    text : this.LANG_TEXT.SETTING,
        //    iconCls : 'webos-start-btn-setting-icon',
        //    code : M.SETTING
        },{
            xtype  :'menuseparator'
        },{
            text : this.LANG_TEXT.ABOUT_KELE_SHOP,
            iconCls : 'webos-start-btn-about-keleshop-icon',
            code : M.ABOUT_KELE_SHOP
        },{
            text : this.LANG_TEXT.HELP_CENTER,
            iconCls : 'webos-start-btn-help-icon',
            code : M.HELP_CENTER
        },
            //   {
            //   text : this.LANG_TEXT.APP_STORE,
            //   iconCls : 'webos-start-btn-appstore-icon'
            //},
            {
                xtype  :'menuseparator'
            },{
                text : this.LANG_TEXT.LOGOUT,
                iconCls : 'webos-start-btn-logout-icon',
                code : M.LOGOUT
            }];

    },

    menuItemClickHandler : function(menu, item)
    {
        if(item){
            var code = item.code;
            var M = this.self.AM;
            switch(code){
                case M.ACCOUNT:
                    this.renderAccountWin();
                    break;
                case M.ABOUT_KELE_SHOP:
                    window.open('http://www.shenen.net/category/keleyunshang.html#page1');
                    break;
                case M.MODIFY_PWD:
                    this.renderModifyPwdWin();
                    break;
                case M.SETTING:
                    var STD_HANDLER = WebOs.ME.getStdHandler();
                    STD_HANDLER.runApp('Sys', 'Setting',{
                        widgetName : 'Entry'
                    });
                    break;
                case M.HELP_CENTER:
                    break;
                case M.LOGOUT:
                    WebOs.ME.logout();
                    break;
            }
        }
        this.wrapper.hide();
    },
    renderAccountWin : function()
    {
       var win = new ZhuChao.Os.Widget.UserInfo();
       win.show();
    },
    renderModifyPwdWin : function()
    {
       var win = new ZhuChao.Os.Widget.ModifyPwd();
       win.show();
    }
});