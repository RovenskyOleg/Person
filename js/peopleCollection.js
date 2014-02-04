    var PeopleCollection = Backbone.Collection.extend({
        model: UserModel,

        initialize: function() { 
            this.add( new UserModel({
                first_name: "Misha",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Andrey",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Alexsey",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Dasha",
                sex: "F"
            }));

            this.add( new UserModel({
                first_name: "Ura",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Oleg",
                sex: "M"
            }));

            this.add( new UserModel({
                first_name: "Oleg",
                sex: "M"
            }));
        }
    })