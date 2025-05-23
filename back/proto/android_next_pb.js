// source: android_next.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.android_bare_next.root', null, global);
goog.exportSymbol('proto.android_bare_next.root.contextType', null, global);
goog.exportSymbol('proto.android_bare_next.root.contextType.clientType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android_bare_next.root = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android_bare_next.root.repeatedFields_, null);
};
goog.inherits(proto.android_bare_next.root, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android_bare_next.root.displayName = 'proto.android_bare_next.root';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android_bare_next.root.contextType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.android_bare_next.root.contextType.repeatedFields_, null);
};
goog.inherits(proto.android_bare_next.root.contextType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android_bare_next.root.contextType.displayName = 'proto.android_bare_next.root.contextType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.android_bare_next.root.contextType.clientType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.android_bare_next.root.contextType.clientType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.android_bare_next.root.contextType.clientType.displayName = 'proto.android_bare_next.root.contextType.clientType';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android_bare_next.root.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android_bare_next.root.prototype.toObject = function(opt_includeInstance) {
  return proto.android_bare_next.root.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android_bare_next.root} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.toObject = function(includeInstance, msg) {
  var f, obj = {
    contextList: jspb.Message.toObjectList(msg.getContextList(),
    proto.android_bare_next.root.contextType.toObject, includeInstance),
    browseid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    params: jspb.Message.getFieldWithDefault(msg, 3, ""),
    continuationtoken: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android_bare_next.root}
 */
proto.android_bare_next.root.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android_bare_next.root;
  return proto.android_bare_next.root.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android_bare_next.root} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android_bare_next.root}
 */
proto.android_bare_next.root.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android_bare_next.root.contextType;
      reader.readMessage(value,proto.android_bare_next.root.contextType.deserializeBinaryFromReader);
      msg.addContext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParams(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setContinuationtoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android_bare_next.root.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android_bare_next.root.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android_bare_next.root} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.android_bare_next.root.contextType.serializeBinaryToWriter
    );
  }
  f = message.getBrowseid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParams();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContinuationtoken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.android_bare_next.root.contextType.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android_bare_next.root.contextType.prototype.toObject = function(opt_includeInstance) {
  return proto.android_bare_next.root.contextType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android_bare_next.root.contextType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.contextType.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientList: jspb.Message.toObjectList(msg.getClientList(),
    proto.android_bare_next.root.contextType.clientType.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android_bare_next.root.contextType}
 */
proto.android_bare_next.root.contextType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android_bare_next.root.contextType;
  return proto.android_bare_next.root.contextType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android_bare_next.root.contextType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android_bare_next.root.contextType}
 */
proto.android_bare_next.root.contextType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.android_bare_next.root.contextType.clientType;
      reader.readMessage(value,proto.android_bare_next.root.contextType.clientType.deserializeBinaryFromReader);
      msg.addClient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android_bare_next.root.contextType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android_bare_next.root.contextType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android_bare_next.root.contextType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.contextType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.android_bare_next.root.contextType.clientType.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.android_bare_next.root.contextType.clientType.prototype.toObject = function(opt_includeInstance) {
  return proto.android_bare_next.root.contextType.clientType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.android_bare_next.root.contextType.clientType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.contextType.clientType.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientnumber: jspb.Message.getFieldWithDefault(msg, 16, 0),
    clientversion: jspb.Message.getFieldWithDefault(msg, 17, ""),
    osname: jspb.Message.getFieldWithDefault(msg, 18, ""),
    osversion: jspb.Message.getFieldWithDefault(msg, 19, ""),
    androidsdkversion: jspb.Message.getFieldWithDefault(msg, 64, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.android_bare_next.root.contextType.clientType}
 */
proto.android_bare_next.root.contextType.clientType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.android_bare_next.root.contextType.clientType;
  return proto.android_bare_next.root.contextType.clientType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.android_bare_next.root.contextType.clientType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.android_bare_next.root.contextType.clientType}
 */
