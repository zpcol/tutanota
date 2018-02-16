"use strict";

tutao.provide('tutao.entity.tutanota.CreateFolderReturn');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.CreateFolderReturn = function(data) {
  if (data) {
    this.updateData(data);
  } else {
    this.__format = "0";
    this._file = null;
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.tutanota.CreateFolderReturn.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.updateData = function(data) {
  this.__format = data._format;
  this._file = data.file;
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.tutanota.CreateFolderReturn.MODEL_VERSION = '26';

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.ENCRYPTED = true;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    file: this._file
  };
};

/**
 * Sets the format of this CreateFolderReturn.
 * @param {string} format The format of this CreateFolderReturn.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this CreateFolderReturn.
 * @return {string} The format of this CreateFolderReturn.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the file of this CreateFolderReturn.
 * @param {Array.<string>} file The file of this CreateFolderReturn.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.setFile = function(file) {
  this._file = file;
  return this;
};

/**
 * Provides the file of this CreateFolderReturn.
 * @return {Array.<string>} The file of this CreateFolderReturn.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.getFile = function() {
  return this._file;
};

/**
 * Loads the file of this CreateFolderReturn.
 * @return {Promise.<tutao.entity.tutanota.File>} Resolves to the loaded file of this CreateFolderReturn or an exception if the loading failed.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.loadFile = function() {
  return tutao.entity.tutanota.File.load(this._file);
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.tutanota.CreateFolderReturn.prototype.getEntityHelper = function() {
  return this._entityHelper;
};
