import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

//El ID ya viene implicito, pero sólo en Mongoose.
//Aquí se modela la colección solamente, aún no se ha creado.
const UserSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "last_name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true
    },
    "photo": {
        type: String
    },
    "is_admin": {
        type: Boolean,
        default: false
    },
    "created_at": {
        type: Date,
        default: new Date()
    },
    //Borrador lógico, debería en false pero como no tenemos mailing lo ponemos true.
    "is_active": {
        type: Boolean,
        default: true
    },
    //Es para el procesador de pagos, él me regresa un ID relacionado con los pagos del usuario. 
    "client_id": {
        type: String
    }
}, {
    //Nombre de la colección.
    collection: "Users",
    //Guarda un timestamp cada vez que un objeto de esta colección es actualizado.
    timestamps: true
});

//Trigger de pre-save para encriptar la URL en la base de datos.
UserSchema.pre('save', function(next) {
    let user = this;

    //Si el usuario no fue modificado no hago ningún hasheo ni nada.
    if (!user.isModified('password')) return next();

    //Genera una semilla para hashear.
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        //Hashea.
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

//cb = callback
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    //Por seguridad, hasheamos la contraseña con la que intentan entrar contra el hash de la DB.
    //Nunca deshasheamos el hash guardado en la DB, es inseguro.
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        cb(null, isMatch);
    });
};

//Crea la colección.
export default mongoose.model('Users', UserSchema);