import $ from 'jquery'

$('.pas-phone-input').on('blur', function(e) {
    const eVal = $(this).val().trim()
    const eLength = eVal.length
    const eIndex = e.target.dataset.index
    const sibElver = $(this).next()
    sibElver.hide()
    if(eIndex == 1) {
        if(eLength === 0) {
            sibElver.text('账号不能为空')
            sibElver.show()
            return
        }
        if(eLength < 8 || eLength > 16) {
            sibElver.text('账号要在8~16位之间')
            sibElver.show()
            return
        }
    }else if(eIndex == 2) {
        if(eLength === 0) {
            sibElver.text('密码不能为空')
            sibElver.show()
            return
        }
        if(eLength < 6 || eLength > 16) {
            sibElver.text('密码要在6~16位之间')
            sibElver.show()
            return
        }
    }
})