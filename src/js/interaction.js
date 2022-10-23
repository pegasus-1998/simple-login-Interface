import $ from 'jquery'
import { validHandler1 } from './formValidation'
import { getPhoneCodeApi } from '@/apis/login'

$('.submit-btn').on('click', function (e) {
    e.preventDefault()
})
$('.get-code').on('click', async () => {
    const flag = !!validHandler1()
    if (flag) {
        const res = await getPhoneCodeApi()
        console.log('res', res)
    }
})