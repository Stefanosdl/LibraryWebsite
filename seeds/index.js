const mongoose = require("mongoose");
const Book = require("../models/books");
const User = require("../models/user");
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
    //Create books
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
    });
    await book.save();

    price = Math.floor(Math.random() * 20) + 10;
    var book = new Book({
        title: "ΘΡΥΛΟΣ, (ΚΑΡΑΒΑΛ ΔΕΥΤΕΡΟ ΒΙΒΛΙΟ)",
        author: "GARBER STEPHANIE",
        isbn: " 9786180131116",
        publisher: "ΨΥΧΟΓΙΟΣ",
        price,
        description: "Αφού παρασύρθηκε στον μαγικό κόσμο του Κάραβαλ, η Ντονατέλα Ντράγκνα κατάφερε να δραπετεύσει από τον πατέρα της και να σώσει την αδελφή της, Σκάρλετ, από έναν καταστροφικό κανονισμένο γάμο.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/5CDF7F251E43B048371AD713036837E9.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();

    price = Math.floor(Math.random() * 20) + 10;
    var book = new Book({
        title: "(P/B) CARAVAL",
        author: "GARBER STEPHANIE",
        isbn: " 9781473663336",
        publisher: "HODDER & STOUGHTON",
        price,
        description: "Welcome to Caraval, where nothing is quite what it seems. Scarlett has never left the tiny isle of Trisda, pining from afar for the wonder of Caraval, a once-a-year week-long performance where the audience participates in the show.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/3A8789326074C4B7C33271D895C6345B.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
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
    });
    await book.save();

    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΣΑΛΩΜΗ",
        author: "WILDE OSCAR",
        isbn: "9789603350897",
        publisher: "ΗΡΙΔΑΝΟΣ",
        price,
        description: "Δραματική φαντασία του Όσκαρ Ουάιλντ που ο ίδιος έγραψε στα Γαλλικά και μετέφρασε στα Αγγλικά ο εραστής του, Άλφρεντ Ντάγκλας.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/626d7684-54e0-4cc9-bc1c-c5068f32379b.jpg",
        subject: "ΘΕΑΤΡΟ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "Η ΜΠΑΛΑΝΤΑ ΤΗΣ ΦΥΛΑΚΗΣ ΤΟΥ ΡΕΝΤΙΝΓΚ",
        author: "WILDE OSCAR",
        isbn: "9789606614620",
        publisher: "ΕΚΔΟΤΙΚΗ ΘΕΣΣΑΛΟΝΙΚΗΣ",
        price,
        description: "(...) Στη φυλακή θα βυθιστεί στην απελπισία όπως βυθίζεται στο νερό ένα ζώο που δεν το αγαπάει.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/daa2f97c-1b46-400b-83c1-2a34542f3920.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "Ο ΕΓΩΙΣΤΗΣ ΓΙΓΑΝΤΑΣ",
        author: "WILDE OSCAR",
        isbn: "9789605277925",
        publisher: "ΑΡΜΟΣ",
        price,
        description: "Τί θα μπορούσαν, λοιπόν, σήμερα, να μας μεταφέρουν, ποιο νόημα θα μπορούσαν να έχουν για μας αυτές οι δύο, εν πολλοίς διδακτικές, ιστορίες του Ουάιλντ;",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/10B032EC696826B3DBAEDFAD25397B00.jpg",
        subject: "ΠΑΙΔΙΚΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΣΕ ΒΡΙΣΚΕΙ Η ΠΟΙΗΣΗ",
        author: "ΠΑΤΡΙΚΙΟΣ ΤΙΤΟΣ",
        isbn: "9786185004026",
        publisher: "ΚΙΧΛΗ",
        price,
        description: "Εκεί που αναρωτιέσαι για πράγματα που πρώτη φορά αντικρίζεις για πράγματα χιλιοειπωμένα που έχουνε πια περάσει για πράγματα που ξαφνιάζουν κι ας γίνονται κάθε μέρα για πράγματα που έλεγες δεν θα συμβούν ποτέ και τώρα συμβαίνουν μπρος στα μάτια σου",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/D3CE5D503E95EC5728EFB9ECEFD059D4.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "Ο ΔΡΟΜΟΣ ΚΑΙ ΠΑΛΙ",
        author: "ΠΑΤΡΙΚΙΟΣ ΤΙΤΟΣ",
        isbn: "9786185461102",
        publisher: "ΚΙΧΛΗ",
        price,
        description: "Η ακινησία μιας μόνο νύχτας του ύπνου τροφοδοτεί την κίνηση όλης της άλλης μέρας παρά την κρυφή της πλανερή γειτνίαση με την παντοτινή ακινησία του θανάτου.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/07638E63DEE8AB53B0A17F85BD51FDD7.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΣΥΝΕΧΕΣ ΩΡΑΡΙΟ",
        author: "ΠΑΤΡΙΚΙΟΣ ΤΙΤΟΣ",
        isbn: "9789600411935",
        publisher: "ΚΕΔΡΟΣ",
        price,
        description: "Με την ανακάλυψη της Αμερικής, η κατάκτηση του χώρου ολοκληρώθηκε. Οι άγνωστες περιοχές του ήσαν πλέον δευτερεύουσες.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/261d15ec-87df-447c-ac3a-5303a982f2b3.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΣΤΗΝ ΙΣΑΛΟ ΓΡΑΜΜΗ",
        author: "ΠΑΤΡΙΚΙΟΣ ΤΙΤΟΣ",
        isbn: "9789600413403",
        publisher: "ΚΕΔΡΟΣ",
        price,
        description: "Η ίσαλος γραμμή χωρίζει στα καράβια τα ύφαλα, τα βυθισμένα στο νερό, από τα εμφανή τους μέρη, τα όσα βρίσκονται στο φως.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/C17AE0BFA3A6B3466E1F175A92AB3615.jpg",
        subject: "ΛΟΓΟΤΕΧΝΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΠΩΣ ΥΦΑΙΝΟΥΝ ΚΑΙ ΝΤΥΝΟΝΤΑΙ ΟΙ ΑΙΤΩΛΟΙ",
        author: "ΔΗΜΗΤΡΗΣ ΛΟΥΚΟΠΟΥΛΟΣ",
        isbn: "9789602485200",
        publisher: "ΔΩΔΩΝΗ",
        price,
        description: "Ο κ. Λουκόπουλος εις την παρούσαν μελέτην συνδυάζει και τα δύο αφ' ενός μεν μας δίδει πλήρη και συστηματικήν περιγραφήν όλων των προκαταρκτικών σταδίων απ' αυτής της προπαρασκευής της πρώτης ύλης, αφ' ετέρου δ' εξετάζει λεπτομερώς όλα τα ενδύματα, εσωτερικά και εξωτερικά, ως και τα παραρτήματα αυτών, μη περιοριζόμενος εις ένα μόνον τόπον, αλλ' επεκτεινόμενος συγκριτικώς και εις γειτονικάς περιοχάς.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/54c1e3ae-68c6-4364-af31-c9a6ae6c1a51.jpg",
        subject: "ΚΟΙΝΩΝΙΟΛΟΓΙΑ - ΛΑΟΓΡΑΦΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΓΕΩΡΓΙΚΑ ΤΗΣ ΡΟΥΜΕΛΗΣ",
        author: "ΔΗΜΗΤΡΗΣ ΛΟΥΚΟΠΟΥΛΟΣ",
        isbn: "9602485213",
        publisher: "ΔΩΔΩΝΗ",
        price,
        description: "Το βιβλίο που δίνω σήμερα τυπωμένο είναι το καταστάλαγμα μιας πολύχρονης μελέτης στη λαογραφία της Ρούμελης που έρχεται σα συμπλήρωμα στα \"Ποιμενικά\" που τύπωσα στην ίδια σειρά της Ιστορικής και Λαογραφικής βιβλιοθήκης.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/77b64209-68f3-46d9-beec-0b5a3c9f640d.jpg",
        subject: "ΚΟΙΝΩΝΙΟΛΟΓΙΑ - ΛΑΟΓΡΑΦΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΠΑΡΟΙΜΙΕΣ ΤΩΝ ΦΑΡΑΣΩΝ",
        author: "ΔΗΜΗΤΡΗΣ ΛΟΥΚΟΠΟΥΛΟΣ",
        isbn: "9780008473440",
        publisher: "ΓΑΛΛΙΚΟ ΙΝΣΤΙΤΟΥΤΟ",
        price,
        description: "Ο πρόλογος του Λουκόπουλου.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/f969616e-9bd0-4f80-8535-326f35ad9a42.jpg",
        subject: "ΚΟΙΝΩΝΙΟΛΟΓΙΑ - ΛΑΟΓΡΑΦΙΑ"
    });
    await book.save();
    
    price = Math.floor(Math.random() * 20) + 10;
    book = new Book({
        title: "ΘΕΡΜΟΣ ΚΑΙ ΑΠΟΚΟΥΡΟ",
        author: "ΔΗΜΗΤΡΗΣ ΛΟΥΚΟΠΟΥΛΟΣ",
        isbn: "9789607731357",
        publisher: "ΙΣΤΟΡΙΚΕΣ ΕΚΔΟΣΕΙΣ",
        price,
        description: "Ως Απόκουρο έγινε ιστορικά γνωστή η προεχόντως ορεινή και άγονη περιοχή τού νομού Αιτωλοακαρνανίας η οποία βρίσκεται μεταξύ τής ΒΑ πλευράς τής λίμνης Τριχωνίδας, του ποταμού Ευήνου, και του (ανατολικού) Παναιτωλικού μέχρι τα όρια με την Ευρυτανία. Σε γενικές γραμμές, το (λιγότερο γνωστό πια) ιστορικό Απόκουρο, συμπίπτει εδαφικά με τον σημερινό (2016) Δήμο Θέρμου.",
        image: "https://politeia.gr/components/com_virtuemart/shop_image/product/853571e8-c06a-4e77-ac05-091fcc9dcfb1.jpg",
        subject: "ΙΣΤΟΡΙΑ - ΑΝΘΡΩΠΟΛΟΓΙΑ - ΕΘΝΟΛΟΓΙΑ"
    });
    await book.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})