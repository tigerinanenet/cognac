"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(src_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// node_modules/grimoire-kolmafia/dist/args.js
var import_kolmafia = require("kolmafia");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value2) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Args = /* @__PURE__ */ function() {
  function Args2() {
    _classCallCheck(this, Args2);
  }
  return _createClass(Args2, null, [{
    key: "custom",
    value: function(spec, _parser, valueHelpName) {
      var _a, _b, raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options && !raw_options.includes(spec.default))
        throw "Invalid default value ".concat(spec.default);
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: function(value2) {
          var parsed_value = _parser(value2);
          return parsed_value === void 0 || parsed_value instanceof ParseError ? parsed_value : raw_options && !raw_options.includes(parsed_value) ? new ParseError("received ".concat(value2, " which was not in the allowed options")) : parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "arrayFromArg",
    value: function(spec, argFromSpec) {
      var _a, _b, _c, spec_without_default = _objectSpread({}, spec);
      "default" in spec_without_default && delete spec_without_default.default;
      var arg = argFromSpec.call(this, spec_without_default), raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        var _iterator2 = _createForOfIteratorHelper(spec.default), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var default_entry = _step2.value;
            if (!raw_options.includes(default_entry))
              throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",", arrayParser = function(value2) {
        var values = value2.split(separator);
        spec.noTrim || (values = values.map(function(v) {
          return v.trim();
        }));
        var result = values.map(function(v) {
          return arg.parser(v);
        }), error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error)
          return error;
        var failure_index = result.indexOf(void 0);
        return failure_index !== -1 ? new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index])) : result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "string",
    value: function(spec) {
      return this.custom(spec, function(value2) {
        return value2;
      }, "TEXT");
    }
  }, {
    key: "strings",
    value: function(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function(spec) {
      return this.custom(spec, function(value2) {
        return isNaN(Number(value2)) ? void 0 : Number(value2);
      }, "NUMBER");
    }
  }, {
    key: "numbers",
    value: function(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function(spec) {
      return this.custom(spec, function(value2) {
        if (value2.toLowerCase() === "true")
          return !0;
        if (value2.toLowerCase() === "false")
          return !1;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function(spec) {
      return this.custom(spec, function(value2) {
        if (value2.toLowerCase() === "true")
          return !0;
        if (value2.toLowerCase() === "false")
          return !1;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function(spec) {
      return this.custom(spec, function(value2) {
        var match = import_kolmafia.Class.get(value2);
        if (match.toString().toUpperCase() === value2.toString().toUpperCase() || !isNaN(Number(value2)))
          return match;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function(spec) {
      return this.custom(spec, import_kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function(groupName, args2) {
      return {
        name: groupName,
        args: args2
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function(scriptName, scriptHelp, args2, options) {
      var _objectSpread22;
      _traverse(args2, function(keySpec, key) {
        if (key === "help" || keySpec.key === "help")
          throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args2), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      }), res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread22 = {}, _defineProperty(_objectSpread22, specSymbol, argsWithHelp), _defineProperty(_objectSpread22, scriptSymbol, scriptName), _defineProperty(_objectSpread22, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread22, optionsSymbol, options != null ? options : {}), _objectSpread22));
      if (options != null && options.positionalArgs) {
        var keys = [], metadata = Args2.getMetadata(res);
        metadata.traverse(function(keySpec, key) {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var arg = _step2.value;
            if (!keys.includes(arg))
              throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function(args2, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, _a, metadata = Args2.getMetadata(args2), keys = /* @__PURE__ */ new Set(), flags = /* @__PURE__ */ new Set();
      if (metadata.traverse(function(keySpec, key) {
        var _a2, name = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        if (flags.has(name) || keys.has(name))
          throw "Duplicate arg key ".concat(name, " is not allowed");
        keySpec.valueHelpName === "FLAG" ? flags.add(name) : keys.add(name);
      }), includeSettings && metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
        var _a2, _b, setting = (_a2 = keySpec.setting) !== null && _a2 !== void 0 ? _a2 : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
        if (setting !== "") {
          var value_str = (0, import_kolmafia.getProperty)(setting);
          if (value_str !== "")
            return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        }
      }), !(command === void 0 || command === "")) {
        var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
        metadata.traverseAndMaybeSet(args2, function(keySpec, key) {
          var _a2, argKey = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key, value_str = parsed.get(argKey);
          if (value_str !== void 0)
            return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
        });
      }
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function(scriptName, scriptHelp, spec, command, options) {
      var args2 = this.create(scriptName, scriptHelp, spec, options);
      return this.fill(args2, command), args2;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function(args2, maxOptionsToDisplay) {
      var _a, metadata = Args2.getMetadata(args2);
      (0, import_kolmafia.printHtml)("".concat(metadata.scriptHelp)), (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>")), metadata.traverse(function(arg, key) {
        var _a2, _b, _c, _d, _e;
        if (!arg.hidden) {
          var nameText = "<font color='".concat((0, import_kolmafia.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a2 = arg.key) !== null && _a2 !== void 0 ? _a2 : key, "</font>"), valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>"), helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "", defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "", settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
          (0, import_kolmafia.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
          var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
          if (valueOptions.length < (maxOptionsToDisplay != null ? maxOptionsToDisplay : Number.MAX_VALUE)) {
            var _iterator3 = _createForOfIteratorHelper(valueOptions), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var option = _step3.value;
                option.length === 1 || option[1] === void 0 ? (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0])) : (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }, function(group) {
        (0, import_kolmafia.printHtml)(""), (0, import_kolmafia.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function(args2) {
      return new WrappedArgMetadata(args2);
    }
  }]), Args2;
}(), ParseError = /* @__PURE__ */ _createClass(function ParseError2(message) {
  _classCallCheck(this, ParseError2), this.message = message;
}), specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");
function parseAndValidate(arg, source, value2) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value2);
  } catch (_a) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0)
    throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value2);
  if (parsed_value instanceof ParseError)
    throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
var WrappedArgMetadata = /* @__PURE__ */ function() {
  function WrappedArgMetadata2(args2) {
    _classCallCheck(this, WrappedArgMetadata2), this.spec = args2[specSymbol], this.scriptName = args2[scriptSymbol], this.scriptHelp = args2[scriptHelpSymbol], this.options = args2[optionsSymbol];
  }
  return _createClass(WrappedArgMetadata2, [{
    key: "loadDefaultValues",
    value: function() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]), WrappedArgMetadata2;
}();
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? result[k] = _loadDefaultValues(argSpec.args) : "default" in argSpec ? result[k] = argSpec.default : result[k] = void 0;
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec)
      groups.push([argSpec, k]);
    else {
      var value2 = setTo(argSpec, k);
      if (value2 === void 0)
        continue;
      result[k] = value2;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    "args" in argSpec ? groups.push([argSpec, k]) : process(argSpec, k);
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup == null || onGroup(group_and_key[0], group_and_key[1]), _traverse(group_and_key[0].args, process, onGroup);
  }
}
var CommandParser = /* @__PURE__ */ function() {
  function CommandParser2(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser2), this.command = command, this.index = 0, this.keys = keys, this.flags = flags, this.positionalArgs = positionalArgs, this.positionalArgsParsed = 0;
  }
  return _createClass(CommandParser2, [{
    key: "parse",
    value: function() {
      var _a, _b, _c, _d;
      this.index = 0;
      for (var result = /* @__PURE__ */ new Map(); !this.finished(); ) {
        var parsing_negative_flag = !1;
        this.peek() === "!" && (parsing_negative_flag = !0, this.consume(["!"]));
        var startIndex = this.index, key = this.parseKey();
        if (result.has(key))
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        if (this.flags.has(key)) {
          if (result.set(key, parsing_negative_flag ? "false" : "true"), this.peek() === "=")
            throw "Flag ".concat(key, " cannot be assigned a value");
          this.finished() || this.consume([" "]), this.prevUnquotedKey = void 0;
        } else if (this.keys.has(key)) {
          this.consume(["=", " "]);
          var value2 = this.parseValue();
          ["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.set(key, value2);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++, this.index = startIndex;
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "") ? this.prevUnquotedKey = void 0 : this.prevUnquotedKey = key, this.finished() || this.consume([" "]), result.has(positionalKey))
            throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else
          throw this.prevUnquotedKey && this.peek() !== "=" ? "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)") : "Unknown argument: ".concat(key);
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function() {
      if (!(this.index >= this.command.length))
        return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function() {
      if (!(this.index <= 0) && !(this.index >= this.command.length + 1))
        return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function(allowed) {
      var _a;
      if (this.finished())
        throw "Expected ".concat(allowed);
      allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (this.index += 1);
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function(searchValue) {
      var result = this.command.length, _iterator4 = _createForOfIteratorHelper(searchValue), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var value2 = _step4.value, index = this.command.indexOf(value2, this.index);
          index !== -1 && index < result && (result = index);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function() {
      var keyEnd = this.findNext(["=", " "]), key = this.command.substring(this.index, keyEnd);
      return this.index = keyEnd, key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function() {
      var _a, _b, valueEnder = " ", quotes = ["'", '"'];
      quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "") && (valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : "", this.consume([valueEnder]));
      var valueEnd = this.findNext([valueEnder]), value2 = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length)
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value2);
      return this.index = valueEnd, valueEnder !== " " && this.consume([valueEnder]), value2;
    }
  }]), CommandParser2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
var import_kolmafia17 = require("kolmafia");

// node_modules/libram/dist/combat.js
var import_kolmafia6 = require("kolmafia");

// node_modules/libram/dist/lib.js
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
var import_kolmafia2 = require("kolmafia"), _defaultHandlers;
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty2(obj, key, value2) {
  return key = _toPropertyKey2(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var LogLevels;
(function(LogLevels2) {
  LogLevels2[LogLevels2.NONE = 0] = "NONE", LogLevels2[LogLevels2.ERROR = 1] = "ERROR", LogLevels2[LogLevels2.WARNING = 2] = "WARNING", LogLevels2[LogLevels2.INFO = 3] = "INFO", LogLevels2[LogLevels2.DEBUG = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, _defineProperty2(_defaultHandlers, LogLevels.INFO, function(message) {
  (0, import_kolmafia2.printHtml)("<b>[Libram Info]</b> ".concat(message)), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty2(_defaultHandlers, LogLevels.WARNING, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: orange; color: white;"><b>[Libram Warning]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty2(_defaultHandlers, LogLevels.ERROR, function(error) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Error]</b> '.concat(error.toString(), "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(error));
}), _defineProperty2(_defaultHandlers, LogLevels.DEBUG, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Debug]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defaultHandlers), Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2), _defineProperty2(this, "handlers", defaultHandlers);
  }
  return _createClass2(Logger2, [{
    key: "level",
    get: function() {
      return Logger2.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function(level) {
      Logger2.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function(level, message) {
      this.level >= level && this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]), Logger2;
}();
_defineProperty2(Logger, "currentLevel", LogLevels.ERROR);
var logger_default = new Logger();

// node_modules/libram/dist/property.js
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"], monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_sotParcelReturned  false", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty3(obj, key, value2) {
  return key = _toPropertyKey3(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value2 = (0, import_kolmafia3.getProperty)(property);
    return default_ !== void 0 && value2 === "" ? default_ : transform(value2, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value2) {
    if (value2 === "")
      return null;
    var v = toType(value2);
    return v === Type.none ? null : v;
  });
}, getString = createPropertyGetter(function(value2) {
  return value2;
}), getCommaSeparated = createPropertyGetter(function(value2) {
  return value2.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value2) {
  return value2 === "true";
}), getNumber = createPropertyGetter(function(value2) {
  return Number(value2);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia3.Bounty, import_kolmafia3.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia3.Class, import_kolmafia3.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia3.Coinmaster, import_kolmafia3.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia3.Effect, import_kolmafia3.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia3.Element, import_kolmafia3.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia3.Familiar, import_kolmafia3.toFamiliar), getItem = createMafiaClassPropertyGetter(import_kolmafia3.Item, import_kolmafia3.toItem), getLocation = createMafiaClassPropertyGetter(import_kolmafia3.Location, import_kolmafia3.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia3.Monster, import_kolmafia3.toMonster), getPhylum = createMafiaClassPropertyGetter(import_kolmafia3.Phylum, import_kolmafia3.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia3.Servant, import_kolmafia3.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia3.Skill, import_kolmafia3.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia3.Slot, import_kolmafia3.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia3.Stat, import_kolmafia3.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia3.Thrall, import_kolmafia3.toThrall);
function get(property, _default) {
  var value2 = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value2.match(/^\d+$/) ? parseInt(value2) : value2;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isStringProperty(property))
      return value2;
  }
  return _default instanceof import_kolmafia3.Location ? getLocation(property, _default) : _default instanceof import_kolmafia3.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia3.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia3.Stat ? getStat(property, _default) : _default instanceof import_kolmafia3.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value2 === "true" ? !0 : value2 === "false" ? !1 : _default : typeof _default == "number" ? value2 === "" ? _default : parseInt(value2) : value2 === "" ? _default === void 0 ? "" : _default : value2;
}
function _set(property, value2) {
  var stringValue = value2 === null ? "" : value2.toString();
  (0, import_kolmafia3.setProperty)(property, stringValue);
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value2 = _Object$entries$_i[1];
    _set(prop, value2);
  }
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck3(this, PropertiesManager2), _defineProperty3(this, "properties", {});
  }
  return _createClass3(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        this.properties[propertyName] === void 0 && (this.properties[propertyName] = get(propertyName)), _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function(choiceToSet, value2) {
      this.setChoices(_defineProperty3({}, choiceToSet, value2));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3], value2 = this.properties[property];
        value2 && _set(property, value2);
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function(property, value2) {
      return get(property, 0) < value2 ? (this.set(_defineProperty3({}, property, value2)), !0) : !1;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function(property, value2) {
      return get(property, 0) > value2 ? (this.set(_defineProperty3({}, property, value2)), !0) : !1;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min)
        return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return !1;
      }
      return !0;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties), newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]), PropertiesManager2;
}();

// node_modules/libram/dist/template-string.js
var import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/utils.js
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _iterableToArray(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function notNull(value2) {
  return value2 !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item3) {
    map.set(item3, (map.get(item3) || 0) + 1);
  }), map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item3 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item3);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item3 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item3);
  }).join(", ");
}
function sum(addends, x) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + (typeof x == "function" ? x(element) : element[x]);
  }, 0);
}
function arrayContains(item3, array) {
  return array.includes(item3);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort(), sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item3, index) {
    return item3 === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function arrayEquals(left, right) {
  return left.length !== right.length ? !1 : left.every(function(element, index) {
    return element === right[index];
  });
}
function undelay(delayedObject) {
  return typeof delayedObject == "function" ? delayedObject() : delayedObject;
}
function makeByXFunction(source) {
  return function(options) {
    var _options$val, val = undelay(source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, flatArray = [], _iterator3 = _createForOfIteratorHelper2(arr), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var item3 = _step3.value;
      Array.isArray(item3) && depth > 0 ? flatArray = flatArray.concat(flat(item3, depth - 1)) : flatArray.push(item3);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, handleTypeGetError = function(Type, error) {
  var message = "".concat(error), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia4.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia4.print)(message);
}, createSingleConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.none = Type.none, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia4.Bounty), $bounties = createPluralConstant(import_kolmafia4.Bounty), $class = createSingleConstant(import_kolmafia4.Class), $classes = createPluralConstant(import_kolmafia4.Class), $coinmaster = createSingleConstant(import_kolmafia4.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia4.Coinmaster), $effect = createSingleConstant(import_kolmafia4.Effect), $effects = createPluralConstant(import_kolmafia4.Effect), $element = createSingleConstant(import_kolmafia4.Element), $elements = createPluralConstant(import_kolmafia4.Element), $familiar = createSingleConstant(import_kolmafia4.Familiar), $familiars = createPluralConstant(import_kolmafia4.Familiar), $item = createSingleConstant(import_kolmafia4.Item), $items = createPluralConstant(import_kolmafia4.Item), $location = createSingleConstant(import_kolmafia4.Location), $locations = createPluralConstant(import_kolmafia4.Location), $monster = createSingleConstant(import_kolmafia4.Monster), $monsters = createPluralConstant(import_kolmafia4.Monster), $phylum = createSingleConstant(import_kolmafia4.Phylum), $phyla = createPluralConstant(import_kolmafia4.Phylum), $servant = createSingleConstant(import_kolmafia4.Servant), $servants = createPluralConstant(import_kolmafia4.Servant), $skill = createSingleConstant(import_kolmafia4.Skill), $skills = createPluralConstant(import_kolmafia4.Skill), $slot = createSingleConstant(import_kolmafia4.Slot), $slots = createPluralConstant(import_kolmafia4.Slot), $stat = createSingleConstant(import_kolmafia4.Stat), $stats = createPluralConstant(import_kolmafia4.Stat), $thrall = createSingleConstant(import_kolmafia4.Thrall), $thralls = createPluralConstant(import_kolmafia4.Thrall), $path = createSingleConstant(import_kolmafia4.Path), $paths = createPluralConstant(import_kolmafia4.Path);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties4(Constructor.prototype, protoProps), staticProps && _defineProperties4(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive4(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _wrapNativeSuper(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(Class6) {
    if (Class6 === null || !_isNativeFunction(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct(Class6, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, Class6);
  }, _wrapNativeSuper(Class5);
}
function _construct(Parent, args2, Class5) {
  return _isNativeReflectConstruct() ? _construct = Reflect.construct.bind() : _construct = function(Parent2, args3, Class6) {
    var a = [null];
    a.push.apply(a, args3);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf(instance, Class6.prototype), instance;
  }, _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia5.Effect && skillOrEffect.attributes.includes("song"))
    return !0;
  var skill = skillOrEffect instanceof import_kolmafia5.Effect ? (0, import_kolmafia5.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia5.Effect)
    return (0, import_kolmafia5.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Familiar)
    return (0, import_kolmafia5.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia5.Item)
    return (0, import_kolmafia5.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Servant)
    return (0, import_kolmafia5.haveServant)(thing);
  if (thing instanceof import_kolmafia5.Skill)
    return (0, import_kolmafia5.haveSkill)(thing);
  if (thing instanceof import_kolmafia5.Thrall) {
    var thrall = (0, import_kolmafia5.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
}
function haveInCampground(item3) {
  return Object.keys((0, import_kolmafia5.getCampground)()).map(function(i) {
    return import_kolmafia5.Item.get(i);
  }).includes(item3);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getKramcoWandererChance() {
  var fights = get("_sausageFights"), lastFight = get("_lastSausageMonsterTurn"), totalTurns = (0, import_kolmafia5.totalTurnsPlayed)();
  if (fights < 1)
    return lastFight === totalTurns && (0, import_kolmafia5.myTurncount)() < 1 ? 0.5 : 1;
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
function getFoldGroup(item3) {
  return Object.entries((0, import_kolmafia5.getRelated)(item3, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia5.Item.get(i);
  });
}
function getAverage(range) {
  var _range$match;
  if (range.indexOf("-") < 0)
    return Number(range);
  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"], _ref8 = _slicedToArray3(_ref7, 3), lower = _ref8[1], upper = _ref8[2];
  return (Number(lower) + Number(upper)) / 2;
}
function getAverageAdventures(item3) {
  return getAverage(item3.adventures);
}
function uneffect(effect) {
  return (0, import_kolmafia5.cliExecute)("uneffect ".concat(effect.name));
}
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted")
    return -1;
  if (stringStep === "started")
    return 0;
  if (stringStep === "finished" || stringStep === "")
    return 999;
  if (stringStep.substring(0, 4) !== "step")
    throw new Error("Quest state parsing error.");
  return parseInt(stringStep.substring(4), 10);
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    return _classCallCheck4(this, EnsureError2), _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")), _this.name = "Ensure Error", _this;
  }
  return _createClass4(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia5.haveEffect)(ef) < turns) {
    if (ef.default === null)
      throw new EnsureError(ef, "No default action");
    if (!(0, import_kolmafia5.cliExecute)(ef.default) || (0, import_kolmafia5.haveEffect)(ef) === 0)
      throw new EnsureError(ef);
  }
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return flat((0, import_kolmafia5.holiday)().split("/").map(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia5.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia5.myClass)().toString();
});
function directlyUse(item3) {
  return (0, import_kolmafia5.visitUrl)("inv_use.php?which=3&whichitem=".concat(item3.id, "&pwd"));
}

// node_modules/libram/dist/overlappingNames.js
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"], overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Cleave", "Boil", "Slice", "Rainbow"];

// node_modules/libram/dist/combat.js
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _iterableToArray2(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty4(obj, key, value2) {
  return key = _toPropertyKey5(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties5(Constructor.prototype, protoProps), staticProps && _defineProperties5(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey5(arg) {
  var key = _toPrimitive5(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive5(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits2(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf2(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized2(self);
}
function _assertThisInitialized2(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _wrapNativeSuper2(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper2 = function(Class6) {
    if (Class6 === null || !_isNativeFunction2(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache < "u") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class6, arguments, _getPrototypeOf2(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf2(Wrapper, Class6);
  }, _wrapNativeSuper2(Class5);
}
function _construct2(Parent, args2, Class5) {
  return _isNativeReflectConstruct2() ? _construct2 = Reflect.construct.bind() : _construct2 = function(Parent2, args3, Class6) {
    var a = [null];
    a.push.apply(a, args3);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf2(instance, Class6.prototype), instance;
  }, _construct2.apply(null, arguments);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf2(o, p) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  return _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf2(o);
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME, macroMatches = (0, import_kolmafia6.xpath)((0, import_kolmafia6.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia6.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia6.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else
    return parseInt(macroMatches[0], 10);
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName == "string" ? import_kolmafia6.Item.get(itemOrName) : itemOrName;
}
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems))
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  var item3 = itemOrNameToItem(itemOrItems);
  return overlappingItemNames.includes(item3.name) ? item3.id.toFixed(0) : item3.name;
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ") : "hascombatitem ".concat(itemOrItems);
}
function skillOrNameToSkill(skillOrName) {
  return typeof skillOrName == "string" ? import_kolmafia6.Skill.get(skillOrName) : skillOrName;
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    return _classCallCheck5(this, InvalidMacroError2), _super.apply(this, arguments);
  }
  return _createClass5(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error)), Macro = /* @__PURE__ */ function() {
  function Macro3() {
    _classCallCheck5(this, Macro3), _defineProperty4(this, "components", []), _defineProperty4(this, "name", MACRO_NAME);
  }
  return _createClass5(Macro3, [{
    key: "toString",
    value: (
      /**
       * Convert macro to string.
       *
       * @returns BALLS macro
       */
      function() {
        return (this.components.join(";") + ";").replace(/;;+/g, ";");
      }
    )
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function(name) {
      return this.name = name, this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value: (
      /**
       * Save a macro to a Mafia property for use in a consult script.
       */
      function() {
        _set(Macro3.SAVED_MACRO_PROPERTY, this.toString());
      }
    )
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value: (
      /**
       * Statefully add one or several steps to a macro.
       *
       * @param nextSteps The steps to add to the macro.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _ref, _this$components, _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++)
          nextSteps[_key] = arguments[_key];
        var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map(function(x) {
          return x instanceof Macro3 ? x.components : [x];
        })));
        return (_this$components = this.components).push.apply(_this$components, _toConsumableArray2(nextStepsStrings.filter(function(s) {
          return s.length > 0;
        }))), this;
      }
    )
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value: (
      /**
       * Submit the built macro to KoL. Only works inside combat.
       *
       * @returns Contents of the fight page after macro submission
       */
      function() {
        var final = this.toString();
        return (0, import_kolmafia6.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia6.urlEncode)(final)), !0, !0);
      }
    )
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function() {
      var id = Macro3.cachedMacroIds.get(this.name);
      id === void 0 && (id = getMacroId(this.name), Macro3.cachedMacroIds.set(this.name, id)), !((0, import_kolmafia6.getAutoAttack)() === 99e6 + id && this.toString() === Macro3.cachedAutoAttacks.get(this.name)) && ((0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia6.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia6.urlEncode)(this.toString()), "&action=save"), !0, !0), (0, import_kolmafia6.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1")), Macro3.cachedAutoAttacks.set(this.name, this.toString()));
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function(name) {
      this.name = name, this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value: (
      /**
       * Add an "abort" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("abort");
      }
    )
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value: (
      /**
       * Adds an "abort" step to this macro, with a warning message to print
       *
       * @param warning The warning message to print
       * @returns  {Macro} This object itself.
       */
      function(warning) {
        return this.step('abort "'.concat(warning, '"'));
      }
    )
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value: (
      /**
       * Add a "runaway" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("runaway");
      }
    )
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value: (
      /**
       * Add an "if" statement to this macro.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue) {
        return this.step("if ".concat(Macro3.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
      }
    )
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value: (
      /**
       * Add an "if" statement to this macro, inverting the condition.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue) {
        return this.step("if !(".concat(Macro3.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
      }
    )
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value: (
      /**
       * Add a "while" statement to this macro.
       *
       * @param condition The BALLS condition for the if statement.
       * @param contents Loop to repeat while the condition is true.
       * @returns {Macro} This object itself.
       */
      function(condition, contents) {
        return this.step("while ".concat(condition)).step(contents).step("endwhile");
      }
    )
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value: (
      /**
       * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
       *
       * @param condition The JS condition.
       * @param ifTrue Continuation to add if the condition is true.
       * @param ifFalse Optional input to turn this into an if...else statement.
       * @returns {Macro} This object itself.
       */
      function(condition, ifTrue, ifFalse) {
        return condition ? this.step(ifTrue) : ifFalse ? this.step(ifFalse) : this;
      }
    )
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value: (
      /**
       * Add a repeat step to the macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("repeat");
      }
    )
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        skills[_key2] = arguments[_key2];
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill2) {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value: (
      /**
       * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try casting.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
          skills[_key3] = arguments[_key3];
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
          return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro3.skill(skill));
        })));
      }
    )
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value: (
      /**
       * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try repeatedly casting.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
          skills[_key4] = arguments[_key4];
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
          return Macro3.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro3.skill(skill).repeat());
        })));
      }
    )
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value: (
      /**
       * Add one or more item steps to the macro.
       *
       * @param items Items to use. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
          items[_key5] = arguments[_key5];
        return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
          return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value: (
      /**
       * Add one or more item steps to the macro, where each step checks to see if you have the item first.
       *
       * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function() {
        for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
          items[_key6] = arguments[_key6];
        return this.step.apply(this, _toConsumableArray2(items.map(function(item3) {
          return Macro3.if_(itemOrItemsBallsMacroPredicate(item3), "use ".concat(itemOrItemsBallsMacroName(item3)));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value: (
      /**
       * Add an attack step to the macro.
       *
       * @returns {Macro} This object itself.
       */
      function() {
        return this.step("attack");
      }
    )
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
       *
       * @param macro The macro to place in the if_ statement
       * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
       */
      function(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        return todaysWanderers.length === 0 ? this : this.if_(todaysWanderers.map(function(monster) {
          return "monsterid ".concat(monster.id);
        }).join(" || "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
       *
       * @param macro The macro to place in the if_ statement.
       * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
       */
      function(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        return todaysWanderers.length === 0 ? this.step(macro) : this.if_(todaysWanderers.map(function(monster) {
          return "!monsterid ".concat(monster.id);
        }).join(" && "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro3.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function() {
      (0, import_kolmafia6.removeProperty)(Macro3.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function() {
      var _iterator2 = _createForOfIteratorHelper3(Macro3.cachedAutoAttacks.keys()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _Macro$cachedMacroIds, name = _step2.value, id = (_Macro$cachedMacroIds = Macro3.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1")), Macro3.cachedAutoAttacks.delete(name), Macro3.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "abort",
    value: function() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function(condition) {
      var ballsCondition = "";
      if (condition instanceof import_kolmafia6.Monster)
        ballsCondition = "monsterid ".concat(condition.id);
      else if (condition instanceof Array)
        ballsCondition = condition.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || "), ballsCondition = "(".concat(ballsCondition, ")");
      else if (condition instanceof import_kolmafia6.Effect)
        ballsCondition = "haseffect ".concat(condition.id);
      else if (condition instanceof import_kolmafia6.Skill)
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      else if (condition instanceof import_kolmafia6.Item) {
        if (!condition.combat)
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1)
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia6.Class) {
        if (condition.id > 6)
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else
        condition instanceof import_kolmafia6.Stat ? ballsCondition = "".concat(condition.toString().toLowerCase(), "class") : ballsCondition = condition;
      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]), Macro3;
}();
_defineProperty4(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty4(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty4(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());

// node_modules/libram/dist/maximize.js
var import_kolmafia7 = require("kolmafia");
var _templateObject2, _templateObject210, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject92, _templateObject102, _templateObject112, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value2) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value2);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value2) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value2), value2;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value2) {
  if (descriptor.set)
    descriptor.set.call(receiver, value2);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value2;
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey6(descriptor.key), descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties6(Constructor.prototype, protoProps), staticProps && _defineProperties6(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral2(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), !0).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value2) {
  return key = _toPropertyKey6(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey6(arg) {
  var key = _toPrimitive6(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive6(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _iterableToArray3(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function toMaximizerName(_ref) {
  var name = _ref.name, id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item3) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item3) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item3));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray3(defaultOptions.bonusEquip), _toConsumableArray3((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray3(defaultOptions.preventSlot), _toConsumableArray3((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread3(_objectSpread3({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"], modeableItems = {
  backupcamera: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["Jurassic Parka"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator2 = _createForOfIteratorHelper4(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var key = _step2.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper4(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass6(function CacheEntry2(equipment, rider, familiar2, canEquipItemCount2, modes) {
  _classCallCheck6(this, CacheEntry2), _defineProperty5(this, "equipment", void 0), _defineProperty5(this, "rider", void 0), _defineProperty5(this, "familiar", void 0), _defineProperty5(this, "canEquipItemCount", void 0), _defineProperty5(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar2, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck6(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _useHistory, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _maxSize, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  return _createClass6(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray3(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value2, index) {
        return value2 === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray3(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        if (lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex), _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(this, _outfitSlots, []), _classPrivateFieldSet(this, _useHistory, []);
    }
  }]), OutfitLRUCache2;
}();
_defineProperty5(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  return stats.every(function(value2, index) {
    return value2 === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item3) {
    return (0, import_kolmafia7.canEquip)(item3);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia7.isWearingOutfit)(outfitName) || (0, import_kolmafia7.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral2(["familiar"]))));
    familiarEquip && (0, import_kolmafia7.equip)($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper4(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item3 = _step3$value[1];
        (0, import_kolmafia7.equippedItem)(slot) !== item3 && (0, import_kolmafia7.availableAmount)(item3) > 0 && (0, import_kolmafia7.equip)(slot, item3);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia7.equippedAmount)($item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia7.equippedAmount)($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread3(_objectSpread3({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper4(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref2) {
        var _ref3 = _slicedToArray4(_ref2, 2), item3 = _ref3[1];
        return item3 !== null;
      }), desiredSet = desiredSlots.map(function(_ref4) {
        var _ref5 = _slicedToArray4(_ref4, 2), item3 = _ref5[1];
        return item3;
      }), equippedSet = desiredSlots.map(function(_ref6) {
        var _ref7 = _slicedToArray4(_ref6, 1), slot = _ref7[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia7.equippedAmount)($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia7.equippedAmount)($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper4(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral2(["card-sleeve"]))))), (0, import_kolmafia7.equippedAmount)($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)()), (0, import_kolmafia7.equippedAmount)($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper4(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["buddy-bjorn"])))) && rider.delete($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["crown-of-thrones"])))) && rider.delete($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper4(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["buddy-bjorn"])))) || rider.delete($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["crown-of-thrones"])))) || rider.delete($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread3(_objectSpread3({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item3) {
    return '"equip '.concat(toMaximizerName(item3), '"');
  }).sort()), _toConsumableArray3(preventEquip.map(function(item3) {
    return '-"equip '.concat(toMaximizerName(item3), '"');
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref8) {
    var _ref9 = _slicedToArray4(_ref8, 2), bonus = _ref9[1];
    return bonus !== 0;
  }).map(function(_ref10) {
    var _ref11 = _slicedToArray4(_ref10, 2), item3 = _ref11[0], bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, ' "bonus ').concat(toMaximizerName(item3), '"');
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort())).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1))
      return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck6(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters), _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  return _createClass6(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     */
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions;
      return new Requirement2([].concat(_toConsumableArray3(this.maximizeParameters), _toConsumableArray3(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray3((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray3((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray3((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray3((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray3((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray3((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray3((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray3((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray3((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray3((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value: (
      /**
       * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
       *
       * @returns Whether the maximize call succeeded.
       */
      function() {
        return maximizeCached(this.maximizeParameters, this.maximizeOptions);
      }
    )
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++)
        requirements[_key] = arguments[_key];
      Requirement2.merge(requirements).maximize();
    }
  }]), Requirement2;
}();

// node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_exports = {};
__export(AsdonMartin_exports, {
  Driving: function() {
    return Driving;
  },
  drive: function() {
    return drive;
  },
  fillTo: function() {
    return fillTo;
  },
  fillWithInventoryTo: function() {
    return fillWithInventoryTo;
  },
  have: function() {
    return have2;
  },
  insertFuel: function() {
    return insertFuel;
  },
  installed: function() {
    return installed;
  },
  isFuelItem: function() {
    return isFuelItem;
  }
});
var import_kolmafia8 = require("kolmafia");
var _templateObject49, _templateObject211, _templateObject310, _templateObject410, _templateObject52, _templateObject62, _templateObject72, _templateObject82, _templateObject93, _templateObject103, _templateObject113, _templateObject123, _templateObject133;
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
}
function _arrayLikeToArray7(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral3(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PriceAge;
(function(PriceAge2) {
  PriceAge2[PriceAge2.HISTORICAL = 0] = "HISTORICAL", PriceAge2[PriceAge2.RECENT = 1] = "RECENT", PriceAge2[PriceAge2.TODAY = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
function installed() {
  return (0, import_kolmafia8.getWorkshed)() === $item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral3(["Asdon Martin keyfob"])));
}
function have2() {
  return installed() || have($item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["Asdon Martin keyfob"]))));
}
var fuelSkiplist = $items(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral3(['cup of "tea", thermos of "whiskey", Lucky Lindy, Bee\'s Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of "milk"'])));
function priceTooOld(item3) {
  return (0, import_kolmafia8.historicalPrice)(item3) === 0 || (0, import_kolmafia8.historicalAge)(item3) >= 7;
}
function historicalPriceOrMax(item3) {
  var historical = (0, import_kolmafia8.historicalPrice)(item3);
  return historical < 0 ? 999999999 : historical;
}
function mallPriceOrMax(item3) {
  var mall = (0, import_kolmafia8.mallPrice)(item3);
  return mall < 0 ? 999999999 : mall;
}
function price(item3, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL: {
      var historical = historicalPriceOrMax(item3);
      return historical === 0 ? mallPriceOrMax(item3) : historical;
    }
    case PriceAge.RECENT:
      return priceTooOld(item3) ? mallPriceOrMax(item3) : historicalPriceOrMax(item3);
    case PriceAge.TODAY:
      return mallPriceOrMax(item3);
  }
}
function inventoryItems() {
  return import_kolmafia8.Item.all().filter(isFuelItem).filter(function(item3) {
    return have(item3) && [100, (0, import_kolmafia8.autosellPrice)(item3)].includes(price(item3, PriceAge.RECENT));
  });
}
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PriceAge.RECENT, units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
function isFuelItem(it) {
  return !(0, import_kolmafia8.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
function getBestFuels() {
  var allFuel = import_kolmafia8.Item.all().filter(isFuelItem);
  allFuel.filter(function(item3) {
    return (0, import_kolmafia8.historicalPrice)(item3) === 0;
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var keyHistorical = function(item3) {
    return calculateFuelUnitCost(item3, PriceAge.HISTORICAL);
  };
  allFuel.sort(function(x, y) {
    return keyHistorical(x) - keyHistorical(y);
  });
  var bestUnitCost = keyHistorical(allFuel[0]), firstBadIndex = allFuel.findIndex(function(item3) {
    return keyHistorical(item3) > 5 * bestUnitCost;
  }), potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  potentialFuel.filter(function(item3) {
    return priceTooOld(item3);
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var key1 = function(item3) {
    return -getAverageAdventures(item3);
  }, key2 = function(item3) {
    return calculateFuelUnitCost(item3, PriceAge.RECENT);
  };
  potentialFuel.sort(function(x, y) {
    return key1(x) - key1(y);
  }), potentialFuel.sort(function(x, y) {
    return key2(x) - key2(y);
  });
  var candidates = potentialFuel.slice(0, 10), key3 = function(item3) {
    return calculateFuelUnitCost(item3, PriceAge.TODAY);
  };
  if (candidates.sort(function(x, y) {
    return key3(x) - key3(y);
  }), calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100)
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. This means something went wrong.");
  return candidates;
}
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, result = (0, import_kolmafia8.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
function fillTo(targetUnits) {
  if (!installed())
    return !1;
  for (; (0, import_kolmafia8.getFuel)() < targetUnits; ) {
    var _ref = (0, import_kolmafia8.canInteract)() ? getBestFuels() : [$item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral3(["loaf of soda bread"]))), void 0], _ref2 = _slicedToArray5(_ref, 2), bestFuel = _ref2[0], secondBest = _ref2[1], count = Math.ceil(targetUnits / getAverageAdventures(bestFuel)), ceiling = void 0;
    if (secondBest) {
      var efficiencyOfSecondBest = (0, import_kolmafia8.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if ((0, import_kolmafia8.canInteract)() ? ceiling ? (0, import_kolmafia8.buy)(count, bestFuel, ceiling) : (0, import_kolmafia8.buy)(count, bestFuel) : (0, import_kolmafia8.retrieveItem)(count, bestFuel), !insertFuel(bestFuel, Math.min((0, import_kolmafia8.itemAmount)(bestFuel), count)))
      throw new Error("Failed to fuel Asdon Martin.");
  }
  return (0, import_kolmafia8.getFuel)() >= targetUnits;
}
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort(function(a, b) {
    return getAverageAdventures(b) / (0, import_kolmafia8.autosellPrice)(b) - getAverageAdventures(a) / (0, import_kolmafia8.autosellPrice)(a);
  });
  if (options.length === 0)
    return !1;
  var best = options[0];
  if ((0, import_kolmafia8.autosellPrice)(best) / getAverageAdventures(best) > 100)
    return !1;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0, import_kolmafia8.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
function fillWithInventoryTo(targetUnits) {
  if (!installed())
    return !1;
  for (var continueFuelingFromInventory = !0; (0, import_kolmafia8.getFuel)() < targetUnits && continueFuelingFromInventory; )
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  return fillTo(targetUnits);
}
var Driving = {
  Obnoxiously: $effect(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral3(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral3(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral3(["Driving Wastefully"]))),
  Safely: $effect(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral3(["Driving Safely"]))),
  Recklessly: $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral3(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral3(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral3(["Driving Quickly"]))),
  Observantly: $effect(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral3(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral3(["Driving Waterproofly"])))
};
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, preferInventory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!Object.values(Driving).includes(style) || !installed())
    return !1;
  if ((0, import_kolmafia8.haveEffect)(style) >= turns)
    return !0;
  var fuelNeeded = 37 * Math.ceil((turns - (0, import_kolmafia8.haveEffect)(style)) / 30);
  for ((preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded); (0, import_kolmafia8.getFuel)() >= 37 && (0, import_kolmafia8.haveEffect)(style) < turns; )
    (0, import_kolmafia8.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  return (0, import_kolmafia8.haveEffect)(style) >= turns;
}

// node_modules/libram/dist/Copier.js
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey7(descriptor.key), descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties7(Constructor.prototype, protoProps), staticProps && _defineProperties7(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty6(obj, key, value2) {
  return key = _toPropertyKey7(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey7(arg) {
  var key = _toPrimitive7(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive7(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Copier = /* @__PURE__ */ _createClass7(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck7(this, Copier2), _defineProperty6(this, "couldCopy", void 0), _defineProperty6(this, "prepare", void 0), _defineProperty6(this, "canCopy", void 0), _defineProperty6(this, "copiedMonster", void 0), _defineProperty6(this, "fightCopy", null), this.couldCopy = couldCopy, this.prepare = prepare, this.canCopy = canCopy, this.copiedMonster = copiedMonster, fightCopy && (this.fightCopy = fightCopy);
});

// node_modules/libram/dist/modifier.js
var import_kolmafia9 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"], classModifiers = ["Class"], numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"], effectModifiers = ["Effect", "Rollover Effect"], monsterModifiers = ["Avatar"], skillModifiers = ["Skill"], statModifiers = ["Plumber Stat"], stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];

// node_modules/libram/dist/modifier.js
function get2(name, subject) {
  if (arrayContains(name, booleanModifiers))
    return subject === void 0 ? (0, import_kolmafia9.booleanModifier)(name) : (0, import_kolmafia9.booleanModifier)(subject, name);
  if (arrayContains(name, classModifiers))
    return (0, import_kolmafia9.classModifier)(subject, name);
  if (arrayContains(name, effectModifiers))
    return (0, import_kolmafia9.effectModifier)(subject, name);
  if (arrayContains(name, monsterModifiers))
    return (0, import_kolmafia9.monsterModifier)(subject, name);
  if (arrayContains(name, numericModifiers))
    return subject === void 0 ? (0, import_kolmafia9.numericModifier)(name) : (0, import_kolmafia9.numericModifier)(subject, name);
  if (arrayContains(name, skillModifiers))
    return (0, import_kolmafia9.skillModifier)(subject, name);
  if (arrayContains(name, stringModifiers))
    return subject === void 0 ? (0, import_kolmafia9.stringModifier)(name) : (0, import_kolmafia9.stringModifier)(subject, name);
  if (arrayContains(name, statModifiers))
    return (0, import_kolmafia9.statModifier)(subject, name);
}

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have3;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
var import_kolmafia10 = require("kolmafia");
var _templateObject50, _templateObject213, _templateObject311, _templateObject411, _templateObject53, _templateObject63, _templateObject73, _templateObject83, _templateObject94, _templateObject104, _templateObject114, _templateObject124, _templateObject134, _templateObject143, _templateObject153, _templateObject163, _templateObject173, _templateObject183, _templateObject193, _templateObject203, _templateObject214, _templateObject223, _templateObject233, _templateObject243, _templateObject253, _templateObject263, _templateObject273;
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray8(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
}
function _arrayLikeToArray8(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral4(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral4(["Source terminal"])));
function have3() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral4(["items.enh"]))),
  Meat: $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral4(["meat.enh"]))),
  Init: $effect(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral4(["init.enh"]))),
  Critical: $effect(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral4(["critical.enh"]))),
  Damage: $effect(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral4(["damage.enh"]))),
  Substats: $effect(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral4(["substats.enh"])))
};
function enhance(buff) {
  return Object.values(Buffs).includes(buff) ? (0, import_kolmafia10.cliExecute)("terminal enhance ".concat(buff.name)) : !1;
}
var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: $effect(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral4(["familiar.enq"]))),
  /** +25 ML */
  Monsters: $effect(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral4(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral4(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral4(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  return Object.values(RolloverBuffs).includes(rolloverBuff) ? (0, import_kolmafia10.cliExecute)("terminal enquiry ".concat(rolloverBuff.name)) : !1;
}
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral4(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral4(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral4(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral4(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral4(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral4(["Turbo"])))
};
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills()))
    return !0;
  var _iterator2 = _createForOfIteratorHelper5(skillsArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var skill = _step2.value;
      if (!Object.values(Skills).includes(skill))
        return !1;
      (0, import_kolmafia10.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return !0;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(function(s) {
    return s !== "";
  }).map(function(s) {
    return import_kolmafia10.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills(), skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function(skill) {
    return currentSkills.includes(skill);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral4(["browser cookie"]))), "food.ext"], [$item(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral4(["hacked gibson"]))), "booze.ext"], [$item(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral4(["Source shades"]))), "goggles.ext"], [$item(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral4(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral4(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral4(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral4(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral4(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral4(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral4(["software bug"]))), "familiar.ext"]]);
function extrude(item3) {
  var fileName = Items.get(item3);
  return fileName ? (0, import_kolmafia10.cliExecute)("terminal extrude ".concat(fileName)) : !1;
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  return isCurrentSkill(Skills.Digitize) ? !0 : educate(Skills.Digitize);
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia10.myPath)() === import_kolmafia10.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get3;
  },
  set: function() {
    return set;
  }
});
var import_kolmafia11 = require("kolmafia");
function get3(counter) {
  var value2 = (0, import_kolmafia11.getCounter)(counter);
  return value2 === -1 ? (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() === "" ? 1 / 0 : -1 : value2;
}
function exists(counter) {
  return (0, import_kolmafia11.getCounter)(counter) !== -1 || (0, import_kolmafia11.getCounters)(counter, -1, -1).trim() !== "";
}
function set(counter, duration) {
  return (0, import_kolmafia11.cliExecute)("counters add ".concat(duration, " ").concat(counter)), get3(counter) !== null;
}

// node_modules/libram/dist/resources/2019/Snapper.js
var Snapper_exports = {};
__export(Snapper_exports, {
  getProgress: function() {
    return getProgress;
  },
  getTrackedPhylum: function() {
    return getTrackedPhylum;
  },
  have: function() {
    return have4;
  },
  itemPhylum: function() {
    return itemPhylum;
  },
  phylumItem: function() {
    return phylumItem;
  },
  trackPhylum: function() {
    return trackPhylum;
  }
});
var import_kolmafia12 = require("kolmafia");
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
}
function _iterableToArray4(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var familiar = import_kolmafia12.Familiar.get("Red-Nosed Snapper"), phylumItem = /* @__PURE__ */ new Map([[import_kolmafia12.Phylum.get("beast"), import_kolmafia12.Item.get("patch of extra-warm fur")], [import_kolmafia12.Phylum.get("bug"), import_kolmafia12.Item.get("a bug's lymph")], [import_kolmafia12.Phylum.get("constellation"), import_kolmafia12.Item.get("micronova")], [import_kolmafia12.Phylum.get("construct"), import_kolmafia12.Item.get("industrial lubricant")], [import_kolmafia12.Phylum.get("demon"), import_kolmafia12.Item.get("infernal snowball")], [import_kolmafia12.Phylum.get("dude"), import_kolmafia12.Item.get("human musk")], [import_kolmafia12.Phylum.get("elemental"), import_kolmafia12.Item.get("livid energy")], [import_kolmafia12.Phylum.get("elf"), import_kolmafia12.Item.get("peppermint syrup")], [import_kolmafia12.Phylum.get("fish"), import_kolmafia12.Item.get("fish sauce")], [import_kolmafia12.Phylum.get("goblin"), import_kolmafia12.Item.get("guffin")], [import_kolmafia12.Phylum.get("hippy"), import_kolmafia12.Item.get("organic potpourri")], [import_kolmafia12.Phylum.get("hobo"), import_kolmafia12.Item.get("beggin' cologne")], [import_kolmafia12.Phylum.get("horror"), import_kolmafia12.Item.get("powdered madness")], [import_kolmafia12.Phylum.get("humanoid"), import_kolmafia12.Item.get("vial of humanoid growth hormone")], [import_kolmafia12.Phylum.get("mer-kin"), import_kolmafia12.Item.get("Mer-kin eyedrops")], [import_kolmafia12.Phylum.get("orc"), import_kolmafia12.Item.get("boot flask")], [import_kolmafia12.Phylum.get("penguin"), import_kolmafia12.Item.get("envelope full of Meat")], [import_kolmafia12.Phylum.get("pirate"), import_kolmafia12.Item.get("Shantix\u2122")], [import_kolmafia12.Phylum.get("plant"), import_kolmafia12.Item.get("goodberry")], [import_kolmafia12.Phylum.get("slime"), import_kolmafia12.Item.get("extra-strength goo")], [import_kolmafia12.Phylum.get("undead"), import_kolmafia12.Item.get("unfinished pleasure")], [import_kolmafia12.Phylum.get("weird"), import_kolmafia12.Item.get("non-Euclidean angle")]]), itemPhylum = new Map(_toConsumableArray4(phylumItem).map(function(_ref) {
  var _ref2 = _slicedToArray6(_ref, 2), phylum = _ref2[0], item3 = _ref2[1];
  return [item3, phylum];
}));
function have4() {
  return (0, import_kolmafia12.haveFamiliar)(familiar);
}
function getTrackedPhylum() {
  return get("redSnapperPhylum");
}
function trackPhylum(phylum) {
  var currentFamiliar = (0, import_kolmafia12.myFamiliar)();
  try {
    (0, import_kolmafia12.useFamiliar)(familiar), (0, import_kolmafia12.cliExecute)("snapper ".concat(phylum));
  } finally {
    (0, import_kolmafia12.useFamiliar)(currentFamiliar);
  }
}
function getProgress() {
  return get("redSnapperProgress");
}

// node_modules/libram/dist/resources/2020/Cartography.js
var Cartography_exports = {};
__export(Cartography_exports, {
  have: function() {
    return have5;
  },
  mapMonster: function() {
    return mapMonster;
  }
});
var import_kolmafia13 = require("kolmafia");
var _templateObject51, _templateObject215;
function _taggedTemplateLiteral5(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var passive = $skill(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral5(["Comprehensive Cartography"])));
function have5() {
  return have(passive);
}
function mapMonster(location, monster) {
  if (!have5() || get("_monstersMapped") >= 3 || !(0, import_kolmafia13.canAdventure)(location) || ((0, import_kolmafia13.useSkill)($skill(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral5(["Map the Monsters"])))), !get("mappingMonsters")))
    return !1;
  for (var turns = (0, import_kolmafia13.myTurncount)(); (0, import_kolmafia13.currentRound)() < 1; ) {
    if ((0, import_kolmafia13.myTurncount)() > turns)
      throw new Error("Map the Monsters unsuccessful?");
    if ((0, import_kolmafia13.visitUrl)((0, import_kolmafia13.toUrl)(location)), (0, import_kolmafia13.handlingChoice)() && (0, import_kolmafia13.lastChoice)() === 1435)
      return (0, import_kolmafia13.runChoice)(1, "heyscriptswhatsupwinkwink=".concat(monster.id)), !0;
    (0, import_kolmafia13.runChoice)(-1, !1);
  }
  return !1;
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have6;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
var import_kolmafia14 = require("kolmafia");
var _templateObject54, _templateObject216, _templateObject313, _templateObject412, _templateObject55, _templateObject64, _templateObject74, _templateObject84, _templateObject95;
function _taggedTemplateLiteral6(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = import_kolmafia14.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia14.availableAmount)(item2) > 0;
}
function have6() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia14.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia14.toLocation)(name);
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!available())
    return null;
  var pageHtml = directlyUse(item2);
  upgrade2 && (0, import_kolmafia14.availableChoiceOptions)()[1] && (0, import_kolmafia14.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml), location = target instanceof import_kolmafia14.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  return !location || !locationsAvailable.includes(location) ? null : ((0, import_kolmafia14.handlingChoice)() || directlyUse(item2), (0, import_kolmafia14.runChoice)(2, "heythereprogrammer=".concat(location.id)), (0, import_kolmafia14.handlingChoice)() && (0, import_kolmafia14.visitUrl)("main.php"), location);
}
function upgrade() {
  directlyUse(item2);
  var canUpgrade = (0, import_kolmafia14.availableChoiceOptions)()[1] !== void 0;
  return canUpgrade && (0, import_kolmafia14.runChoice)(1), (0, import_kolmafia14.visitUrl)("main.php"), canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = directlyUse(item2);
  return (0, import_kolmafia14.visitUrl)("main.php"), checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia14.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"], UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral6(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral6(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral6(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral6(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral6(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral6(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral6(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral6(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral6(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment, difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/Clan.js
var import_kolmafia15 = require("kolmafia");
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray5(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray10(arr);
}
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
}
function _arrayLikeToArray10(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey8(descriptor.key), descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties8(Constructor.prototype, protoProps), staticProps && _defineProperties8(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty7(obj, key, value2) {
  return key = _toPropertyKey8(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey8(arg) {
  var key = _toPrimitive8(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive8(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf3(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if (typeof i == "number")
        groups[name] = result[i];
      else {
        for (var k = 0; result[i[k]] === void 0 && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits3(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      indices && (indices.groups = buildGroups(indices, this));
    }
    return result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        var group = groups[name];
        return "$" + (Array.isArray(group) ? group.join("$") : group);
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args2 = arguments;
        return typeof args2[args2.length - 1] != "object" && (args2 = [].slice.call(args2)).push(buildGroups(args2, _this)), substitution.apply(this, args2);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits3(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  return _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf3(o, p);
}
var clanIdCache = {}, toPlayerId = function(player) {
  return typeof player == "string" ? (0, import_kolmafia15.getPlayerId)(player) : player;
}, LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
}), WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
}), Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck8(this, Clan2), _defineProperty7(this, "id", void 0), _defineProperty7(this, "name", void 0), this.id = id, this.name = name;
  }
  return _createClass8(Clan2, [{
    key: "_check",
    value: function() {
      if (this.id !== (0, import_kolmafia15.getClanId)())
        throw new Error("You are no longer a member of this clan");
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function() {
      return Clan2.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function() {
      return (0, import_kolmafia15.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function() {
      this._check();
      var logs = (0, import_kolmafia15.visitUrl)("clan_log.php"), lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray7(lastFax, 4), monsterName = _lastFax[3];
      return monsterName ? import_kolmafia15.Monster.get(monsterName) : null;
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function() {
      this._check();
      var page = (0, import_kolmafia15.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia15.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), match = (0, import_kolmafia15.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN), id = (0, import_kolmafia15.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray7(match, 3), name = _match[1], degree = _match[2];
        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player), ranks = this.getRanks(), rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank)
        return !1;
      var result = (0, import_kolmafia15.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function(player) {
      this._check();
      var playerId = toPlayerId(player), result = (0, import_kolmafia15.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function() {
      this._check();
      var page = (0, import_kolmafia15.visitUrl)("clan_stash.php"), _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray7(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function(amount) {
      this._check();
      var result = (0, import_kolmafia15.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      return map.forEach(function(quantity, item3) {
        var needed = Math.max(0, quantity - (0, import_kolmafia15.availableAmount)(item3));
        if (needed === 0)
          return map.set(item3, 0);
        var foldGroup = getFoldGroup(item3), _iterator2 = _createForOfIteratorHelper6(foldGroup), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            for (var foldable = _step2.value, quantityToFold = Math.min(needed, (0, import_kolmafia15.availableAmount)(foldable)), _i3 = 0; _i3 < quantityToFold; _i3++)
              (0, import_kolmafia15.cliExecute)("fold ".concat(item3.name)), needed--;
            return map.set(item3, needed);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        (0, import_kolmafia15.refreshStash)();
        for (var _i2 = 0, _arr2 = [item3].concat(_toConsumableArray5(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2], quantityToTake = Math.min(needed, (0, import_kolmafia15.stashAmount)(matchingItem));
          if (quantityToTake !== 0) {
            if (!(0, import_kolmafia15.takeStash)(quantityToTake, matchingItem))
              return;
            if (matchingItem === item3)
              needed -= quantityToTake;
            else
              for (var i = 0; i < quantityToTake; i++)
                (0, import_kolmafia15.cliExecute)("fold ".concat(matchingItem.name)), needed--;
          }
        }
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check())
        throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      return map.forEach(function(quantity, item3) {
        (0, import_kolmafia15.retrieveItem)(quantity, item3);
        var returned = Math.min(quantity, (0, import_kolmafia15.availableAmount)(item3));
        (0, import_kolmafia15.putStash)(returned, item3), map.set(item3, quantity - returned);
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function(id) {
      var result = (0, import_kolmafia15.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif"))
        throw new Error("Could not join clan");
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function(borrowFn, returnFn, callback) {
      var borrowed = borrowFn(), map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item3) {
            var remaining = quantity - (returned.get(item3) || 0);
            remaining > 0 ? map.set(item3, remaining) : map.delete(item3);
          }), map.size > 0 && logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName == "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia15.getClanName)().toLowerCase())
          return Clan2.get();
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan)
            throw new Error("Player is not whitelisted to clan");
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else if (clanId = clanIdOrName, clanId === (0, import_kolmafia15.getClanId)())
        return Clan2.get();
      return Clan2._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function(clanIdOrName, callback) {
      var startingClan = Clan2.get(), clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function() {
      return new Clan2((0, import_kolmafia15.getClanId)(), (0, import_kolmafia15.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function() {
      var page = (0, import_kolmafia15.visitUrl)("clan_signup.php");
      return (0, import_kolmafia15.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), id = Number.parseInt((0, import_kolmafia15.xpath)(validHtml, "//@value")[0]), name = (0, import_kolmafia15.xpath)(validHtml, "//text()")[0];
        return new Clan2(id, name);
      });
    }
  }]), Clan2;
}();

// node_modules/libram/dist/session.js
var import_kolmafia16 = require("kolmafia");
var _templateObject56, _templateObject217, _templateObject314, _templateObject413, _templateObject57, _templateObject65, _templateObject75, _templateObject85, _templateObject96, _templateObject105, _templateObject115, _templateObject125, _templateObject135, _templateObject144, _templateObject154, _templateObject164, _templateObject174, _templateObject184, _templateObject194, _templateObject204, _templateObject218, _templateObject224, _templateObject234, _templateObject244, _templateObject254, _templateObject264, _templateObject274, _templateObject283, _templateObject293, _templateObject303, _templateObject315, _templateObject323, _templateObject333;
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey9(descriptor.key), descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties9(Constructor.prototype, protoProps), staticProps && _defineProperties9(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty8(obj, key, value2) {
  return key = _toPropertyKey9(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey9(arg) {
  var key = _toPrimitive9(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive9(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray11(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit8(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral7(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray11(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
}
function _iterableToArray6(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray11(arr);
}
function _arrayLikeToArray11(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function mySessionItemsWrapper() {
  for (var manyToOne = function(primary, mapped) {
    return mapped.map(function(target) {
      return [target, primary];
    });
  }, foldable = function(item4) {
    return manyToOne(item4, getFoldGroup(item4));
  }, itemMappings = new Map([].concat(_toConsumableArray6(foldable($item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral7(["liar's pants"]))))), _toConsumableArray6(foldable($item(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral7(["ice pick"]))))), _toConsumableArray6(manyToOne($item(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral7(["Spooky Putty sheet"]))), [$item(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral7(["Spooky Putty monster"])))].concat(_toConsumableArray6(getFoldGroup($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral7(["Spooky Putty sheet"])))))))), _toConsumableArray6(foldable($item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral7(["stinky cheese sword"]))))), _toConsumableArray6(foldable($item(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral7(["naughty paper shuriken"]))))), _toConsumableArray6(foldable($item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral7(["Loathing Legion knife"]))))), _toConsumableArray6(foldable($item(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral7(["deceased crimbo tree"]))))), _toConsumableArray6(foldable($item(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral7(["makeshift turban"]))))), _toConsumableArray6(foldable($item(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral7(["turtle wax shield"]))))), _toConsumableArray6(foldable($item(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral7(["metallic foil bow"]))))), _toConsumableArray6(foldable($item(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral7(["ironic moustache"]))))), _toConsumableArray6(foldable($item(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral7(["bugged balaclava"]))))), _toConsumableArray6(foldable($item(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral7(["toggle switch (Bartend)"]))))), _toConsumableArray6(foldable($item(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral7(["mushroom cap"]))))), _toConsumableArray6(manyToOne($item(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral7(["can of Rain-Doh"]))), $items(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral7(["empty Rain-Doh can"]))))), _toConsumableArray6(manyToOne($item(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral7(["meteorite fragment"]))), $items(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral7(["meteorite earring, meteorite necklace, meteorite ring"]))))), _toConsumableArray6(manyToOne($item(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral7(["Sneaky Pete's leather jacket"]))), $items(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral7(["Sneaky Pete's leather jacket (collar popped)"]))))), _toConsumableArray6(manyToOne($item(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral7(["Boris's Helm"]))), $items(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral7(["Boris's Helm (askew)"]))))), _toConsumableArray6(manyToOne($item(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral7(["Jarlsberg's pan"]))), $items(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral7(["Jarlsberg's pan (Cosmic portal mode)"]))))), _toConsumableArray6(manyToOne($item(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral7(["tiny plastic sword"]))), $items(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral7(["grogtini, bodyslam, dirty martini, vesper, cherry bomb, sangria del diablo"]))))), _toConsumableArray6(manyToOne($item(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral7(["earthenware muffin tin"]))), $items(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral7(["blueberry muffin, bran muffin, chocolate chip muffin"]))))), _toConsumableArray6(manyToOne($item(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral7(["ChibiBuddy\u2122 (on)"]))), $items(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral7(["ChibiBuddy\u2122 (off)"]))))))), inventory = /* @__PURE__ */ new Map(), _i = 0, _arr = [import_kolmafia16.mySessionItems, import_kolmafia16.getCloset, import_kolmafia16.getDisplay, import_kolmafia16.getStorage]; _i < _arr.length; _i++)
    for (var inventoryFunc = _arr[_i], _i2 = 0, _Object$entries = Object.entries(inventoryFunc()); _i2 < _Object$entries.length; _i2++) {
      var _itemMappings$get, _inventory$get, _Object$entries$_i = _slicedToArray8(_Object$entries[_i2], 2), itemStr = _Object$entries$_i[0], quantity = _Object$entries$_i[1], item3 = (0, import_kolmafia16.toItem)(itemStr), mappedItem = (_itemMappings$get = itemMappings.get(item3)) !== null && _itemMappings$get !== void 0 ? _itemMappings$get : item3;
      inventory.set(mappedItem, quantity + ((_inventory$get = inventory.get(mappedItem)) !== null && _inventory$get !== void 0 ? _inventory$get : 0));
    }
  for (var _i3 = 0, _Object$entries2 = Object.entries((0, import_kolmafia16.getCampground)()); _i3 < _Object$entries2.length; _i3++) {
    var _itemMappings$get2, _inventory$get2, _Object$entries2$_i = _slicedToArray8(_Object$entries2[_i3], 2), _itemStr = _Object$entries2$_i[0], _quantity = _Object$entries2$_i[1], _item = (0, import_kolmafia16.toItem)(_itemStr);
    if (_item !== $item(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral7(["big rock"])))) {
      var _mappedItem = (_itemMappings$get2 = itemMappings.get(_item)) !== null && _itemMappings$get2 !== void 0 ? _itemMappings$get2 : _item;
      inventory.set(_mappedItem, _quantity + ((_inventory$get2 = inventory.get(_mappedItem)) !== null && _inventory$get2 !== void 0 ? _inventory$get2 : 0));
    }
  }
  return inventory;
}
function inventoryOperation(a, b, op) {
  var difference = /* @__PURE__ */ new Map(), _iterator2 = _createForOfIteratorHelper7(new Set([].concat(_toConsumableArray6(a.keys()), _toConsumableArray6(b.keys())))), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _a$get, _b$get, item3 = _step2.value;
      difference.set(item3, op((_a$get = a.get(item3)) !== null && _a$get !== void 0 ? _a$get : 0, (_b$get = b.get(item3)) !== null && _b$get !== void 0 ? _b$get : 0));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var diffEntries = _toConsumableArray6(difference.entries());
  return new Map(diffEntries.filter(function(value2) {
    return value2[1] !== 0;
  }));
}
var Session = /* @__PURE__ */ function() {
  function Session2(meat, items) {
    _classCallCheck9(this, Session2), _defineProperty8(this, "meat", void 0), _defineProperty8(this, "items", void 0), this.meat = meat, this.items = items;
  }
  return _createClass9(Session2, [{
    key: "register",
    value: function(target, quantity) {
      if (target === "meat")
        this.meat += quantity;
      else {
        var _this$items$get;
        this.items.set(target, ((_this$items$get = this.items.get(target)) !== null && _this$items$get !== void 0 ? _this$items$get : 0) + quantity);
      }
    }
    /**
     * Value this session
     *
     * @param itemValue a function that, when given an item, will give a meat value of the item
     * @returns ItemResult with the full value of this session given the input function
     */
  }, {
    key: "value",
    value: function(itemValue) {
      var meat = Math.floor(this.meat), itemDetails = _toConsumableArray6(this.items.entries()).map(function(_ref) {
        var _ref2 = _slicedToArray8(_ref, 2), item3 = _ref2[0], quantity = _ref2[1];
        return {
          item: item3,
          quantity: quantity,
          value: itemValue(item3) * quantity
        };
      }), items = Math.floor(sum(itemDetails, "value"));
      return {
        meat: meat,
        items: items,
        total: meat + items,
        itemDetails: itemDetails
      };
    }
    /**
     * Subtract the contents of another session from this one, removing any items that have a resulting quantity of 0
     *  (this will ignore elements in b but not in a)
     *
     * @param other the session from which to pull values to remove from this session
     * @returns a new session representing the difference between this session and the other session
     */
  }, {
    key: "diff",
    value: function(other) {
      return new Session2(this.meat - other.meat, inventoryOperation(this.items, other.items, function(a, b) {
        return a - b;
      }));
    }
    /**
     * Subtract the contents of snasphot b from session a, removing any items that have a resulting quantity of 0
     *  (this will ignore elements in b but not in a)
     *
     * @param a the session from which to subtract elements
     * @param b the session from which to add elements
     * @returns a new session representing the difference between a and b
     */
  }, {
    key: "add",
    value: (
      /**
       * Generate a new session combining multiple sessions together
       *
       * @param other the session from which to add elements to this set
       * @returns a new session representing the addition of other to this
       */
      function(other) {
        return new Session2(this.meat + other.meat, inventoryOperation(this.items, other.items, function(a, b) {
          return a + b;
        }));
      }
    )
    /**
     * Combine the contents of sessions
     *
     * @param sessions the set of sessions to combine together
     * @returns a new session representing the difference between a and b
     */
  }, {
    key: "toFile",
    value: (
      /**
       * Export this session to a file in the data/ directory. Conventionally this file should end in ".json"
       *
       * @param filename The file into which to export
       */
      function(filename) {
        var val = {
          meat: this.meat,
          items: Object.fromEntries(this.items)
        };
        (0, import_kolmafia16.bufferToFile)(JSON.stringify(val), Session2.getFilepath(filename));
      }
    )
    /**
     * Import a session from a file in the data/ directory. Conventionally the file should end in ".json"
     *
     * @param filename The file from which to import
     * @returns the session represented by the file
     */
  }], [{
    key: "diff",
    value: function(a, b) {
      return a.diff(b);
    }
  }, {
    key: "add",
    value: function() {
      for (var _len = arguments.length, sessions = new Array(_len), _key = 0; _key < _len; _key++)
        sessions[_key] = arguments[_key];
      return sessions.reduce(function(previousSession, currentSession) {
        return previousSession.add(currentSession);
      });
    }
  }, {
    key: "getFilepath",
    value: function(filename) {
      return filename.endsWith(".json") ? filename : "snapshots/".concat((0, import_kolmafia16.myName)(), "/").concat((0, import_kolmafia16.todayToString)(), "_").concat(filename, ".json");
    }
  }, {
    key: "fromFile",
    value: function(filename) {
      var fileValue = (0, import_kolmafia16.fileToBuffer)(Session2.getFilepath(filename));
      if (fileValue.length > 0) {
        var val = JSON.parse(fileValue), parsedItems = Object.entries(val.items).map(function(_ref3) {
          var _ref4 = _slicedToArray8(_ref3, 2), itemStr = _ref4[0], quantity = _ref4[1];
          return [(0, import_kolmafia16.toItem)(itemStr), quantity];
        });
        return new Session2(val.meat, new Map(parsedItems));
      } else
        return new Session2(0, /* @__PURE__ */ new Map());
    }
  }, {
    key: "current",
    value: function() {
      return new Session2(sum([import_kolmafia16.mySessionMeat, import_kolmafia16.myClosetMeat, import_kolmafia16.myStorageMeat], function(f) {
        return f();
      }), mySessionItemsWrapper());
    }
  }]), Session2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
function _inherits4(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  return _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf4(o, p);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized3(self);
}
function _assertThisInitialized3(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf3(o) {
  return _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf3(o);
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray7(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _createForOfIteratorHelper8(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray12(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
}
function _arrayLikeToArray12(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties10(Constructor.prototype, protoProps), staticProps && _defineProperties10(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey10(arg) {
  var key = _toPrimitive10(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive10(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck10(this, CombatStrategy2), this.macros = /* @__PURE__ */ new Map(), this.autoattacks = /* @__PURE__ */ new Map(), this.actions = /* @__PURE__ */ new Map(), this.ccs_entries = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatStrategy2, [{
    key: "macro",
    value: function(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_macro === void 0 && (this.default_macro = []), prepend ? this.default_macro.unshift(_macro) : this.default_macro.push(_macro);
      else {
        monsters instanceof import_kolmafia17.Monster && (monsters = [monsters]);
        var _iterator2 = _createForOfIteratorHelper8(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            this.macros.has(monster) || this.macros.set(monster, []), prepend ? (_a = this.macros.get(monster)) === null || _a === void 0 || _a.unshift(_macro) : (_b = this.macros.get(monster)) === null || _b === void 0 || _b.push(_macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0)
        this.default_autoattack === void 0 && (this.default_autoattack = []), prepend ? this.default_autoattack.unshift(macro) : this.default_autoattack.push(macro);
      else {
        monsters instanceof import_kolmafia17.Monster && (monsters = [monsters]);
        var _iterator2 = _createForOfIteratorHelper8(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            this.autoattacks.has(monster) || this.autoattacks.set(monster, []), prepend ? (_a = this.autoattacks.get(monster)) === null || _a === void 0 || _a.unshift(macro) : (_b = this.autoattacks.get(monster)) === null || _b === void 0 || _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function(macro, prepend) {
      return this.starting_macro === void 0 && (this.starting_macro = []), prepend ? this.starting_macro.unshift(macro) : this.starting_macro.push(macro), this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function(_action, monsters) {
      if (monsters === void 0)
        this.default_action = _action;
      else if (monsters instanceof import_kolmafia17.Monster)
        this.actions.set(monsters, _action);
      else {
        var _iterator3 = _createForOfIteratorHelper8(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function(entry, monsters, prepend) {
      var _a, _b;
      monsters instanceof import_kolmafia17.Monster && (monsters = [monsters]);
      var _iterator4 = _createForOfIteratorHelper8(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          this.ccs_entries.has(monster) || this.ccs_entries.set(monster, []), prepend ? (_a = this.ccs_entries.get(monster)) === null || _a === void 0 || _a.unshift(entry) : (_b = this.ccs_entries.get(monster)) === null || _b === void 0 || _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function(action) {
      return action === this.default_action ? !0 : Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function() {
      var result = new CombatStrategy2();
      this.starting_macro && (result.starting_macro = _toConsumableArray7(this.starting_macro)), this.default_macro && (result.default_macro = _toConsumableArray7(this.default_macro));
      var _iterator5 = _createForOfIteratorHelper8(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray7(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.default_autoattack && (result.default_autoattack = _toConsumableArray7(this.default_autoattack));
      var _iterator6 = _createForOfIteratorHelper8(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray7(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper8(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper8(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray7(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function(resources, defaults, location) {
      var _a, _b, result = new Macro();
      this.starting_macro && result.step.apply(result, _toConsumableArray7(this.starting_macro.map(undelay)));
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value2, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray7(value2.map(undelay))));
      }), result.step(monster_macros.compile()), this.default_macro && result.step.apply(result, _toConsumableArray7(this.default_macro.map(undelay)));
      var monster_actions = new CompressedMacro();
      if (this.actions.forEach(function(action, key) {
        var _a2, _b2, macro2 = (_a2 = resources.getMacro(action)) !== null && _a2 !== void 0 ? _a2 : (_b2 = defaults == null ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        macro2 && monster_actions.add(key, new Macro().step(macro2));
      }), result.step(monster_actions.compile()), this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults == null ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        macro && result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function() {
      var result = new Macro(), monster_macros = new CompressedMacro();
      return this.autoattacks.forEach(function(value2, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray7(value2.map(undelay))));
      }), result.step(monster_macros.compile()), this.default_autoattack && result.step.apply(result, _toConsumableArray7(this.default_autoattack.map(undelay))), result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function() {
      var result = [], _iterator9 = _createForOfIteratorHelper8(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray7(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits4(CombatStrategyWithActions2, _this);
        var _super = _createSuper3(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          return _classCallCheck10(this, CombatStrategyWithActions2), _super.apply(this, arguments);
        }
        return _createClass10(CombatStrategyWithActions2);
      }(this), proto = CombatStrategyWithActions.prototype, _iterator10 = _createForOfIteratorHelper8(actions), _step10;
      try {
        var _loop = function() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; )
          _loop();
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]), CombatStrategy2;
}(), CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck10(this, CompressedMacro2), this.components = /* @__PURE__ */ new Map();
  }
  return _createClass10(CompressedMacro2, [{
    key: "add",
    value: function(monster, macro) {
      var _a, macro_text = macro.toString();
      macro_text.length !== 0 && (this.components.has(macro_text) ? (_a = this.components.get(macro_text)) === null || _a === void 0 || _a.push(monster) : this.components.set(macro_text, [monster]));
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function() {
      var result = new Macro();
      return this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      }), result;
    }
  }]), CompressedMacro2;
}(), CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck10(this, CombatResources2), this.resources = /* @__PURE__ */ new Map();
  }
  return _createClass10(CombatResources2, [{
    key: "provide",
    value: function(action, resource) {
      resource !== void 0 && this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function(action) {
      var resource = this.resources.get(action);
      if (resource !== void 0)
        return resource.do instanceof import_kolmafia17.Item ? new Macro().item(resource.do) : resource.do instanceof import_kolmafia17.Skill ? new Macro().skill(resource.do) : undelay(resource.do);
    }
  }]), CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
var import_kolmafia19 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
var import_kolmafia18 = require("kolmafia");
var _templateObject58, _templateObject219, _templateObject316, _templateObject414, _templateObject59, _templateObject66, _templateObject76, _templateObject86, _templateObject97, _templateObject106, _templateObject116, _templateObject126, _templateObject136, _templateObject145, _templateObject155, _templateObject165, _templateObject175, _templateObject185, _templateObject195, _templateObject205, _templateObject2110, _templateObject225, _templateObject235, _templateObject245, _templateObject255, _templateObject265, _templateObject275, _templateObject284, _templateObject294, _templateObject304, _templateObject317, _templateObject324, _templateObject334, _templateObject343, _templateObject352, _templateObject362, _templateObject372, _templateObject382, _templateObject392, _templateObject402, _templateObject415, _templateObject422, _templateObject432, _templateObject442, _templateObject452, _templateObject462, _templateObject472, _templateObject482, _templateObject492, _templateObject502, _templateObject512, _templateObject522, _templateObject532, _templateObject542, _templateObject552, _templateObject562, _templateObject572, _templateObject582, _templateObject592, _templateObject60, _templateObject61, _templateObject622, _templateObject632;
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), !0).forEach(function(key) {
      _defineProperty9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty9(obj, key, value2) {
  return key = _toPropertyKey11(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit9(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray13(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral8(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray13(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray13(o, minLen);
  }
}
function _iterableToArray8(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function _arrayLikeToArray13(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey11(descriptor.key), descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties11(Constructor.prototype, protoProps), staticProps && _defineProperties11(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey11(arg) {
  var key = _toPrimitive11(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive11(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: !0
}), outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia18.weaponHands)(i) : 0;
}, modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"], Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck11(this, Outfit2), this.equips = /* @__PURE__ */ new Map(), this.riders = /* @__PURE__ */ new Map(), this.modes = {}, this.skipDefaults = !1, this.modifier = [], this.avoid = [], this.bonuses = /* @__PURE__ */ new Map();
  }
  return _createClass11(Outfit2, [{
    key: "equippedAmount",
    value: (
      /**
       * Check how many of an item is equipped on the outfit.
       */
      function(item3) {
        return _toConsumableArray8(this.equips.values()).filter(function(i) {
          return i === item3;
        }).length;
      }
    )
  }, {
    key: "isAvailable",
    value: function(item3) {
      var _a;
      return !(!((_a = this.avoid) === null || _a === void 0) && _a.includes(item3) || !have(item3, this.equippedAmount(item3) + 1) || (0, import_kolmafia18.booleanModifier)(item3, "Single Equip") && this.equippedAmount(item3) > 0);
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function(item3, slot) {
      return slot === void 0 ? this.equippedAmount(item3) > 0 : this.equips.get(slot) === item3;
    }
  }, {
    key: "equipItemNone",
    value: function(item3, slot) {
      return item3 !== $item.none ? !1 : slot === void 0 ? !0 : this.equips.has(slot) ? !1 : (this.equips.set(slot, item3), !0);
    }
  }, {
    key: "equipNonAccessory",
    value: function(item3, slot) {
      if ($slots(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral8(["acc1, acc2, acc3"]))).includes((0, import_kolmafia18.toSlot)(item3)) || slot !== void 0 && slot !== (0, import_kolmafia18.toSlot)(item3) || this.equips.has((0, import_kolmafia18.toSlot)(item3)))
        return !1;
      switch ((0, import_kolmafia18.toSlot)(item3)) {
        case $slot(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral8(["off-hand"]))):
          if (this.equips.has($slot(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral8(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral8(["weapon"]))))) !== 1)
            return !1;
          break;
        case $slot(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral8(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia18.canEquip)(this.familiar, item3))
            return !1;
      }
      return (0, import_kolmafia18.toSlot)(item3) !== $slot(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral8(["familiar"]))) && !(0, import_kolmafia18.canEquip)(item3) ? !1 : (this.equips.set((0, import_kolmafia18.toSlot)(item3), item3), !0);
    }
  }, {
    key: "equipAccessory",
    value: function(item3, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray8($slots(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral8(["acc1, acc2, acc3"]))))).includes(slot) || (0, import_kolmafia18.toSlot)(item3) !== $slot(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral8(["acc1"]))) || !(0, import_kolmafia18.canEquip)(item3))
        return !1;
      if (slot === void 0) {
        var empty = $slots(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral8(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return !1;
        this.equips.set(empty, item3);
      } else {
        if (this.equips.has(slot))
          return !1;
        this.equips.set(slot, item3);
      }
      return !0;
    }
  }, {
    key: "equipUsingDualWield",
    value: function(item3, slot) {
      return ![void 0, $slot(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral8(["off-hand"])))].includes(slot) || (0, import_kolmafia18.toSlot)(item3) !== $slot(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral8(["weapon"]))) || this.equips.has($slot(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral8(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral8(["weapon"]))))) !== 1 || this.equips.has($slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral8(["off-hand"])))) || !have($skill(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral8(["Double-Fisted Skull Smashing"])))) || weaponHands(item3) !== 1 || !(0, import_kolmafia18.canEquip)(item3) ? !1 : (this.equips.set($slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral8(["off-hand"]))), item3), !0);
    }
  }, {
    key: "getHoldingFamiliar",
    value: function(item3) {
      switch ((0, import_kolmafia18.toSlot)(item3)) {
        case $slot(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral8(["weapon"]))):
          return $familiar(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral8(["Disembodied Hand"])));
        case $slot(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral8(["off-hand"]))):
          return $familiar(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral8(["Left-Hand Man"])));
        default:
          return;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function(item3) {
      var _a;
      return (_a = this.bonuses.get(item3)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns Whether the bonus was successfully asigned.
     */
  }, {
    key: "setBonus",
    value: function(item3, value2) {
      return this.bonuses.set(item3, value2), this.bonuses.get(item3) === value2;
    }
    /**
     * Adds a value to any existing bonus this item has; if it started without a bonus, sets the bonus equal to that value.
     *
     * Only triggers on items that may be equipped to this outfit.
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function(item3, value2) {
      var previous = this.getBonus(item3);
      return this.setBonus(item3, previous + value2), this.getBonus(item3);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function(item3, slot) {
      if (![void 0, $slot(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral8(["familiar"])))].includes(slot) || this.equips.has($slot(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral8(["familiar"])))) || (0, import_kolmafia18.booleanModifier)(item3, "Single Equip"))
        return !1;
      var familiar2 = this.getHoldingFamiliar(item3);
      return familiar2 === void 0 || !this.equip(familiar2) ? !1 : (this.equips.set($slot(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral8(["familiar"]))), item3), !0);
    }
  }, {
    key: "equipItem",
    value: function(item3, slot) {
      return this.haveEquipped(item3, slot) || this.equipItemNone(item3, slot) || this.isAvailable(item3) && (this.equipNonAccessory(item3, slot) || this.equipAccessory(item3, slot) || this.equipUsingDualWield(item3, slot) || this.equipUsingFamiliar(item3, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function(familiar2) {
      if (familiar2 === this.familiar)
        return !0;
      if (this.familiar !== void 0 || familiar2 !== $familiar.none && (!have(familiar2) || Array.from(this.riders.values()).includes(familiar2)))
        return !1;
      var item3 = this.equips.get($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral8(["familiar"]))));
      return item3 !== void 0 && item3 !== $item.none && !(0, import_kolmafia18.canEquip)(familiar2, item3) ? !1 : (this.familiar = familiar2, !0);
    }
  }, {
    key: "equipSpec",
    value: function(spec) {
      for (var _this$avoid, _a, _b, _c, _d, succeeded = !0, _i = 0, _outfitSlots2 = outfitSlots; _i < _outfitSlots2.length; _i++) {
        var slotName = _outfitSlots2[_i], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral8(["familiar"])))], ["offhand", $slot(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral8(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia18.toSlot)(slotName), itemOrItems = spec[slotName];
        itemOrItems !== void 0 && !this.equip(itemOrItems, slot) && (succeeded = !1);
      }
      var _iterator2 = _createForOfIteratorHelper9((_b = spec == null ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _item = _step2.value;
          this.equip(_item) || (succeeded = !1);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec == null ? void 0 : spec.familiar) !== void 0 && (this.equip(spec.familiar) || (succeeded = !1)), (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray8((_c = spec == null ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : [])), this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : !1), spec.modifier) {
        var _this$modifier;
        Array.isArray(spec.modifier) ? (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray8(spec.modifier)) : this.modifier.push(spec.modifier);
      }
      if (spec.modes && (this.setModes(spec.modes) || (succeeded = !1)), spec.riders && (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"]) && (succeeded = !1), spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"]) && (succeeded = !1)), spec.bonuses) {
        var _iterator22 = _createForOfIteratorHelper9(spec.bonuses), _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
            var _step2$value = _slicedToArray9(_step22.value, 2), item3 = _step2$value[0], value2 = _step2$value[1];
            this.addBonus(item3, value2), succeeded && (succeeded = this.bonuses.has(item3));
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function(things, slot) {
      var _this = this;
      return things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function(thing, slot) {
      var _this = this;
      return Array.isArray(thing) ? slot !== void 0 ? this.equipFirst(thing, slot) : thing.every(function(val) {
        return _this.equip(val);
      }) : thing instanceof import_kolmafia18.Item ? this.equipItem(thing, slot) : thing instanceof import_kolmafia18.Familiar ? this.equipFamiliar(thing) : thing instanceof Outfit2 ? this.equipSpec(thing.spec()) : this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value: (
      /**
       * Add a bjornified familiar to the outfit.
       *
       * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
       *
       * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
       * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
       * @returns True if we successfully set the bjorn to a valid target.
       */
      function(target) {
        var _this = this;
        var current = this.riders.get($slot(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral8(["buddy-bjorn"]))));
        if (current)
          return !!(Array.isArray(target) ? target.includes(current) : current === target);
        if (Array.isArray(target)) {
          var fam = target.find(function(f) {
            return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral8(["crown-of-thrones"])))) !== f;
          });
          return fam ? (this.riders.set($slot(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral8(["buddy-bjorn"]))), fam), !0) : !1;
        } else
          return have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target) ? (this.riders.set($slot(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral8(["buddy-bjorn"]))), target), !0) : !1;
      }
    )
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral8(["crown-of-thrones"]))));
      if (current)
        return !!(Array.isArray(target) ? target.includes(current) : current === target);
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral8(["buddy-bjorn"])))) !== f;
        });
        return fam ? (this.riders.set($slot(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral8(["crown-of-thrones"]))), fam), !0) : !1;
      } else
        return have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target) ? (this.riders.set($slot(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral8(["crown-of-thrones"]))), target), !0) : !1;
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function(modes) {
      for (var _a, _b, compatible = !0, _i2 = 0, _modeableCommands = modeableCommands2; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        mode !== "retrocape" && this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode] && (compatible = !1);
      }
      return this.modes.retrocape && modes.retrocape && (this.modes.retrocape[0] && modes.retrocape[0] && this.modes.retrocape[0] !== modes.retrocape[0] && (compatible = !1), this.modes.retrocape[1] && modes.retrocape[1] && this.modes.retrocape[1] !== modes.retrocape[1] && (compatible = !1), this.modes.retrocape[0] = (_a = this.modes.retrocape[0]) !== null && _a !== void 0 ? _a : modes.retrocape[0], this.modes.retrocape[1] = (_b = this.modes.retrocape[1]) !== null && _b !== void 0 ? _b : modes.retrocape[1]), this.modes = _objectSpread4(_objectSpread4({}, modes), this.modes), compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function(thing, slot) {
      var outfit3 = this.clone();
      return outfit3.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function(refreshed) {
      var _this = this;
      this.familiar && (0, import_kolmafia18.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values()), usedSlots = /* @__PURE__ */ new Set(), nonaccessorySlots = $slots(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral8(["weapon, off-hand, hat, back, shirt, pants, familiar"]))), bjorn = this.riders.get($slot(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral8(["buddy-bjorn"]))));
      bjorn && (this.equips.get($slot(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral8(["back"])))) === $item(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral8(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral8(["Buddy Bjorn"]))))) && (usedSlots.add($slot(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral8(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral8(["crown-of-thrones"])))));
      var crown = this.riders.get($slot(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral8(["crown-of-thrones"]))));
      crown && (this.equips.get($slot(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral8(["hat"])))) === $item(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral8(["Crown of Thrones"]))) || this.getBonus($item(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral8(["Crown of Thrones"]))))) && (usedSlots.add($slot(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral8(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral8(["crown-of-thrones"])))));
      var _iterator3 = _createForOfIteratorHelper9(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var slot = _step3.value;
          (targetEquipment.includes((0, import_kolmafia18.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia18.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia18.equippedItem)(slot)) || slot === $slot(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral8(["weapon"]))) && weaponHands((0, import_kolmafia18.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral8(["offhand"])))) && !this.equips.has($slot(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral8(["weapon"]))))) && (0, import_kolmafia18.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper9(nonaccessorySlots), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var _slot = _step4.value, equipment = this.equips.get(_slot);
          equipment && ((0, import_kolmafia18.equip)(_slot, equipment), usedSlots.add(_slot));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral8(["acc1, acc2, acc3"]))), accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item3) {
        return item3 !== void 0;
      }), missingAccessories = [], _iterator5 = _createForOfIteratorHelper9(accessoryEquips), _step5;
      try {
        var _loop = function() {
          var accessory2 = _step5.value, alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia18.equippedItem)(slot2) === accessory2;
          });
          alreadyEquipped ? usedSlots.add(alreadyEquipped) : missingAccessories.push(accessory2);
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; )
          _loop();
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3], unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0)
          throw "No accessory slots remaining";
        (0, import_kolmafia18.equip)(unusedSlot, accessory), usedSlots.add(unusedSlot);
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray8(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed && allRequirements.push(FORCE_REFRESH_REQUIREMENT), !Requirement.merge(allRequirements).maximize()) {
          if (refreshed)
            throw new Error("Failed to maximize properly!");
          (0, import_kolmafia18.cliExecute)("refresh inventory"), this._dress(!0);
          return;
        }
        (0, import_kolmafia18.logprint)("Maximize: ".concat(this.modifier));
      }
      if (applyModes(modes), bjorn && ((0, import_kolmafia18.myEnthronedFamiliar)() === bjorn && (0, import_kolmafia18.enthroneFamiliar)($familiar.none), (0, import_kolmafia18.myBjornedFamiliar)() !== bjorn && (0, import_kolmafia18.bjornifyFamiliar)(bjorn)), crown && ((0, import_kolmafia18.myBjornedFamiliar)() === crown && (0, import_kolmafia18.bjornifyFamiliar)($familiar.none), (0, import_kolmafia18.myEnthronedFamiliar)() !== crown && (0, import_kolmafia18.enthroneFamiliar)(crown)), this.familiar !== void 0 && (0, import_kolmafia18.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper9(nonaccessorySlots), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia18.equippedItem)(_slot2) !== this.equips.get(_slot2))
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper9(accessoryEquips), _step7;
      try {
        var _loop2 = function() {
          var accessory2 = _step7.value;
          if ((0, import_kolmafia18.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length)
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; )
          _loop2();
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr2 = [[$slot(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral8(["buddy-bjorn"]))), import_kolmafia18.myBjornedFamiliar], [$slot(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral8(["crown-of-thrones"]))), import_kolmafia18.myEnthronedFamiliar]]; _i4 < _arr2.length; _i4++) {
        var _arr2$_i = _slicedToArray9(_arr2[_i4], 2), rider = _arr2$_i[0], checkingFunction = _arr2$_i[1], wanted = this.riders.get(rider);
        if (wanted && checkingFunction() !== wanted)
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
      }
    }
  }, {
    key: "dress",
    value: function() {
      this._dress(!1);
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function() {
      var result = new Outfit2();
      return result.equips = new Map(this.equips), result.skipDefaults = this.skipDefaults, result.familiar = this.familiar, result.modifier = _toConsumableArray8(this.modifier), result.avoid = _toConsumableArray8(this.avoid), result.modes = _objectSpread4({}, this.modes), result.riders = new Map(this.riders), result.bonuses = new Map(this.bonuses), result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function() {
      var _a, result = {
        modifier: _toConsumableArray8(this.modifier),
        avoid: _toConsumableArray8(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread4({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      this.familiar && (result.familiar = this.familiar);
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5], entry = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral8(["familiar"])))], ["offhand", $slot(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral8(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia18.toSlot)(slotName));
        entry && (result[slotName] = entry);
      }
      var riders = {}, buddyRider = this.riders.get($slot(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral8(["buddy-bjorn"]))));
      buddyRider !== void 0 && (riders["buddy-bjorn"] = buddyRider);
      var throneRider = this.riders.get($slot(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral8(["crown-of-thrones"]))));
      return throneRider !== void 0 && (riders["crown-of-thrones"] = throneRider), (buddyRider !== void 0 || throneRider !== void 0) && (result.riders = riders), result;
    }
  }], [{
    key: "current",
    value: function() {
      var _a, outfit3 = new Outfit2(), familiar2 = (0, import_kolmafia18.myFamiliar)();
      if (outfit3.equip(familiar2))
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar2, ")");
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6], slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral8(["familiar"])))], ["offhand", $slot(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral8(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia18.toSlot)(slotName), item3 = (0, import_kolmafia18.equippedItem)(slot);
        if (!outfit3.equip(item3, slot))
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item3, ")");
      }
      return (0, import_kolmafia18.haveEquipped)($item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral8(["Crown of Thrones"])))) && outfit3.riders.set($slot(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral8(["crown-of-thrones"]))), (0, import_kolmafia18.myEnthronedFamiliar)()), (0, import_kolmafia18.haveEquipped)($item(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral8(["Buddy Bjorn"])))) && outfit3.riders.set($slot(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral8(["buddy-bjorn"]))), (0, import_kolmafia18.myBjornedFamiliar)()), outfit3.setModes(getCurrentModes2()), outfit3;
    }
  }, {
    key: "from",
    value: function(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, outfit3 = new Outfit2(), success = outfit3.equip(spec);
      if (!success && error)
        throw error;
      return success ? outfit3 : null;
    }
  }]), Outfit2;
}();
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes.backupcamera,
    umbrella: modes.umbrella,
    snowsuit: modes.snowsuit,
    edpiece: modes.edpiece,
    retrocape: (_a = modes.retrocape) === null || _a === void 0 ? void 0 : _a.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes.parka
  };
}
function getCurrentModes2() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject67;
function _taggedTemplateLiteral9(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray9(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray14(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray14(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray14(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray14(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray14(o, minLen);
  }
}
function _arrayLikeToArray14(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey12(descriptor.key), descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties12(Constructor.prototype, protoProps), staticProps && _defineProperties12(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey12(arg) {
  var key = _toPrimitive12(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive12(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var grimoireCCS = "grimoire_macro", Engine = /* @__PURE__ */ function() {
  function Engine3(tasks, options) {
    _classCallCheck12(this, Engine3), this.attempts = {}, this.propertyManager = new PropertiesManager(), this.tasks_by_name = /* @__PURE__ */ new Map(), this.cachedCcsContents = "", this.tasks = tasks, this.options = options != null ? options : {};
    var _iterator2 = _createForOfIteratorHelper10(tasks), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var task = _step2.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  return _createClass12(Engine3, [{
    key: "getNextTask",
    value: function() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function(actions) {
      for (var i = 0; i < (actions != null ? actions : 1 / 0); i++) {
        var task = this.getNextTask();
        if (!task)
          return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function() {
      this.propertyManager.resetAll(), (0, import_kolmafia19.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function(task) {
      var _a, _iterator2 = _createForOfIteratorHelper10((_a = task.after) !== null && _a !== void 0 ? _a : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var after = _step2.value, after_task = this.tasks_by_name.get(after);
          if (after_task === void 0)
            throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed())
            return !1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return !(task.ready && !task.ready() || task.completed());
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia19.print)(""), (0, import_kolmafia19.print)("Executing ".concat(task.name), "blue");
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      this.acquireItems(task), this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy(), outfit3 = this.createOutfit(task), task_resources = new CombatResources();
      this.customize(task, outfit3, task_combat, task_resources), this.dress(task, outfit3), this.setCombat(task, task_combat, task_resources), this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper10(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 || _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (this.prepare(task), this.do(task); this.shouldRepeatAdv(task); )
        _set("lastEncounter", ""), this.do(task);
      this.post(task), this.markAttempt(task), this.checkLimits(task, postcondition);
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function(task) {
      var _a, acquire = undelay(task.acquire), _iterator4 = _createForOfIteratorHelper10(acquire || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value, num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1, num_have = (0, import_kolmafia19.itemAmount)(to_get.item) + (0, import_kolmafia19.equippedAmount)(to_get.item);
          if (!(num_needed <= num_have) && !(to_get.useful !== void 0 && !to_get.useful()) && (to_get.get ? to_get.get() : to_get.price !== void 0 ? (0, import_kolmafia19.buy)(to_get.item, num_needed - num_have, to_get.price) : Object.keys((0, import_kolmafia19.getRelated)(to_get.item, "fold")).length > 0 ? (0, import_kolmafia19.cliExecute)("fold ".concat(to_get.item)) : (0, import_kolmafia19.retrieveItem)(to_get.item, num_needed), (0, import_kolmafia19.itemAmount)(to_get.item) + (0, import_kolmafia19.equippedAmount)(to_get.item) < num_needed && !to_get.optional))
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function(task) {
      var _a, effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [], songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      for (var extraSongs = Object.keys((0, import_kolmafia19.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia19.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      }); songs.length + extraSongs.length > maxSongs(); ) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0)
          break;
        uneffect(toRemove);
      }
      var _iterator5 = _createForOfIteratorHelper10(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit3 = new Outfit();
      if (spec !== void 0 && !outfit3.equip(spec) && !this.options.allow_partial_outfits)
        throw "Unable to equip all items for ".concat(task.name);
      return outfit3;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function(task, outfit3) {
      task.do instanceof import_kolmafia19.Location && (0, import_kolmafia19.setLocation)(task.do), outfit3.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function(task, outfit3, combat, resources) {
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function(task, manager) {
      for (var _a, _i = 0, _Object$entries = Object.entries((_a = task.choices) !== null && _a !== void 0 ? _a : {}); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray10(_Object$entries[_i], 2), key = _Object$entries$_i[0], func = _Object$entries$_i[1];
        func !== void 0 && manager.setChoice(parseInt(key), undelay(func));
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function(task, task_combat, task_resources) {
      var _a, macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia19.Location ? task.do : void 0);
      if (macro.save(), !this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs(), ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray9(otherCCSEntries)).join("\n");
        (0, import_kolmafia19.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n "))), ccsContents !== this.cachedCcsContents && ((0, import_kolmafia19.writeCcs)(ccsContents, grimoireCCS), (0, import_kolmafia19.cliExecute)("ccs ".concat(grimoireCCS)), this.cachedCcsContents = ccsContents);
      }
      var autoattack = task_combat.compileAutoattack();
      autoattack.toString().length > 1 ? ((0, import_kolmafia19.logprint)("Autoattack macro: ".concat(autoattack.toString())), autoattack.setAutoAttack()) : (0, import_kolmafia19.setAutoAttack)(0);
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 || _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function(task) {
      var result = typeof task.do == "function" ? task.do() : task.do;
      for (result instanceof import_kolmafia19.Location && (0, import_kolmafia19.adv1)(result, -1, ""), (0, import_kolmafia19.runCombat)(); (0, import_kolmafia19.inMultiFight)(); )
        (0, import_kolmafia19.runCombat)();
      (0, import_kolmafia19.choiceFollowsFight)() && (0, import_kolmafia19.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return task.do instanceof import_kolmafia19.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 || _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function(task) {
      task.name in this.attempts || (this.attempts[task.name] = 0), this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function(task, postcondition) {
      var _a;
      if (task.limit) {
        var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
        if (!task.completed()) {
          if (task.limit.tries && this.attempts[task.name] >= task.limit.tries)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
          if (task.limit.soft && this.attempts[task.name] >= task.limit.soft)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
          if (task.limit.turns && task.do instanceof import_kolmafia19.Location && task.do.turnsSpent >= task.limit.turns)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
          if (task.limit.unready && (!((_a = task.ready) === null || _a === void 0) && _a.call(task)))
            throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        }
        if (postcondition && !postcondition())
          throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      var _a;
      manager.set(this.getDefaultSettings()), this.options.ccs !== "" && (this.options.ccs === void 0 && (0, import_kolmafia19.readCcs)(grimoireCCS) === "" && (0, import_kolmafia19.writeCcs)("[ default ]\nabort", grimoireCCS), manager.set({
        customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
      }));
    }
  }]), Engine3;
}();
Engine.defaultSettings = {
  logPreferenceChange: !0,
  logPreferenceChangeFilter: _toConsumableArray9(new Set([].concat(_toConsumableArray9(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
    return a;
  }).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: !0,
  autoSatisfyWithNPCs: !0,
  autoSatisfyWithCoinmasters: !0,
  autoSatisfyWithStash: !1,
  dontStopForCounters: !0,
  maximizerFoldables: !0,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: !0,
  autoPinkyRing: !0,
  autoGarish: !0,
  allowNonMoodBurning: !1,
  allowSummonBurning: !0,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have($skill(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral9(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set([
  // Halloweener dog noncombats
  "Wooof! Wooooooof!",
  "Playing Fetch*",
  // June cleaver noncombats
  "Aunts not Ants",
  "Bath Time",
  "Beware of Aligator",
  "Delicious Sprouts",
  "Hypnotic Master",
  "Lost and Found",
  "Poetic Justice",
  "Summer Days",
  "Teacher's Pet",
  // Lil' Doctor™ bag noncombat
  "A Pound of Cure",
  // Turtle taming noncombats
  "Nantucket Snapper",
  "Blue Monday",
  "Capital!",
  "Training Day",
  "Boxed In",
  "Duel Nature",
  "Slow Food",
  "A Rolling Turtle Gathers No Moss",
  "Slow Road to Hell",
  "C'mere, Little Fella",
  "The Real Victims",
  "Like That Time in Tortuga",
  "Cleansing your Palette",
  "Harem Scarum",
  "Turtle in peril",
  "No Man, No Hole",
  "Slow and Steady Wins the Brawl",
  "Stormy Weather",
  "Turtles of the Universe",
  "O Turtle Were Art Thou",
  "Allow 6-8 Weeks For Delivery",
  "Kick the Can",
  "Turtles All The Way Around",
  "More eXtreme Than Usual",
  "Jewel in the Rough",
  "The worst kind of drowning",
  "Even Tamer Than Usual",
  "Never Break the Chain",
  "Close, but Yes Cigar",
  "Armchair Quarterback",
  "This Turtle Rocks!",
  "Really Sticking Her Neck Out",
  "It Came from Beneath the Sewer? Great!",
  "Don't Be Alarmed, Now",
  "Puttin' it on Wax",
  "More Like... Hurtle",
  "Musk! Musk! Musk!",
  "Silent Strolling"
]), zoneSpecificNCs = /* @__PURE__ */ new Map([
  ["The Horror...", ["Frat House"]]
  // Duplicate choice name
]);
function lastEncounterWasWanderingNC() {
  var _a, last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes(get("lastAdventure"));
  } else
    return wanderingNCs.has(last);
}

// node_modules/grimoire-kolmafia/dist/route.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), !0).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value2) {
  return key = _toPropertyKey13(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey13(arg) {
  var key = _toPrimitive13(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive13(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray15(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray15(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray15(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray15(o, minLen);
  }
}
function _arrayLikeToArray15(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _a, _b, result = [], _iterator2 = _createForOfIteratorHelper11(quests), _step2;
  try {
    var _loop = function() {
      var quest = _step2.value, questCompleted = quest.completed, _iterator3 = _createForOfIteratorHelper11(quest.tasks), _step3;
      try {
        var _loop22 = function() {
          var task2 = _step3.value, renamedTask = _objectSpread5({}, task2);
          if (renamedTask.name = "".concat(quest.name, "/").concat(task2.name), renamedTask.after = (_a = task2.after) === null || _a === void 0 ? void 0 : _a.map(function(after2) {
            return after2.includes("/") ? after2 : "".concat(quest.name, "/").concat(after2);
          }), implicitAfter && task2.after === void 0 && result.length > 0 && (renamedTask.after = [result[result.length - 1].name]), questCompleted !== void 0) {
            var taskCompleted = task2.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          result.push(renamedTask);
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; )
          _loop22();
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; )
      _loop();
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  for (var names = /* @__PURE__ */ new Set(), _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2], _iterator22 = _createForOfIteratorHelper11((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        var after = _step22.value;
        if (!names.has(after))
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
  }
  return result;
}

// node_modules/grimoire-kolmafia/dist/limit.js
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey14(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties13(Constructor.prototype, protoProps), staticProps && _defineProperties13(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey14(arg) {
  var key = _toPrimitive14(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive14(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Guards = /* @__PURE__ */ function() {
  function Guards2() {
    _classCallCheck13(this, Guards2);
  }
  return _createClass13(Guards2, null, [{
    key: "create",
    value: (
      /**
       * A guard that computes a value before the task executes which is available
       * for the condition checker.
       * @param before
       * @param after
       */
      function(before, after) {
        return function() {
          var old = before();
          return function() {
            return after(old);
          };
        };
      }
    )
    /**
     * A guard that asserts a condition holds after the task executes.
     * @param condition A condition that should return true if the task
     *    sucessfully executed.
     */
  }, {
    key: "after",
    value: function(condition) {
      return function() {
        return condition;
      };
    }
    /**
     * A guard that asserts the provided property changed.
     * @param property The property to check.
     */
  }, {
    key: "changed",
    value: function(property) {
      return this.create(function() {
        return get(property);
      }, function(old) {
        return get(property) !== old;
      });
    }
  }]), Guards2;
}();

// src/index.ts
var import_kolmafia49 = require("kolmafia");

// src/lib/cognac.ts
var import_kolmafia20 = require("kolmafia");

// src/prefs/properties.ts
var properties_exports = {};
__export(properties_exports, {
  ASDON: function() {
    return ASDON;
  },
  CLAN: function() {
    return CLAN;
  },
  COGNACS: function() {
    return COGNACS;
  },
  DIVES: function() {
    return DIVES;
  },
  HEAP_ATTEMPTS: function() {
    return HEAP_ATTEMPTS;
  },
  REFUSES_UNTIL_COMPOST: function() {
    return REFUSES_UNTIL_COMPOST;
  },
  SKIP_GARBO: function() {
    return SKIP_GARBO;
  }
});
var SCRIPT_PREFIX = "cognac", prefix = function(prop) {
  return "".concat(SCRIPT_PREFIX, "_").concat(prop);
}, privatize = function(prop) {
  return "_".concat(prefix(prop));
}, CLAN = prefix("clan"), ASDON = prefix("useAsdon"), SKIP_GARBO = prefix("skipGarbo"), REFUSES_UNTIL_COMPOST = privatize("choice216"), COGNACS = privatize("bottlesFound"), DIVES = privatize("dives"), HEAP_ATTEMPTS = privatize("heapAttempts");

// src/lib/cognac.ts
var _templateObject68;
function _taggedTemplateLiteral10(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var session = Session.current();
function printCognac() {
  var cognacs = parseInt(get(COGNACS));
  cognacs > 0 ? (0, import_kolmafia20.print)("You found ".concat(cognacs, " bottles of cognac today!"), "green") : (0, import_kolmafia20.print)("Didn't find any bottles of cognac this time. :(", "red");
}
function printDives() {
  var divesStr = get(DIVES), dives = divesStr === "" ? 0 : parseInt(divesStr), s = dives === 1 ? "" : "s";
  (0, import_kolmafia20.print)("You dove for treasure ".concat(dives, " time").concat(s, " today!"));
}
function save() {
  var _sessionDiff$items$ge, sessionDiff = Session.current().diff(session), cognacs = (_sessionDiff$items$ge = sessionDiff.items.get($item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral10(["Ralph IX cognac"]))))) !== null && _sessionDiff$items$ge !== void 0 ? _sessionDiff$items$ge : 0, cognacPref = get(COGNACS), cognacCount = cognacPref === "" ? 0 : parseInt(cognacPref);
  _set(COGNACS, cognacCount + cognacs);
}
function print4() {
  (0, import_kolmafia20.print)("Cognac summary:"), (0, import_kolmafia20.print)(""), printCognac(), printDives();
}

// src/lib/engine.ts
var import_kolmafia21 = require("kolmafia");
var _templateObject69, _templateObject220;
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), !0).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _taggedTemplateLiteral11(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey15(descriptor.key), descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties14(Constructor.prototype, protoProps), staticProps && _defineProperties14(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _get() {
  return typeof Reflect < "u" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf4(object), object !== null); )
    ;
  return object;
}
function _inherits5(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  return _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf5(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized4(self);
}
function _assertThisInitialized4(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf4(o) {
  return _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf4(o);
}
function _defineProperty11(obj, key, value2) {
  return key = _toPropertyKey15(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey15(arg) {
  var key = _toPrimitive15(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive15(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Engine2 = /* @__PURE__ */ function(_BaseEngine) {
  _inherits5(Engine3, _BaseEngine);
  var _super = _createSuper4(Engine3);
  function Engine3(tasks) {
    return _classCallCheck14(this, Engine3), _super.call(this, tasks);
  }
  return _createClass14(Engine3, [{
    key: "execute",
    value: function(task) {
      if (_get(_getPrototypeOf4(Engine3.prototype), "execute", this).call(this, task), get("lastEncounter") !== "Poetic Justice" && (0, import_kolmafia21.haveEffect)($effect(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral11(["Beaten Up"])))))
        throw "Combat lost";
      uneffect($effect(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral11(["Beaten Up"]))));
    }
  }]), Engine3;
}(Engine);
_defineProperty11(Engine2, "defaultSettings", _objectSpread6(_objectSpread6({}, Engine.defaultSettings), {}, {
  choiceAdventureScript: "scripts/cognac/choice.ash",
  hpAutoRecovery: "0.5",
  hpAutoRecoveryTarget: "1.0"
}));

// src/lib/gossip.ts
var import_kolmafia23 = require("kolmafia");

// src/lib/whiteboard.ts
var import_kolmafia22 = require("kolmafia");
function write(content) {
  return (0, import_kolmafia22.visitUrl)("clan_basement.php?action=whitewrite&whiteboard=".concat(JSON.stringify(content), "&pwd"), !0, !1);
}
function read() {
  var rawContent = (0, import_kolmafia22.visitUrl)("clan_basement.php?fromabove=1", !1), contentMatch = rawContent.match(/textarea maxlength=5000 name=whiteboard[^>]+>([^<]+)</);
  if (!contentMatch)
    return {};
  var match = contentMatch[1].replace(/ ?&quot;/g, '"').replace(/\n/g, "");
  try {
    return JSON.parse(match);
  } catch (_unused) {
    if (match.trim() === "")
      return {};
    throw "WARNING: Whiteboard contains non-JSON content. Remove it if you want to continue.";
  }
}

// src/lib/gossip.ts
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties15(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey16(descriptor.key), descriptor);
  }
}
function _createClass15(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties15(Constructor.prototype, protoProps), staticProps && _defineProperties15(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty12(obj, key, value2) {
  return key = _toPropertyKey16(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey16(arg) {
  var key = _toPrimitive16(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive16(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var BASE_STENCH_REQUIRED = 7, MS_BETWEEN_ROUNDS = 60 * 1e3, Gossip = /* @__PURE__ */ function() {
  function Gossip2() {
    _classCallCheck15(this, Gossip2), _defineProperty12(this, "players", []), _defineProperty12(this, "requestingCompost", []), _defineProperty12(this, "stench", 0), _defineProperty12(this, "diveStart", 0), _defineProperty12(this, "gameday", 0), _defineProperty12(this, "mutex", "");
  }
  return _createClass15(Gossip2, [{
    key: "init",
    value: function() {
      this.updateGossip(), this.startDay();
    }
  }, {
    key: "startDay",
    value: function() {
      this.claimMutex(0), this.gameday !== (0, import_kolmafia23.gamedayToInt)() && (this.diveStart = (0, import_kolmafia23.gametimeToInt)(), this.gameday = (0, import_kolmafia23.gamedayToInt)()), this.write();
    }
    // If callback evaluates to true, the reason we were fetching
    // the mutex has already been fulfilled.
  }, {
    key: "claimMutex",
    value: function(retries, callback) {
      if (sleep(100), this.updateGossip(), callback && callback())
        return !1;
      if (retries > 50)
        throw "Could not claim whiteboard mutex";
      return this.mutex === (0, import_kolmafia23.myName)() ? !0 : (this.mutex === "" && (this.mutex = (0, import_kolmafia23.myName)(), write(this.asRawJSON()), sleep(50), this.claimMutex(retries + 1)), this.claimMutex(retries + 1));
    }
  }, {
    key: "asRawJSON",
    value: function() {
      return {
        players: this.players,
        stench: this.stench,
        diveStart: this.diveStart,
        mutex: this.mutex,
        gameday: this.gameday,
        requestingCompost: this.requestingCompost
      };
    }
  }, {
    key: "updateGossip",
    value: function() {
      var gossip2 = read();
      this.players = gossip2.players || [], this.requestingCompost = gossip2.requestingCompost || [], this.stench = gossip2.stench || 0, this.mutex = gossip2.mutex || "", this.diveStart = gossip2.diveStart || 0, this.gameday = gossip2.gameday || 0;
    }
  }, {
    key: "write",
    value: function() {
      this.mutex = "", write(this.asRawJSON());
    }
  }, {
    key: "registered",
    value: function() {
      return this.players.some(function(player) {
        return player === "".concat((0, import_kolmafia23.myName)());
      });
    }
  }, {
    key: "register",
    value: function() {
      this.claimMutex(0), this.players.push("".concat((0, import_kolmafia23.myName)())), this.gameday !== (0, import_kolmafia23.gamedayToInt)() && (this.diveStart = (0, import_kolmafia23.gametimeToInt)(), this.gameday = (0, import_kolmafia23.gamedayToInt)()), this.write(), this.updateGossip();
    }
  }, {
    key: "incrementStench",
    value: function() {
      this.claimMutex(0), this.stench++, this.write(), this.updateGossip();
    }
  }, {
    key: "resetStench",
    value: function() {
      var _this = this;
      var applyUpdate = this.claimMutex(0, function() {
        return (0, import_kolmafia23.gametimeToInt)() < _this.diveStart;
      });
      applyUpdate && (this.stench = 0, this.diveStart = (0, import_kolmafia23.gametimeToInt)() + MS_BETWEEN_ROUNDS, this.requestingCompost = [], this.players = [], this.write(), this.updateGossip());
    }
  }, {
    key: "requestCompost",
    value: function() {
      this.claimMutex(0), this.willCompost() || this.requestingCompost.push((0, import_kolmafia23.myName)()), this.write(), this.updateGossip();
    }
  }, {
    key: "willCompost",
    value: function() {
      return this.requestingCompost.some(function(player) {
        return player === "".concat((0, import_kolmafia23.myName)());
      });
    }
  }, {
    key: "getWaitTime",
    value: function() {
      var msDelta = this.diveStart - (0, import_kolmafia23.gametimeToInt)();
      return msDelta < 0 ? 0 : msDelta / 1e3 + 1;
    }
  }, {
    key: "readyToDive",
    value: function() {
      return this.stench >= BASE_STENCH_REQUIRED + this.players.length + this.requestingCompost.length;
    }
  }, {
    key: "destroy",
    value: function() {
      this.claimMutex(0), this.mutex = "", this.players = this.players.filter(function(player) {
        return player !== (0, import_kolmafia23.myName)();
      }), write(this.asRawJSON());
    }
  }]), Gossip2;
}();
function sleep(ms) {
  for (var start = (/* @__PURE__ */ new Date()).getTime(), end = start + ms; (/* @__PURE__ */ new Date()).getTime() < end; )
    ;
}

// src/prefs/prefs.ts
var import_kolmafia24 = require("kolmafia");
function showPreferences() {
  (0, import_kolmafia24.print)("Preferences for cognac", "blue"), (0, import_kolmafia24.print)(""), Object.values(properties_exports).map(prettyPrint);
}
function prettyPrint(prop) {
  var propVal = get(prop), color = "black";
  propVal || (color = "gray"), (0, import_kolmafia24.print)("".concat(prop, ": ").concat(propVal), color);
}
function checkGarbo() {
  get(SKIP_GARBO) || parseInt(get("garboEmbezzlerCount")) > 0 || (0, import_kolmafia24.userConfirm)("You have not yet run garbo. Are you sure you wish to proceed?") || (0, import_kolmafia24.abort)("Go bonk those embezzlers real good.");
}
function checkClan() {
  if (!get(CLAN))
    throw "Please set cognac clan pref. See `cognac config`";
}

// src/quests/cognac/cognac.ts
var import_kolmafia32 = require("kolmafia");

// src/quests/shared/asdon.ts
var _templateObject70, _templateObject221;
function _taggedTemplateLiteral12(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var DriveStealthily = {
  name: "Drive Stealthily",
  completed: function() {
    return !AsdonMartin_exports.installed() || have($effect(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral12(["Driving Stealthily"]))));
  },
  do: function() {
    AsdonMartin_exports.drive($effect(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral12(["Driving Stealthily"]))));
  }
};

// src/quests/cognac/tasks/heap.ts
var import_kolmafia29 = require("kolmafia");

// src/lib/combat.ts
var import_kolmafia25 = require("kolmafia");
var _templateObject71, _templateObject226, _templateObject318, _templateObject416, _templateObject510, _templateObject610, _templateObject77;
function _taggedTemplateLiteral13(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck16(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties16(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey17(descriptor.key), descriptor);
  }
}
function _createClass16(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties16(Constructor.prototype, protoProps), staticProps && _defineProperties16(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey17(arg) {
  var key = _toPrimitive17(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive17(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits6(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  return _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf6(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized5(self);
}
function _assertThisInitialized5(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf5(o) {
  return _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf5(o);
}
var drunk = function() {
  return (0, import_kolmafia25.myInebriety)() > (0, import_kolmafia25.inebrietyLimit)();
}, Macro2 = /* @__PURE__ */ function(_LibramMacro) {
  _inherits6(Macro3, _LibramMacro);
  var _super = _createSuper5(Macro3);
  function Macro3() {
    return _classCallCheck16(this, Macro3), _super.apply(this, arguments);
  }
  return _createClass16(Macro3, [{
    key: "pickpocket",
    value: function() {
      return this.step("pickpocket");
    }
  }, {
    key: "tryItemsTogether",
    value: function(itemOrItems) {
      return have($skill(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral13(["Ambidextrous Funkslinging"])))) ? this.tryItem(itemOrItems) : Array.isArray(itemOrItems) ? this.tryItem(itemOrItems[0]).tryItem(itemOrItems[1]) : this.tryItem(itemOrItems);
    }
  }, {
    key: "stasis",
    value: function() {
      return this.trySkill($skill(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral13(["Curse of Weaksauce"])))).trySkill($skill(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral13(["Micrometeorite"])))).tryItemsTogether([$item(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral13(["Time-Spinner"]))), $item(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral13(["HOA citation pad"])))]);
    }
  }, {
    key: "attackKill",
    value: function() {
      return this.stasis().attack().repeat();
    }
  }, {
    key: "mortarShell",
    value: function() {
      return this.stasis().trySkill($skill(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral13(["Stuffed Mortar Shell"])))).tryItem($item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral13(["seal tooth"]))));
    }
  }], [{
    key: "pickpocket",
    value: function() {
      return new Macro3().pickpocket();
    }
  }, {
    key: "tryItemsTogether",
    value: function(itemOrItems) {
      return new Macro3().tryItemsTogether(itemOrItems);
    }
  }, {
    key: "stasis",
    value: function() {
      return new Macro3().stasis();
    }
  }, {
    key: "attackKill",
    value: function() {
      return new Macro3().attackKill();
    }
  }, {
    key: "mortarShell",
    value: function() {
      return new Macro3().mortarShell();
    }
  }]), Macro3;
}(Macro);
function runawayIfDrunk(macro) {
  return drunk() ? Macro2.runaway() : macro;
}

// src/lib/effects.ts
var import_kolmafia26 = require("kolmafia");
var _templateObject78, _templateObject227, _templateObject319;
function _taggedTemplateLiteral14(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function filterHave(effects) {
  return effects.filter(function(effect) {
    return have((0, import_kolmafia26.toSkill)(effect));
  });
}
function basicEffects() {
  return filterHave($effects(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral14(["Leash of Linguini, Empathy, Blood Bond, Springy Fusilli"]))));
}
function noncombatEffects() {
  return filterHave($effects(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral14(["The Sonata of Sneakiness, Smooth Movements"]))));
}
function resistanceEffects() {
  return filterHave($effects(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral14(["Elemental Saucesphere, Astral Shell"]))));
}

// src/lib/equipment.ts
var import_kolmafia27 = require("kolmafia");
var _templateObject79, _templateObject228;
function _taggedTemplateLiteral15(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function appendWineglass(equips) {
  if (!have($item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral15(["Drunkula's wineglass"])))))
    throw "You are overdrunk, but don't have a wineglass!";
  equips.push($item(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral15(["Drunkula's wineglass"]))));
}
function getEquipment(equips) {
  var equipment = equips.filter(function(it) {
    return have(it);
  });
  return (0, import_kolmafia27.myInebriety)() > (0, import_kolmafia27.inebrietyLimit)() && appendWineglass(equipment), equipment;
}

// src/lib/familiar.ts
var _templateObject80, _templateObject229, _templateObject320, _templateObject417, _templateObject511, _templateObject611, _templateObject710, _templateObject87, _templateObject98, _templateObject107;
function _taggedTemplateLiteral16(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function noncombatFamiliar() {
  return have($familiar(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral16(["Left-Hand Man"])))) && (have($item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral16(["rusted-out shootin' iron"])))) || have($item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral16(["iFlail"]))))) && have($item(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral16(["unbreakable umbrella"])))) ? $familiar(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral16(["Left-Hand Man"]))) : have($familiar(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral16(["Disembodied Hand"])))) && (have($item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral16(["fish hatchet"])))) || have($item(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral16(["bass clarinet"]))))) ? $familiar(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral16(["Disembodied Hand"]))) : $familiar(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral16(["Disgeist"])));
}

// src/lib/preparenoncom.ts
var import_kolmafia28 = require("kolmafia");
var _templateObject81;
function _taggedTemplateLiteral17(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _createForOfIteratorHelper12(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray16(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray16(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray16(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray16(o, minLen);
  }
}
function _arrayLikeToArray16(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var EFFECTIVE_NC_VALUE = 100, itemInfo = [], _iterator = _createForOfIteratorHelper12($items(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral17([""])))), _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; )
    item3 = _step.value, effect = (0, import_kolmafia28.effectModifier)(item3, "Effect"), modifier = -1 * get2("Combat Rate", effect), !(modifier <= 0) && (duration = (0, import_kolmafia28.numericModifier)(item3, "Effect Duration"), duration !== 0 && item3.tradeable && (price2 = (0, import_kolmafia28.mallPrice)(item3), !(price2 / duration > EFFECTIVE_NC_VALUE) && itemInfo.push({
      item: item3,
      modifier: modifier,
      duration: duration,
      price: price2
    })));
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var item3, effect, modifier, duration, price2, byValue = function(a, b) {
  var valA = value(a), valB = value(b);
  return valA > valB ? 1 : valA < valB ? -1 : 0;
};
itemInfo.sort(byValue);
function value(info) {
  return info.duration * info.modifier / info.price;
}
function capNonCombat() {
  for (var itemBought = !1, i = 0; i < itemInfo.length; i++) {
    var info = itemInfo[i], item3 = info.item;
    if ((0, import_kolmafia28.combatRateModifier)() <= -35)
      break;
    if (!(0, import_kolmafia28.haveEffect)(get2("Effect", item3))) {
      var bought = (0, import_kolmafia28.buy)(item3, 1, Math.min(EFFECTIVE_NC_VALUE * info.duration * info.modifier / 5, 1e4));
      if (bought > 1)
        throw "Bought too many items.";
      if (bought === 0)
        break;
      if (!(0, import_kolmafia28.use)(item3, 1))
        throw "Failed to use item";
      itemBought = !0, info.price = (0, import_kolmafia28.mallPrice)(item3);
    }
  }
  itemBought && itemInfo.sort(byValue);
}

// src/quests/cognac/tasks/heap.ts
var _templateObject88, _templateObject230, _templateObject321, _templateObject418, _templateObject513, _templateObject612;
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray17(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray17(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray17(o, minLen);
  }
}
function _iterableToArray10(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray17(arr);
}
function _arrayLikeToArray17(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck17(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties17(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey18(descriptor.key), descriptor);
  }
}
function _createClass17(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties17(Constructor.prototype, protoProps), staticProps && _defineProperties17(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty13(obj, key, value2) {
  return key = _toPropertyKey18(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey18(arg) {
  var key = _toPrimitive18(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive18(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral18(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var runaway = Macro2.trySkill($skill(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral18(["Bowl a Curveball"])))).trySkill($skill(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral18(["Asdon Martin: Spring-Loaded Front Bumper"])))).runaway(), heapEpilogue = function(gossip2) {
  get("lastEncounter") === "I Refuse!" ? (gossip2.resetStench(), _set(DIVES, get(DIVES, 0) + 1), _set(HEAP_ATTEMPTS, 0), _set(REFUSES_UNTIL_COMPOST, get(REFUSES_UNTIL_COMPOST, 0) - 1)) : get("lastEncounter") === "The Compostal Service" && gossip2.willCompost() && _set(REFUSES_UNTIL_COMPOST, 5);
}, Heap = /* @__PURE__ */ function() {
  function Heap2(gossip2) {
    _classCallCheck17(this, Heap2), _defineProperty13(this, "gossip", void 0), this.gossip = gossip2;
  }
  return _createClass17(Heap2, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Dive",
        completed: function() {
          return (0, import_kolmafia29.myAdventures)() < 1;
        },
        do: function() {
          return $location(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral18(["The Heap"])));
        },
        effects: [].concat(_toConsumableArray10(basicEffects()), _toConsumableArray10(noncombatEffects())),
        combat: new CombatStrategy().autoattack(runawayIfDrunk(runaway)),
        prepare: function() {
          capNonCombat();
        },
        outfit: function() {
          return {
            equip: getEquipment([$item(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral18(["June cleaver"]))), $item(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral18(["Greatest American Pants"]))), $item(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral18(["mafia thumb ring"])))]),
            modifier: "-combat",
            familiar: noncombatFamiliar()
          };
        },
        choices: {
          203: 2,
          214: 2,
          216: function() {
            return get(REFUSES_UNTIL_COMPOST, 0) <= 0 && _this.gossip.willCompost() ? 1 : 2;
          },
          218: 1,
          295: 2
        },
        post: function() {
          return heapEpilogue(_this.gossip);
        },
        limit: {
          guard: function() {
            return function() {
              return get(HEAP_ATTEMPTS, 0) < 50;
            };
          }
        }
      }];
    }
  }]), Heap2;
}();

// src/quests/cognac/tasks/pld.ts
var import_kolmafia30 = require("kolmafia");
var _templateObject89, _templateObject231, _templateObject325, _templateObject419, _templateObject514, _templateObject613;
function _toConsumableArray11(arr) {
  return _arrayWithoutHoles11(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray18(arr) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray18(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray18(o, minLen);
  }
}
function _iterableToArray11(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles11(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray18(arr);
}
function _arrayLikeToArray18(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck18(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties18(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey19(descriptor.key), descriptor);
  }
}
function _createClass18(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties18(Constructor.prototype, protoProps), staticProps && _defineProperties18(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty14(obj, key, value2) {
  return key = _toPropertyKey19(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey19(arg) {
  var key = _toPrimitive19(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive19(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral19(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var runaway2 = Macro2.trySkill($skill(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral19(["Bowl a Curveball"])))).trySkill($skill(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral19(["Asdon Martin: Spring-Loaded Front Bumper"])))).runaway(), PLD = /* @__PURE__ */ function() {
  function PLD2(gossip2) {
    _classCallCheck18(this, PLD2), _defineProperty14(this, "gossip", void 0), this.gossip = gossip2;
  }
  return _createClass18(PLD2, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Delay until diving",
        completed: function() {
          return _this.gossip.getWaitTime() === 0;
        },
        do: function() {
          (0, import_kolmafia30.print)("Waiting for next cognac round to begin"), (0, import_kolmafia30.wait)(_this.gossip.getWaitTime());
        }
      }, {
        name: "Increase stench",
        completed: function() {
          return _this.gossip.readyToDive();
        },
        do: function() {
          return $location(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral19(["The Purple Light District"])));
        },
        effects: [].concat(_toConsumableArray11(basicEffects()), _toConsumableArray11(noncombatEffects())),
        combat: new CombatStrategy().autoattack(runawayIfDrunk(runaway2)),
        prepare: function() {
          capNonCombat();
        },
        outfit: function() {
          return {
            equip: getEquipment([$item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral19(["June cleaver"]))), $item(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral19(["Greatest American Pants"]))), $item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral19(["mafia thumb ring"])))]),
            modifier: "-combat",
            familiar: noncombatFamiliar()
          };
        },
        choices: {
          205: 2,
          219: 2,
          223: 1,
          224: 1,
          294: 2
        },
        post: function() {
          get("lastEncounter") === "The Furtivity of My City" && _this.gossip.incrementStench();
        }
      }];
    }
  }]), PLD2;
}();

// src/quests/cognac/tasks/round.ts
var import_kolmafia31 = require("kolmafia");
function _classCallCheck19(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties19(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey20(descriptor.key), descriptor);
  }
}
function _createClass19(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties19(Constructor.prototype, protoProps), staticProps && _defineProperties19(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty15(obj, key, value2) {
  return key = _toPropertyKey20(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey20(arg) {
  var key = _toPrimitive20(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive20(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Round = /* @__PURE__ */ function() {
  function Round2(gossip2) {
    _classCallCheck19(this, Round2), _defineProperty15(this, "gossip", void 0), this.gossip = gossip2;
  }
  return _createClass19(Round2, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Request compost",
        completed: function() {
          return _this.gossip.getWaitTime() === 0 || _this.gossip.willCompost() ? !0 : get(REFUSES_UNTIL_COMPOST, 0) > 0;
        },
        do: function() {
          _this.gossip.requestCompost();
        }
      }, {
        name: "Wait",
        completed: function() {
          return _this.gossip.getWaitTime() === 0;
        },
        do: function() {
          (0, import_kolmafia31.print)("Waiting for next cognac round to begin"), (0, import_kolmafia31.wait)(_this.gossip.getWaitTime());
        }
      }];
    }
  }]), Round2;
}();

// src/quests/cognac/tasks/whiteboard.ts
function _classCallCheck20(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties20(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey21(descriptor.key), descriptor);
  }
}
function _createClass20(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties20(Constructor.prototype, protoProps), staticProps && _defineProperties20(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty16(obj, key, value2) {
  return key = _toPropertyKey21(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey21(arg) {
  var key = _toPrimitive21(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive21(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Whiteboard = /* @__PURE__ */ function() {
  function Whiteboard2(gossip2) {
    _classCallCheck20(this, Whiteboard2), _defineProperty16(this, "gossip", void 0), _defineProperty16(this, "lastCheck", (/* @__PURE__ */ new Date()).getTime()), _defineProperty16(this, "checkInterval", 5 * 1e3), this.gossip = gossip2, this.gossip.updateGossip();
  }
  return _createClass20(Whiteboard2, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Register",
        completed: function() {
          return _this.gossip.registered();
        },
        do: function() {
          _this.gossip.register();
        }
      }, {
        name: "Gossip Update",
        completed: function() {
          return (/* @__PURE__ */ new Date()).getTime() - _this.lastCheck < _this.checkInterval;
        },
        do: function() {
          _this.gossip.updateGossip(), _this.lastCheck = (/* @__PURE__ */ new Date()).getTime();
        }
      }];
    }
  }]), Whiteboard2;
}();

// src/quests/cognac/cognac.ts
function _toConsumableArray12(arr) {
  return _arrayWithoutHoles12(arr) || _iterableToArray12(arr) || _unsupportedIterableToArray19(arr) || _nonIterableSpread12();
}
function _nonIterableSpread12() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray19(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray19(o, minLen);
  }
}
function _iterableToArray12(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles12(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray19(arr);
}
function _arrayLikeToArray19(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var gossip = new Gossip(), whiteboard = new Whiteboard(gossip), pld = new PLD(gossip), heap = new Heap(gossip), round = new Round(gossip), initializedGossip = !1, gossipTask = {
  name: "Init gossip",
  completed: function() {
    return initializedGossip;
  },
  do: function() {
    gossip.init(), initializedGossip = !0;
  }
}, Cognac = {
  name: "Cognac",
  completed: function() {
    return (0, import_kolmafia32.myAdventures)() < 1;
  },
  tasks: [DriveStealthily, gossipTask].concat(_toConsumableArray12(whiteboard.getTasks()), _toConsumableArray12(round.getTasks()), _toConsumableArray12(pld.getTasks()), _toConsumableArray12(heap.getTasks()))
};

// src/quests/prologue/tasks/asdon.ts
var import_kolmafia33 = require("kolmafia");
var _templateObject90, _templateObject236, _templateObject326, _templateObject420;
function _taggedTemplateLiteral20(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var InstallAsdon = {
  name: "Install Asdon",
  completed: function() {
    return get("_workshedItemUsed") || AsdonInstalled();
  },
  do: function() {
    AsdonMartin_exports.installed() || !have($item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral20(["Asdon Martin keyfob"])))) || get(ASDON) && (0, import_kolmafia33.use)($item(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral20(["Asdon Martin keyfob"]))));
  }
}, FuelAsdon = {
  name: "Fuel Asdon",
  ready: function() {
    return (0, import_kolmafia33.getFuel)() < 50;
  },
  completed: function() {
    return !AsdonMartin_exports.installed() || have($item(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral20(["Asdon Martin keyfob"]))));
  },
  do: function() {
    AsdonMartin_exports.fillTo(50);
  }
};
function AsdonInstalled() {
  return !get(ASDON) || AsdonMartin_exports.installed() ? !0 : !have($item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral20(["Asdon Martin keyfob"]))));
}

// src/quests/prologue/tasks/autumnaton.ts
var _templateObject91, _templateObject237;
function _taggedTemplateLiteral21(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var DeployFalle = {
  name: "Deploy fall-e",
  completed: function() {
    return !AutumnAton_exports.available();
  },
  do: function() {
    AutumnAton_exports.sendTo($location(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral21(["The Haunted Conservatory"])))) || AutumnAton_exports.sendTo($location(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral21(["The Haunted Pantry"]))));
  }
};

// src/quests/prologue/tasks/latte.ts
var import_kolmafia34 = require("kolmafia");
var _templateObject99;
function _taggedTemplateLiteral22(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var RefillLatte = {
  name: "Refill Latte",
  ready: function() {
    return have($item(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral22(["latte lovers member's mug"]))));
  },
  completed: function() {
    return get("latteIngredients").toLowerCase().includes("ink") || get("_latteRefillsUsed") >= 3 ? !0 : get("latteUnlocks").split(",").includes("ink") ? !1 : !get("_latteBanishUsed") || get("_latteRefillsUsed") >= 2;
  },
  do: function() {
    var preferred = ["ink", "rawhide", "cajun", "carrot", "cinnamon", "pumpkin", "vanilla"], unlocked = get("latteUnlocks").split(",");
    (0, import_kolmafia34.cliExecute)("latte refill ".concat(preferred.filter(function(ingredient) {
      return unlocked.includes(ingredient);
    }).join(" ")));
  }
};

// src/quests/prologue/prologue.ts
var Prologue = {
  name: "Prologue",
  tasks: [InstallAsdon, FuelAsdon, DeployFalle, RefillLatte]
};

// src/quests/sewers/sewers.ts
var import_kolmafia37 = require("kolmafia");

// src/quests/sewers/tasks/acquire.ts
var import_kolmafia35 = require("kolmafia");
var _templateObject100, _templateObject238, _templateObject327, _templateObject421, _templateObject515, _templateObject614, _templateObject711, _templateObject810, _templateObject910, _templateObject108, _templateObject117, _templateObject127;
function _taggedTemplateLiteral23(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var skipDumplings = !1, skipOozo = !1, skipOiliness = !1, skipGatorskin = !1, AcquireTasks = [{
  name: "Mmm, dumpling",
  completed: function() {
    return have($item(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral23(["unfortunate dumplings"])))) || skipDumplings;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral23(["unfortunate dumplings"]))), 1, 2e4), skipDumplings = !have($item(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral23(["unfortunate dumplings"]))));
  }
}, {
  name: "Mmm, oozo",
  completed: function() {
    return have($item(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral23(["bottle of Ooze-O"])))) || skipOozo;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral23(["bottle of Ooze-O"]))), 1, 2e4), skipOozo = !have($item(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral23(["bottle of Ooze-O"]))));
  }
}, {
  name: "Get oil of oiliness",
  completed: function() {
    return have($item(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral23(["oil of oiliness"])))) || skipOiliness;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral23(["oil of oiliness"]))), 1, 1e4), skipOiliness = !have($item(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral23(["oil of oiliness"]))));
  }
}, {
  name: "Get gatorkskin umbrella",
  completed: function() {
    return have($item(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral23(["gatorskin umbrella"])))) || skipGatorskin;
  },
  do: function() {
    (0, import_kolmafia35.buy)($item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral23(["gatorskin umbrella"]))), 1, 1e4), skipGatorskin = !have($item(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral23(["gatorskin umbrella"]))));
  }
}];

// src/quests/sewers/tasks/cage.ts
var import_kolmafia36 = require("kolmafia");
var cagebait = "ASSBot", caged = !1, cage = function() {
  (0, import_kolmafia36.chatPrivate)(cagebait, "cage ".concat(get(CLAN))), (0, import_kolmafia36.wait)(60);
}, CageTasks = [{
  name: "Catch ASSBot",
  completed: function() {
    return caged;
  },
  do: function() {
    caged = !0, cage();
  }
}];

// src/quests/sewers/tasks/explore.ts
var _templateObject101, _templateObject239, _templateObject328, _templateObject423, _templateObject516, _templateObject615, _templateObject712;
function _toConsumableArray13(arr) {
  return _arrayWithoutHoles13(arr) || _iterableToArray13(arr) || _unsupportedIterableToArray20(arr) || _nonIterableSpread13();
}
function _nonIterableSpread13() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray20(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray20(o, minLen);
  }
}
function _iterableToArray13(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles13(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray20(arr);
}
function _arrayLikeToArray20(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral24(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var tryFreeRunThenAttack = Macro2.trySkill($skill(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral24(["Bowl a Curveball"])))).trySkill($skill(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral24(["Asdon Martin: Spring-Loaded Front Bumper"])))).attack().repeat(), ExploreTasks = [{
  name: "Explore sewer",
  completed: function() {
    return !1;
  },
  prepare: function() {
    capNonCombat();
  },
  do: function() {
    return $location(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral24(["A Maze of Sewer Tunnels"])));
  },
  effects: [].concat(_toConsumableArray13(basicEffects()), _toConsumableArray13(noncombatEffects())),
  combat: new CombatStrategy().autoattack(tryFreeRunThenAttack),
  outfit: function() {
    return {
      equip: getEquipment([$item(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral24(["gatorskin umbrella"]))), $item(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral24(["hobo code binder"]))), $item(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral24(["mafia thumb ring"])))]),
      modifier: "-combat",
      bonuses: /* @__PURE__ */ new Map([[$item(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral24(["mafia thumb ring"]))), 200]]),
      familiar: noncombatFamiliar()
    };
  },
  choices: {
    197: 1,
    198: 1,
    199: 1,
    211: 1,
    212: 1
  }
}];

// src/quests/sewers/sewers.ts
function _toConsumableArray14(arr) {
  return _arrayWithoutHoles14(arr) || _iterableToArray14(arr) || _unsupportedIterableToArray21(arr) || _nonIterableSpread14();
}
function _nonIterableSpread14() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray21(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray21(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray21(o, minLen);
  }
}
function _iterableToArray14(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles14(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray21(arr);
}
function _arrayLikeToArray21(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var complete = !1;
function Sewers(nocage) {
  return {
    name: "Sewers",
    completed: function() {
      return complete || (complete = !!(0, import_kolmafia37.visitUrl)("clan_hobopolis.php?place=3&pwd", !1).match(/Richard's Redoubt/)), complete;
    },
    tasks: [DriveStealthily].concat(_toConsumableArray14(nocage ? [] : CageTasks), _toConsumableArray14(AcquireTasks), _toConsumableArray14(ExploreTasks))
  };
}

// src/quests/spookyraven/spookyraven.ts
var import_kolmafia40 = require("kolmafia");

// src/quests/spookyraven/tasks/billards.ts
var _templateObject109, _templateObject240, _templateObject329, _templateObject424, _templateObject517, _templateObject616, _templateObject713;
function _toConsumableArray15(arr) {
  return _arrayWithoutHoles15(arr) || _iterableToArray15(arr) || _unsupportedIterableToArray22(arr) || _nonIterableSpread15();
}
function _nonIterableSpread15() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray22(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray22(o, minLen);
  }
}
function _iterableToArray15(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles15(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray22(arr);
}
function _arrayLikeToArray22(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral25(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function BilliarTask() {
  return {
    name: "Haunted Billiards Room",
    ready: function() {
      return have($item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral25(["Spookyraven billiards room key"]))));
    },
    completed: function() {
      return have($item(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral25(["[7302]Spookyraven library key"]))));
    },
    effects: function() {
      return [].concat(_toConsumableArray15(noncombatEffects()), _toConsumableArray15($effects(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral25(["Chalky Hand, Influence of Sphere"])))));
    },
    outfit: function() {
      return {
        equip: getEquipment([$item(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral25(["June cleaver"]))), $item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral25(["Greatest American Pants"]))), $item(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral25(["mafia thumb ring"])))]),
        modifier: "-combat",
        familiar: noncombatFamiliar()
      };
    },
    choices: {
      900: 2,
      // Lights Out
      875: 1,
      // Hustle the ghost
      1436: 2
      // Maps: go straight to hustle
    },
    combat: new CombatStrategy().autoattack(runawayIfDrunk(Macro2.runaway())),
    do: $location(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral25(["The Haunted Billiards Room"])))
  };
}

// src/quests/spookyraven/tasks/epilogue.ts
var import_kolmafia38 = require("kolmafia");
var _templateObject110;
function _taggedTemplateLiteral26(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function EpilogueTask() {
  return {
    name: "Give Lady Spookyraven Her Necklace",
    ready: function() {
      return have($item(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral26(["Lady Spookyraven's necklace"]))));
    },
    completed: function() {
      return get("questM20Necklace") === "finished";
    },
    effects: basicEffects,
    do: function() {
      (0, import_kolmafia38.visitUrl)("place.php?whichplace=manor1&action=manor1_ladys");
    },
    limit: {
      guard: Guards.changed("questM20Necklace")
    }
  };
}

// src/quests/spookyraven/tasks/library.ts
var import_kolmafia39 = require("kolmafia");

// src/quests/wander/shared/combat.ts
var _templateObject111, _templateObject241, _templateObject330, _templateObject425, _templateObject518, _templateObject617, _templateObject714, _templateObject811, _templateObject911, _templateObject1010, _templateObject118;
function _toConsumableArray16(arr) {
  return _arrayWithoutHoles16(arr) || _iterableToArray16(arr) || _unsupportedIterableToArray23(arr) || _nonIterableSpread16();
}
function _nonIterableSpread16() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray23(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray23(o, minLen);
  }
}
function _iterableToArray16(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles16(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray23(arr);
}
function _arrayLikeToArray23(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral27(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function killMacro() {
  return Macro.trySkill($skill(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral27(["Micrometeorite"])))).trySkill($skill(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral27(["Curse of Weaksauce"])))).attack().repeat();
}
function kill() {
  return new CombatStrategy().autoattack(Macro.trySkill.apply(Macro, _toConsumableArray16($skills(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral27(["Micrometeorite, Curse of Weaksauce"]))))).attack().repeat());
}
function defaultEquipment() {
  var sweatNeeded = Math.max(0, 75 - get("_sweatOutSomeBoozeUsed") - get("sweat"));
  return {
    weapon: $item(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral27(["June cleaver"]))),
    "off-hand": $item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral27(["cursed magnifying glass"]))),
    pants: sweatNeeded > 0 && have($item(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral27(["designer sweatpants"])))) ? $item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral27(["designer sweatpants"]))) : $item(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral27(["Pantsgiving"]))),
    acc1: $item(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral27(["lucky gold ring"]))),
    acc2: $item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral27(["Mr. Cheeng's spectacles"]))),
    acc3: $item(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral27(["Mr. Screege's spectacles"])))
  };
}

// src/quests/spookyraven/tasks/library.ts
var _templateObject119, _templateObject246, _templateObject331, _templateObject426, _templateObject519, _templateObject618, _templateObject715, _templateObject812, _templateObject912, _templateObject1011, _templateObject1110, _templateObject128, _templateObject137;
function _taggedTemplateLiteral28(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), !0).forEach(function(key) {
      _defineProperty17(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty17(obj, key, value2) {
  return key = _toPropertyKey22(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey22(arg) {
  var key = _toPrimitive22(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive22(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var outfit2 = function() {
  {
    var equip4 = Object.values(_objectSpread7(_objectSpread7({}, defaultEquipment()), {}, {
      shirt: $item(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral28(["Jurassic Parka"]))),
      offhand: $item(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral28(["latte lovers member's mug"]))),
      pants: $item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral28(["Greatest American Pants"])))
    }));
    return equip4 = getEquipment(equip4), {
      equip: equip4
    };
  }
};
function LibraryTask() {
  var combatStrat = new CombatStrategy().autoattack(Macro2.if_("monstername writing desk", Macro2.trySkill($skill(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral28(["Transcendent Olfaction"]))), $skill(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral28(["Gallapagosian Mating Call"])))).skill($skill(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral28(["Spit jurassic acid"]))))).trySkill($skill(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral28(["Throw Latte on Opponent"])))).runaway());
  return {
    name: "Spit Acid in Library",
    ready: function() {
      return have($item(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral28(["Jurassic Parka"])))) && have($item(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral28(["[7302]Spookyraven library key"])))) && questStep("questM20Necklace") < 4 && get("writingDesksDefeated") < 5;
    },
    completed: function() {
      return have($effect(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral28(["Everything Looks Yellow"]))));
    },
    effects: basicEffects,
    outfit: outfit2,
    choices: {
      894: 1,
      // Lights Out
      888: 4,
      // Take a Look (Rise)
      889: 5,
      // Take a Look (Fall)
      163: 4
      // Melvil Dewey
    },
    prepare: function() {
      return (0, import_kolmafia39.cliExecute)("parka acid");
    },
    combat: combatStrat,
    do: function() {
      Cartography_exports.have() && get("_monstersMapped") < 3 ? Cartography_exports.mapMonster($location(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral28(["The Haunted Library"]))), $monster(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral28(["writing desk"])))) : (0, import_kolmafia39.adv1)($location(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral28(["The Haunted Library"]))), -1, "");
    },
    limit: {
      soft: 8
    }
  };
}

