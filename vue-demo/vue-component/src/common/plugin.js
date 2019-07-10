// vue-ui的message组件
let Toast = {}
// 在Toast上添加属性
Toast.install = function (Vue, options) {
    let opt = {
        // 默认显示位置居中
        defaultType: 'center',
        // 默认消失时间
        duration: '2000'
    }
    for (let property in options) {
        // 调用toast时传进的第二个参数如有值，则置换默认的配置
        opt[property] = options[property]
    }
    // 在vue的原型链上挂载一个$toast
    Vue.prototype.$toast = (tips, type) => {
        // 如果type存在 就置换
        if (type) {
            opt.defaultType = type
        }
        // dom结构存在
        if (document.getElementsByClassName('vue-toast').length) {
            return
        }
        // vue扩展模板
        let toastTpl = Vue.extend({
            template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
        })
        // 模板创建之后要手动挂载
        let tpl = new toastTpl().$mount().$el
        // 挂载到body上
        document.body.appendChild(tpl)
        // 设定移除
        setTimeout(() => {
            document.body.removeChild(tpl)
        }, opt.duration)
    }
    // 设置第二个参数的范围
    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })
}
export {
    Toast
}