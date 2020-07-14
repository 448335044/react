import React, {Component} from 'react'


import { Form, Input, Button, Checkbox } from 'antd';
// 引入login-css文件
import './login.less'

export default class Login extends Component {

    

    render() {

        // const layout = {
        //     labelCol: {
        //       span: 8,
        //     },
        //     wrapperCol: {
        //       span: 16,
        //     },
        //   };
        //   const tailLayout = {
        //     wrapperCol: {
        //       offset: 8,
        //       span: 16,
        //     },
        //   };
          
        //   const Demo = () => {
        //     const onFinish = values => {
        //       console.log('Success:', values);
        //     };
          
        //     const onFinishFailed = errorInfo => {
        //       console.log('Failed:', errorInfo);
        //     }

      return (
        <div className='login'>
            {/* <Form
                name="basic"
               

                >
                <Form.Item
                    label="Username"
                    name="username"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                   
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item  name="remember" >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" >
                    Submit
                    </Button>
                </Form.Item>
            </Form> */}
        </div>
      )
    }
}