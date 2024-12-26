import { formatData, generateQRCode } from './service.js';

export async function generateQR(req, res) {
	try {
		const { data } = req.body;

		const qrCodeText = formatData(data);

		const qrCodeBuffer = await generateQRCode(qrCodeText);

		res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png');
		res.type('image/png').send(qrCodeBuffer);
	} catch (err) {
		console.error('Error generating QR code:', err);
		res.status(500).send({ error: 'Internal Server Error' });
	}
}