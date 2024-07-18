"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const Faq: React.FC = () => {
  return (
    <>
      <section id="faqs" className="faqs-section top-banner-area ">
        <div
          className="section-title"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h2 className="text-white">Kebijakan Privasi </h2>
          <br></br>
          <p className="text-white" style={{ textAlign: "justify" }}>
            Selamat datang di ABCD. Kami menghargai privasi Anda dan berkomitmen
            untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
            informasi yang Anda berikan kepada kami melalui penggunaan aplikasi
            atau software kami. Jika Anda menggunakan Aplikasi dan Layanan kami,
            Anda akan tunduk dan menyetujui Kebijakan Privasi ini serta Syarat
            dan Ketentuan Penggunaan Layanan kami.
          </p>{" "}
          *
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="text-center"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Image
                  src="/images/faq-img.png"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div
                className="faq-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>1.</span> Informasi yang kami kumpulkan
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Kami mengumpulkan berbagai jenis informasi untuk
                        memberikan dan meningkatkan layanan kami kepada Anda:
                        <br></br>
                        <p>
                          {" "}
                          a. Informasi Pribadi: Nama, alamat email, nomor
                          telepon, dan informasi kontak lainnya.<br></br>b.
                          Informasi Teknis: Alamat IP, jenis perangkat, sistem
                          operasi, dan informasi lainnya yang terkait dengan
                          penggunaan aplikasi atau software kami.<br></br>c.
                          Informasi Penggunaan: Data tentang bagaimana Anda
                          menggunakan aplikasi atau software kami, termasuk
                          fitur yang Anda gunakan dan frekuensi penggunaan.
                        </p>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>2.</span> Cara Kami Menggunakan Informasi Anda
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Informasi yang kami kumpulkan digunakan untuk berbagai
                        tujuan, termasuk: <br></br>
                        <p>
                          a. Memberikan dan mengelola layanan kami.<br></br>
                          b. Menyesuaikan dan meningkatkan pengalaman pengguna.
                          <br></br>
                          c. Menghubungi Anda untuk keperluan layanan pelanggan
                          dan dukungan teknis. d. Mematuhi kewajiban hukum dan
                          peraturan.
                        </p>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>3.</span> Pembagian Informasi
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Kami tidak akan menjual, menyewakan, atau membagikan
                        informasi pribadi Anda kepada pihak ketiga tanpa
                        persetujuan Anda, kecuali:<br></br>
                        a. Jika diperlukan untuk memberikan layanan yang Anda
                        minta.<br></br>
                        b. Jika diwajibkan oleh hukum atau peraturan yang
                        berlaku.<br></br>
                        **c. Dalam hal penggabungan, akuisisi, atau penjualan
                        semua atau sebagian dari aset kami.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>4.</span> Keamanan Data
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Kami mengambil langkah-langkah teknis dan organisasi
                        yang wajar untuk melindungi informasi Anda dari akses
                        yang tidak sah, penggunaan yang tidak sah, atau
                        pengungkapan. Namun, kami tidak dapat menjamin keamanan
                        penuh dari informasi yang dikirimkan melalui internet.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="de">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>4.</span> Hak-Hak Anda
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Anda memiliki hak-hak tertentu terkait dengan data
                        pribadi Anda, termasuk:
                        <br></br>
                        a. Hak untuk mengakses dan memperoleh salinan data
                        pribadi Anda. <br></br> b. Hak untuk memperbaiki data
                        pribadi yang tidak akurat atau tidak lengkap. <br></br>
                        c. Hak untuk menghapus data pribadi Anda dalam kondisi
                        tertentu. <br></br> **d. Hak untuk membatasi atau
                        menolak pemrosesan data pribadi Anda dalam kondisi
                        tertentu.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>5.</span> Perlindungan Data dan Informasi
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Kami menyimpan Informasi Pribadi Anda pada server yang
                        berlokasi di Indonesia. Kami bekerja dengan pihak ketiga
                        untuk menyediakan berbagai layanan terkait teknologi.
                        Data Anda secara aman disimpan dan tidak digunakan untuk
                        kepentingan apapun selain pengembangan aplikasi seperti
                        dijelaskan dalam Kebijakan Privasi maupun Syarat dan
                        Ketentuan kami. Kepercayaan Anda dalam memberikan
                        Informasi Pribadi Anda kepada Kami adalah tanggung jawab
                        Kami. Kami akan memberlakukan langkah-langkah untuk
                        melindungi dan mengamankan data dan Informasi Pribadi
                        Anda. Namun demikian, perlu diingat bahwa tidak ada
                        metode transmisi melalui internet atau metode
                        penyimpanan elektronik yang sepenuhnya aman, jadi Kami
                        tidak dapat sepenuhnya menjamin bahwa sistem kami tidak
                        akan diakses oleh virus, malware, gangguan atau kejadian
                        luar biasa termasuk akses oleh pihak ketiga yang tidak
                        berwenang. Anda harus menjaga keamanan dan kerahasiaan
                        data yang berkaitan dengan akun Anda pada Aplikasi
                        termasuk kata sandi dan data-data lainnya yang Anda
                        berikan di dalam Aplikasi ini.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>6.</span> Perubahan Kebijakan Privasi
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Kami dapat memperbarui Kebijakan Privasi ini dari waktu
                        ke waktu. Setiap perubahan akan diberitahukan melalui
                        email atau pemberitahuan di situs web kami.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>6.</span> kontak Kami
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p style={{ textAlign: "justify" }}>
                        Jika Anda memiliki pertanyaan atau kekhawatiran tentang
                        Kebijakan Privasi ini, atau jika Anda ingin mengajukan
                        permintaan terkait hak-hak Anda, silakan hubungi kami
                        di: Perusahaan ABCD Alamat:<br></br> [Alamat Perusahaan]<br></br> Email:
                        [Alamat Email Perusahaan]<br></br> Telepon: [Nomor Telepon
                        Perusahaan]<br></br><br></br> Dengan menggunakan layanan kami, Anda
                        menyetujui pengumpulan, penggunaan, dan pengungkapan
                        informasi Anda sebagaimana diatur dalam Kebijakan
                        Privasi ini.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
