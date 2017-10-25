
const aggregation = [
    { $group: {
        _id: {
            borough: '$borough',
            cuisine: '$cuisine'
        },
        count: { $sum: 1 }
    }},
    { $sort: { _id: 1 }},
    { $project: { 
        _id: '$_id.borough', 
        cuisines: { 
            cuisine: '$_id.cuisine', 
            count: '$count' 
        }
    }},   
    { $group: {
        _id: '$_id',  
        cuisines: { $push: '$cuisines' }
    }},
    { $sort: { _id: 1 }}  
];

module.exports = function(borough) {
    let agg = null;
    if(borough) {
        agg = aggregation.slice();
        agg.unshift({ $match: { borough }});
    }
    else agg = aggregation;

    return this.aggregate(agg);
};