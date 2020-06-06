<template>
    <div class="login-panel">
        <div class="login-wrap">
            <ul class="tab-ul">
                <li :class="{'active' : tab.isActive}" @click="toggleTab(tab)" v-for="tab in tabList">{{tab.name}}</li>
            </ul>
            <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" class="login-form">
                <el-form-item prop="username" class="login-item">
                    <label>用户名</label>
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="login-item">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="login-item">
                    <label>验证码</label>
                    <el-row :gutter="20">
                        <el-col :span="15">
                            <el-input v-model="ruleForm.code"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button class="block" type="success">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="login-item">
                    <el-button type="primary" class="login-btn block" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                tabList: [
                    {"name": "登录", isActive: true},
                    {"name": "注册", isActive: false},
                ],
                ruleForm: {
                    username: '',
                    password: '',
                    code: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            toggleTab(tab) {
                this.tabList.forEach((item) => {
                    item.isActive = false;
                })
                tab.isActive = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-panel {
        background: #344a5f;
        height: 100vh;
        display: flex;
        align-items: center;
        .login-wrap {
            width: 338px;
            margin: auto;

            .tab-ul {
                text-align: center;
                li {
                    display: inline-block;
                    width: 88px;
                    line-height: 36px;
                    font-size: 14px;
                    color: #fff;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .active {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }
        .login-form {
            margin-top: 29px;
            label {
                display: block;
                color: #fff;
                font-size: 14px;
                border-bottom: 3px;
            }

            .login-item {
                margin-bottom: 13px;
                .block {
                    display: block;
                    width: 100%;
                }

                .login-btn {
                    margin-top: 19px;
                }
            }
        }
    }
</style>
