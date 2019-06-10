const express=require('express');
const router=express.Router();
const path=require('path');

const dashboard=require('../controllers/admincontroller/dashboardController');
const mainCategory=require('../controllers/admincontroller/mainCategoryController');
const Category=require('../controllers/admincontroller/categoryController');
const SubCategory=require('../controllers/admincontroller/subcategoryController');


router.use(dashboard);
router.use(mainCategory);
router.use(Category);
router.use(SubCategory);

 module.exports = router;