import { FaSquareThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white pt-10 pb-6 shadow-inner shadow-black/20">
            <div className="container mx-auto px-4 space-y-8">

                {/* Grid 3 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/90">

                    {/* Kiri - Logo & Slogan */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <img src="/assets/image/logo.png" alt="Logo" className="h-10 w-10 drop-shadow-md" />
                            <span className="text-xl font-bold drop-shadow-sm">JAGAT</span>
                        </div>
                        <p className="max-w-sm">Temukan dan lestarikan kekayaan tanaman jagung Indonesia lewat teknologi.</p>
                    </div>

                    {/* Tengah - Kontak */}
                    <div className="flex flex-col items-center text-center">
                        <p className="font-semibold mb-1">Kontak Kami</p>
                        <p>Email: <a href="mailto:abd.ghofur018@gmail.com" className="hover:underline">abd.ghofur018@gmail.com</a></p>
                        <p>Telepon: <a href="tel:+6281334721971" className="hover:underline">+62 813-3472-1971</a></p>
                    </div>

                    {/* Kanan - Ikuti Kami */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right mx-auto md:mx-0">
                        <p className="font-semibold mb-1">Ikuti kami</p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.threads.com/@ra.ghofur?igshid=NTc4MTIwNjQ2YQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSquareThreads size={22} color="white"/>
                            </a>
                            {/* Link Instagram */}
                            <a
                                href="https://instagram.com/ra.ghofur"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={22} color="white" />
                            </a>
                            {/* Link Facebook */}
                            <a
                                href="https://www.facebook.com/share/1FzokEJr2j/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook size={22} color="white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <div className="border-t border-white/30"></div>

                {/* Bagian Bawah */}
                {/*     <div className="text-center text-sm text-white/80 space-x-4">
                    <span className="hover:underline">Terms & Conditions</span>
                    <span className="hover:underline">Privacy Policy</span>
                    <span>© 2025 Dinas Pertanian TPHP KAB. BANGKALAN</span>
                </div> */}
                <div className="text-center text-sm text-white/80 flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-2 md:space-y-0">
                    <span className="hover:underline">Terms & Conditions</span>
                    <span className="hover:underline">Privacy Policy</span>
                    <span>© 2025 Dinas Pertanian TPHP KAB. BANGKALAN</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer
