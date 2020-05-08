const PgConnection = require('postgresql-easy');
const rdsConfig = require('../config/rds_config');
const pg = new PgConnection(rdsConfig.db_config);
module.exports = pg;