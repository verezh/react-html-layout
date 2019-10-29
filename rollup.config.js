import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
// import fs from 'fs';

export default [
    {
        input: 'src/index.ts',
        dest: 'index.js',
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            typescript({
                typescript: require('typescript'),
            }),
            scss({
                output: false,
            }),
            // scss({
            //     output: function(styles, styleNodes) {
            //         fs.writeFileSync('dist/index.css', styles);
            //         fs.writeFileSync('example/src/react-html-layout/index.css', styles);
            //     },
            // }),
        ],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
            {
                file: 'example/src/react-html-layout/index.js',
                format: 'es',
                banner: '/* eslint-disable */',
            },
        ],
    },
];
