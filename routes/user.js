const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require("path");
var mongoose = require("mongoose");
var multer = require("multer");
mongoose.Promise = global.Promise;
const bcrypt = require("bcryptjs");
const passport = require("passport");

var cors = require("cors");
router.use(cors());

const helmet = require("helmet");
router.use(helmet());

require("cookie-parser");

mongoose.set("useCreateIndex", true);

router.get("/", (req, res) => { res.render("./user/index"); });
router.get("/TheChurch", (req, res) => { res.render("./user/TheChurch"); });
router.get("/CathedralStaff", (req, res) => { res.render("./user/CathedralStaff"); });
router.get("/Vacancies", (req, res) => { res.render("./user/Vacancies"); });
router.get("/EducationandDiscipline", (req, res) => { res.render("./user/EducationandDiscipline"); });
router.get("/EvangelismandOutreach", (req, res) => { res.render("./user/EvangelismandOutreach"); });
router.get("/LeadershipandDevelopment", (req, res) => { res.render("./user/LeadershipandDevelopment"); });
router.get("/PastrolcareandSacraments", (req, res) => { res.render("./user/PastrolcareandSacraments"); });
router.get("/Worship", (req, res) => { res.render("./user/Worship"); });
router.get("/Schedules", (req, res) => { res.render("./user/Schedules"); });
router.get("/CTC", (req, res) => { res.render("./user/CTC"); });
router.get("/Facilities", (req, res) => { res.render("./user/Facilities"); });
router.get("/CellGroup", (req, res) => { res.render("./user/CellGroup"); });
router.get("/Graphical3D", (req, res) => { res.render("./user/Graphical3D"); });
router.get("/GuestPost", (req, res) => { res.render("./user/GuestPost"); });
router.get("/MainSactuaryThings", (req, res) => { res.render("./user/MainSactuaryThings"); });
router.get("/MarriageOutreach", (req, res) => { res.render("./user/MarriageOutreach"); });
router.get("/MinistriesThings", (req, res) => { res.render("./user/MinistriesThings"); });
router.get("/PCC", (req, res) => { res.render("./user/PCC"); });
router.get("/Pictorial", (req, res) => { res.render("./user/Pictorial"); });
router.get("/PlansandBronchure", (req, res) => { res.render("./user/PlansandBronchure"); });
router.get("/ProvostDesk", (req, res) => { res.render("./user/ProvostDesk"); });
router.get("/Schedules", (req, res) => { res.render("./user/Schedules"); });
router.get("/ScheduleThings", (req, res) => { res.render("./user/ScheduleThings"); });
router.get("/staffpage", (req, res) => { res.render("./user/staffpage"); });
router.get("/Trinity", (req, res) => { res.render("./user/Trinity"); });

module.exports = router;