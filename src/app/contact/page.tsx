import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold">Contact Page</h1>
                <p className="mt-4 text-gray-600">This is the contact page placeholder.</p>
            </main>
            <Footer />
        </div>
    );
}
