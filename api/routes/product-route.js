const express = require('express');

const router = express.Router();

const productController = require('../controllers/product-controller');

router.get('/products', productController.getAllProducts);

router.get('/:serialNo&:productNo',productController.getProduct);

router.post('/addProduct', productController.postAddProduct);

router.get('/getAddProduct', productController.getAddProduct);

router.delete('/deleteProduct/:serialNo&:productNo', productController.deleteProduct);

router.post('/editProduct/:serialNo&:productNo', productController.postEditProduct);





router.get('/searchByName/:productName', productController.getSearchProductByName);

router.get('/searchBySerialNo/:serialNo', productController.getSearchProductBySerialNo);

router.get('/sortByName', productController.getSortByName);



// router.get('/policy');

// router.get('/policy/:policyId');

// router.get('/policy/addPolicy');

// router.get('/policy/deletePolicy');

// router.get('/policy/editPolicy');

// router.get('/policy/serviceCenters/');

// router.get('/policy/serviceCenter');

module.exports = router;