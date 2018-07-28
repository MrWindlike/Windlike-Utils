## Verification
```ts
interface VerificationModule {
  readonly _phoneRE: RegExp;
  readonly _emailRE: RegExp;

  checkRe: (re: RegExp) => (checkedStr: string) => boolean;
  checkLength: (min: number, max: number) => (str: string) => boolean;
  check: (checkType: CheckType) => (checkedStr: string) => boolean;
  [prop: string]: any
}

type CheckType = 'phone' | 'email';
```

### checkRe
#### Describe
创建检测字符串是否匹配正则表达式的函数。
```ts
(re: RegExp) => (checkedStr: string) => boolean;
```

#### Arguments
  - re(RegExp)

#### Returns
(```(checkedStr: string) => boolean```): 判断是否匹配正则的函数。

#### Example
```ts
const checkFunction = utils.verification.checkRe(/<[\s\S]*?(script)[\s\S]*?>/);

checkFunction('<script></script>');  // true
checkFunction('<script src="src/script.js"></script>');  // true
checkFunction('<script src="src/script.js"/>');  // true
```

### checkLength
#### Describe
创建检测字符串是否符合长度的函数。
```ts
(min: number, max: number) => (str: string) => boolean;
```

#### Arguments
  - min(number)
  - max(number)

#### Returns
(```(str: string) => boolean```): 判断字符串是否符合长度的函数。

#### Example
```ts
const checkStringLength = utils.verification.checkLength(1, 5);

checkStringLength('windlike');  // false
checkStringLength('wind');  // true
```

### check
#### Describe
创建检测字符串是否符合响应类型的函数。
```ts
type CheckType = 'phone' | 'email';

(checkType: CheckType) => (checkedStr: string) => boolean;
```

#### Arguments
  - checkType(CheckType): 类型，可选：'phone'、'email'

#### Returns
(```(checkedStr: string) => boolean```): 判断字符串是否符合类型的函数。

#### Example
```ts
const checkPhone = utils.verification.check('phone');
const checkEmail = utils.verification.check('email');

checkPhone('13800000000');  // true
checkEmail('windlike@windlike.com');  // true
```