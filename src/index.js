import '@/styles/index.scss'
import './js/formValidation'
import './js/eventEl'
import QRCode from 'qrcodejs2'

new QRCode('two-code', {
    text: 'https://www.baidu.com',
    width: 140,
    height: 140,
    correctLevel: QRCode.CorrectLevel.H
})