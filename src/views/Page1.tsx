import {useSelector, useDispatch} from "react-redux"

const View = () => {
  // 通过useSelector获取仓库数据
  const {num} = useSelector((state:RootState)=>({
    num:state.num
  }))
  // 通过useDispatch修改仓库数据
  const dispatch = useDispatch()
  const changeNum = () =>{
    // dispatch({type:"字符串(认为是一个记号)",val:3})   type是固定的  val是自定义的
    // dispatch({type:"add1"})
    dispatch({type:"add2",val:10})
  }
  return(
    <div className='home'>
        <p>这是Page1页面内容</p>
        <p>{num}</p>
        <button onClick={changeNum}>按钮</button>
    </div>
  )
}

export default View