import dotenv from 'dotenv';

dotenv.config()

export const MONGO_URL=process.env.MONGO_URL||`mongodb://fran:sZCEywKrRATzN20f@ac-nnggs5s-shard-00-00.9mrtaqq.mongodb.net:27017,ac-nnggs5s-shard-00-01.9mrtaqq.mongodb.net:27017,ac-nnggs5s-shard-00-02.9mrtaqq.mongodb.net:27017/?ssl=true&replicaSet=atlas-nqvw4k-shard-0&authSource=admin&retryWrites=true&w=majority`
export const PORT=process.env.PORT||4000