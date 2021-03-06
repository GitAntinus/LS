const callPython = require("./callPython");

const pythonFilename = "offer_logic_fuxi_zhishidian.py";

module.exports = ( req, res ) => {
  const { chapter_name } = req.body;
  const [ errCode, result ] = callPython(
    pythonFilename,
    `${chapter_name}`
  );
  if( errCode ){
    res.status(500).end();
  }
  else {
    res.send( result );
  }
}
