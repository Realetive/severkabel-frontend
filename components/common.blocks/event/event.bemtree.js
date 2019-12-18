/**
 * @typedef {Object} Image
 */

/**
 * @typedef {Object} LocaleString
 * @property {String} ru
 * @property {String} en
 */

/**
 * @typedef {Object} Slug
 * @property {String} current
 */

/**
 * @typedef {Object} Event
 * @property {Image} mainImage
 * @property {Image} sourceImage
 * @property {Slug} slug
 * @property {LocaleString} introText
 * @property {LocaleString} title
 * @property {LocaleString} content
 * @property {String} publishedAt
 * @property {String} source
 */

/**
 * @typedef {Object} node
 * @property {Object} ctx
 * @function _urlFor
 * @function _fromMarkdown
 */

block( 'event' )( {
  /**
   * @description Event
   * @param {Node} node
   * @param {Event} { event } Event
   *
   * @returns {Node} node
   */
  extend: ( { _fromMarkdown, _urlFor, config: { langs: [ i18n ] } }, { event } ) => ( {
    'ctx.event': event
      ? {
        image: _urlFor( event.mainImage )
          .height( 530 )
          .maxHeight( 530 )
          .url(),
        date: event.publishedAt || new Date().toISOString(),
        title: ( event.title || {} )[ i18n ] || '',
        description: ( event.introText || {} )[ i18n ] || '',
        url: event.source || ( event.slug || {} ).current || '',
        content: _fromMarkdown( ( event.content || {} )[ i18n ] || '' ),
        source: event.source,
        sourceImage: _urlFor( event.sourceImage )
          .height( 35 )
          .maxHeight( 35 )
          .url(),
      }
      : {},
  } ),
} );
