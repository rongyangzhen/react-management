// 就是来管理数据的
const defaultState = {
  num:20
}
let reducer = (state = defaultState,action:{type:string,val:number})=>{
  //调用dispatch执行这里的的代码
  // console.log("执行了reducer");
    let newState = JSON.parse(JSON.stringify(state))

    switch(action.type){
      case "add1":
        newState.num++
        break;
      case "add2":
        newState.num+=action.val
        break;
      default:
        break;
    }



    return newState
}
export default reducer