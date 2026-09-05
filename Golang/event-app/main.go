package main

import (
	"event-app/config"
	"event-app/routes"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}

	config.ConnectDB()

	server := gin.Default()

	api := server.Group("/api")
	{
		routes.EventRoutes(api)
		routes.UserRoutes(api)
	}

	server.Run(":8080")
}
