package routes

import (
	"event-app/controllers"

	"github.com/gin-gonic/gin"
)

func EventRoutes(router *gin.RouterGroup) {
	events := router.Group("/events")
	{
		events.POST("/", controllers.CreateEvent)
		events.GET("/", controllers.GetAllEvents)
		events.GET("/:id", controllers.GetEventById)
		events.PUT("/:id", controllers.UpdateEvent)
		events.DELETE("/:id", controllers.DeleteEvent)
	}
}
