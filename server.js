const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const folderRoutes = require('./routes/folderRoutes');
const fileRoutes = require('./routes/fileRoutes');
const subFolderRoutes = require('./routes/subFolderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

require('./models');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', folderRoutes);
app.use('/api', fileRoutes);
app.use('/api', subFolderRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
