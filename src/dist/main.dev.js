"use strict";

var _vue = require("vue");

var _todos = _interopRequireDefault(require("./api/todos"));

require("./assets/css/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apiTodos = new _todos["default"]();
var app = (0, _vue.createApp)({
  data: function data() {
    return {
      todos: [],
      form: {
        text: '',
        done: false
      }
    };
  },
  created: function created() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos: function fetchTodos() {
      return regeneratorRuntime.async(function fetchTodos$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(apiTodos.index());

            case 2:
              this.todos = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    createTodo: function createTodo() {
      var data;
      return regeneratorRuntime.async(function createTodo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(apiTodos.store(this.form));

            case 2:
              data = _context2.sent;
              this.todos.push(data);
              this.form.text = '';
              this.form.done = false;

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    toggleTodoStatus: function toggleTodoStatus(todo) {
      var data, index;
      return regeneratorRuntime.async(function toggleTodoStatus$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(apiTodos.update(_objectSpread({}, todo, {
                done: !todo.done
              })));

            case 2:
              data = _context3.sent;
              index = this.todos.findIndex(function (_ref) {
                var id = _ref.id;
                return id === data.id;
              });
              this.todos[index] = data;

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    destroy: function destroy(id) {
      var index;
      return regeneratorRuntime.async(function destroy$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(apiTodos.destroy({
                id: id
              }));

            case 2:
              index = this.todos.findIndex(function (todo) {
                return todo.id === id;
              });
              this.todos.splice(index, 1);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }
});
app.mount('#app');