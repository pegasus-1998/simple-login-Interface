import $ from 'jquery'
import { validHandler1, validHandler2 } from './formValidation'
import { getPhoneCodeApi } from '@/apis/login'

const getCodeEl = $('.get-code')

$('.submit-btn').on('click', function (e) {
    e.preventDefault()
    const valid1 = !!validHandler1()
    const valid2 = !!validHandler2()
    if(valid1 && valid2) {
        alert('登录成功！')
    }
})

getCodeEl.on('click', async () => {
    const flag = !!validHandler1()
    if (flag) {
        const statusStr = getCodeEl.text()
        if(statusStr != '获取验证码') return
        getCodeEl.text('请稍等')
        const res = await getPhoneCodeApi()
        alert(`验证码: ${ res.result}`)
        codeTimeout()
    }
})

function codeTimeout() {
    let outDelay = 60
    let timer = null
    getCodeEl.text(60 + '秒后重发')
    timer = setInterval(() => {
        if(outDelay <= 0) {
            getCodeEl.text('获取验证码')
            clearInterval(timer)
            return
        }
        outDelay--
        if(outDelay < 10) {
            getCodeEl.text(`0${outDelay}秒重发`)
        }else {
            getCodeEl.text(`${outDelay}秒后重发`)
        }  
    }, 1000)
}