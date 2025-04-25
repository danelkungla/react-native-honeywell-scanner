import { Platform, NativeModules, NativeEventEmitter } from 'react-native';

let HoneywellScanner = {};

if (Platform.OS === 'android') {
  const NativeHoneywellScanner = NativeModules.HoneywellScanner;
  const barcodeReaderEmitter = new NativeEventEmitter(NativeHoneywellScanner);

  let subscriptionBarcodeReadSuccess = null;
  let subscriptionBarcodeReadFail = null;

  HoneywellScanner = {
    ...NativeHoneywellScanner,

    onBarcodeReadSuccess: (handler) => {
      subscriptionBarcodeReadSuccess?.remove();
      subscriptionBarcodeReadSuccess = barcodeReaderEmitter.addListener(
        NativeHoneywellScanner.BARCODE_READ_SUCCESS,
        handler
      );
    },

    onBarcodeReadFail: (handler) => {
      subscriptionBarcodeReadFail?.remove();
      subscriptionBarcodeReadFail = barcodeReaderEmitter.addListener(
        NativeHoneywellScanner.BARCODE_READ_FAIL,
        handler
      );
    },

    offBarcodeReadSuccess: () => {
      subscriptionBarcodeReadSuccess?.remove();
    },

    offBarcodeReadFail: () => {
      subscriptionBarcodeReadFail?.remove();
    },
  };
}

export default HoneywellScanner;
