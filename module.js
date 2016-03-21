/**
 * @file Instantiates and configures angular modules for your module.
 */
define(['angular'], function (ng) {
  'use strict';

  ng.module('cs_modal.services', []);

  var module = ng.module('cs_modal', [
    'cs_common',
    'cs_modal.services',
    'ui.bootstrap'
  ]);

  module.config( [ '$provide', 'TemplateProvider', function( $provide, TemplateProvider ) {
    $provide.decorator('modalBackdropDirective', [ '$delegate', function( $delegate ) {
      $delegate[0].templateUrl = TemplateProvider.view('cs_modal', $delegate[0].name);
      return $delegate;
    }]);

    $provide.decorator('modalWindowDirective', [ '$delegate', function( $delegate ) {
      $delegate[0].templateUrl = TemplateProvider.view('cs_modal', $delegate[0].name);
      return $delegate;
    }]);
  }]);

  return module;
});
