export interface User {
    username: string;
    useraccount: string;
    token: string;
}
export interface Login {
    useraccount: string;
    password: string;
    code: string;
    [props: string]: any;
}
export interface UserInfo extends User {
    manager: boolean;
    departmentId: number;
    department: string;
    groupId: number;
    group: string;
    userId: number;
}
