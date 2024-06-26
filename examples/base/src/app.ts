export const qiankun = () => {
    return {
        apps: [
            {
                name: 'app1',
                entry: process.env.NODE_ENV === 'production' ? '/static-child-web' : 'http://localhost:8001/static-child-web',
            }
        ]
    };
};