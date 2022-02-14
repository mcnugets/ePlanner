const express = require('express');
const route = express();

route.use(express.static('/public'))