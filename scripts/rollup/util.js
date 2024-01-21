import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';


const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist = false) {
    return `${isDist ? distPath : pkgPath}/${pkgName}`;

}
export function getPkgJSON(pkgName) {
    const pkgPath = `${resolvePkgPath(pkgName)}/package.json`;
    const str = fs.readFileSync(pkgPath, 'utf-8');
    return JSON.parse(str);
}

export function getBaseRollupPlugin({ typescript = {} } = {}) {
    // return [];
    return [cjs(), ts(typescript)];
}