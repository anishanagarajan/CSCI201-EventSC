package BaseClass;

import java.util.Date;

public class Event {
	int eventID;
	String title, locationString, description;
	float coordinateX, coordinateY;
	String poster;
	Date date;

	public Event(String title, String locationString, String description, Date date, float coordinateX,
			float coordinateY, String poster) {
		this.title = title;
		this.locationString = locationString;
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

	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
	}

	public String getLocationString() {
		return locationString;
	}

	public void setLocationString(String locationgString) {
		this.locationString = locationgString;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getCoordinateX() {
		return coordinateX;
	}

	public void setCoordinateX(int coordinateX) {
		this.coordinateX = coordinateX;
	}

	public float getCoordinateY() {
		return coordinateY;
	}

	public void setCoordinateY(int coordinateY) {
		this.coordinateY = coordinateY;
	}

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public String eventTime() {
		Date now = new Date();
		if (date.compareTo(now) > 0) {
			return "upcoming";
		} else if (date.compareTo(now) < 0) {
			return "past";
		} else {
			return "current";
		}
	}
}
