Record answers:

> use monsters
> db.createCollection('vampires')

[in homework repo]
>mongoimport --db monsters --collection vampires --drop --file populateVampires.json --jsonArray

II.
> db.vampires.find({'victims':{$gt:500}})
> db.vampires.find({'victims':{$lte:150}})
> db.vampires.find({'victims':{$ne:210234}})
> db.vampires.find({'victims': {$gt:150, $lt:500}})

III.
> db.vampires.find({'title': {$exists: true}})
> db.vampires.find({'victims': {$exists: false}})
> db.vampires.find({'title': {$exists: true}, victims: {$exists: false}})
> db.vampires.find({'victims': {$gt:1000}})

IV.
> db.vampires.find({$or: [{'loves': {$in: ['frilly shirtsleeves', 'frilly collars']}}]})
> db.vampires.find({'loves':'brooding'})
> db.vampires.find({$or: [{'loves': {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}}]})
> db.vampires.find({'loves': {$nin: ['top hats', 'virgin blood']}, 'loves': 'fancy cloaks'})

V.
> db.vampires.find({$or: [{'location': {$in: ['New York, New York, US','New Orleans, Louisiana, US']}}]})
> db.vampires.find({$or: [{'loves': {$in: ['brooding', 'being tragic']}}]})
> db.vampires.find({$or: [{'victims': {$gt:1000}}, {'loves': 'marshmallows'}]})
> db.vampires.find({$or: [{'hair_color': 'red'}, {'eye_color': 'green'}]})

VI.
>db.vampires.find({'hair_color': {$nin: ['blonde']}, 'loves': 'ribbons'})
>db.vampires.find({'location':{$ne:'Rome, Italy'}})
>db.vampires.find({$or: [{'loves': {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}]})

> db.vampires.find({'victims':{$lte:200}}) and db.vampires.find({'victims': {$exists: false}})
