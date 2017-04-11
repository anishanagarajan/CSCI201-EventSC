package BaseClass;

import java.util.ArrayList;

public class User {
	String username, nickname;
	float rating;
	ArrayList<Event> previousEvents;
	ArrayList<Event> upcomingEvents;
	public User(String username, String nickname, float rating){
		this.username = username;
		this.nickname = nickname;
		this.rating = rating;
		previousEvents = new ArrayList<Event>();
		upcomingEvents = new ArrayList<Event>();
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public ArrayList<Event> getPreviousEvents() {
		return previousEvents;
	}
	public void setPreviousEvents(ArrayList<Event> previousEvents) {
		this.previousEvents = previousEvents;
	}
	public ArrayList<Event> getUpcomingEvents() {
		return upcomingEvents;
	}
	public void setUpcomingEvents(ArrayList<Event> upcomingEvents) {
		this.upcomingEvents = upcomingEvents;
	}
	
	
}
