const express = require('express');
const router = express.Router();

const goods = require('../data/goods.js');


//creating a get route for all goods/services available.
router.get('/', (req, res) => {
    const links = [
      {
        href: 'goods/:id',
        rel: ':id',
        type: 'GET',
      },
    ];
  
    res.json({ goods, links });
  });

  //creating a get route for individual goods/services
  router.get('/:id', (req, res, next) => {
    const good = goods.find((g) => g.id == req.params.id);
  
    const links = [
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'PATCH',
      },
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'DELETE',
      },
    ];
  
    if (good) res.json({ good, links });
    else next();
  });
  
  //creating a POST request route. adding new goods/services
router.post('/', (req, res) => {
    if (req.body.bizId && req.body.product && req.body.description) {
        const good = {
          id: goods[goods.length - 1].id + 1,
          bizId: req.body.bizId,
          product: req.body.product,
          description: req.body.description,
        };

        goods.push(good);
        res.json(goods[goods.length - 1]);
      } else next(error(400, 'Insufficient Data'));
    });
    

// removing a good/service (delete)
    router.delete('/:id', (req, res) => {
        const good = goods.find((g, i) => {
          if (g.id == req.params.id) {
            goods.splice(i, 1);
            return true;
          }
        });
      
        if (good) res.json(good);
        else next();
      });
      
      module.exports = router;