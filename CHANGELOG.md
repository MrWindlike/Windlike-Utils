<a name="2.1.6"></a>
# 2.1.6 (2018-09-13)

## Support Tree-Shaking
```JS
import { add } from 'windlike-utils/dist/math';

add(0.1, 0.2);  // 0.3
```

### New features

<a name="2.1.0"></a>
# 2.1.0 (2018-09-05)

### New features
`Function` Module:
- add `debounce`
- add `throttle`

`Array` Module:
- add `shallowCompare`
- add `deepCompare`
- remove `equal`

`Object` Module:
- add `shallowCompare`
- add `deepCompare`
- remove `valueEqual`

`Math` Module:
- add `add`: add the incoming parameters together, and return the result.
  ```js
  utils.math.add(0.1, 0.2);  // 0.3
  ```