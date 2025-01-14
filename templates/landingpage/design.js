require('./styles/styles.scss');

const {cx, SchemaVersion, Locale} = require('@bsi-cx/design-build');

module.exports = cx.design
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('BSI CX Master Template - Landingpage')
  .withAuthor('Design Team - BSI Business Systems Integration AG')
  .withDate('21.01.2022')
  .withPreviewImage('static/header.png')
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('header-Eev4oq')
      .withLabel('Header')
      .withContentElements(
        // require('@bsi-cx/design-standard-library-web/content-elements/advanced/logo-with-darkmode'),
        require('./../shared/content-elements/logo'),
        require('./../shared/content-elements/header-image')),
    cx.contentElementGroup
      .withGroupId('layout-EhFpQ7')
      .withLabel('Layout')
      .withContentElements(
        require('@bsi-cx/design-standard-library-web/content-elements/layout/col-one'),
        require('@bsi-cx/design-standard-library-web/content-elements/layout/col-two'),
        require('@bsi-cx/design-standard-library-web/content-elements/layout/col-three'),
        require('@bsi-cx/design-standard-library-web/content-elements/layout/col-four'),
        require('@bsi-cx/design-standard-library-web/content-elements/layout/spacer')),
    cx.contentElementGroup
      .withGroupId('headings-J9rRcv')
      /*.withLabel('Headings')*/
      .withLabel('Überschriften')
      .withContentElements(
        require('@bsi-cx/design-standard-library-web/content-elements/base/h1'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/h2'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/h3')),
    cx.contentElementGroup
      .withGroupId('content-JFLFHv')
      /*.withLabel('Content')*/
      .withLabel('Inhalt')
      .withContentElements(
        require('@bsi-cx/design-standard-library-web/content-elements/base/text'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/figure'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/banner'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/button'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/card'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/accordion'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/news-snippet'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/table'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/video'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/social-media-follow'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/social-media-share'),
        require('@bsi-cx/design-standard-library-web/content-elements/advanced/webcam-image-upload'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/slot-finder'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/chart'),
        require('@bsi-cx/design-standard-library-web/content-elements/base/html')),
    cx.contentElementGroup
      .withGroupId('forms-NjbmnQ')
      /*.withLabel('Forms')*/
      .withLabel('Formular')
      .withContentElements(
        require('@bsi-cx/design-standard-library-web/content-elements/form/form-container'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/multi-column'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/form-field'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/form-field-tel'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/text-area'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/select'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/checkbox'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/radio'),
        require('@bsi-cx/design-standard-library-web/content-elements/form/poll')
      ),
    cx.contentElementGroup
      .withGroupId('footer-lJ2X2V')
      .withLabel('Footer')
      .withContentElements(
        require('./content-elements/footer')));