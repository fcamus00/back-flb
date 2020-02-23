const fs = require('fs');
const accountReqData = './data/accountRequest.json';

const add = async (req, res) => {
  try {
    const newRequest = req.body;
    const data = JSON.parse(fs.readFileSync(accountReqData));
    data.requests.push(newRequest);
    fs.writeFileSync(accountReqData, JSON.stringify(data));
    return res.status(201).json(newRequest);
  } catch (err) {
    return res.status(500).json({error: err, message: 'Ha ocurrido un error durante el guardado de datos'});
  }
};

module.exports = { add };