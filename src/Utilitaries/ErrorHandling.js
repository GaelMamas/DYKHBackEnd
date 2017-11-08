/**
 * Created by vm32776n on 10/08/2017.
 */

export function execError(message, res){
    console.log('error occurred ' + message);
    res.json({"error": true, "message": "Something went wrong"});
}

export function specifyExecError(message, response){
    console.log(message);
    response = {"error": true, "message": message};
}