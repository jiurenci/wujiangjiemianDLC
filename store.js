'use strict';
window.onlineShop = {
    version:1.359,
    /*主要货币
    银两-coin
    元宝-coupons
    金票-jinpiao
    豆子-huanledou
    功勋-gongxun
    将符-jiangfu
    神之碎片-extra_fragment
    折扣券-coupon
    史诗宝珠-medal（未更新）
    招募令-zhaomuling
    寻宝令-xunbaoling
    同心结-tongxinjie
    */
    players:[/*武将栏目*/
        {
            id:202208051524,/*商品id（唯一）*/
            name:'shen_caopi',/*武将id（必填）*/
            type:'武将',/*商品类型（必填）*/
            currency:'extra_fragment',/*结算货币（必填）*/
            price:12,/*售价（必填）*/
            num:1,/*数量（必填）*/
            level:5,/*推荐指数1-5（选填）*/
            vip:7,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051920,/*商品id（唯一）*/
            name:'re_quyi',
            type:'武将',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:388,/*售价（必填）*/
            num:1,/*数量（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051525,/*商品id（唯一）*/
            name:'xuyou',
            type:'武将',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:388,/*售价（必填）*/
            num:1,/*数量（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
    ],
    skins:[/*皮肤栏目*/
        {
            id:202208051526,/*商品id（唯一）*/
            name:'xushao',/*使用皮肤武将id（必填）*/
            type:'皮肤',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:5888,/*售价（必填）*/
            num:'声名鹊起.jpg',/*皮肤名称（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051528,/*商品id（唯一）*/
            name:'zhaoxiang',/*使用皮肤武将id（必填）*/
            type:'皮肤',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:5888,/*售价（必填）*/
            num:'含泪桃花.jpg',/*皮肤名称（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
    ],
    props:[/*道具栏目*/
        {
            id:202208051527,/*商品id（唯一）*/
            name:'xunbaoling',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:88,/*售价（必填）*/
            num:10,/*数量（必填）*/
            level:2,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051529,/*商品id（唯一）*/
            name:'zhaomuling',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:188,/*售价（必填）*/
            num:10,/*数量（必填）*/
            level:1,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051530,/*商品id（唯一）*/
            name:'manghe',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:5888,/*售价（必填）*/
            num:8,/*数量（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051531,/*商品id（唯一）*/
            name:'qifudeng',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:23333,/*售价（必填）*/
            num:5,/*数量（必填）*/
            level:5,/*推荐指数1-5（选填）*/
            vip:7,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051532,/*商品id（唯一）*/
            name:'baoxiang_jiangyin_epic',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:8888,/*售价（必填）*/
            num:8,/*数量（必填）*/
            level:4,/*推荐指数1-5（选填）*/
            vip:4,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051427,/*商品id（唯一）*/
            name:'card_refresh',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:288,/*售价（必填）*/
            num:8,/*数量（必填）*/
            level:3,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051533,/*商品id（唯一）*/
            name:'card_secret',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:288,/*售价（必填）*/
            num:8,/*数量（必填）*/
            level:3,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051534,/*商品id（唯一）*/
            name:'card_taskReset',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:288,/*售价（必填）*/
            num:8,/*数量（必填）*/
            level:3,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051535,/*商品id（唯一）*/
            name:'card_skin_Optional',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:18888,/*售价（必填）*/
            num:3,/*数量（必填）*/
            level:3,/*推荐指数1-5（选填）*/
            vip:4,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051536,/*商品id（唯一）*/
            name:'card_SuperDouble',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:5888,/*售价（必填）*/
            num:10,/*数量（必填）*/
            level:1,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051537,/*商品id（唯一）*/
            name:'card_reduce_escape',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'coin',/*结算货币（必填）*/
            price:1888,/*售价（必填）*/
            num:10,/*数量（必填）*/
            level:1,/*推荐指数1-5（选填）*/
            vip:1,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051538,/*商品id（唯一）*/
            name:'coupons',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'jiangfu',/*结算货币（必填）*/
            price:3888,/*售价（必填）*/
            num:1000,/*数量（必填）*/
            level:5,/*推荐指数1-5（选填）*/
            vip:7,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
        {
            id:202208051539,/*商品id（唯一）*/
            name:'huanledou',/*道具id（必填）*/
            type:'道具',/*商品类型（必填）*/
            currency:'gongxun',/*结算货币（必填）*/
            price:888,/*售价（必填）*/
            num:6000,/*数量（必填）*/
            level:3,/*推荐指数1-5（选填）*/
            vip:4,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
	    pack:[],/*打包*/
        },
    ],
    packs:[
	   {
            id:202208051919,/*商品id（唯一）*/
            name:'七夕礼包',/*武将id（必填）*/
            type:'批量',/*商品类型（必填）*/
            currency:'coupons',/*结算货币（必填）*/
            price:1,/*售价（必填）*/
            num:1,/*数量（必填）*/
            max:3,/*打开最多出现多少个道具*/
	    level:5,/*推荐指数1-5（选填）*/
            vip:0,/*会员等级0-9（选填）*/
	    unique:false,/*识别码*/
            title:'七夕礼包',
	    info:'元宝*999、刘备*1、孙尚香*1、寻宝令*10、招募令、10、烽火连天',
	    pack:[{id:'coupons',num:999},{id:'xunbaoling',num:10},{id:'zhaomuling',num:10},{id:'liubei',random:1},{id:'mayunlu',random:1},{id:'xushao',num:'烽火连天.jpg',random:1}],/*打包*/
	    ext:'1',
        },
    ],
};
