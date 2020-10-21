// ==UserScript==
// @name         Enhanced ioihw20
// @description  Showing problem owners and real names on ioihw20.duck-ac.cn
// @license      MIT
// @version      0.1
// @author       Cekavis
// @match        https://ioihw20.duck-ac.cn/*
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle (`
    body > div > div.uoj-content > div.table-responsive > table > thead > tr > th:nth-child(1){
        width: 8em !important;
    }
`);

(function() {
    'use strict';

    let dict = {
        'ioi2021_00': '虞皓翔',
        'ioi2021_01': '马耀华',
        'ioi2021_02': '彭博',
        'ioi2021_03': '屠学畅',
        'ioi2021_04': '黄子宽',
        'ioi2021_05': '彭思进',
        'ioi2021_06': '胡昊',
        'ioi2021_07': '邓明扬',
        'ioi2021_08': '周欣',
        'ioi2021_09': '陈雨昕',
        'ioi2021_10': '叶卓睿',
        'ioi2021_11': '魏衍芃',
        'ioi2021_12': '林昊翰',
        'ioi2021_13': '李白天',
        'ioi2021_14': '代晨昕',
        'ioi2021_15': '张隽恺',
        'ioi2021_16': '徐哲安',
        'ioi2021_17': '郭城志',
        'ioi2021_18': '徐舟子',
        'ioi2021_19': '周镇东',
        'ioi2021_20': '张好风',
        'ioi2021_21': '袁浩天',
        'ioi2021_22': '魏辰轩',
        'ioi2021_23': '邱天异',
        'ioi2021_24': '张博为',
        'ioi2021_25': '陈峻宇',
        'ioi2021_26': '孙诺舟',
        'ioi2021_27': '蒋凌宇',
        'ioi2021_28': '潘佳奇',
        'ioi2021_29': '钱易',
        'ioi2021_30': '张庭川',
        'ioi2021_31': '丁晓漫',
        'ioi2021_32': '左骏驰',
        'ioi2021_33': '万天航',
        'ioi2021_34': '施良致',
        'ioi2021_35': '刘宇豪',
        'ioi2021_36': '李泽清',
        'ioi2021_37': '林立',
        'ioi2021_38': '戴傅聪',
        'ioi2021_39': '王泽远',
        'ioi2021_40': '陈胤戬',
        'ioi2021_41': '陆宏',
        'ioi2021_42': '吕秋实',
        'ioi2021_43': '欧阳宇鹏',
        'ioi2021_44': '张记僖',
        'ioi2021_45': '吴孟周',
        'ioi2021_46': '曹原',
        'ioi2021_47': '陈亮舟',
        'ioi2021_48': '卢宸昊',
        'ioi2021_49': '曾庆之',
        'ioi2021_50': '万成章',
        'ioi2021_51': '张景行',
        'ioi2021_52': '戴江齐',
        'ioi2021_53': '郑路明',
        'ioi2021_54': '周航锐',
        'ioi2021_55': '曹越',
        'ioi2021_56': '冯施源',
        'ioi2021_57': '罗恺',
        'ioi2021_58': '冷滟泽',
        'ioi2021_59': '杨珖',
        'ioi2021_60': '陶立宇',
        'ioi2021_61': '陈于思',
        'ioi2021_62': '王相文',
        'ioi2021_63': '孙嘉伟',
        'ioi2021_64': '孙若凡',
        'ioi2021_65': '宣毅鸣',
        'ioi2021_66': '谢濡键',
        'ioi2021_67': '孙从博',
        'ioi2021_68': '许庭强',
        'ioi2021_69': '周子衡',
        'ioi2021_70': '苏焜',
        'ioi2021_71': '管晏如',
        'ioi2021_72': '陈永志',
        'ioi2021_73': '蔡欣然',
        'ioi2021_74': '韩豫葳',
        'ioi2021_75': '张湫阳',
        'ioi2021_76': '丁其安',
        'ioi2021_77': '翁伟捷',
        'ioi2021_78': '吴家庆',
        'ioi2021_79': '潘逸飞',
        'ioi2021_80': '谢琳涵'
    }

    $('td').each(function () {
        console.log(this.innerHTML);
        if(this.innerHTML.match(/#\d+\./)) {
            let pid = this.innerHTML.match(/\#\d+/)[0]
            let uid = Math.floor((pid.substr(1)-101)/4)
            console.log(pid, uid)
            if(0<=uid && uid<=50){
                if(uid<10) uid = "0" + uid;
                let name = dict["ioi2021_"+uid]
                this.innerHTML = this.innerHTML.replace(pid, '<span style="color:#A0A0A0;font-size:80%">（' + name + '）</span>' + pid)
            }
        }
    })
    $('h1').each(function () {
        console.log(this.innerHTML);
        if(this.innerHTML.match(/#\d+\./)) {
            let pid = this.innerHTML.match(/\#\d+/)[0]
            let uid = Math.floor((pid.substr(1)-101)/4)
            console.log(pid, uid)
            if(0<=uid && uid<=50){
                if(uid<10) uid = "0" + uid;
                let name = dict["ioi2021_"+uid]
                this.innerHTML = this.innerHTML.replace(pid, '<span style="color:#A0A0A0;font-size:80%">（' + name + '）</span>' + pid)
            }
        }
    })
    $('td').each(function () {
        console.log(this.innerHTML);
        if(this.innerHTML.match(/#\d+/)==this.innerHTML) {
            let pid = this.innerHTML.match(/\#\d+/)[0]
            let uid = Math.floor((pid.substr(1)-101)/4)
            console.log(pid, uid)
            if(0<=uid && uid<=50){
                if(uid<10) uid = "0" + uid;
                let name = dict["ioi2021_"+uid]
                this.innerHTML = this.innerHTML.replace(pid, '<span style="color:#A0A0A0;font-size:80%">（' + name + '）</span>' + pid)
            }
        }
    })

    $('*').each(function() {
        if(this.innerHTML.match(/^ioi2021_[0-9]+$/g)) {
            let uid = this.innerHTML.match(/ioi2021_[0-9]+/g)[0]
            let name = dict[uid]
            console.log(uid, name)
            this.innerHTML = '<span style="font-weight:normal">' + name + '</span>';
        }
    })

})();