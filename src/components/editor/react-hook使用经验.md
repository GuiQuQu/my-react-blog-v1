## useMemo
const var = useMemo(()=>value,[a,...]) 拥有暂存能力,当a...不变的时候,var不会改变,从而也就不会触发重新渲染
## useCallBack
useMemo的语法糖
## useEffect
useEffect 实现类组件中类似的生命周期
## useState 
useState 实现类组件中的state
## useReducer

useRedcuer，轻量的redux

useReducer 返回一个状态对象和一个可以改变状态对象的dispatch函数

跟redux类似的，dispatch函数接受action作为参数，action包含type和payload属性

传入内容:reducer函数,和整合的变量

dispatch函数接受action作为参数，action包含type和payload属性

```javascript
const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,P
    data: initialData,
  });
```
# Reducer