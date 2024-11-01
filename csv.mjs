import { join } from 'path';
import { writeFile } from 'fs/promises';
import data from './out/data.json' with { type: 'json' };

const dataRows = Object.entries(data);

const csv = [
    ['package', 'version', 'released', 'eol'],
].concat(dataRows.flatMap(([p, os]) => os.map(x => (
    [p, x.latest, x.latestReleaseDate, x.eol]
))));

const outDir = join(process.cwd(), 'out');
const outFile = join(outDir, 'data.csv');

await writeFile(outFile, csv.join('\n'));