proto.android_bare_next.root.contextType.clientType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClientnumber(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientversion(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsname(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setOsversion(value);
      break;
    case 64:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAndroidsdkversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.android_bare_next.root.contextType.clientType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.android_bare_next.root.contextType.clientType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.android_bare_next.root.contextType.clientType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.android_bare_next.root.contextType.clientType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientnumber();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getClientversion();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getOsname();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getOsversion();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getAndroidsdkversion();
  if (f !== 0) {
    writer.writeInt32(
      64,
      f
    );
  }
};


/**
 * optional int32 clientNumber = 16;
 * @return {number}
 */
proto.android_bare_next.root.contextType.clientType.prototype.getClientnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.android_bare_next.root.contextType.clientType} returns this
 */
proto.android_bare_next.root.contextType.clientType.prototype.setClientnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional string clientVersion = 17;
 * @return {string}
 */
proto.android_bare_next.root.contextType.clientType.prototype.getClientversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root.contextType.clientType} returns this
 */
proto.android_bare_next.root.contextType.clientType.prototype.setClientversion = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string osName = 18;
 * @return {string}
 */
proto.android_bare_next.root.contextType.clientType.prototype.getOsname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root.contextType.clientType} returns this
 */
proto.android_bare_next.root.contextType.clientType.prototype.setOsname = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string osVersion = 19;
 * @return {string}
 */
proto.android_bare_next.root.contextType.clientType.prototype.getOsversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root.contextType.clientType} returns this
 */
proto.android_bare_next.root.contextType.clientType.prototype.setOsversion = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int32 androidSdkVersion = 64;
 * @return {number}
 */
proto.android_bare_next.root.contextType.clientType.prototype.getAndroidsdkversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 64, 0));
};


/**
 * @param {number} value
 * @return {!proto.android_bare_next.root.contextType.clientType} returns this
 */
proto.android_bare_next.root.contextType.clientType.prototype.setAndroidsdkversion = function(value) {
  return jspb.Message.setProto3IntField(this, 64, value);
};


/**
 * repeated clientType client = 1;
 * @return {!Array<!proto.android_bare_next.root.contextType.clientType>}
 */
proto.android_bare_next.root.contextType.prototype.getClientList = function() {
  return /** @type{!Array<!proto.android_bare_next.root.contextType.clientType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android_bare_next.root.contextType.clientType, 1));
};


/**
 * @param {!Array<!proto.android_bare_next.root.contextType.clientType>} value
 * @return {!proto.android_bare_next.root.contextType} returns this
*/
proto.android_bare_next.root.contextType.prototype.setClientList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.android_bare_next.root.contextType.clientType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android_bare_next.root.contextType.clientType}
 */
proto.android_bare_next.root.contextType.prototype.addClient = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.android_bare_next.root.contextType.clientType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android_bare_next.root.contextType} returns this
 */
proto.android_bare_next.root.contextType.prototype.clearClientList = function() {
  return this.setClientList([]);
};


/**
 * repeated contextType context = 1;
 * @return {!Array<!proto.android_bare_next.root.contextType>}
 */
proto.android_bare_next.root.prototype.getContextList = function() {
  return /** @type{!Array<!proto.android_bare_next.root.contextType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.android_bare_next.root.contextType, 1));
};


/**
 * @param {!Array<!proto.android_bare_next.root.contextType>} value
 * @return {!proto.android_bare_next.root} returns this
*/
proto.android_bare_next.root.prototype.setContextList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.android_bare_next.root.contextType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.android_bare_next.root.contextType}
 */
proto.android_bare_next.root.prototype.addContext = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.android_bare_next.root.contextType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.android_bare_next.root} returns this
 */
proto.android_bare_next.root.prototype.clearContextList = function() {
  return this.setContextList([]);
};


/**
 * optional string browseId = 2;
 * @return {string}
 */
proto.android_bare_next.root.prototype.getBrowseid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root} returns this
 */
proto.android_bare_next.root.prototype.setBrowseid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string params = 3;
 * @return {string}
 */
proto.android_bare_next.root.prototype.getParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root} returns this
 */
proto.android_bare_next.root.prototype.setParams = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string continuationToken = 8;
 * @return {string}
 */
proto.android_bare_next.root.prototype.getContinuationtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.android_bare_next.root} returns this
 */
proto.android_bare_next.root.prototype.setContinuationtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.android_bare_next);
