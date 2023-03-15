import { defineStore, acceptHMRUpdate } from 'pinia';
import axios from 'axios';
import { User, Login, UserInfo } from './interface_user';

const useUserStore = defineStore('user', {
    state: () => ({
        piniaLoading: false,
        // useraccount: '1221212',
        // username: 'vben11',
        // token: 'aa1111',
        username: '',
        useraccount: '',
        token: ''
    }),
    getters: {},
    actions: {
        async login(params: Login): Promise<User> {
            return new Promise(async (resolve, reject) => {
                try {
                    this.piniaLoading = true;
                    let res = await axios.post('/api/login', {
                        data: {
                            ...params
                        }
                    });
                    if (res.data.code === 0) {
                        let data = res.data.data;
                        this.useraccount = data.useraccount;
                        this.username = data.username;
                        this.token = data.token;
                        resolve(data);
                    } else {
                        reject(null);
                    }
                    this.piniaLoading = false;
                } catch (err) {
                    this.piniaLoading = false;
                    reject(err);
                }
            });
        },
        getUserInfo(params: User): Promise<UserInfo | Object> {
            console.log(params);
            return new Promise((resolve) => {
                this.piniaLoading = true;
                axios
                    .post('/api/userinfo', {
                        data: {
                            ...params
                        }
                    })
                    .then((res) => {
                        // debugger
                        this.piniaLoading = false;
                        if (res.data.code === 0) {
                            resolve(res.data.data);
                        } else {
                            resolve({});
                        }
                    })
                    .catch((err) => {
                        this.piniaLoading = false;
                        // debugger
                        // resolve({})
                    });
            });
        },
        logout() {
            // await logout
            this.piniaLoading = true;
            axios
                .get('/api/logout', {
                    params: {
                        username: this.username,
                        useraccount: this.useraccount,
                        token: this.token
                    }
                })
                .then((res) => {
                    this.piniaLoading = false;
                    // debugger
                    this.username = '';
                    this.useraccount = '';
                    this.token = '';
                })
                .catch((err) => {
                    this.piniaLoading = false;
                });
        }
    }
});
import.meta.hot && import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
export default useUserStore;
