const express = require('express');

let app = express();


const db = require("./models");

const PORT = 3000;

app.use(express.urlencoded({ extended: true} ));

app.use(express.json());


const userRoutes = require("./routes/user-routes");


app.use("/users", userRoutes);


const profileRoutes = require("./routes/profile-routes");

app.use("/api/profiles", profileRoutes);


const postRoutes = require("./routes/post-routes");


app.use("/api/posts", postRoutes);


db.sequelize.sync().then(() => {

    app.listen(PORT, () => {



        console.log(`listening on http://localhost :${PORT}`);

    });

});
