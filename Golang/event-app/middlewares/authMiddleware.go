package middlewares

import (
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func RequiredAuth() gin.HandlerFunc {
	return func(context *gin.Context) {
		tokenString := context.GetHeader("Authorization")
		if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer") {
			context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "Akses ditolak, token tidak ditemukan",
			})
			return
		}

		tokenString = strings.TrimPrefix(tokenString, "Bearer ")
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("JWT_SECRET")), nil
		})

		if err != nil || token == nil {
			context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"err":   "Format token tidak valid atau rusak",
				"error": err.Error(),
			})
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			context.Set("userID", int(claims["sub"].(float64)))
			context.Next()
		} else {
			context.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error": "Token tidak valid",
			})
		}
	}

}
