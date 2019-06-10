const express=require('express');
const router=express.Router();

const home=require('../controllers/skycontroller/homeController');
const about=require('../controllers/skycontroller/aboutController');
const contact=require('../controllers/skycontroller/contactController');

const login=require('../controllers/skycontroller/loginController');
const register=require('../controllers/skycontroller/registerController');
const product=require('../controllers/skycontroller/productController');

const productDetail=require('../controllers/skycontroller/product-DetailController');
const blog=require('../controllers/skycontroller/blogController');
const postDetail=require('../controllers/skycontroller/post-DetailController');

const cart=require('../controllers/skycontroller/cartController');
const wishList=require('../controllers/skycontroller/wish-listController');
const compare=require('../controllers/skycontroller/compareController');
const navbar=require('../controllers/skycontroller/navbarController');

router.use(home);
router.use(about);
router.use(contact);

router.use(login);
router.use(register);
router.use(product);

router.use(productDetail);
router.use(blog);
router.use(postDetail);

router.use(cart);
router.use(wishList);
router.use(compare);
router.use(navbar);


module.exports=router;