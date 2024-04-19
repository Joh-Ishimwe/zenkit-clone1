import { model, Schema } from "mongoose";

const ActivitySchema = new Schema({
    name:{
        type: 'string',
        required: true
    },
    isCompleted:{
        type: 'boolean',
        required: true
    }
});

const activity= model("Activity", ActivitySchema);
export default activity;