const express = require('express');

const app = express();

const PORT = 1414;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use(express.static('public'));
