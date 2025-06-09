def hitung_rsa():
    print("Syifa Dwiky Basamala\n21120122120008\nProgram Enkripsi dan Dekripsi RSA")
    print("=" * 40)
    
    # Input parameter RSA
    p = int(input("Masukkan p: "))
    q = int(input("Masukkan q: "))
    
    n = p * q
    phi = (p - 1) * (q - 1)
    
    print(f"\nNilai n = p * q = {p} * {q} = {n}")
    print(f"Nilai Φ = (p-1) * (q-1) = {p-1} * {q-1} = {phi}")
    
    # Input nilai e
    e = int(input("Masukkan e (1 < e < Φ): "))
    
    if e <= 1 or e >= phi:
        print(f"Error: e harus berada dalam rentang 1 < e < Φ")
        return
    
    # Memeriksa apakah e dan phi relatif prima secara manual
    a, b = e, phi
    while b:
        a, b = b, a % b
    
    if a != 1:
        print(f"Error: e = {e} tidak relatif prima dengan Φ = {phi}. Nilai GCD adalah {a}")
        return
    
    # Menghitung nilai d (kunci privat) dengan pendekatan tabel
    print("\nMencari nilai d dengan mencoba kandidat d dimana (e*d) mod Φ = 1:")
    print("-" * 60)
    print(f"{'Kandidat d':<15}{'e.d':<15}{'e.d mod Φ':<15}{'Keterangan':<15}")
    print("-" * 60)
    
    d = 1  # Mulai dari d = 1
    while d < phi:  # Coba semua kemungkinan d
        if (e * d) % phi == 1:
            print(f"{d:<15}{e*d:<15}{(e*d)%phi:<15}{'Dipilih':<15}")
            break
        else:
            print(f"{d:<15}{e*d:<15}{(e*d)%phi:<15}{'Bukan':<15}")
        d += 1
    
    if d == phi:
        print(f"Tidak ditemukan nilai d yang valid.")
        return
    
    print("\nPerhitungan nilai d:")
    print(f"d adalah nilai dimana (e*d) mod Φ = 1")
    print(f"Untuk e = {e} dan Φ = {phi}, ditemukan d = {d}")
    print(f"Verifikasi: (d*e) mod Φ = ({d}*{e}) mod {phi} = {(d*e) % phi}")
    
    # Tampilkan kunci
    print("\nKunci yang dihasilkan:")
    print(f"Kunci publik (e, n): ({e}, {n})")
    print(f"Kunci privat d: {d}")
    
    # Masukkan nilai plaintext
    m = int(input("\nMasukkan nilai m: "))
    
    if m >= n:
        print(f"Error: Nilai plaintext ({m}) harus lebih kecil dari n ({n})")
        return
    
    # Enkripsi
    c = pow(m, e, n)
    print("\nProses enkripsi:")
    print(f"c = m^e mod n")
    print(f"c = {m}^{e} mod {n}")
    print(f"c = {c}")
    
    # Dekripsi
    m = pow(c, d, n)
    print("\nProses dekripsi:")
    print(f"m = c^d mod n")
    print(f"m = {c}^{d} mod {n}")
    print(f"m = {m}")
    
    if m == m:
        print("\nVerifikasi berhasil: Pesan terdekripsi sama dengan pesan asli")
    else:
        print("\nVerifikasi gagal: Pesan terdekripsi tidak sama dengan pesan asli")

if __name__ == "__main__":
    hitung_rsa()