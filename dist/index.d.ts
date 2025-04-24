declare namespace HoneywellScanner {
    const isCompatible: boolean;
    function onBarcodeReadSuccess(handler: (event: { data: string } | null) => void): void;
    function startReader(): Promise<boolean>;
    function stopReader(): Promise<void>;
    function read(): Promise<void>;
}

export default HoneywellScanner;
