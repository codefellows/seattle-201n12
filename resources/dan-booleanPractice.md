# Boolean Practice

Evaluate the following statements. Each one should resolve to either `true` or `false`.

For complex statements, evaluate comparisons like `===` or `<=` first, then evaluate the `&&` and `||` comparisons.

```javascript
true && true
false && true
true || false
false || false
10 === 10
10 == '10'
10 === '10'
1 === 1 && 2 <= 1
'test' === 'test'
1 === 1 || 2 !== 1
true && 1 >= 1
false && 0 != 0
true || 1 === 1
'test' === 'testing'
1 !== 0 && 2 >= 1
'test' != 'testing'
'test' == 1
!(true && false)
!(1 === 1 && 0 !== 1)
!(10 === 1 || 1000 <= 1000)
!(1 !== 10 || 3 === 4)
!('testing' === 'testing' && 'Scott' == 'Cool Guy')
1 === 1 && (!('testing' == 1 || 1 === 0))
'chunky' === 'bacon' && (!(3 <= 4 || 3 === 3))
3 === 3 && (! ('testing' === 'testing' || 'JavaScript' === 'Fun'))
```