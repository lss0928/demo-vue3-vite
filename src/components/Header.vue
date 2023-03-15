<template>
    <div class="main-header">
        <span class="department">{{ userInfo.department }}</span>
        <span class="username">{{ user.username }}</span>
        <el-dropdown v-if="user.token" trigger="hover">
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>{{ user.useraccount }}</el-dropdown-item>
                    <el-dropdown-item><el-button type="text" @click="logout">logout</el-button></el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-button v-else type="text" @click="handleLogin">login</el-button>

        <el-dialog v-model="showdialog" title="login" append-to-body show-close @close="dialogClose">
            <template #header> login{{ user.piniaLoading }} </template>
            <el-form v-model="form">
                <el-form-item prop="useraccount" label="useraccount"
                    ><el-input v-model="form.useraccount"></el-input
                ></el-form-item>
                <el-form-item prop="password" label="password"
                    ><el-input v-model="form.password" type="password"></el-input
                ></el-form-item>
                <el-form-item prop="code" label="code"><el-input v-model="form.code"></el-input></el-form-item>
            </el-form>
            <template #footer>
                <el-button class="throttle" type="primary" @click="login">login</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
    // import { ArrowDown } from '@element-plus/icons-vue';
    import { ref, onMounted, reactive } from 'vue';
    import useUserStore from '../store/user';
    let user = useUserStore();
    // debugger
    let form = reactive({
        useraccount: '',
        password: '',
        code: ''
    });
    let userInfo = ref({
        useraccount: '',
        password: '',
        code: '',
        manager: false,
        departmentId: null,
        department: '',
        groupId: null,
        group: '',
        userId: null
    });

    let showdialog = ref(false);

    let handleLogin = () => {
        showdialog.value = true;
    };
    function dialogClose() {
        showdialog.value = false;
    }

    let getUserData = async () => {
        if (user.token) {
            let { token, useraccount, username } = user;
            userInfo.value = await user.getUserInfo({ username, useraccount, token });
        }
    };
    let login = async () => {
        await user.login(form);
        getUserData();
        dialogClose();
    };
    let logout = () => {
        user.logout();
    };
    onMounted(async () => {
        // debugger
        console.log('header mounted');
        getUserData();
    });
</script>
<style lang="less" scoped>
    .main-header {
        width: 100%;
        height: 68px;
        line-height: 68px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        box-shadow: -5px 0 10px #ccc;
        .department {
            margin-right: 10px;
        }
        .el-button {
        }
    }
</style>
