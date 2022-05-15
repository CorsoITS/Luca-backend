const { getConnection } = require('../common/connessione');

const listOperator = async () => {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM opertori')
    return rows;
}

module.exports = {
    listOperator
}