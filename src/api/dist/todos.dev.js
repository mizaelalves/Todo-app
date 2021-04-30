"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("../utils/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todos =
/*#__PURE__*/
function () {
  function Todos() {
    _classCallCheck(this, Todos);
  }

  _createClass(Todos, [{
    key: "index",
    value: function index() {
      var _ref, data;

      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get('/todos'));

            case 2:
              _ref = _context.sent;
              data = _ref.data;
              return _context.abrupt("return", data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "store",
    value: function store(_ref2) {
      var text, done, _ref3, data;

      return regeneratorRuntime.async(function store$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              text = _ref2.text, done = _ref2.done;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].post('/todos', {
                text: text,
                done: done
              }));

            case 3:
              _ref3 = _context2.sent;
              data = _ref3.data;
              return _context2.abrupt("return", data);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(_ref4) {
      var id, text, done, _ref5, data;

      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref4.id, text = _ref4.text, done = _ref4.done;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].put("/todos/".concat(id), {
                id: id,
                text: text,
                done: done
              }));

            case 3:
              _ref5 = _context3.sent;
              data = _ref5.data;
              return _context3.abrupt("return", data);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy(_ref6) {
      var id;
      return regeneratorRuntime.async(function destroy$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref6.id;
              _context4.next = 3;
              return regeneratorRuntime.awrap(_axios["default"]["delete"]("/todos/".concat(id)));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return Todos;
}();

exports["default"] = Todos;