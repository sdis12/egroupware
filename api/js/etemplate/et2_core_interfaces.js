/**
 * EGroupware eTemplate2 - File which contains all interfaces
 *
 * @license http://opensource.org/licenses/gpl-license.php GPL - GNU General Public License
 * @package etemplate
 * @subpackage api
 * @link http://www.egroupware.org
 * @author Andreas Stöckel
 * @copyright Stylite 2011
 * @version $Id$
 */

/*egw:uses
	et2_core_inheritance;
*/

/**
 * Interface for all widget classes, which are based on a DOM node.
 */
var et2_IDOMNode = new Interface({
	/**
	 * Returns the DOM-Node of the current widget. The return value has to be
	 * a plain DOM node. If you want to return an jQuery object as you receive
	 * it with
	 *
	 * 	obj = jQuery(node);
	 *
	 * simply return obj[0];
	 *
	 * @param _sender The _sender parameter defines which widget is asking for
	 * 	the DOMNode. Depending on that, the widget may return different nodes.
	 * 	This is used in the grid. Normally the _sender parameter can be omitted
	 * 	in most implementations of the getDOMNode function.
	 * 	However, you should always define the _sender parameter when calling
	 * 	getDOMNode!
	 */
	getDOMNode: function(_sender) {}
});

/**
 * Interface for all widgets which support returning a value
 */
var et2_IInput = new Interface({
	/**
	 * getValue has to return the value of the input widget
	 */
	getValue: function() {},

	/**
	 * Is dirty returns true if the value of the widget has changed since it
	 * was loaded.
	 */
	isDirty: function() {},

	/**
	 * Causes the dirty flag to be reseted.
	 */
	resetDirty: function() {},

	/**
	 * Checks the data to see if it is valid, as far as the client side can tell.
	 * Return true if it's not possible to tell on the client side, because the server
	 * will have the chance to validate also.
	 *
	 * The messages array is to be populated with everything wrong with the data,
	 * so don't stop checking after the first problem unless it really makes sense
	 * to ignore other problems.
	 *
	 * @param {String[]} messages List of messages explaining the failure(s).
	 *	messages should be fairly short, and already translated.
	 *
	 * @return {boolean} True if the value is valid (enough), false to fail
	 */
	isValid: function(messages) {}
});

/**
 * Interface for widgets which should be automatically resized
 */
var et2_IResizeable = new Interface({
	/**
	 * Called whenever the window is resized
	 */
	resize: function() {}
});

/**
 * Interface for widgets which have the align attribute
 */
var et2_IAligned = new Interface({
	get_align: function() {}
});

/**
 * Interface for widgets which want to e.g. perform clientside validation before
 * the form is submitted.
 */
var et2_ISubmitListener = new Interface({
	/**
	 * Called whenever the template gets submitted. Return false if you want to
	 * stop submission.
	 *
	 * @param _values contains the values which will be sent to the server.
	 * 	Listeners may change these values before they get submitted.
	 */
	submit: function(_values) {}
});

/**
 * Interface all widgets must support which can operate on given DOM-Nodes. This
 * is used in grid lists, when only a single row gets really stored in the widget
 * tree and this instance has to work on multiple copies of the DOM-Tree elements.
 */
var et2_IDetachedDOM = new Interface({

	/**
	 * Creates a list of attributes which can be set when working in the
	 * "detached" mode. The result is stored in the _attrs array which is provided
	 * by the calling code.
	 *
	 * @param {array} _attrs
	 */
	getDetachedAttributes: function(_attrs) {},

	/**
	 * Returns an array of DOM nodes. The (relatively) same DOM-Nodes have to be
	 * passed to the "setDetachedAttributes" function in the same order.
	 */
	getDetachedNodes: function() {},

	/**
	 * Sets the given associative attribute->value array and applies the
	 * attributes to the given DOM-Node.
	 *
	 * @param _nodes is an array of nodes which have to be in the same order as
	 * 	the nodes returned by "getDetachedNodes"
	 * @param _values is an associative array which contains a subset of attributes
	 * 	returned by the "getDetachedAttributes" function and sets them to the
	 * 	given values.
	 */
	setDetachedAttributes: function(_nodes, _values) {}

});

/**
 * Interface for widgets that need to do something special before printing
 */
var et2_IPrint = new Interface({
	/**
	 * Set up for printing
	 *
	 * @return {undefined|Deferred} Return a jQuery Deferred object if not done setting up
	 *  (waiting for data)
	 */
	beforePrint: function() {},

	/**
	 * Reset after printing
	 */
	afterPrint: function() {}
});