// src/quests/spookyraven/spookyraven.ts
var Spookyraven = {
  name: "Spookyraven",
  completed: function() {
    return (0, import_kolmafia40.myInebriety)() > (0, import_kolmafia40.inebrietyLimit)();
  },
  tasks: [BilliarTask(), LibraryTask(), EpilogueTask()]
};

// src/quests/townsquare/townsquare.ts
var import_kolmafia43 = require("kolmafia");

// src/quests/townsquare/tasks/explore.ts
var _templateObject120, _templateObject247, _templateObject335, _templateObject427, _templateObject520, _templateObject619, _templateObject716, _templateObject813, _templateObject913, _templateObject1012;
function ownKeys8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys8(Object(source), !0).forEach(function(key) {
      _defineProperty18(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys8(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck21(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties21(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey23(descriptor.key), descriptor);
  }
}
function _createClass21(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties21(Constructor.prototype, protoProps), staticProps && _defineProperties21(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty18(obj, key, value2) {
  return key = _toPropertyKey23(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey23(arg) {
  var key = _toPrimitive23(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive23(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral29(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var elementMap = {
  hot: $effects(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral29(["Spirit of Cayenne"]))),
  cold: $effects(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral29(["Spirit of Peppermint"]))),
  stench: $effects(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral29(["Spirit of Garlic"]))),
  spooky: $effects(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral29(["Spirit of Wormwood"]))),
  sleaze: $effects(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral29(["Spirit of Bacon Grease"]))),
  normal: []
}, Explore = /* @__PURE__ */ function() {
  function Explore2(parts) {
    var _this = this;
    _classCallCheck21(this, Explore2), _defineProperty18(this, "parts", void 0), _defineProperty18(this, "targetElement", "normal"), _defineProperty18(this, "nextFightPrepped", !1), _defineProperty18(this, "baseTask", {
      do: function() {
        return _this.nextFightPrepped = !1, $location(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral29(["Hobopolis Town Square"])));
      },
      post: function() {
        return _this.parts[_this.targetElement]++;
      },
      choices: {
        200: 0,
        225: 3,
        230: 2,
        272: 2
      }
    }), this.parts = parts;
  }
  return _createClass21(Explore2, [{
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Prep hobo fight",
        completed: function() {
          return _this.nextFightPrepped;
        },
        do: function() {
          _this.targetElement = Object.keys(_this.parts).find(function(elem) {
            return _this.parts[elem] < 1;
          }), _this.nextFightPrepped = !0;
        }
      }, _objectSpread8(_objectSpread8({}, this.baseTask), {}, {
        name: "Hobo combat physical",
        completed: function() {
          return _this.targetElement !== "normal";
        },
        combat: new CombatStrategy().autoattack(Macro2.attackKill()),
        effects: [$effect(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral29(["Carol of the Bulls"])))],
        outfit: {
          equip: [$item(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral29(["Fourth of May Cosplay Saber"]))), $item(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral29(["mafia thumb ring"])))]
        }
      }), _objectSpread8(_objectSpread8({}, this.baseTask), {}, {
        name: "Hobo combat elemental",
        completed: function() {
          return _this.targetElement === "normal";
        },
        effects: function() {
          return elementMap[_this.targetElement];
        },
        combat: new CombatStrategy().autoattack(Macro2.mortarShell()),
        outfit: {
          equip: [$item(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral29(["mafia thumb ring"])))]
        }
      })];
    }
  }]), Explore2;
}();

