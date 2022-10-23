import '@/styles/index.scss'
import './js/formValidation'
import './js/sumHandler'
import './js/interaction'
import QRCode from 'qrcodejs2'

Object.prototype.myCustomProp = {
    isPhoneLogin: false
}

new QRCode('two-code', {
    text: 'https://github.com/',
    width: 140,
    height: 140,
    correctLevel: QRCode.CorrectLevel.H
})