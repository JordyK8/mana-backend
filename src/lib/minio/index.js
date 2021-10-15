const Minio = require("minio");

module.exports = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: '4ZYGB1FLN1SOMOCAEYJP',
    secretKey: 'Ri4V9l5ANWs+JI1JD0GSOaAjyePi8L0Ni0p2HADD'
});