# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Hint: You will find the list of compatible BSI versions for each template in the [Compatibility section of the README](https://github.com/bsi-software/bsi-cx-design-master-template-web?tab=readme-ov-file#compatibility).

## Next
* Add style colors for dark mode

## [1.3.4] - 19.11.2024

### Changed
- Add properties for title size
- Remove recaptcha element from landingpage
- Update social media elements

[1.3.4]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.3.4

## [1.3.3] - 11.10.2024

### Changed
- Change Meta Tag to allow zoom
- Remove editor extension issues

[1.3.3]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.3.3

## [1.3.2] - 8.5.2024

### Changed
- Add preview image to the template
- Improve social share element controls
- Update webcam image element

[1.3.2]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.3.2

## [1.3.1] - 6.2.2024

### Changed
* Inside the HTML content element, ensure that non-decendent iframes are considered with proper height
* Fix checkbox and radio formatting issues
* Replace Twitter with X (@#371665)
* Added a [Compatibility chapter to the README](https://github.com/bsi-software/bsi-cx-design-master-template-web?tab=readme-ov-file#compatibility).

[1.3.1]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.3.1

## [1.3.0] - 1.2.2024

### Important Change
Important for customers with custom content elements: We are now using the [CSP Distribution of Alpine.js](https://alpinejs.dev/advanced/csp). Thus, developers my no longer use any inline JavaScript in HTML/TWIG files associated with Alpine. Instead, there must always be a reference pointing to an associated alpine data object. We changed the implementation of a couple of components to comply with this new rule. The advantage of it is that content elements using Alpine.js are now shown properly in the 'Preview' mode of the content editor and in live mode without having to change the CSP settings. By using the CSP distribution of Alpine.js, it is no longer required to add `usafe-eval` to the CSP, which helps to increase security (#355743). Developers might have to adapt their components to comply with this new rule. If you have any questions or concerns regarding this change, reach out to your BSI contact to get more information.

### Additional changes
* Set content language (lang html attribute) properly to ensure correct translations (#371869, #371869)
* New style to display a button as a link (#357481)
* Remove unused caption for logo element (#364438)
* New style to use a fixed width for the header image element (#365087)
* Additonal spacer options (#365087)
* Better description for banner and header image (#365087)
* Replace Twitter with X, fix typo in YouTube (@#371665)
* Prevent from chosing the wrong input type for poll element (#355743)
* Prevent endless loop in the phone number element, which used to cause landingpages/websites to crash in the previous release (#372595)
* Proper translation of date picker (#371869)
* Make slot finder texts configurable and translatable (#371869)
* Make webcam image element translatable on configuration level (#368259)
* Upgrade dependencies

[1.3.0]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.3.0


## [1.2.0] - 05.12.2023

### Added
* Slot finder element
* Webcam image upload element
* Language switch for websites with multiple languages
* Build config of templates designed for CX 23.2 and above

### Changed
* Fixed bug for website navigation with more than 1 level
* Updated dependencies

[1.2.0]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.2.0

## [1.1.8] - 22.09.2023

### Changed
* Fixed bug due to circle dependency
* Updated dependencies

[1.1.8]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.8

## [1.1.7] - 11.08.2023

### Changed

* Fix depdency issues with `intl-tel-input` and `sass`

[1.1.7]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.7


## [1.1.6] - 11.08.2023

### Changed

* Accordion element added from library
* Removal of `window.properties` usage to better comply with CSP
* Fix 2nd level of Website navigation (previously, this always showed `Action` instead of the real navigation item title)
* Updated dependencies

[1.1.6]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.6


## [1.1.5] - 16.03.2023

### Changed

* Updated dependencies
* Updated readme
* Solved security issues

[1.1.5]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.5


## [1.1.4] - 16.02.2023

### Changed

* This package is now pulling the `@bsi-cx/design-standard-library-web` package from NPM
* Derive version automatically from `package.json`
* Updated dependencies

[1.1.4]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.4

## [1.1.3] - 03.02.2023

### Changed

* Updated news snippet element in order to solve validation error in CX story
* Changed the build config to avoid hashes in the filename of static files
* Updated dependencies
* Solved security issues

[1.1.3]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.3

## [1.1.2] - 09.12.2022

### Changed

* Updated dependencies
* Updated readme
* Solved security issues

[1.1.2]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.2


## [1.1.1] - 21.10.2022

### Changed

* Streamline translations
* Fix wrong mobile image in header-image element

[1.1.1]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.1


## [1.1.0] - 23.08.2022

### Changed

* Refactoring of content elements: use include instead of element.render(). For detailed information, visit migration guide: https://github.com/bsi-software/bsi-cx-design-master-template-web/blob/main/MIGRATION_GUIDE.md
* Expansion of properties.js
* Adapted styling

[1.1.0]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.1.0


## [1.0.3] - 15.07.2022

### Changed

* update design build dependency, remove inline css

[1.0.3]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.0.3


## [1.0.2] - 08.06.2022

### Changed

* add german labels

[1.0.2]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.0.2


## [1.0.1] - 27.05.2022

### Changed

* update repository title, add shared folder

[1.0.1]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.0.1


## [1.0.0] - 25.05.2022

### Added

* Master template for website and landingpage designs.

[1.0.0]: https://github.com/bsi-software/bsi-cx-design-master-template-web/releases/tag/1.0.0
