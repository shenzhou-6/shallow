<template>
        <div class="login-content">
            <a-form
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit"
            >
                <a-form-item>
                    <a-input
                            v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] }]"
                            placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="
            ['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }]"
                             type="password" placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>

                    <a-button
                            type="primary"
                            html-type="submit"
                            class="login-form-button"
                    >
                        Log in
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
</template>

<script>

    export default {
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values.password);
                    }
                });
            },
        },
    };
</script>
<style>
    .login-content{
        height: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .login-form {
        width: 100%;
        max-width: 300px;
    }
    .login-form-button {
        width: 100%;
    }
</style>
