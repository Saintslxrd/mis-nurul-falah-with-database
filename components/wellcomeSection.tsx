import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="bg-[#1D8143] py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FBFFE4] text-center mb-12">
          SELAMAT DATANG DI MIS NURUL FALAH AREMAN
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl transform -rotate-2">
              <Image
                src="/wellcomeSection/image.png"
                alt="School Building"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-[#FBFFE4] leading-relaxed text-justify">
            <p>
              MIT Nurul Falah Areman berdiri pada tahun 1959, dengan dipimpinan HMN. Syafiie R. sebagai kepala madrasah
              pertama. Didirikannya MIT Nurul Falah Areman di keluarahan Tugu Cimanggis Depok ini merupakan hasil
              musyawarah dari para tokoh masyarakat setempat, yang saat itu juga sekaligus dijadikan guru-guru untuk
              mengajar di MIT Nurul Falah Areman. Seperti HMN Syafiie. R., H. Ahmad Wahid Hasyim, Djamaluddin, H.
              Mansyur, H. Mahmud Salaman, H. Ali Susanto.
            </p>

            <p>
              Melihat pendidikan agama yang kurang di sekolah dasar, para pendiri dan tokoh masyarakat berinisiatif
              untuk mendirikan sebuah sekolah bernuansa islami dengan memiliki taraf yang setara dengan Sekolah Dasar,
              tercetaslah pendirikan sebuah sekolah dengan pendidikan islam yang bernama MI Nurul Falah Areman yang
              dinaungi yayasan Nurul Falah.
            </p>

            <p>
              Pada tahun 1959, sekolah MI Nurul Falah Areman memulai awalirnya yang dipimpin oleh HMN. Syafiie. R.
              sebagai kepala madrasahnya dengan dukungan dari masyarakat, kepemimpinana beliau berjalan dari tahun
              1959-1986 kurang lebih 37 tahun. Setelah beliau selesai menjabat sebagai kepala madrasah, beliau
              digantikan oleh H. Ahmad Wahid Hasyim selama periode tahun 1986-2003. Kepemimpinannya sebagai kepala
              madrasah hanya berjalan selama tujuh tahun karena usia yang telah masuk masa pensiun. Selanjutnya
            </p>

            <div className="pt-4 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all text-lg"
              >
                View Detail
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
