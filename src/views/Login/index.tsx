import { ChangeEvent, useEffect, useState } from "react"
import { Input,Space,Button } from 'antd';
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less'
const view = ()=>{

  // 加载完这个组件之后，加载背景
  useEffect(()=>{
    initLoginBg();
    window.onresize = function(){initLoginBg()};
  },[]);
  // 获取用户输入的信息
  const [usernameVal,setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
  const [passwordVal,setPasswordVal] = useState(""); // 定义用户输入密码这个变量
  const [captchaVal,setCaptchaVal] = useState(""); // 定义用户输入验证码这个变量
  const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    // 获取用户输入的用户名
    // console.log(e.target.value);
    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    setUsernameVal(e.target.value);
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setPasswordVal(e.target.value);
  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCaptchaVal(e.target.value);
  }
  // 点击登录按钮的事件
  const gotoLogin = ()=>{
    console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchaVal);
  }

  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display:"block"}}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>前端乐哥&nbsp;·&nbsp;通用后台系统</h1>
              <p>Strive Everyday</p>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名" onChange={usernameChange}/>
              <Input.Password placeholder="密码" onChange={passwordChange}/>
              {/* 验证码盒子 */}
              <div className="captchaBox">
                <Input placeholder="验证码" onChange={captchaChange}/>
                <div className="captchaImg">
                  <img height="38" src="data:image/gif;base64,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" alt="" />
                </div>
              </div>
              <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}
export default view