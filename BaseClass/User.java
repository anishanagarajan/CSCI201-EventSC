package BaseClass;

import java.util.ArrayList;

public class User {
	String username, fname, lname;
	float rating;
	ArrayList<Event> previousEvents;
	ArrayList<Event> myEvents;
	ArrayList<Event> upcomingEvents;
	public User(String username, String fname, String lname,float rating){
		this.username = username;
		this.fname = fname;
		this.lname = lname;
		this.rating = rating;
		myEvents = new ArrayList<Event>();
		previousEvents = new ArrayList<Event>();
		upcomingEvents = new ArrayList<Event>();
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFname() {
		return fname;
	}
	public String getLname(){
		return lname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public void setLname(String lname){
		this.lname = lname;
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
	public ArrayList<Event> getMyEvents() {
		return myEvents;
	}
	public void setPreviousEvents(ArrayList<Event> myEvents) {
		this.myEvents = myEvents;
	}
	public ArrayList<Event> getUpcomingEvents() {
		return upcomingEvents;
	}
	public void setUpcomingEvents(ArrayList<Event> upcomingEvents) {
		this.upcomingEvents = upcomingEvents;
	}
	
	
}
