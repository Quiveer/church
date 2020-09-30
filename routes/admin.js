const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require("path");
var mongoose = require("mongoose");
var multer = require("multer");
mongoose.Promise = global.Promise;
var async = require("async");
var crypto = require("crypto");
const bcrypt = require("bcryptjs");
const passport = require("passport");
var bodyParser = require('body-parser')


var cors = require("cors");
router.use(cors());

const helmet = require("helmet");
router.use(helmet());

require("cookie-parser");

mongoose.set("useCreateIndex", true);

// Routes
router.get("/admin", (req, res) => { res.render("./admin/login"); });
router.post("/login", (req, res) => { res.redirect("./admin/dashboard"); });
router.get("/admin/dashboard", (req, res) => { res.render("./admin/dashboard"); });

module.exports = router;