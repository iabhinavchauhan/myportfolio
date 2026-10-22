import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { default: app } = await import('./app.js');
const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log(`Portfolio API listening on port ${port}`));
