// Validate if the string is a SQL Injection

function isSqlInjection(str) {
  const sqlRegex = /(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE)\b)|(\b(OR|AND)( +\d+=[^ ]+){0,1}\b)|(--.*)|(;)/i;
  return sqlRegex.test(str);
}

module.exports = isSqlInjection;