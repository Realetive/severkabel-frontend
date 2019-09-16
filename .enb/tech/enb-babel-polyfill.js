/**
 * enb-babel-polyfill
 * =================
 *
 * Добавляет js-код для работы модульной системы
 *
 * **Опции**
 *
 * * *String* **source** – Исходный source. Обязательная опция.
 * * *String* **target** — Результирующий target. По умолчанию — `?.js`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech([ require('enb-babel-polyfill'), {
 *   target: '?.{lang}.js',
 *   source: '?.{lang}.pre.js'
 * } ]);
 * ```
 */

var vowFs = require('enb/lib/fs/async-fs'),
    path = require('path');

module.exports = require('enb/lib/build-flow').create()
    .name('enb-babel-polyfill')
    .target('target', '?.js')
    .defineRequiredOption('source')
    .useSourceText('source', '?')
    .needRebuild(function(cache) {
        return cache.needRebuildFile(
            'babel-polyfill',
            this._modulesFile = require.resolve('babel-polyfill/dist/polyfill.min.js'));
    })
    .saveCache(function(cache) {
        cache.cacheFileInfo('babel-polyfill', this._modulesFile);
    })
    .builder(function(preTargetSource) {
        return vowFs.read(this._modulesFile, 'utf8').then(function(modulesRes) {
            return modulesRes +
                "if(/* hack electron env */ typeof window === 'undefined' && " + 
                   "/* commonJs */ typeof module !== 'undefined') {" +
                        "modules = module.exports;" +
                "}\n" +
                preTargetSource;
        }, function () {
            throw new Error('Module system was not found. Please install `ym` npm module: npm install ym');
        });
    })
    .createTech();
