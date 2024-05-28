const express = require('express');
const router = express.Router();
const businesses = require('../data/users.js');

//creating a get route for all businesses available on the app.
router.get('/', (req, res) => {
    const links = [
      {
        href: 'businesses/:id',
        rel: ':id',
        type: 'GET',
      },
    ];
  
    res.json({ businesses, links });
  });

   //creating a get route for individual businesses
   router.get('/:id', (req, res) => {
    const business = businessess.find((b) => b.id == req.params.id);
  if (business) {
    res.json(business);
  } else {
    res.status(404).json({message: 'Business not found..'})
  }
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
  
    res.json({ business, links });
  });
  
  //creating a POST request route. adding a new business to the database.
router.post('/', (req, res) => {
    if (req.body.name && req.body.company && req.body.website) {
        if (businesses.find((b) => b.company == req.body.company)) {
            res.json({error: 'Company Already Listed'});
            return;
        }
        const business = {
          id: businesses[businesses.length - 1].id + 1,
          name: req.body.name,
          company: req.body.company,
          website: req.body.website,
        };

        businesses.push(business);
        res.json(businesses[businesses.length - 1]);
      } else next(error(400, 'Insufficient Data'));
    });
    
    //Put request
    router.put('/:id', (req, res) => {
        
    })

// removing a business (delete)
    router.delete('/:id', (req, res) => {
        const business = businesses.find((b, i) => {
          if (b.id == req.params.id) {
            businesses.splice(i, 1);
            return true;
          }
        });
      
        if (business) res.json(business);
        else next();
      });
      
      module.exports = router;