import $ from 'jquery'
import userIcon from '@/imgs/user-icon.png'
import lockIcon from '@/imgs/lock-icon.png'
import phoneIcon from '@/imgs/phone-icon.png'
import verIcon from '@/imgs/ver-icon.png'

changeTabHandler()
changeCodeLogin()
// 39秒后重发 --
// $('.tab-item').on('click', function(e) {
//     const idx = e.target.dataset.tab
//     $('.tab-item').removeClass('mode-active')
//     $(this).toggleClass('mode-active')
// })



$('.submit-btn').on('click', function(e) {
    e.preventDefault()
})

function changeTabHandler() {

    $('.tab-item1').on('click', function() {
        $('.sp1').show()
        $('.get-code').hide()
        $('.tab-item2').removeClass('mode-active')
        $(this).addClass('mode-active')
        $('.icon-cen1').attr({src: userIcon})
        $('.icon-cen2').attr({src: lockIcon})
        $('.pas-input1').attr({placeholder: '请输入账号'})
        $('.pas-input2').attr({placeholder: '请输入密码'})
    })

    $('.tab-item2').on('click', function() {
        $('.sp1').hide()
        $('.get-code').show()
        $('.tab-item1').removeClass('mode-active')
        $(this).addClass('mode-active')
        $('.icon-cen1').attr({src: phoneIcon})
        $('.icon-cen2').attr({src: verIcon})
        $('.pas-input1').attr({placeholder: '请输入手机号'})
        $('.pas-input2').attr({placeholder: '请输入验证码'})
    })
} 

function changeCodeLogin() {

    $('.code-icon').on('click', function() {
        $(this).hide()
        $('.screen-icon').show()
        $('.template1').hide()
        $('.template2').show()
    })

    $('.screen-icon').on('click', function() {
        $(this).hide()
        $('.code-icon').show()
        $('.template2').hide()
        $('.template1').show()
    })

}