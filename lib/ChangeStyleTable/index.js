'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	_component: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'components/ChangeStyleTable/index.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'components/ChangeStyleTable/index.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var CheckboxGroup = _antd.Checkbox.Group;

var editableTableColumn = [{
	title: 'ID',
	dataIndex: 'id',
	key: 'id'
}, {
	title: '名字',
	dataIndex: 'name',
	key: 'name'
}, {
	title: '地址',
	dataIndex: 'addr',
	key: 'addr'
}, {
	title: '说明',
	dataIndex: 'memo',
	key: 'memo'
}];
var oldColumns = [{
	title: 'ID',
	dataIndex: 'id',
	key: 'id'
}, {
	title: '名字',
	dataIndex: 'name',
	key: 'name'
}, {
	title: '地址',
	dataIndex: 'addr',
	key: 'addr'
}, {
	title: '说明',
	dataIndex: 'memo',
	key: 'memo'
}];
var editableTableColumnData = [{
	id: 1,
	name: '张三',
	addr: '河南',
	memo: '帅'
}, {
	id: 2,
	name: '李四',
	addr: '河南',
	memo: '贼帅'
}, {
	id: 3,
	name: '王五',
	addr: '杭州',
	memo: '丑'
}];
Array.prototype.remove = function (dx) {
	if (isNaN(dx) || dx > this.length) {
		return false;
	}
	for (var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[dx]) {
			this[n++] = this[i];
		}
	}
	this.length -= 1;
};
var EditableTable = _wrapComponent('_component')(_react3.default.createClass({
	displayName: 'EditableTable',
	getInitialState: function getInitialState(props) {
		return {
			visible: true
		};
	},
	getkey: function getkey(title) {
		var ret = undefined;
		oldColumns.map(function (column) {
			if (column.title === title) {
				ret = column.key;
			}
		});
		return ret;
	},
	getDataIndex: function getDataIndex(title) {
		var ret = undefined;
		oldColumns.map(function (column) {
			if (column.title === title) {
				ret = column.dataIndex;
			}
		});
		return ret;
	},
	onChange: function onChange(value) {
		var editableTableColumnArray = [];
		editableTableColumn.map(function (column) {
			editableTableColumnArray.push(column.title);
		});
		if (value.length <= editableTableColumn.length) {
			_ramda2.default.difference(editableTableColumnArray, value).map(function (deletedColumn) {
				for (var i = 0; i < oldColumns.length; i++) {
					oldColumns[i].title === deletedColumn ? editableTableColumn.remove(i) : '';
				}
			});
		} else {
			var title = _ramda2.default.difference(value, editableTableColumnArray).join('');
			var dataIndex = this.getDataIndex(title);
			console.log(dataIndex, title);
			var key = this.getkey(title);
			editableTableColumn.push({
				title: title,
				dataIndex: dataIndex,
				key: key
			});
		}
		this.setState({});
	},
	handleChange: function handleChange(value) {
		console.log('selected ' + value);
		if (value === 'line') {
			this.setState({
				bordered: true
			});
		} else if (value = 'none') {
			this.setState({
				bordered: false
			});
		}
	},
	render: function render() {
		return _react3.default.createElement(
			'div',
			null,
			_react3.default.createElement(_antd.Table, { columns: editableTableColumn, dataSource: editableTableColumnData, bordered: this.state.bordered }),
			_react3.default.createElement(
				_antd.Select,
				{ showSearch: true,
					style: { width: 200 },
					placeholder: '请选择边框样式',
					optionFilterProp: 'children',
					notFoundContent: '无法找到',
					searchPlaceholder: '输入关键词',
					onChange: this.handleChange },
				_react3.default.createElement(
					Option,
					{ value: 'line' },
					'实线'
				),
				_react3.default.createElement(
					Option,
					{ value: 'dot' },
					'虚线'
				),
				_react3.default.createElement(
					Option,
					{ value: 'none' },
					'无样式'
				)
			)
		);
	}
}));
exports.default = EditableTable;

module.exports = exports['default'];