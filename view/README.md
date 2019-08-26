# react + typescript

## reactの書き方
1. useState使う  
stateはuseState使って書くポイ  
```
import React, {useState} form 'react'

const [count, setCount] = useState(0);
0は初期値
```

## FunctionalComponent, ClassComponent
### FunctionalComponent
- 〇可読性が高い
- 〇記述量少ない
- 〇パフォーマンスが良い
- ×ライフサイクルフックができない
