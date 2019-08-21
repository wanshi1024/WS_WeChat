

function queryOne(selector) {
    return document.querySelector(selector);
}
function queryAll(selector) {
    return document.querySelectorAll(selector);
}






const vm = new Vue({
    el: '#app',
    data() {
        return {
            // 对话列表
            data1: [
                {
                    img: 'img/石任凭.jpg',
                    count: 1,
                    title: '石任凭',
                    time: '10:25',
                    desc: '[1条]割鸡割鸡割鸡'
                },
                {
                    img: 'img/qun01.png',
                    count: 1,
                    title: '安徽旅游群',
                    time: '10:25',
                    desc: '[1条]能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                },
                {
                    img: 'img/rabbit.jpg',
                    count: 0,
                    title: '石四凭',
                    time: '10:25',
                    desc: '顽石移动端模仿的微信'
                },
                {
                    img: 'img/jqr.jpg',
                    count: 0,
                    title: '聊天机器人',
                    time: '10:25',
                    desc: '小哥哥小姐姐来聊天啊'
                },
            ],
            // 通讯录下标列表
            indexListStr:'☆↑ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    },

    computed: {
        msgTotal() {
            let arr1 = this.data1.map(item => item.count);
            return arr1.reduce(function (total, nextVal) {
                return total + nextVal;
            });

        }
    },
    created() {
        // console.log(this.msgTotal)
    },
    methods: {
        // 点击对话
        clickDialogue(item) {
            console.log(item);
            sessionStorage.setItem('chat', JSON.stringify(item))
            mui.openWindow({
                url: 'pages/chat.html',
                id: 'chat.html',
                extras: {
                    item
                },
                show: {
                    autoShow: true,//页面loaded事件发生后自动显示，默认为true
                    aniShow: 'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                    duration: 500//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                },
            });

        }
    }

})