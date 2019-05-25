'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedListNode = require('./LinkedListNode');

var _LinkedListNode2 = _interopRequireDefault(_LinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const LinkedListNode = require('./LinkedListNode');

// 线性表
var LinkedList = function () {
    function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.head = null;
        this.next = null;
    }

    _createClass(LinkedList, [{
        key: 'append',
        value: function append(value) {
            var newNode = new _LinkedListNode2.default(value);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }
            // 不为空，head tail 有值
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }, {
        key: 'travel',
        value: function travel() {
            var nodes = [];
            var currentNode = this.head;
            while (currentNode) {
                nodes.push(currentNode);
                currentNode = currentNode.next;
            }
            return nodes;
        }
    }]);

    return LinkedList;
}();

var linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(2);
linkedList.append(9);
console.log(linkedList.travel());
