from ftplib import FTP

def main():
    ftp = FTP('ftp.gnu.org')
    ftp.login()
    print("Welcome:", ftp.getwelcome())
    print("Current working directory:", ftp.pwd())
    ftp.quit()

if __name__ == '__main__':
    main()
