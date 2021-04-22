const mongoose = require("mongoose");
const Book = require("../models/books");
const fs = require("fs");
const path = require("path");

dbUrl = "mongodb://127.0.0.1:27017/library";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Book.deleteMany({});

    var price = Math.floor(Math.random() * 20) + 10;
    var book = new Book({
    	title: "ΚΑΡΑΒΑΛ",
    	author: "GARBER STEPHANIE",
    	isbn: "9786180126570",
    	publisher: "ΨΥΧΟΓΙΟΣ",
    	price,
    	description: "Η Σκάρλετ Ντράγκνα δεν έχει φύγει ποτέ από το μικροσκοπικό νησί όπου ζει με την αδελφή της, την Τέλα. Όταν ο πανίσχυρος και σκληρός πατέρας τους της επιβάλλει να παντρευτεί, το όνειρο της Σκάρλετ να συμμετάσχει στο Κάραβαλ -το συναρπαστικό παιχνίδι που λαμβάνει χώρα μία φορά τον χρόνο- γκρεμίζεται.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/5BF4336908C3055022A41113ED0E1AAE.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    })
    await book.save();

    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΤΟ ΠΟΡΤΡΕΤΟ ΤΟΥ ΝΤΟΡΙΑΝ ΓΚΡΕΙ",
        author: "WILDE OSCAR",
        isbn: "9786180213850",
        publisher: "ΜΙΝΩΑΣ",
        price,
        description: "Ο Ντόριαν Γκρέι είναι ένας αριστοκράτης, πλούσιος και κοσμικός νέος, με εκθαμβωτική ομορφιά που σαγηνεύει όποιον τον αντικρίζει. Ο Ντόριαν συνειδητοποιεί τη γοητεία που ασκεί στους ανθρώπους, όταν στέκει θαμπωμένος μπροστά στο πορτρέτο που του φιλοτέχνησε ένας φημισμένος ζωγράφος, ο Μπάζιλ Χόλγουορντ.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/DA866BF5722DFDD1FE413E7412E206B8.jpg",
        subject: "ΞΕΝΗ ΠΕΖΟΓΡΑΦΙΑ"
    })
    await book.save();

    
}

seedDB().then(() => {
    mongoose.connection.close();
})