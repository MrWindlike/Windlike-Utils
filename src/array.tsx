/// <reference path="declare.d.ts"/>

/**
 * @obj
 * @desc 操作数组的相关方法。所有函数不会改变实参，会返回操作后的结果。
 * @method compareLength -  比较两个数组的长度
 * @method equal -  比较两个数组的值是否相等
 * @method deleteValue -  从数组里删除第一个相应值，返回新数组
 * @method deleteValueAll -  从数组里删除所有相应值，返回新数组
 * @method deleteSomeExcept -  从数组里删除所有不匹配元素，返回新数组
 * @method map -  封装原生map
 */
 const array: array.Array = {
 	/* 比较相关函数 */
 	/**
 	 * @func
 	 * @desc 比较两个数组的长度
 	 * @return 0 - 相等
 	 * @return >0 - 第一个大于第二个的长度
 	 * @return <0 - 第一个小于第二个的长度
 	 */
 	compareLength: function(firstArray: any[], secondArray: any[]): number {
 		return firstArray.length - secondArray.length;
 	},
 	equal: function<T>(firstArray: T[], secondArray: T[]): boolean {
 		if(this.compareLength(firstArray, secondArray) !== 0) {
 			return false;
 		}

 		for(let [index, val] of firstArray.entries()) {
 			if(val !== secondArray[index]) {
 				return false;	
	 		}
	 	}

 		return true;
 	},

 	/* 删除相关函数 */
 	deleteValue: function<T>(array: T[], value: T): T[] {
 		let tempArray = [...array];
 		let index = tempArray.indexOf(value);

 		if(index !== -1) {
 			tempArray.splice(index, 1);
 		}

 		return tempArray;
 	},
 	deleteValueAll: function<T>(array: T[], value: T): T[] {
 		let nowArray = [...array];
 		let newArray = this.deleteValue(nowArray, value);

 		while(this.equal(nowArray, newArray) === false) {	
 			nowArray = newArray;
			newArray = this.deleteValue(nowArray, value); 			
 		}

 		return nowArray;
 	},
 	deleteSomeExcept: function<T>(array: T[], exceptArray: T[]): T[] {
 		let newArray: T[] = array.map(value=> exceptArray.includes(value) ? value : null);

 		newArray = this.deleteValueAll(newArray, null);

 		return newArray;
 	},
 	/* 原生封装 */
 	map: function<T>(fn: any): (array: T[])=> T[] {
 		return (array: T[])=> array.map(fn);
 	}
 };

 export default array;
 