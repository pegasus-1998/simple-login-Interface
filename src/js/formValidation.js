import $ from 'jquery'


$('.pas-input1').on('blur', function() {
    const eVal = $(this).val().trim()
    const eLength = eVal.length
    const verTextEl1 = $('.ver-text1')
    verTextEl1.hide()
    if(eLength === 0) {
        verTextEl1.text('账号不能为空')
        verTextEl1.show()
        return
    }
    if(eLength < 8 || eLength > 16) {
        verTextEl1.text('账号要在8~16位之间')
        verTextEl1.show()
        return
    }
})

$('.pas-input2').on('blur', function() {
    const eVal = $(this).val().trim()
    const eLength = eVal.length
    const verTextEl2 = $('.ver-text2')
    verTextEl2.hide()
    if(eLength === 0) {
        verTextEl2.text('密码不能为空')
        verTextEl2.show()
        return
    }
    if(eLength < 6 || eLength > 16) {
        verTextEl2.text('密码要在6~16位之间')
        verTextEl2.show()
        return
    }
})