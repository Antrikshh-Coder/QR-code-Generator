function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrcode");
    const text = document.getElementById("text").value;

    // Clear previous QR code if any
    qrCodeContainer.innerHTML = "";

    if (text) {
        new QRCode(qrCodeContainer, {
            text: text,
            width: 128,
            height: 128,
        });
    } else {
        alert("Please enter some text or URL");
    }
}