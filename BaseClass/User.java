package BaseClass;

import java.util.ArrayList;

public class User {
	int userID;
	String username, fname, lname;
	// float rating;
	ArrayList<Event> previousEvents;
	ArrayList<Event> currentEvents;
	ArrayList<Event> upcomingEvents;

	public User(int userID, String username, String fname, String lname) {
		this.userID = userID;
		this.username = username;
		this.fname = fname;
		this.lname = lname;
		// this.rating = rating;
		previousEvents = new ArrayList<Event>();
		currentEvents = new ArrayList<Event>();
		upcomingEvents = new ArrayList<Event>();
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	// public String getNickname() {
	// return nickname;
	// }
	//
	// public void setNickname(String nickname) {
	// this.nickname = nickname;
	// }

	// public float getRating() {
	// return rating;
	// }
	//
	// public void setRating(float rating) {
	// this.rating = rating;
	// }

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public ArrayList<Event> getPreviousEvents() {
		return previousEvents;
	}

	public void setPreviousEvents(ArrayList<Event> previousEvents) {
		this.previousEvents = previousEvents;
	}

	public ArrayList<Event> getCurrentEvents() {
		return currentEvents;
	}

	public void setCurrentEvents(ArrayList<Event> currentEvents) {
		this.currentEvents = currentEvents;
	}

	public ArrayList<Event> getUpcomingEvents() {
		return upcomingEvents;
	}

	public void setUpcomingEvents(ArrayList<Event> upcomingEvents) {
		this.upcomingEvents = upcomingEvents;
	}
}
