import '@/styles/index.scss'
import './js/formValidation'
import './js/sumHandler'
import QRCode from 'qrcodejs2'

new QRCode('two-code', {
    text: 'https://github.com/',
    width: 140,
    height: 140,
    correctLevel: QRCode.CorrectLevel.H
})