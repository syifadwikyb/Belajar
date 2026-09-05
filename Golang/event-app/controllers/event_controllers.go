package controllers

import (
	"event-app/config"
	"event-app/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateEvent(context *gin.Context) {
	var event models.Event

	err := context.ShouldBindJSON(&event)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	event.UserID = 1

	if err := config.DB.Create(&event).Error; err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{
			"error": "Gagal menyimpan data",
		})
		return
	}

	config.DB.Create(&event)
	context.JSON(http.StatusCreated, gin.H{
		"message": "Event berhasil dibuat",
		"event":   event,
	})
}

func GetAllEvents(context *gin.Context) {
	var events []models.Event

	config.DB.Find(&events)
	context.JSON(http.StatusOK, gin.H{
		"message": "Berhasil menampilkan semuda data",
		"event":   events,
	})
}

func GetEventById(context *gin.Context) {
	var event models.Event
	paramsId := context.Param("id")

	var eventData = config.DB.First(&event, paramsId).Error
	if eventData != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "Data tidak ditemukan",
		})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"message": "Berhasil menampilkan data",
		"event":   event,
	})
}

func UpdateEvent(context *gin.Context) {
	var event models.Event
	paramsId := context.Param("id")

	var eventData = config.DB.First(&event, paramsId).Error
	if eventData != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "Data tidak ditemukan",
		})
		return
	}

	var input models.Event
	err := context.ShouldBindJSON(&input)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	config.DB.Model(&event).Updates(input)
	context.JSON(http.StatusOK, gin.H{
		"message": "Data berhasil diubah",
		"event":   event,
	})
}

func DeleteEvent(context *gin.Context) {
	var event models.Event
	paramsId := context.Param("id")

	var eventData = config.DB.First(&event, paramsId).Error
	if eventData != nil {
		context.JSON(http.StatusNotFound, gin.H{
			"message": "Data tidak ditemukan",
		})
		return
	}

	config.DB.Unscoped().Delete(&event)
	context.JSON(http.StatusOK, gin.H{
		"message": "Data berhasil terhapus",
	})
}
