/*
 * TreatJS: Higher-Order Contracts for JavaScript 
 * http://proglang.informatik.uni-freiburg.de/treatjs/
 *
 * Copyright (c) 2014, Proglang, University of Freiburg.
 * http://proglang.informatik.uni-freiburg.de/treatjs/
 * All rights reserved.
 *
 * Released under the MIT license
 * http://proglang.informatik.uni-freiburg.de/treatjs/license
 *
 * Author Matthias Keil
 * http://www.informatik.uni-freiburg.de/~keilr/
 */

// Aliase - for compatibility with older versions
var IsNumber = typeOfNumber;
var IsString = typeOfString;
var IsBoolean = typeOfBoolean;
var IsObject = typeOfObject;
var IsFunction = typeOfFunction;

var IsNaN = isNaN;
var IsUndef = isUndefined;
var IsNull = isNull;

var InstanceOfFunction = instanceOfFunction;
var InstanceOfObject = instanceOfObject;
var InstanceOfArray = instanceOfArray;
var InstanceOfTarget = instanceOf;
var instanceOfTarget = instanceOf;

var True = isTrue;
var False = isFalse;

var IsArray = instanceOfArray;

var _ = TreatJS;

var GreaterThanZero = Contract.Base ( function(x) { return (x>0); }, "GreaterThanZero" );
