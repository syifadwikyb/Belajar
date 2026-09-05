from ftplib import FTP
import os

def main():
    host = "ftp.dlptest.com"
    username = "dlpuser"
    password = "rNrKYTX9g7z3RgJRmxWuGHbeu"
    localfile = "foto.png"      # file yang mau diupload
    remotedir = "/"             # direktori root

    # Cek file lokal
    if not os.path.exists(localfile):
        print(f"File '{localfile}' tidak ditemukan!")
        return

    print(f"Menghubungkan ke {host} ...")
    ftp = FTP(host)
    ftp.login(username, password)

    ftp.cwd(remotedir)

    print(f"Mengupload '{localfile}' ...")
    with open(localfile, "rb") as f:
        ftp.storbinary(f"STOR {os.path.basename(localfile)}", f)

    print("Upload selesai!")
    ftp.quit()

if __name__ == "__main__":
    main()
