//Container untuk seluruh enviromments

const environments = {};

environments.staging = {
    'httpPort': 1000,
    'httpsPort': 1001,
    'envName': 'staging',
    'hashingSecret': 'This is a secret'
};

environments.production = {
    'httpPort': 5000,
    'httpsPort': 5001,
    'envName': 'production',
    'hashingSecret': 'This is also a secret'
};

const currentEnvironment = typeof process.env.NODE_ENV == 'string' ? process.env.NODE_ENV.toLocaleLowerCase(): '';
const environtmentToExport = currentEnvironment ? environments[currentEnvironment] : environments.staging;

module.exports = environtmentToExport;