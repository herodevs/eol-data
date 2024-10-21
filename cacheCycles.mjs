import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

import getCycles from './getCycles.mjs';

const cycles = await getCycles();

const outDir = join(process.cwd(), 'out');
const outFile = join(outDir, 'data.json');

await mkdir(outDir, { recursive: true });

await writeFile(outFile, JSON.stringify(cycles, null, '\t'));