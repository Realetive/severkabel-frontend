page
================================================================================

Обзор блока
--------------------------------------------------------------------------------

Блок предоставляет шаблоны, создающие набор HTML-элементов верхнего уровня страницы: `<html>`, `<head>`, `<body>` и элементов.

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| [no-scroll](#mod-no-scroll) | true | <code>BEMJSON</code> | Скрывает скролл страницы |

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| [doctype](#declfields-doctype) | `String` | Позволяет переопределить строку DTD текущего документа. |
| [title](#declfields-title) | `String` | Позволяет указать содержимое `<title>`. |
| [favicon](#declfields-favicon) | `String` | Позволяет указать URL значка страницы (фавиконки). |
| [head](#declfields-head) | `BEMJSON` | Позволяет дополнить содержимое `<head>`. |
| [styles](#declfields-styles) | `BEMJSON` | Позволяет подключать таблицы стилей CSS. |
| [scripts](#declfields-scripts) | `BEMJSON` | Позволяет подключать скрипты в тело документа. |
| [content](#declfields-content) | `BEMJSON` | Позволяет указать содержимое страницы. |

### Элементы блока

| Элемент | Способы использования | Описание |
| ------- | --------------------- | -------- |
| [css](#elems-css) | `BEMJSON` | Служит для подключения CSS по ссылке или в виде строки. |
| [js](#elems-js) | `BEMJSON` | Служит для подключения JS по ссылке или в виде строки. |
| [meta](#elems-meta) | `BEMJSON` | Служит для создания HTML-элементов `<meta>`. |
| [gtm](#elems-gtm) | `BEMJSON` | Служит для создания кода отслеживания Google Tag Manager. |
| [ym](#elems-ym) | `BEMJSON` | Служит для создания кода отслеживания Яндекс Метрики. |
| [header](#elems-header) | `BEMJSON` | Служит для создания «шапки» страницы |
| [footer](#elems-footer) | `BEMJSON` | Служит для создания «подвала» страницы |
| [section](#elems-section) | `BEMJSON` | Служит для создания секции страницы |
| [content](#elems-content) | `BEMJSON` | Служит для создания контентного блока страницы |

### Специализированные поля элементов блока

| Элемент | Поле | Тип | Описание |
| ------- | ---- | --- | -------- |
| [css](#elems-css) | [url](#elems-css-declfields-url) | `String`  | Позволяет задать URL для загрузки стилей. |
|           | [content](#elems-css-declfields-content) | `String`  | Служит для задания стилей в виде строки |
| [js](#elems-js)   | [url](#elems-css-declfields-url) | `String`  | Позволяет задать URL для загрузки скрипта. |
|           | [content](#elems-css-declfields-content) | `String`  | Служит для задания скриптов в виде строки |
| [gtm](#elems-gtm) | [url](#elems-gtm-code)           | `String`  | Позволяет задать идентификатор Google Tag Manager. |
| [ym](#elems-ym)   | [url](#elems-ym-code)            | `String`  | Позволяет задать идентификатор Яндекс Метрики. |

Описание блока
--------------------------------------------------------------------------------

Блок отвечает за создание HTML-элементов верхнего уровня, подключение к странице CSS, JS, элементов `<meta>` и указание заголовка. Для этого в BEMJSON-декларации блока и элементов блока зарезервированы специальные поля.

### Модификаторы блока

<a name="#mod-no-scroll"></a>
#### Модификатор `no-scroll`

Допустимые значения: `true`.

Способы использования: `BEMJSON`, `JS`.

Отвечает за скрытие скролла со страницы.

```js
{
  block : 'page',
  mods : { 'no-scroll' : true },
  content: Array(100).join({ tag: 'br' })
}
```

### Специальные поля блока

<a name="declfields-doctype"></a>

#### Поле  `doctype`

Тип: `String`.

Позволяет явно указать строку с DTD (Document Type Definition) текущего документа. Если свойство не задано, по умолчанию будет использоваться `<!DOCTYPE html>`.

<a name="declfields-title"></a>

#### Поле `title`

Тип: `String`.

Название страницы. Становится HTML-элементом `<title>`.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : 'Блок page'
}
```

<a name="declfields-favicon"></a>

#### Поле `favicon`

Тип: `String`.

Позволяет указать URL значка страницы (фавиконки):

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    favicon : 'favicon.ico',
    content : 'Страница с пользовательской фавиконкой'
}
```

<a name="declfields-head"></a>

#### Поле `head`

Тип: `BEMJSON`.

Позволяет дополнить содержимое `HTML`-элемента `<head>`, определенное в шаблоне блока:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    head : [
        { elem : 'js', url : 'jquery-min.js' },
        { elem : 'meta', attrs : { name : 'description', content : 'Yet another webdev blog' } }
    ],
    content : 'Страница с подключенным JS и meta-данными'
}
```

<a name="declfields-styles"></a>

#### Поле `styles`

Тип: `BEMJSON`.

Позволяет подключить `CSS`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    styles : { elem : 'css', url : '_index.css' },
    content : 'Страница с подключенным CSS'
}
```

<a name="declfields-scripts"></a>

#### Поле `scripts`

Тип: `BEMJSON`.

Позволяет подключать JS в тело страницы в конец HTML-элемента `<body>`:

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    scripts : { elem : 'js', url : '_index.js' },
    content : 'Страница со скриптом подключенным в body'
}
```

<a name="declfields-content"></a>

#### Поле `content`

Тип: `BEMJSON`.

Позволяет указать содержимое страницы.

```js
{
    block : 'page',
    title : 'Заголовок страницы',
    content : {
        block : 'link',
        mods : { pseudo : 'yes', togcolor : 'yes', color : 'green' },
        url : '#',
        target : '_blank',
        title : 'Кликни меня',
        content : 'Псевдоссылка, меняющая цвет по клику'
    }
}
```
