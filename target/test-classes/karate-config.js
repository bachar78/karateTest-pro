function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    apiUrl: 'https://api.realworld.io/api/'
  }
  if (env == 'dev') {
    config.userEmail = 'bassam@dev.com'
    config.userPassword = '12345678'
  }  
  if (env == 'tst') {
    config.userEmail = 'bassam@test.com'
    config.userPassword = '12345678'
  }

var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
karate.configure('headers', {Authorization: 'Token ' + accessToken})

  return config;
}