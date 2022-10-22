import $ from 'jquery'

import { clearTipsVerContent } from './callHandler'

import userIcon from '@/imgs/user-icon.png'
import lockIcon from '@/imgs/lock-icon.png'
import phoneIcon from '@/imgs/phone-icon.png'
import verIcon from '@/imgs/ver-icon.png'

initEventHandlers()

function initEventHandlers() {
    $('.get-code').on('click', function() {
        
    })
    $('.submit-btn').on('click', function(e) {
        e.preventDefault()
    })
    $('.sp0').on('click', () => {
        cancelTwocodeHandler()
        selectPasswordHandler()
    })
    $('.tab-item1').on('click', selectPasswordHandler) 
    $('.tab-item2').on('click', selectVercodeHandler)
    $('.code-icon').on('click', selectTwocodeHandler)
    $('.screen-icon').on('click', cancelTwocodeHandler)
} 

function selectPasswordHandler() {  // 选择密码登录
    $('.sp1').show()
    $('.get-code').hide()
    $('.tab-item2').removeClass('mode-active')
    $('.tab-item1').addClass('mode-active')
    $('.icon-cen1').attr({src: userIcon})
    $('.icon-cen2').attr({src: lockIcon})
    $('.pas-input1').attr({placeholder: '请输入账号'})
    $('.pas-input2').attr({placeholder: '请输入密码'})
    clearTipsVerContent()
}

function selectVercodeHandler() {  // 选择验证码登录
    $('.sp1').hide()
    $('.get-code').show()
    $('.tab-item1').removeClass('mode-active')
    $('.tab-item2').addClass('mode-active')
    $('.icon-cen1').attr({src: phoneIcon})
    $('.icon-cen2').attr({src: verIcon})
    $('.pas-input1').attr({placeholder: '请输入手机号'})
    $('.pas-input2').attr({placeholder: '请输入验证码'})
    clearTipsVerContent()
}

function selectTwocodeHandler() {  // 选择二维码登录
    $('.code-icon').hide()
    $('.sp0').show()
    $('.sp1').hide()
    $('.screen-icon').show()
    $('.template1').hide()
    $('.template2').show()
}

function cancelTwocodeHandler() {  // 取消二维码登录
    $('.screen-icon').hide()
    $('.sp0').hide()
    $('.sp1').show()
    $('.code-icon').show()
    $('.template2').hide()
    $('.template1').show()
}