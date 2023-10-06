import useModals from "../models/model.js";

class dataController {
    static getAllData = async (req, res) => {
        try{
            const result = await useModals.find();
            res.send(result);

        }
        catch{
            (error) => {console.log(error)}
        }
    }
}

export default dataController;
