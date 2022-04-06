import React from "react";
import Feed from "../FeedComponents/Feed/Feed";
import Loading from "../Helper/Loading/Loading";
import Head from "../Helper/Head";

const Home = () => {
    return (
        <section className="container mainContainer">
            <Head
                title="Fotos"
                description="Home do site Dogs, com o feed de fotos."
            />
            <Feed />
        </section>
    );
};

export default Home;
