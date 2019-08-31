# React
## Tailwind
`npm install tailwindcss`
## ReactRouter
typesも入れないと認識してくれなかった。  
`npm install -S react-router-dom @types/react-router-dom`
- 認可を設定する場合
```typescript jsx
<Auth>
    <Switch>
        認可時に表示したいコンテンツ
    </Switch>
</Auth>


// Authモジュール
import {Redirect, SwitchProps} from 'react-router-dom';

const Auth: React.FC = (props: SwitchProps) => {
    const user = {
        signIn: true
    };
    return (
        <div>
            {
                user.signIn ? props.children : <Redirect to={'/login'} />
            }
        </div>
    )
};
```

- withRouter const でエラー出るよー  
RouteComponentPropsをPropsとする。