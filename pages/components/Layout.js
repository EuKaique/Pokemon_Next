import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function Layout({ children }){
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <NavBar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}