/// <reference path="declare.d.ts"/>

/**
 * @obj
 * @desc 计算各种操作花费时间。
 * @method  calculateFuncTime -  计算函数耗时
 * @method  calculateFirstPaintTime -  计算白屏时间
 */
 const timing: timing.Timing = {
 	_timing: performance.timing,

 	calculateFuncTime: function(fn: ()=> any, ...params: any[]): number {
 		let funcStart = performance.now();
 		fn(...params);
 		let funcEnd = performance.now();

 		return funcEnd - funcStart;
 	},
 	calculateFirstPaintTime: function(): number {
 		return this._timing.domLoading - this._timing.navigationStart;
 	}
 };

export default timing;
