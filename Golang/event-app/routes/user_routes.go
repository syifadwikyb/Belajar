package routes

import (
	"event-app/controllers"
	"event-app/middlewares"

	"github.com/gin-gonic/gin"
)

func UserRoutes(router *gin.RouterGroup) {
	auth := router.Group("/auth")
	{
		auth.POST("/register", controllers.RegisterUser)
		auth.POST("/login", controllers.LoginUser)
	}

	protected := router.Group("/auth")
	protected.Use(middlewares.RequiredAuth())
	{
		protected.GET("/me", controllers.GetCurrentUser)
	}
}
