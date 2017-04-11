package Message;

import java.util.ArrayList;

public class ProfileMessage extends Message {
	String selfName;
	int selfRating;
	ArrayList<String> upcomingEvents;
	ArrayList<String> upcomingEventIDs;
	ArrayList<String> previousEvents;
	ArrayList<String> previousEventIDs;
	
	public ProfileMessage(ArrayList<Event> previous, ArrayList<Event> upcoming, User myself){
		upcomingEvents = new ArrayList<String>();
		upcomingEventIDs = new ArrayList<String>();
		previousEvents = new ArrayList<String>();
		previousEventIDs = new ArrayList<String>();
		this.action = "ProfileMesssage";
	}
	
}
