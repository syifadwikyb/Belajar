import os
import sys
from ftplib import FTP

def main():
    filename = "bash-5.2.tar.gz"
    remote_dir = "/gnu/bash"

    if os.path.exists(filename):
        raise IOError(f"File {filename} already exists")

    # Connect to FTP
    ftp = FTP("ftp.gnu.org")
    ftp.login()
    ftp.cwd(remote_dir)
    ftp.voidcmd("TYPE I")
        
    conn, size = ftp.ntransfercmd(f"RETR {filename}")
    downloaded = 0

    with open(filename, "wb") as f:
        while True:
            data = conn.recv(4096)
            if not data:
                break
            f.write(data)
            downloaded += len(data)

            if size:
                percent = 100 * downloaded / float(size)
                print(f"\rDownloaded {downloaded}/{size} bytes ({percent:.1f}%)", end="")
            else:
                print(f"\rDownloaded {downloaded} bytes", end="")

            sys.stdout.flush()

    print("\nDone!")
    conn.close()
    ftp.voidresp()
    ftp.quit()

if __name__ == "__main__":
    main()
