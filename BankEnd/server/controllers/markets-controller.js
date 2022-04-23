//extracting the market modal
const Market = require("../models/market");

//post newMarketProfile request function
const addMarket = async (req, res) => {

    //destructuring and storing requested data
    const {title, phonenum, address, lat, lng, openingTime, closingTime, profession, ownerId} = req.body;

    //finding existing market with same name and owner;
    let existingMarket;
    try {
        existingMarket = await Market.findOne({
            title : title,
            ownerId : ownerId
        });
    } catch(err){
        console.log(err.message);
        res.status(500).json({ error: err.message});
    }

    //checking existing market
    if(existingMarket) {
        console.log("This user already owns a market with this name. Choose a different name");
        res.status(422).json({ error : "This user already owns a market with this name. Choose a different name"});
    }

    //creating new market 
    const newMarket = new Market({
        title : title,
        phonenum : phonenum,
        address : address,
        location : {
            lat : lat,
            lng : lng
        },
        description : null,
        rating : 0,
        reviews : [],
        openingTime : openingTime,
        closingTime : closingTime,
        profession : profession,
        ownerId : ownerId
    });

    //add newMarket to database
    try {
        await newMarket.save();
    } catch (err) {
        console.log(err);
        res.status(500).json({error : err.message});
    }

    //resending data with 'OK' status code
    res.status(201).json({market : newMarket});

};

exports.addMarket = addMarket;