// src/quests/townsquare/tasks/scobo.ts
var import_kolmafia41 = require("kolmafia");
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray24(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray24(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray24(o, minLen);
  }
}
function _arrayLikeToArray24(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit11(arr, i) {
  var _i = arr == null ? null : typeof Symbol < "u" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck22(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties22(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey24(descriptor.key), descriptor);
  }
}
function _createClass22(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties22(Constructor.prototype, protoProps), staticProps && _defineProperties22(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty19(obj, key, value2) {
  return key = _toPropertyKey24(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey24(arg) {
  var key = _toPrimitive24(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive24(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var talkToRichard = !0, Scobo = /* @__PURE__ */ function() {
  function Scobo2(parts) {
    _classCallCheck22(this, Scobo2), _defineProperty19(this, "parts", void 0), this.parts = parts;
  }
  return _createClass22(Scobo2, [{
    key: "processScoboParts",
    value: function(parts, html) {
      var extractMatch = function(re) {
        var matches = html.match(re);
        return matches ? parseInt(matches[1]) : 0;
      }, matchRegistry = {
        hot: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of charred/,
        cold: /Richard has[^\d]+(\d+)[<b>\\/\s]+pairs? of frozen/,
        stench: /Richard has[^\d]+(\d+)[<b>\\/\s]+pile/,
        spooky: /Richard has[^\d]+(\d+)[<b>\\/\s]+creepy/,
        sleaze: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo crotch/,
        normal: /Richard has[^\d]+(\d+)[<b>\\/\s]+hobo skin/
      };
      Object.entries(matchRegistry).map(function(_ref) {
        var _ref2 = _slicedToArray11(_ref, 2), key = _ref2[0], value2 = _ref2[1];
        return parts[key] = extractMatch(value2);
      });
    }
  }, {
    key: "getTasks",
    value: function() {
      var _this = this;
      return [{
        name: "Scobos",
        completed: function() {
          return Object.values(_this.parts).some(function(count) {
            return count < 1;
          });
        },
        do: function() {
          var html = (0, import_kolmafia41.visitUrl)("clan_hobopolis.php?preaction=simulacrum&place=3&qty=1");
          _this.processScoboParts(_this.parts, html);
        }
      }, {
        name: "Talk to Richard",
        completed: function() {
          return !talkToRichard;
        },
        do: function() {
          var html = (0, import_kolmafia41.visitUrl)("clan_hobopolis.php?place=3&action=talkrichard&whichtalk=3&pwd", !1);
          _this.processScoboParts(_this.parts, html), talkToRichard = !1;
        }
      }];
    }
  }]), Scobo2;
}();

// src/quests/townsquare/tasks/snapper.ts
var import_kolmafia42 = require("kolmafia");
var _templateObject121, _templateObject248, _templateObject336;
function _taggedTemplateLiteral30(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var snapper = $familiar(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral30(["Red-Nosed Snapper"]))), Snapper = {
  name: "Setup",
  completed: function() {
    return !have(snapper) || (0, import_kolmafia42.myFamiliar)() === $familiar(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral30(["Red-Nosed Snapper"])));
  },
  do: function() {
    Snapper_exports.trackPhylum($phylum(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral30(["Hobo"])))), (0, import_kolmafia42.useFamiliar)(snapper);
  }
};

// src/quests/townsquare/townsquare.ts
function _toConsumableArray17(arr) {
  return _arrayWithoutHoles17(arr) || _iterableToArray17(arr) || _unsupportedIterableToArray25(arr) || _nonIterableSpread17();
}
function _nonIterableSpread17() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray25(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray25(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray25(o, minLen);
  }
}
function _iterableToArray17(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles17(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray25(arr);
}
function _arrayLikeToArray25(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var scoboParts = {
  hot: 0,
  cold: 0,
  stench: 0,
  spooky: 0,
  sleaze: 0,
  normal: 0
}, scobo = new Scobo(scoboParts), explore = new Explore(scoboParts), skipTownSquare = !1, TownSquare = {
  name: "Town Square",
  completed: function() {
    return skipTownSquare || (skipTownSquare = !!(0, import_kolmafia43.visitUrl)("clan_hobopolis.php?place=8&pwd", !1).match(/The Purple Light District/)), skipTownSquare;
  },
  tasks: [DriveStealthily, Snapper].concat(_toConsumableArray17(scobo.getTasks()), _toConsumableArray17(explore.getTasks()))
};

// src/quests/wander/wander.ts
var import_kolmafia48 = require("kolmafia");

// src/quests/wander/tasks/digitized.ts
var import_kolmafia45 = require("kolmafia");

// src/quests/wander/shared/location.ts
var import_kolmafia44 = require("kolmafia");
var _templateObject129, _templateObject249, _templateObject337, _templateObject428;
function _taggedTemplateLiteral31(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function getLocation2() {
  return !have($item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral31(["Spookyraven billiards room key"])))) && (0, import_kolmafia44.canAdventure)($location(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral31(["The Haunted Kitchen"])))) ? $location(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral31(["The Haunted Kitchen"]))) : $location(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral31(["Noob Cave"])));
}

// src/quests/wander/shared/effects.ts
var _templateObject130;
function _taggedTemplateLiteral32(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray18(arr) {
  return _arrayWithoutHoles18(arr) || _iterableToArray18(arr) || _unsupportedIterableToArray26(arr) || _nonIterableSpread18();
}
function _nonIterableSpread18() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray26(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray26(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray26(o, minLen);
  }
}
function _iterableToArray18(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles18(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray26(arr);
}
function _arrayLikeToArray26(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getEffects() {
  return [].concat(_toConsumableArray18(basicEffects()), _toConsumableArray18(getLocation2() === $location(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral32(["The Haunted Kitchen"]))) ? resistanceEffects() : []));
}

// src/quests/wander/tasks/digitized.ts
var _templateObject131, _templateObject250, _templateObject338, _templateObject429, _templateObject521;
function _toConsumableArray19(arr) {
  return _arrayWithoutHoles19(arr) || _iterableToArray19(arr) || _unsupportedIterableToArray27(arr) || _nonIterableSpread19();
}
function _nonIterableSpread19() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray27(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray27(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray27(o, minLen);
  }
}
function _iterableToArray19(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles19(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray27(arr);
}
function _arrayLikeToArray27(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral33(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function shouldRedigitize() {
  var digitizesLeft = SourceTerminal_exports.getDigitizeUsesRemaining(), monsterCount = SourceTerminal_exports.getDigitizeMonsterCount() + 1, digitizeAdventuresUsed = monsterCount * (monsterCount + 1) * 5 - 3;
  return SourceTerminal_exports.have() && SourceTerminal_exports.canDigitize() && (0, import_kolmafia45.myAdventures)() / 0.96 < digitizesLeft * digitizeAdventuresUsed;
}
function meatBuffEffects() {
  var monster = SourceTerminal_exports.getDigitizeMonster(), result = getEffects();
  return monster === $monster(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral33(["Knob Goblin Embezzler"]))) && result.push.apply(result, _toConsumableArray19($effects(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral33(["Polka of Plenty, Disco Leer"]))))), result;
}
function DigitizedTask() {
  return {
    name: "Digitze",
    ready: function() {
      return SourceTerminal_exports.have() && SourceTerminal_exports.getDigitizeMonster() !== null;
    },
    completed: function() {
      return counter_exports.get("Digitize Monster") > 0;
    },
    effects: meatBuffEffects,
    outfit: function() {
      return SourceTerminal_exports.getDigitizeMonster() === $monster(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral33(["Knob Goblin Embezzler"]))) ? {
        objective: "Meat Drop"
      } : {
        equip: getEquipment(Object.values(defaultEquipment()))
      };
    },
    combat: new CombatStrategy().autoattack(function() {
      return Macro.externalIf(shouldRedigitize(), Macro.skill($skill(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral33(["Digitize"]))))).step(killMacro());
    }),
    prepare: function() {
      shouldRedigitize() && SourceTerminal_exports.educate($skill(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral33(["Digitize"]))));
    },
    do: getLocation2
  };
}

// src/quests/wander/tasks/magnifyingglass.ts
var _templateObject138, _templateObject251;
function ownKeys9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys9(Object(source), !0).forEach(function(key) {
      _defineProperty20(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys9(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty20(obj, key, value2) {
  return key = _toPropertyKey25(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey25(arg) {
  var key = _toPrimitive25(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive25(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral34(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function MagnifyingGlass() {
  return {
    name: "Magnifying Glass",
    ready: function() {
      return have($item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral34(["cursed magnifying glass"])))) && get("cursedMagnifyingGlassCount") === 13;
    },
    completed: function() {
      return get("_voidFreeFights") >= 5;
    },
    effects: getEffects,
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread9(_objectSpread9({}, defaultEquipment()), {}, {
          "off-hand": $item(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral34(["cursed magnifying glass"])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/tasks/sausage.ts
var import_kolmafia46 = require("kolmafia");
var _templateObject139, _templateObject256;
function ownKeys10(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys10(Object(source), !0).forEach(function(key) {
      _defineProperty21(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys10(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty21(obj, key, value2) {
  return key = _toPropertyKey26(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey26(arg) {
  var key = _toPrimitive26(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive26(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral35(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function SausageTask() {
  return {
    name: "Sausage Goblin",
    ready: function() {
      return have($item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral35(["Kramco Sausage-o-Matic\u2122"])))) && (0, import_kolmafia46.myInebriety)() <= (0, import_kolmafia46.inebrietyLimit)();
    },
    completed: function() {
      return getKramcoWandererChance() < 1;
    },
    effects: getEffects,
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread10(_objectSpread10({}, defaultEquipment()), {}, {
          "off-hand": $item(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral35(["Kramco Sausage-o-Matic\u2122"])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/tasks/voter.ts
var import_kolmafia47 = require("kolmafia");
var _templateObject140, _templateObject257;
function ownKeys11(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread11(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys11(Object(source), !0).forEach(function(key) {
      _defineProperty22(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys11(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty22(obj, key, value2) {
  return key = _toPropertyKey27(key), key in obj ? Object.defineProperty(obj, key, { value: value2, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value2, obj;
}
function _toPropertyKey27(arg) {
  var key = _toPrimitive27(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive27(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral36(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function VoterTask() {
  return {
    name: "Voter",
    ready: function() {
      return have($item(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral36(['"I Voted!" sticker']))));
    },
    completed: function() {
      return get("_voteFreeFights") >= 3 || (0, import_kolmafia47.totalTurnsPlayed)() % 11 !== 1 || get("lastVoteMonsterTurn") >= (0, import_kolmafia47.totalTurnsPlayed)();
    },
    effects: getEffects(),
    outfit: function() {
      return {
        equip: getEquipment(Object.values(_objectSpread11(_objectSpread11({}, defaultEquipment()), {}, {
          acc3: $item(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral36(['"I Voted!" sticker'])))
        }))),
        modifier: "-combat"
      };
    },
    combat: kill(),
    do: getLocation2
  };
}

// src/quests/wander/wander.ts
var Wander = {
  name: "Wander",
  completed: function() {
    return (0, import_kolmafia48.myInebriety)() > (0, import_kolmafia48.inebrietyLimit)();
  },
  tasks: [VoterTask(), DigitizedTask(), SausageTask(), MagnifyingGlass()]
};

// src/index.ts
var args = Args.create("Cognac", "Farming perscription strength alcohol since 2023.", {
  config: Args.flag({
    help: "Show script configuration, and exit.",
    default: !1
  }),
  nocage: Args.flag({
    help: "Do not fetch cagebait.",
    default: !1
  })
});
function main(command) {
  if (Args.fill(args, command), args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.config) {
    showPreferences();
    return;
  }
  checkGarbo(), checkClan();
  var cognacTasks = getTasks([Prologue, Wander, Spookyraven, Sewers(args.nocage), TownSquare, Cognac]), engine = new Engine2(cognacTasks), startingClan = (0, import_kolmafia49.getClanId)(), meatToCloset = (0, import_kolmafia49.myMeat)() > 1e6 ? (0, import_kolmafia49.myMeat)() - 1e6 : 0;
  try {
    var clan = get(CLAN).replace(/'/g, "&apos;");
    meatToCloset > 0 && (0, import_kolmafia49.cliExecute)("closet put ".concat(meatToCloset, " meat")), Clan.join(clan), engine.run();
  } finally {
    engine.destruct(), new Gossip().destroy(), Clan.join(startingClan), meatToCloset > 0 && (0, import_kolmafia49.cliExecute)("closet take ".concat(meatToCloset, " meat")), save(), print4();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
