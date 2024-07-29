import React from 'react'
import { Card, Flex, Typography, Form, Input, Button, Alert } from 'antd'
import { Link } from 'react-router-dom'

const Register = () => {
        const handleRegister = (values) => {
            console.log(values)
        }
    return (
        <Card className='form-container'>
            <Flex gap="large">
                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className="title">
                        Create an account
                    </Typography.Title>
                    <Typography.Text type="secondary" strong className="slogan">
                        Join for exclusive access!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
                        <Form.Item label="Full Name" name="name" rules={[
                            {
                                required: true,
                                messsage: 'Please input your full name!',
                            },
                            ]}>
                            <Input size="large" placeholder="Enter your full name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[
                            {
                                required: true,
                                messsage: 'please input your Email!',
                            },
                            {
                                type: 'email',
                                message: 'The input is not valid Email!',
                            }
                            ]}>
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>  
                        <Form.Item label="Password" name="password" rules={[
                            {
                                required: true,
                                messsage: 'please input your Password!',
                            }
                            ]}>
                            <Input.Password size="large" placeholder="Enter your password" />
                        </Form.Item>  
                        <Form.Item label="Password" name="passwordConfirm" rules={[
                            {
                                required: true,
                                messsage: 'please input your Confirm Password!',
                            }
                            ]}>
                            <Input.Password size="large" placeholder="Re-enter your password" />
                        </Form.Item> 

                        {/* {error && (
                            <Alert 
                                description={error}
                                type="error"
                                showIcon
                                closeable
                                className='alert'
                            />
                        )} */}

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className="btn"
                                >Create Account</Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/login">
                                <Button size="large" className='btn'>
                                    Sign In</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>
                
                {/* Image */}
                <Flex flex={1}>
                    
                </Flex>
            </Flex>
        </Card>
    )
}

export default Register
