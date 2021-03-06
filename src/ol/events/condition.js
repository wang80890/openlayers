/**
 * @module ol/events/condition
 */
import MapBrowserEventType from '../MapBrowserEventType.js';
import {assert} from '../asserts.js';
import {TRUE, FALSE} from '../functions.js';
import {WEBKIT, MAC} from '../has.js';


/**
 * Return `true` if only the alt-key is pressed, `false` otherwise (e.g. when
 * additionally the shift-key is pressed).
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt key is pressed.
 * @api
 */
export const altKeyOnly = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return (
    originalEvent.altKey &&
      !(originalEvent.metaKey || originalEvent.ctrlKey) &&
      !originalEvent.shiftKey);
};


/**
 * Return `true` if only the alt-key and shift-key is pressed, `false` otherwise
 * (e.g. when additionally the platform-modifier-key is pressed).
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the alt and shift keys are pressed.
 * @api
 */
export const altShiftKeysOnly = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return (
    originalEvent.altKey &&
      !(originalEvent.metaKey || originalEvent.ctrlKey) &&
      originalEvent.shiftKey);
};


/**
 * Return `true` if the map has the focus. This condition requires a map target
 * element with a `tabindex` attribute, e.g. `<div id="map" tabindex="1">`.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} event Map browser event.
 * @return {boolean} The map has the focus.
 * @api
 */
export const focus = function(event) {
  return event.target.getTargetElement() === document.activeElement;
};


/**
 * Return always true.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True.
 * @function
 * @api
 */
export const always = TRUE;


/**
 * Return `true` if the event is a `click` event, `false` otherwise.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `click` event.
 * @api
 */
export const click = function(mapBrowserEvent) {
  return mapBrowserEvent.type == MapBrowserEventType.CLICK;
};


/**
 * Return `true` if the event has an "action"-producing mouse button.
 *
 * By definition, this includes left-click on windows/linux, and left-click
 * without the ctrl key on Macs.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} The result.
 */
export const mouseActionButton = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return originalEvent.button == 0 &&
      !(WEBKIT && MAC && originalEvent.ctrlKey);
};


/**
 * Return always false.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} False.
 * @function
 * @api
 */
export const never = FALSE;


/**
 * Return `true` if the browser event is a `pointermove` event, `false`
 * otherwise.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the browser event is a `pointermove` event.
 * @api
 */
export const pointerMove = function(mapBrowserEvent) {
  return mapBrowserEvent.type == 'pointermove';
};


/**
 * Return `true` if the event is a map `singleclick` event, `false` otherwise.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `singleclick` event.
 * @api
 */
export const singleClick = function(mapBrowserEvent) {
  return mapBrowserEvent.type == MapBrowserEventType.SINGLECLICK;
};


/**
 * Return `true` if the event is a map `dblclick` event, `false` otherwise.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event is a map `dblclick` event.
 * @api
 */
export const doubleClick = function(mapBrowserEvent) {
  return mapBrowserEvent.type == MapBrowserEventType.DBLCLICK;
};


/**
 * Return `true` if no modifier key (alt-, shift- or platform-modifier-key) is
 * pressed.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True only if there no modifier keys are pressed.
 * @api
 */
export const noModifierKeys = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return (
    !originalEvent.altKey &&
      !(originalEvent.metaKey || originalEvent.ctrlKey) &&
      !originalEvent.shiftKey);
};


/**
 * Return `true` if only the platform-modifier-key (the meta-key on Mac,
 * ctrl-key otherwise) is pressed, `false` otherwise (e.g. when additionally
 * the shift-key is pressed).
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the platform modifier key is pressed.
 * @api
 */
export const platformModifierKeyOnly = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return !originalEvent.altKey &&
    (MAC ? originalEvent.metaKey : originalEvent.ctrlKey) &&
    !originalEvent.shiftKey;
};


/**
 * Return `true` if only the shift-key is pressed, `false` otherwise (e.g. when
 * additionally the alt-key is pressed).
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if only the shift key is pressed.
 * @api
 */
export const shiftKeyOnly = function(mapBrowserEvent) {
  const originalEvent = mapBrowserEvent.originalEvent;
  return (
    !originalEvent.altKey &&
      !(originalEvent.metaKey || originalEvent.ctrlKey) &&
      originalEvent.shiftKey);
};


/**
 * Return `true` if the target element is not editable, i.e. not a `<input>`-,
 * `<select>`- or `<textarea>`-element, `false` otherwise.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True only if the target element is not editable.
 * @api
 */
export const targetNotEditable = function(mapBrowserEvent) {
  const target = mapBrowserEvent.originalEvent.target;
  const tagName = target.tagName;
  return (
    tagName !== 'INPUT' &&
      tagName !== 'SELECT' &&
      tagName !== 'TEXTAREA');
};


/**
 * Return `true` if the event originates from a mouse device.
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a mouse device.
 * @api
 */
export const mouseOnly = function(mapBrowserEvent) {
  assert(mapBrowserEvent.pointerEvent, 56); // mapBrowserEvent must originate from a pointer event
  // see http://www.w3.org/TR/pointerevents/#widl-PointerEvent-pointerType
  return /** @type {module:ol/MapBrowserEvent~MapBrowserEvent} */ (mapBrowserEvent).pointerEvent.pointerType == 'mouse';
};


/**
 * Return `true` if the event originates from a primary pointer in
 * contact with the surface or if the left mouse button is pressed.
 * @see http://www.w3.org/TR/pointerevents/#button-states
 *
 * @param {module:ol/MapBrowserEvent~MapBrowserEvent} mapBrowserEvent Map browser event.
 * @return {boolean} True if the event originates from a primary pointer.
 * @api
 */
export const primaryAction = function(mapBrowserEvent) {
  const pointerEvent = mapBrowserEvent.pointerEvent;
  return pointerEvent.isPrimary && pointerEvent.button === 0;
};
