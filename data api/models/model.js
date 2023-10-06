import mongoose from "mongoose";

const schemaData = mongoose.Schema({
    name:{type:String, require:true, trim:true},
    email:{type:String, require:true, trim:true},
    agee:{type:Number, require:true, trim:true}
})

const useModals= mongoose.model("studentData", schemaData);

export default useModals;