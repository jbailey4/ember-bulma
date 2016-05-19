import Ember from 'ember';
import layout from '../templates/components/bulma-message-body';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: _responsiveHelpers
});
