
var fireJs = {};

fireJs.db = {
    db: null,
    config: {
        apiKey: "AIzaSyBJXAMjGckeZs7gMKJM0iCBvHntHftFyrA",
        authDomain: "readandshare-d436f.firebaseapp.com",
        projectId: "readandshare-d436f"
    },

    init: function() {
        firebase.initializeApp(this.config);
        this.db = firebase.firestore();

        // this.db.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
    },

    _save: function(collectionName, data) {
        this.db.collection(collectionName).add(data)
        .then(function(docRef) {
            console.log('document written with Id ', docRef.id);
        })
        .catch(function(error){
            console.log('Erron on try to save: ', error);
        });
    },

    saveDataBook: function(data) {
        this._save('book', data);
    },

    getMessageBook: function() {
        
    }

    
}