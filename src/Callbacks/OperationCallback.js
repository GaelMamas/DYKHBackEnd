class OperationCallback {
    constructor(res) {
        this.res = res;
        this.errors = [];
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    addError(error) {
        this.errors.push(error);
    }
    send() {
        this.res.json({messages: this.messages, errors: this.errors});
    }
}
export default OperationCallback;