import { MockMethod } from 'vite-plugin-mock';

export default [
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000,
        response: ({ query }) => {
            return {
                code: 0,
                status: 'success',
                data: {
                    useraccount: '1221212',
                    username: 'vben',
                    token: 'aa1111'
                }
            };
        }
    },
    {
        url: '/api/logout',
        method: 'get',
        timeout: 1000,
        response: {
            code: 0,
            status: 'success',
            data: {}
        }
    },
    {
        url: '/api/userinfo',
        method: 'post',
        // statusCode: 200,
        rawResponse: async (req, res) => {
            let reqbody = null;
            let c = '';

            await new Promise((resolve) => {
                req.on('data', (chunk) => {
                    c += chunk;
                });
                req.on('end', () => {
                    resolve(undefined);
                });
            });
            let reqParams = JSON.parse(c);
            let data = {
                code: 0,
                status: 'success',
                data: {
                    ...reqParams.data,
                    manager: true,
                    departmentId: 11111,
                    department: 'SFA',
                    groupId: 222222,
                    group: 'web前端1',
                    userId: 345678
                }
            };
            reqbody = new Buffer(JSON.stringify(data));

            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 200;
            res.end(reqbody);
        }
    }
] as MockMethod[];
