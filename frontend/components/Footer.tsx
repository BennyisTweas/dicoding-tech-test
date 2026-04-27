export default function Footer() {
    return (
        <div id="footer" className="flex flex-col w-full h-[328px] mt-[48px]">
            <img src="/divider.png" alt="" className="flex place-content-center" />
            <div className="ml-[165px] mt-[64px]">
                <img src="/footer_logo.png" alt="Dicoding logo" />
                <div id="dicoding_address" className="mt-[32px] text-[18px] text-[#71717A]">
                    Dicoding Space <br />
                    Jl. Batik Kumeli No.50, Sukaluyu, <br />
                    Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123
                </div>
            </div>
        </div>
    );
}