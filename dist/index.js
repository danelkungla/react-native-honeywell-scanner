"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
let HoneywellScanner = {};
if (react_native_1.Platform.OS === 'android') {
    const NativeHoneywellScanner = react_native_1.NativeModules.HoneywellScanner;
    const barcodeReaderEmitter = new react_native_1.NativeEventEmitter(NativeHoneywellScanner);
    let subscriptionBarcodeReadSuccess = null;
    let subscriptionBarcodeReadFail = null;
    HoneywellScanner = Object.assign(Object.assign({}, NativeHoneywellScanner), { onBarcodeReadSuccess: (handler) => {
            subscriptionBarcodeReadSuccess === null || subscriptionBarcodeReadSuccess === void 0 ? void 0 : subscriptionBarcodeReadSuccess.remove();
            subscriptionBarcodeReadSuccess = barcodeReaderEmitter.addListener(NativeHoneywellScanner.BARCODE_READ_SUCCESS, handler);
        }, onBarcodeReadFail: (handler) => {
            subscriptionBarcodeReadFail === null || subscriptionBarcodeReadFail === void 0 ? void 0 : subscriptionBarcodeReadFail.remove();
            subscriptionBarcodeReadFail = barcodeReaderEmitter.addListener(NativeHoneywellScanner.BARCODE_READ_FAIL, handler);
        }, offBarcodeReadSuccess: () => {
            subscriptionBarcodeReadSuccess === null || subscriptionBarcodeReadSuccess === void 0 ? void 0 : subscriptionBarcodeReadSuccess.remove();
        }, offBarcodeReadFail: () => {
            subscriptionBarcodeReadFail === null || subscriptionBarcodeReadFail === void 0 ? void 0 : subscriptionBarcodeReadFail.remove();
        } });
}
exports.default = HoneywellScanner;
