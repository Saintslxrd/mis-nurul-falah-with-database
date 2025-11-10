"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"

export default function SejarahPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1D8144]">
        {/* Satu section penuh */}
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-5xl mx-auto text-white">
            {/* Judul */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-wide">
              SEJARAH BERDIRINYA MIS NURUL FALAH AREMAN
            </h1>

            {/* Gambar Gedung */}
            <div className="w-full mb-8">
              <Image
                src="/sejarah/image.png"
                alt="Gedung MIS Nurul Falah Areman"
                width={1000}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
            </div>

            {/* Isi teks sejarah */}
            <div className="text-justify leading-relaxed space-y-5">
              <p>
                MIT Nurul Falah Areman berdiri pada tahun 1959, dengan dipimpinan HMN. Syafiie R. sebagai kepala
                madrasah pertama. Didirikannya MIT Nurul Falah Areman di kelurahan Tugu Cimanggis Depok ini merupakan
                hasil musyawarah dari para tokoh masyarakat setempat, yang saat itu juga sekaligus dijadikan guru-guru
                untuk mengajar di MIT Nurul Falah Areman. Seperti HMN Syafiie. R., H. Ahmad Wahid Hasyim, Djamaluddin,
                H. Mansyur, H. Mahmud Sulaman, H. Ali Susanto.
              </p>

              <p>
                Melihat pendidikan agama yang kurang di sekolah dasar, para pendiri dan tokoh masyarakat berinisiatif
                untuk mendirikan sebuah sekolah bernuansa islami dengan memiliki taraf yang setara dengan Sekolah
                Dasar, tercetuslah pendirian sebuah sekolah dengan pendidikan islam yang bernama MI Nurul Falah Areman
                yang dinaungi yayasan Nurul Falah.
              </p>

              <p>
                Pada tahun 1959, sekolah MI Nurul Falah Areman memulai awal karirnya yang dipimpin oleh HMN. Syafiie.
                R. sebagai kepala madrasahnya dengan dukungan dari masyarakat, kepemimpinan beliau berjalan dari tahun
                1959–1996 kurang lebih 37 tahun. Setelah beliau selesai menjabat sebagai kepala madrasah, beliau
                digantikan oleh H. Ahmad Wahid Hasyim selama periode tahun 1996–2003. Kepemimpinannya sebagai kepala
                madrasah hanya berjalan selama tujuh tahun karena usia yang telah masuk masa pensiun. Selanjutnya
                kepemimpinan di MI Nurul Falah Areman dilanjutkan oleh H. Ade Ibrahim S. Pd. I sebagai kepala
                madrasahnya yang berlangsung dari tahun 2003 sampai dengan saat ini.
              </p>

              <p>
                Pada mulanya berdiri MI tersebut bernama MI Nurul Falah Areman dan siswanya tidak banyak, akan tetapi
                semangat yang ditunjukkan oleh mereka para pendidik akhirnya membuahkan hasil dengan terus
                bertambahnya siswa setiap tahunnya. Pada masa kepemimpinan H. Ade Ibrahim S. Pd. I, sekolah yang
                tadinya bernama Madrasah Ibtidaiyah (MI) Nurul Falah Areman berubah menjadi Madrasah Ibtidaiyah
                Terpadu (MIT) Nurul Falah Areman dan sudah terakreditasi serta mendapatkan nilai A.
              </p>

              <p>
                Perkembangan yang pesat ini menarik masyarakat setempat untuk berbondong-bondong menyekolahkan anaknya
                di MIT Nurul Falah Areman, sehingga sampai saat ini total siswa yang terdaftar sebagai murid di MIT
                Nurul Falah Areman kurang lebih berjumlah 890 siswa dengan guru (fasilitator) dan staff sekolah
                berjumlah 55 orang. Kemajuan yang pesat ini terjadi tidak lepas dari dukungan tokoh masyarakat,
                lingkungan masyarakat, dan lingkungan sekolah yang mampu bekerjasama dalam memajukan dunia pendidikan
                di era yang semakin modern.
              </p>

              <p>
                Alhamdulillah Madrasah Ibtidaiyyah Nurul Falah terus berkembang sampai sekarang meraih peserta didik
                terbanyak se-Jawa Barat. Dengan total siswa sebanyak 980 siswa, 36 rombongan belajar, dan 40 tenaga
                pendidik. Yang hingga saat ini masih terus berusaha memberikan pendidikan yang lebih baik dan islami
                sesuai dengan visi “Terwujudnya lembaga Madrasah yang dinamis, unggul dalam akademis, berwawasan
                IMTAQ dan IPTEK serta berakhlakul karimah”.
              </p>
            </div>

            {/* Tujuan Pendidikan */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Tujuan Pendidikan
              </h2>

              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  a. Tujuan Pendidikan Nasional Mengembangkan potensi peserta didik agar menjadi manusia beriman,
                  bertaqwa, berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, bertanggung jawab, dan
                  demokratis.
                </p>
                <p>
                  b. Tujuan Pendidikan Dasar Meletakkan dasar kecerdasan, pengetahuan, kepribadian, akhlak mulia,
                  serta keterampilan untuk hidup mandiri dan mengikuti pendidikan yang lebih lanjut
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BrosurSlider />
      <Footer />
    </>
  )
}
