import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="grow mx-4 p-6 sm:mx-10 sm:p-10 md:mx-20 md:p-20 bg-gray-100 transition-all duration-300">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout