
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
    },

    _save: function(collectionName, data) {
        var deff = $.Deferred();
        this.db.collection(collectionName).add(data)
        .then(function(docRef) {
            console.log('document written with Id ', docRef.id);
            deff.resolve(docRef.id);
        })
        .catch(function(error){
            console.log('Erron on try to save: ', error);
            deff.reject(error);
        });
        return deff.promise();
    },

    saveDataBook: function(data) {
        return this._save('book', data);
    },

    _getDoc: function(collName, id) {
        var deff = $.Deferred();
        this.db.collection(collName).doc(id).get()
        .then(function(docRef) {
            deff.resolve(docRef.data());
        })
        .catch(function(error) {
            deff.reject(error);
        });
        return deff.promise();
    },

    getBook: function(id) {
        if(this.db == null) {
            this.init();
        }
        return this._getDoc('book', id);
    }

    
}