const glob = require("glob");
const protoLoader = require('@grpc/proto-loader');

const protoFiles = glob.sync(`**/*.proto`, {
    cwd: `${__dirname}` + '/protos',
    absolute: true
});

const packageDefinition = protoLoader.loadSync(protoFiles, {
    includeDirs: [__dirname + '/protos']
});
console.log(packageDefinition);