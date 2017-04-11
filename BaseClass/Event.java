package BaseClass;

import java.util.Date;

public class Event {
	String title, eventID, locationgString, description;
	int coordinateX, coordinateY;
	User poster;
	Date date;
	public Event(String eventID, String title, String locationString, String description, Date date, int coordinateX, int coordinateY, User poster){
		this.title = title;
		this.eventID = eventID;
		this.locationgString = locationString;
		this.description = description;
		this.coordinateX = coordinateX;
		this.coordinateY = coordinateY;
		this.date = date;
		this.poster = poster;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getEventID() {
		return eventID;
	}
	public void setEventID(String eventID) {
		this.eventID = eventID;
	}
	public String getLocationgString() {
		return locationgString;
	}
	public void setLocationgString(String locationgString) {
		this.locationgString = locationgString;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCoordinateX() {
		return coordinateX;
	}
	public void setCoordinateX(int coordinateX) {
		this.coordinateX = coordinateX;
	}
	public int getCoordinateY() {
		return coordinateY;
	}
	public void setCoordinateY(int coordinateY) {
		this.coordinateY = coordinateY;
	}
	public User getPoster() {
		return poster;
	}
	public void setPoster(User poster) {
		this.poster = poster;
	}
	
}
