package controllers

import (
	"event-app/config"
	"event-app/models"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type AuthRegister struct {
	Name     string `json:"name" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type AuthLogin struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

func RegisterUser(context *gin.Context) {
	var input AuthRegister

	// Validasi
	err := context.ShouldBindJSON(&input)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// Hash Password
	hashedPassword, errHash := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if errHash != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Gagal di enkripsi",
		})
		return
	}

	// Simpan ke Database
	user := models.User{
		Name:     input.Name,
		Email:    input.Email,
		Password: string(hashedPassword),
	}

	userCreated := config.DB.Create(&user).Error
	if userCreated != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Email sudah terdaftar",
		})
		return
	}

	context.JSON(http.StatusCreated, gin.H{
		"message": "Akun berhasil dibuat",
		"user": gin.H{
			"id":    user.ID,
			"name":  user.Name,
			"email": user.Email,
			"event": user.Events,
		},
	})
}

func LoginUser(context *gin.Context) {
	var input AuthLogin

	err := context.ShouldBindJSON(&input)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	var user models.User
	userData := config.DB.Where("email = ?", input.Email).First(&user).Error
	if userData != nil {
		context.JSON(http.StatusUnauthorized, gin.H{
			"error": "Email belum terdaftar",
		})
		return
	}

	errMatchPassword := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password))

	if errMatchPassword != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": "Email atau Password salah",
		})
		return
	}

	// Buat Token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 7).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": "Gagal mengambil token",
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"message": "Berhasil login",
		"token":   tokenString,
		"user": gin.H{
			"id":    user.ID,
			"name":  user.Name,
			"email": user.Email,
			"event": user.Events,
		},
	})
}

func GetCurrentUser(context *gin.Context) {
	userId, exists := context.Get("userID")
	if !exists {
		context.JSON(http.StatusUnauthorized, gin.H{
			"error": "Tidak authentikasi",
		})
		return
	}

	var user models.User
	userData := config.DB.Select("id", "name", "email").First(&user, userId).Error
	if userData != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"error": "User tidak ditemukan",
		})
		return
	}
	context.JSON(http.StatusOK, gin.H{
		"user": gin.H{
			"id":     user.ID,
			"name":   user.Name,
			"email":  user.Email,
			"events": user.Events,
		},
	})
}
