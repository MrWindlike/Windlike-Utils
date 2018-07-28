## Date
```ts
interface DateModule {
  createFormatDate: (format: string) => (date: number) => string;
}
```

### createFormatDate
#### Describe
创建格式化日期的函数。
```ts
(format: string) => (date: number) => string;
```

#### Arguments
  - format(string): 日期的格式。Y:年;M:月;D:日;h:时;m:分;s:秒;w:星期(英);W:星期(中)。

#### Returns
(```(ms: number) => string;```): 需要传入毫秒数作为参数的函数，返回格式化后的日期字符串。

#### Example
```ts
const ms = 837043200000;  // 1996-07-11 08:00:00

utils.date.createFormatDate('YYYY-MM-DD hh:mm:ss w')(ms);  // 1996-07-11 08:00:00 Thur.
utils.date.createFormatDate('YY-MM-DD hh:mm:ss W')(ms);  // 96-07-11 08:00:00 星期四
```