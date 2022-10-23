import $ from 'jquery'
import { validPhone, validMessageCode } from '@/utils/validate'

const verTextEl1 = $('.ver-text1')
const verTextEl2 = $('.ver-text2')

$('.pas-input1').on('blur', validHandler1)
$('.pas-input1').on('input', function() {
    if($(this).val()) $('.clear-icon').show()
    else $('.clear-icon').hide()
})
$('.pas-input2').on('blur', validHandler2)
$('.clear-icon').on('click', function() {
    $(this).prev().val('')
    $(this).hide()
})

export function validHandler1() {  // 返回true说明验证成功
    const eVal = $('.pas-input1').val().trim()
    const eLength = eVal.length
    verTextEl1.hide()
    const { isPhoneLogin } = Object.prototype.myCustomProp
    eVal && $('.clear-icon').show()
    if(isPhoneLogin) {
        if(eLength === 0) {
            setVerText1('手机号不能为空')
        }else if(!validPhone(eVal)) {
            setVerText1('请输入正确的手机号')
        }else {
            return true
        }
    }
    if(!isPhoneLogin) {
        if(eLength === 0) {
            setVerText1('账号不能为空')
        }else if(eLength < 8 || eLength > 16) {
            setVerText1('账号要在8~16位之间')
        }else {
            return true
        }
    }
}

export function validHandler2() {
    const eVal = $('.pas-input2').val().trim()
    const eLength = eVal.length
    verTextEl2.hide()
    const { isPhoneLogin } = Object.prototype.myCustomProp
    if(isPhoneLogin) {
        if(eLength === 0) {
            setVerText2('验证码不能为空')
        }else if(!validMessageCode(eVal)) {
            setVerText2('验证码必须是6位数字')
        }else {
            return true
        }
    }
    if(!isPhoneLogin) {
        if(eLength === 0) {
            setVerText2('密码不能为空')
        }else if(eLength < 6 || eLength > 16) {
            setVerText2('密码要在6~16位之间')
        }else {
            return true
        }
    }
}

export function clearTipsVerContent () {
    $('.pas-input1').val('')
    $('.pas-input2').val('')
    $('.ver-text1').hide()
    $('.ver-text2').hide()
    $('.clear-icon').hide()
}


function setVerText1(errToast) {
    verTextEl1.text(errToast)
    verTextEl1.show()
}

function setVerText2(errToast) {
    verTextEl2.text(errToast)
    verTextEl2.show()
}