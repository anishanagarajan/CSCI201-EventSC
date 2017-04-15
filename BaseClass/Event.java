package BaseClass;

import java.util.Date;

public class Event {
	int eventID;
	String title, locationString, description;
	double coordinateX, coordinateY;
	User poster;
	Date date;

	public Event(int eventID, String title, String locationString, String description, Date date, double coordinateX,
			double coordinateY, User poster) {
		this.title = title;
		this.eventID = eventID;
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

	public double getCoordinateX() {
		return coordinateX;
	}

	public void setCoordinateX(double coordinateX) {
		this.coordinateX = coordinateX;
	}

	public double getCoordinateY() {
		return coordinateY;
	}

	public void setCoordinateY(double coordinateY) {
		this.coordinateY = coordinateY;
	}

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public User getPoster() {
		return poster;
	}

	public void setPoster(User poster) {
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
