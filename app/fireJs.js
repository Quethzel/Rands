
var fireJs = {};

fireJs.db = {
    db: null,
    config: {
        apiKey: "AIzaSyBJXAMjGckeZs7gMKJM0iCBvHntHftFyrA",
        authDomain: "readandshare-d436f.firebaseapp.com",
        projectId: "readandshare-d436f"
    },

    init: function() {
        if(this.db == null) {
            firebase.initializeApp(this.config);
            this.db = firebase.firestore();
        }
    },

    _save: function(collectionName, data) {
        var deff = $.Deferred();
        this.db.collection(collectionName).add(data)
        .then(function(docRef) {
            deff.resolve(docRef.id);
        })
        .catch(function(error) {
            console.log('Erron on try to save: ', error);
            deff.reject(error);
        });
        return deff.promise();
    },

    _getDoc: function(collName, id) {
        var deff = $.Deferred();
        this.db.collection(collName).doc(id).get()
        .then(function(docRef) {
            var book = docRef.data();
            deff.resolve(book);
        })
        .catch(function(error) {
            console.log('Error on try to get data book ', error);
            deff.reject(error);
        });
        return deff.promise();
    },

    getBook: function(id) {
        return this._getDoc('book', id);
    },

    saveDataBook: function(data) {
        return this._save('book', data);
    }    

    
}