-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "VisiMisi" (
    "id_visimisi" SERIAL NOT NULL,
    "visi" TEXT NOT NULL,
    "misi" TEXT NOT NULL,

    CONSTRAINT "VisiMisi_pkey" PRIMARY KEY ("id_visimisi")
);

-- CreateTable
CREATE TABLE "StrukturGuru" (
    "id_struktur" SERIAL NOT NULL,
    "foto_struktur" VARCHAR(255) NOT NULL,

    CONSTRAINT "StrukturGuru_pkey" PRIMARY KEY ("id_struktur")
);

-- CreateTable
CREATE TABLE "PPDB" (
    "id_ppdb" SERIAL NOT NULL,
    "foto_poster" VARCHAR(255) NOT NULL,
    "tanggal_upload" DATE NOT NULL,

    CONSTRAINT "PPDB_pkey" PRIMARY KEY ("id_ppdb")
);

-- CreateTable
CREATE TABLE "Berita" (
    "id_berita" SERIAL NOT NULL,
    "judul" VARCHAR(150) NOT NULL,
    "isi" TEXT NOT NULL,
    "gambar" VARCHAR(255) NOT NULL,
    "tanggal_upload" DATE NOT NULL,

    CONSTRAINT "Berita_pkey" PRIMARY KEY ("id_berita")
);

-- CreateTable
CREATE TABLE "Galeri" (
    "id_galeri" SERIAL NOT NULL,
    "judul" VARCHAR(150) NOT NULL,
    "gambar" VARCHAR(255) NOT NULL,
    "tanggal_upload" DATE NOT NULL,

    CONSTRAINT "Galeri_pkey" PRIMARY KEY ("id_galeri")
);

-- CreateTable
CREATE TABLE "Alumni" (
    "id_alumni" SERIAL NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "foto_alumni" VARCHAR(255) NOT NULL,
    "kutipan" TEXT NOT NULL,
    "universitas" VARCHAR(150) NOT NULL,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id_alumni")
);

-- CreateTable
CREATE TABLE "GrafikMurid" (
    "id_grafik" SERIAL NOT NULL,
    "foto_grafik" VARCHAR(255) NOT NULL,
    "tanggal" DATE NOT NULL,

    CONSTRAINT "GrafikMurid_pkey" PRIMARY KEY ("id_grafik")
);
