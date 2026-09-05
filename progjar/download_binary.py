import os
from ftplib import FTP

def main():
    if os.path.exists('patch8.gz'):
        raise IOError('refusing to overwrite your README file')

    ftp = FTP('ftp.gnu.org')
    ftp.login()
    ftp.cwd('/gnu')

    with open('patch8.gz', 'w') as f:
        def writeline(data):
            f.write(data + '\n')

        ftp.retrlines('LIST', writeline)

    ftp.quit()

if __name__ == '__main__':
    main()
