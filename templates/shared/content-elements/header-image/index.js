require('./styles.scss');

const contentElement = require('@bsi-cx/design-standard-library-web/content-elements/base/banner/prototype');

module.exports = contentElement(
  require('./template.twig'),
  'header-image-xC4085',
  /*'Header image',*/
  'Header Bild',
  /* Height of image depends on content */
  'Höhe von Bild richtet sich am Inhalt aus',
  'header-image-dropzone-Dt5Gll',
  'header-image-part-MHZ8Gp',
  /*'Header image'*/
  'Header Bild',
  'header-image-mobile-part-29bfdf',
  'Header Mobile Bild'
  
);