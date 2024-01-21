import { getBaseRollupPlugin, getPkgJSON, resolvePkgPath } from "./util";
import generatePkgJSON from "rollup-plugin-generate-package-json";

const { name, module } = getPkgJSON('react');
console.log('name', name, module);
const pkgPath = resolvePkgPath(name); // react 包路径
const pkgDistPath = resolvePkgPath(name, true); // react 产物路径
console.log('pkgPath', pkgPath);
console.log('pkgDistPath', pkgDistPath);

export default [
    {
        input: `${pkgPath}/${module}`,
        output: {
            file: `${pkgDistPath}/index.js`,
            name: 'index.js',
            format: 'umd',
        },
        plugins: [...getBaseRollupPlugin(), generatePkgJSON({
            inputFolder: pkgPath,
            outputFolder: pkgDistPath,
            baseContents: ({ name, description, version }) => ({
                name,
                description,
                version,
            }),
        })],
    },
    {
        input: `${pkgPath}/src/jsx.ts`,
        output: [
            {
                file: `${pkgDistPath}/jsx-runtime.js`,
                name: 'jsx-runtime.js',
                format: 'umd',
            },
            {
                file: `${pkgDistPath}/jsx-dev-runtime.js`,
                name: 'jsx-dev-runtime.js',
                format: 'umd',
            }
        ],
        plugins: getBaseRollupPlugin(),
    }
];